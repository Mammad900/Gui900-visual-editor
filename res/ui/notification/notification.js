var notification={
    /**
     * Creates a notification
     * @param {"error"| "warning"| "success"} type 
     * @param {string} text 
     * @param {array<object>} buttons 
     */
    createNotification: function(type, text, buttons=[], timeout=3000){
        var div=$("<div></div>").addClass(type);
        div.append($("<i></i>").addClass(["fas","fa-times","close-button"]));
        $("#notifications").append(div);
        div.append($("<div></div>").addClass("content").html(text));
        setTimeout(function(){
            div.animate({"opacity":"0"},"slow",function(){
                div.remove();
            });
        },timeout);
        return div;
    }
}