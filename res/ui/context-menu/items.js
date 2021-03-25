function LP_DefaultContextMenus() {
    registerContextMenu($("#toolbar img:first-child"),[
        {
            "text":"Hide",
            "event":function (e, el) {
                        el.remove();
                        $("#toolbar").css("padding-left",0);
                    }
        }
    ])
}