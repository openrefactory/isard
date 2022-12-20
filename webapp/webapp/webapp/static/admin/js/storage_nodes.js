/*
 *   IsardVDI - Open Source KVM Virtual Desktops based on KVM Linux and dockers
 *   Copyright (C) 2022 Simó Albert i Beltran
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function socketio_on () {
    socket.on('storage_nodes', function (data) {
        var data = JSON.parse(data)
        dtUpdateInsert(
            table,
            {...table.row("#"+data.id).data(),...data},
            false
        )
    })
}
$(document).ready(function () {
    $('.admin-status').show()
    table = $('#storage_nodes').DataTable({
        "ajax": {
            "url": "/admin/table/storage_node",
            "dataSrc": ""
        },
        "language": {
            "loadingRecords": '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'
        },
        "rowId": "id",
        "columns": [
            {
                "data": "status",
                "defaultContent": ""
            },
            {
                "data": "status_time",
                "render": (data) => {
                    return moment.unix(data).fromNow();
                }
            },
            {
                "data": "id"
            },
            {
                "data": "api_base_url"
            },
            {
                "data": "storage_pools",
            }
        ],
    })
    $.getScript("/isard-admin/static/admin/js/socketio.js", socketio_on)
})