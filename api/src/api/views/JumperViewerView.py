# Copyright 2017 the Isard-vdi project authors:
#      Josep Maria Viñolas Auquer
#      Alberto Larraz Dalmases
# License: AGPLv3

import json
import logging as log
import os
import sys
import time
import traceback
from uuid import uuid4

from flask import Response, redirect, request, url_for

#!flask/bin/python
# coding=utf-8
from api import app

from ..libv2.apiv2_exc import *
from ..libv2.quotas import Quotas
from .decorators import maintenance

quotas = Quotas()

from ..libv2.api_desktops_common import ApiDesktopsCommon

common = ApiDesktopsCommon()


@app.route("/api/v3/direct/<token>", methods=["GET"])
def api_v3_viewer(token):
    maintenance()
    viewers = common.DesktopViewerFromToken(token)
    return (
        json.dumps(
            {
                "vmName": viewers["vmName"],
                "vmDescription": viewers["vmDescription"],
                "viewers": viewers,
            }
        ),
        200,
        {"Content-Type": "application/json"},
    )
