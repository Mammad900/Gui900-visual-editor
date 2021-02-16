var notification={
    /**
     * Creates a notification
     * @param {"error"| "warning"| "success"| "info"} type 
     * @param {string} text 
     * @param {array<object>} buttons 
     */
    createNotification(type, text, buttons=[], timeout=3000){
        var div=$("<div></div>").addClass(type);
        div.append($("<i></i>").addClass(["fas","fa-times","close-button"]).on('click',function (e) {
            div.remove();
        }));
        $("#notifications").append(div);
        div.append($("<div></div>").addClass("content").html(text));
        setTimeout(function(){
            div.animate({"opacity":"0"},"slow",function(){
                div.remove();
            });
        },timeout);
        return div;
    },
    /**
     * 
     * @param {string} text 
     * @param {array<object>} buttons 
     * @param {Number} timeout 
     */
    error(text, buttons=[], timeout=5000){
        this.createNotification("error", text, buttons, timeout);
        console.error(text);
    },
    /**
     * 
     * @param {string} text 
     * @param {array<object>} buttons 
     * @param {Number} timeout 
     */
    warning(text, buttons=[], timeout=10000){
        this.createNotification("warning", text, buttons, timeout);
        console.warn(text);
    },
    /**
     * 
     * @param {string} text 
     * @param {array<object>} buttons 
     * @param {Number} timeout 
     */
    success(text, buttons=[], timeout=3000){
        this.createNotification("success", text, buttons, timeout);
        console.info(text);
    },
    /**
     * 
     * @param {string} text 
     * @param {array<object>} buttons 
     * @param {Number} timeout 
     */
    info(text, buttons=[], timeout=3000){
        this.createNotification("info", text, buttons, timeout);
        console.info(text);
    },
}
