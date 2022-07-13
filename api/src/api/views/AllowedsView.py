# Copyright 2017 the Isard-vdi project authors:
#      Josep Maria Viñolas Auquer
#      Alberto Larraz Dalmases
# License: AGPLv3

import json

from flask import request

#!flask/bin/python
# coding=utf-8
from api import app

from ..libv2.api_admin import admin_table_get, admin_table_update
from ..libv2.api_allowed import ApiAllowed
from ..libv2.api_exceptions import Error
from ..libv2.validators import _validate_item
from .decorators import has_token, owns_table_item_id, ownsDomainId

alloweds = ApiAllowed()


# Gets all list of roles, categories, groups and users from a 2+ chars term
@app.route("/api/v3/admin/alloweds/term/<table>", methods=["POST"])
@has_token
def alloweds_table_term(payload, table):
    if table not in ["roles", "categories", "groups", "users"]:
        raise Error("forbidden", "Table not allowed.")
    data = request.get_json(force=True)
    data["pluck"] = ["id", "name"]
    if payload["role_id"] == "admin":
        if table == "groups":
            result = alloweds.get_table_term(
                table, "id", data["term"], pluck=["id", "name", "parent_category"]
            )
        elif table == "users":
            result = alloweds.get_table_term(
                table, "id", data["term"], pluck=["id", "name", "uid"]
            )
        else:
            result = alloweds.get_table_term(
                table, "name", data["term"], pluck=data["pluck"]
            )
    else:
        if table == "roles":
            result = alloweds.get_table_term(
                table, "name", data["term"], pluck=data["pluck"]
            )
        if table == "categories":
            result = alloweds.get_table_term(
                table, "name", data["term"], pluck=data["pluck"]
            )
            result = [c for c in result if c["id"] == payload["category_id"]]
        if table == "groups":
            result = alloweds.get_table_term(
                table, "id", data["term"], pluck=["id", "name", "parent_category"]
            )
            result = [
                g for g in result if g["parent_category"] == payload["category_id"]
            ]
        if table == "users":
            result = alloweds.get_table_term(
                table, "name", data["term"], pluck=["id", "name", "category", "uid"]
            )
            result = [u for u in result if u["category"] == payload["category_id"]]
    return json.dumps(result), 200, {"Content-Type": "application/json"}


@app.route("/api/v3/admin/alloweds/update/<table>", methods=["POST"])
@owns_table_item_id
def admin_allowed_update(payload, table):
    data = request.get_json(force=True)
    data.update(_validate_item("allowed", data))
    admin_table_update(
        table,
        dict(admin_table_get(table, id=data["id"]), allowed=data["allowed"]),
    )
    return (json.dumps({}), 200, {"Content-Type": "application/json"})


# Who has acces to a table item
@app.route("/api/v3/allowed/table/<table>", methods=["POST"])
@owns_table_item_id
def allowed_table(payload, table):
    data = request.get_json(force=True)
    result = alloweds.get_allowed(
        admin_table_get(table, id=data["id"], pluck=["allowed"])["allowed"]
    )
    return json.dumps(result), 200, {"Content-Type": "application/json"}
