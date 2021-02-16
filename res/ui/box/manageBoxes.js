/**
 * 
 * @param {JQuery<HTMLElement>} one 
 * @param {JQuery<HTMLElement>} two 
 */
function swapBox(one, two, areDirectSiblings=false) {
    var par=one.parent();
    var i=par.children().index(one);
    one.detach();
    if(i!=0){
        two.after(one);
    }else{
        two.before(one);
    }
    two.detach();
    if(i==0){
        par.prepend(two);
    }else{
        par.append(two);
    }
}


var floatingBoxes={};
/**
 * 
 * @param {JQuery<HTMLElement>} box 
 */
function boxToNewWindow(box) {
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
        
            default:
                break;
        }
        updateEmptyBoxRows();
        w.onbeforeunload=function () {
            bp.append(box);
            updateEmptyBoxRows();
        }
    }
    floatingBoxes[name]=w;
}

function updateEmptyBoxRows() {
    $(".box-row:empty").addClass("empty");
    $(".box-row:not(:empty)").removeClass("empty");
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
        change: updateEmptyBoxRows
    })
}