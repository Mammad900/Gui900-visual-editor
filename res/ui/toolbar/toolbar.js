var toolBar=
{
    makeMenuItemsHideOnClick: function () {
        var buttons= $("#toolbar .menuitem .menuitem:not(.noHide)");
        buttons.on("click", function (e) {
            var t=$(e.target);
            var shouldClose=false;
            if(t.hasClass("menuitem")) shouldClose= !(t.hasClass("noHide"));
            else if(t.hasClass("toolbar-button")) shouldClose= !(t.parent().hasClass("noHide"));
            else return;
            if(shouldClose){
                var dropDownMenu = $('#toolbar .menuitem .dropdown').addClass("hidden");
                $(document).on("mousemove",function(){
                    setTimeout(function () {
                        dropDownMenu.removeClass("hidden");
                    }, 50);
                });
            }
        });
    },

    subMenu_icon_style: "fas",

    createMenuItem: function ( container, innerHtml, hasChild=false){
        var menuItem= $("<div></div>").addClass("menuitem");

        menuItem.append($("<div></div>").addClass("toolbar-button").html(innerHtml));

        if(hasChild){
            menuItem.append($("<div></div>").addClass("dropdown"));
        }

        container.append(menuItem);
        return menuItem;
    },

    createSubMenuItem: function ( container, innerHtml,icon_class, hasChild=false, fits=true,hideMenuOnClick=true){
        var menuItem= $("<div></div>").addClass("menuitem");
        if(!hideMenuOnClick) {
            menuItem.addClass("noHide");
        }

        var toolBarButton= $("<div></div>").addClass("toolbar-button");
        if(!fits){
            toolBarButton.attr("title",innerHtml).addClass("OVF-H");
        }

        toolBarButton.append($("<i></i>").addClass([toolBar.subMenu_icon_style,icon_class,"fa-fw"]));

        toolBarButton.append(innerHtml);
        if(hasChild) toolBarButton.append('<i class="float-right"><i class="fas fa-chevron-right"></i></i>');
        menuItem.append(toolBarButton);

        if(hasChild){
            menuItem.append($("<div></div>").addClass("dropdown"));
        }

        container.append(menuItem);
        return menuItem;
    },

    getDropDown:
     function (element){
        return element.children(".dropdown");
    },

    menuItem: function (container,innerHTML,event,callback=function(){},hasChild=true){
        var x=toolBar.createMenuItem($(container),innerHTML,hasChild);
        callback(toolBar.getDropDown(x)[0]);
        x.children(":first-child").on("click",event);
    },
    subMenuItem: 
    /**
     * 
     * @param {HTMLElement} container The container (dropdown) to insert the sub menu item into
     * @param {string} innerHTML The HTML code to use as menu item content
     * @param {string} icon_class The 'fa-******' class for menu item icon (required)
     * @param {void} event A callback which is called when the menu item is clicked
     * @param {void} callback A callback which is called after the menu item is generated. Can be used to create sub-sub menu items using it's argument
     * @param {boolean} hideMenuOnClick If false, the menu will not hide when this menu-item is clicked.
     * @param {boolean} hasChild Set it to true if you want to make childs for this menu-item
     * @param {boolean} fits Set to true if the menu-item does not fit in it's place
     */
    function (container,innerHTML,icon_class,event,callback=function(a){},hasChild=false,hideMenuOnClick=true,fits=true){
        var x= toolBar.createSubMenuItem ($(container),innerHTML,icon_class,hasChild,fits,hideMenuOnClick);
        callback(toolBar.getDropDown(x)[0]);
        x.children(":first-child").on("click",event);
        return x;
    },
    separator:
    function (container) {
        $(container).append($("<hr>"));
    },
    menuItemIconChange:
    /**
     * 
     * @param {JQuery<HTMLElement>} element 
     * @param {string} icon 
     */
    function (element,icon) {
        element.children(":first-child").children(":first-child").removeClass().addClass([toolBar.subMenu_icon_style,icon,"fa-fw"]);
    }
}
function LP_HandleColorPickerInput(){
    function fn(e) {
        $(e.target).css("background-color",e.target.value);
    }
    $("input[type=color]").on("input",fn);
    $("input[type=color]").each(function(i,v){
        $(v).css("background-color",v.value);
    })
}