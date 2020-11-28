var properties={
    getElement: function () {
        return $("#properties-content");
    },
    gen: {
        grid:
        /**
         * 
         * @param {JQuery<HTMLElement>} container 
         * @param {Number} columnCount 
         * @param {0|1|2} responsiveness 
         * @param {Array<(col:JQuery<HTMLElement>)=>void>} callbacks 
         */
        function (container, columnCount, responsiveness, callbacks) {
            var flexBox= $("<div></div>").addClass("flexbox");
            switch (responsiveness) {
                case 0:
                    break;
                case 1:
                    flexBox.addClass("responsive");
                    break;
                case 2:
                    flexBox.addClass("responsive-big");
                    break;
            
                default:
                    throw new Error("responsiveness should be either 0, 1 or 2, but is "+responsiveness);
            }
            var cols=[];
            for(var i=0;i<columnCount;i++){
                var col=$("<div></div>");
                callbacks[i](col);
                flexBox.append(col);
            }
            container.append(flexBox);
        },
        fieldset:
        /**
         * 
         * @param {JQuery<HTMLElement>} container 
         * @param {string} legendText 
         * @param {(el:JQuery<HTMLElement>)=>void} callback 
         */
        function (container, legendText, callback) {
            var fieldset= $("<fieldset></fieldset>");
            fieldset.append($("<legend></legend>").text(legendText));
            callback(fieldset);
            container.append(fieldset);
        },
        inputText:
        /**
         * 
         * @param {JQuery<HTMLElement>} container 
         * @param {string} label 
         * @param {string} id
         * @param {string} value 
         */
        function (container, label, id, value) {
            container.append($("<label></label>").attr("for",id).text(label));
            var npt=$("<input/>").val(value).addClass(["block","full-width"]).attr("type","text").attr("id",id);
            container.append(npt);
            return npt;
        },
        inputNumber:
        /**
         * 
         * @param {JQuery<HTMLElement>} container 
         * @param {string} label 
         * @param {string} id 
         * @param {Number} min 
         * @param {Number} max 
         * @param {Number} value 
         */
        function (container, label, id, min, max, value) {
            return this.inputText(container,label,id,value).attr("type","number").attr("min",min).attr("max",max);
        },
        inputColor:
        /**
         * 
         * @param {JQuery<HTMLElement>} container 
         * @param {string} label 
         * @param {string} id 
         * @param {string} value 
         */
        function (container, label, id, value) {
            var div=$("<div></div>").addClass("vertical-center");
            div.append($("<label></label>").attr("for",id).text(label));
            var npt= $("<input/>").attr("type","color").attr("id",id).val(value);
            div.append(npt);
            container.append(div);
            return npt;
        },
        datalist:
        /**
         * 
         * @param {JQuery<HTMLElement>} container 
         * @param {JQuery<HTMLInputElement>} input 
         * @param {string} id 
         * @param {Array<string>} values 
         */
        function (container, input, id, values) {
            var dat=$("<datalist></datalist>").attr("id",id);
            values.forEach(function (val) {
                dat.append($("<option></option>").text(val));
            });
            input.attr("list",id);
            container.append(dat);
            return input;
        }
    }
}