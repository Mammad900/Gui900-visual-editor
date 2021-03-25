/**
 * 
 * @param {JQuery<HTMLElement>} elements 
 * @param {Array<Object>} items 
 */
function registerContextMenu(elements, items) {
    elements.on("contextmenu",function (e) {
        e.preventDefault();
        $(".context-menu").remove();
        var cm=$("<div>").addClass("context-menu").css({ "top":`${e.pageY}px`, "left":`${e.pageX}px` });
        items.forEach(function (item) {
            cm.append($("<button>").text(item.text).on("click",function (e2) {
                item.event(e2, $(e.target));
            }))
        })
        $("body").append(cm);
    })
}

function LP_contextMenuHideTrigger() {
    $(document).on("click",function(){
        $(".context-menu").remove();
    });
}