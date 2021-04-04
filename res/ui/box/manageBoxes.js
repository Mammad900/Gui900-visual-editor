var floatingBoxes={};
/**
 * 
 * @param {JQuery<HTMLElement>} box 
 */
function boxToNewWindow(box) {
    var boxId=box;
    box=$("#"+box);
    if(box.length==0){
        if(floatingBoxes[boxId]){
            floatingBoxes[boxId].focus();
        }else{
            notification.error("An unexpected error occurred: The box was neither in this window nor in any floating windows");
        }
        return;
    }
    var name=box.find("h2").text().trim();
    var w=window.open('floatingBox.html','', `innerHeight=${box.height()+1},innerWidth=${box.width()},resizable=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no`);
    if(w==null){
        notification.error("Your browser has blocked the opening of the box as a popup. Please allow it and try again.");
        return;
    }
    w.windowResizable=true;
    switch (name) {
        case "Preview":
            w.windowResizable=false;
            break;
    
        default:
            break;
    }
    w.document.body.onload=function () {
        w.document.title=name+" - Gui900 visual editor";
        w.document.body.innerHTML=box.html();
        w.document.body.id=box[0].id;
        if(!((name=="Elements") || (name=="Pages")))
            w.document.getElementsByClassName("box-header")[0].remove();
        w.resizeTo( w.document.body.clientWidth, w.document.body.clientHeight);
        var bp=box.parent();
        box.remove();
        switch (name) {
            case "Preview":
                w.document.body.style.minHeight="unset";
                w.document.body.style.width="min-content";
                w.document.body.style.overflow="hidden";
                w.document.getElementsByTagName("button")[0].onclick=preview.refresh;
                w.CanvasRenderingContext2D.prototype.roundRect=CanvasRenderingContext2D.prototype.roundRect;
                preview.refresh();
                break;
            case "Properties":
                w.defineMonacoThemes();
            default:
                break;
        }
        updateEmptyBoxRows();
        w.createThemeMeta();
        w.onbeforeunload=function () {
            bp.append(box);
            updateEmptyBoxRows();
        }
    }
    floatingBoxes[boxId]=w;
}

function updateEmptyBoxRows(e) {
    $(".box-row:empty").addClass("empty");
    $(".box-row:not(:empty)").removeClass("empty");

    if(e.type=="sortdeactivate"){
        if(!($(this).hasClass("responsive"))){ // Event fires for all 5 rows, and 4 rows have the "responsive" class. To execute our code only once, we can check if it doesn't have the class.

            var rows=[];
            $("main").children(".box-row").each(function () {
                let boxes=[]
                $(this).children(".box").each(function () {
                    boxes.push(this.id);
                })
                rows.push(boxes);
            })
            localStorage.setItem("boxesPositions", JSON.stringify(rows))
        }
    }
}
function LP_MakeBoxesSortable() {
    $("main.content .box-row").sortable({
        connectWith: ".box-row",
        handle: ".box-header",
        placeholder: "box box-placeholder",
        activate: updateEmptyBoxRows,
        deactivate: updateEmptyBoxRows,
        beforeStop: updateEmptyBoxRows,
        out: updateEmptyBoxRows,
        change: updateEmptyBoxRows,
        start: function(e, ui){
            ui.placeholder.css("--box-placeholder-width",ui.item.width()+"px");
            ui.placeholder.css("--box-placeholder-height",ui.item.height()+"px");
            ui.placeholder.width(ui.item.width());
        }
    })
}