'use strict';
function preview_refresh(){
    var ctx= document.getElementById("preview-canvas").getContext("2d");
    ctx.fillStyle = $("#page_bc_color_input").val();
    ctx.fillRect(0, 0, 240, 320);
}