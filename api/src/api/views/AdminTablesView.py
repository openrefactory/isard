# Copyright 2017 the Isard-vdi project authors:
#      Josep Maria Viñolas Auquer
#      Alberto Larraz Dalmases
# License: AGPLv3

import json

from flask import request

#!flask/bin/python
# coding=utf-8
from api import app

from ..libv2.api_admin import admin_table_list
from .decorators import is_admin


@app.route("/api/v3/admin/table/<table>", methods=["POST"])
@is_admin
def api_v3_admin_table(payload, table):
    options = request.get_json(force=True)
    return (
        json.dumps(
            admin_table_list(
                table,
                options.get("order_by"),
                options.get("pluck"),
                options.get("without"),
            )
        ),
        200,
        {"Content-Type": "application/json"},
    )
