'use strict';
var properties= properties || {};
properties.gen= properties.gen || {};

properties.getElement = ()=>{
    return $("#properties-content");
}
        
/**
 * 
 * @param {JQuery<HTMLElement>} container 
 * @param {Number} columnCount 
 * @param {0|1|2} responsiveness 
 * @param {Array<(col:JQuery<HTMLElement>)=>void>} callbacks 
 */
properties.gen.grid = function(container, columnCount, responsiveness, callbacks, marginBot=false) {
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
    if(marginBot){
        flexBox.css('margin-bottom','10px');
    }
    container.append(flexBox);
    return flexBox;
}

/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {string} legendText 
    * @param {(el:JQuery<HTMLElement>)=>void} callback 
    */
properties.gen.fieldset = function(container, legendText, callback) {
    var fieldset= $("<fieldset></fieldset>");
    fieldset.append($("<legend></legend>").text(legendText));
    callback(fieldset);
    container.append(fieldset);
}

/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {string} label 
    * @param {string} id
    * @param {string} value 
    */
properties.gen.inputText = function(container, label, id, value) {
    container.append($("<label></label>").attr("for",id).text(label));
    var npt=$("<input/>").val(value).addClass(["block","full-width"]).attr("type","text").attr("id",id);
    container.append(npt);
    return npt;
}

/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {string} label 
    * @param {string} id 
    * @param {Number} min 
    * @param {Number} max 
    * @param {Number} value 
    */
properties.gen.inputNumber = function(container, label, id, min, max, value) {
    return this.inputText(container,label,id,value).attr("type","number").attr("min",min).attr("max",max);
}
/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {string} label 
    * @param {string} id 
    * @param {string} value 
    */
properties.gen.inputColor = function(container, label, id, value) {
    var div=$("<div></div>").addClass("vertical-center");
    div.append($("<label></label>").attr("for",id).text(label));
    var npt= $("<input/>").attr("type","color").attr("id",id).val(value).css("background-color",value);
    npt.on("input",function (e) {
        $(e.target).css("background-color",e.target.value);
    })
    div.append(npt);
    container.append(div);
    return div;
}

/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {JQuery<HTMLInputElement>} input 
    * @param {string} id 
    * @param {Array<string>} values 
    */
properties.gen.datalist = function(container, input, id, values) {
    var dat=$("<datalist></datalist>").attr("id",id);
    values.forEach(function (val) {
        dat.append($("<option></option>").text(val));
    });
    input.attr("list",id);
    container.append(dat);
    return input;
}

/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {string} label 
    * @param {string} id 
    * @param {boolean} value
    */
properties.gen.checkBox = function(container, label, id, value, block=false) {
    var contain=$(block?"<div></div>":"<span></span>").addClass("vertical-center").css("white-space","nowrap");
    if(!block)contain.css("margin-right","10px");
    var cb=$("<i/>").attr("id",id);
    if(value){
        cb.addClass(["far","fa-check-square"]).data("checked","1");
    }
    else{
        cb.addClass(["far","fa-square"]).data("checked","0");
    }
    contain.on("click",function (e) {
        var check=$("#"+id);
        if(check.data("checked")=="0"){
            check.removeClass("fa-square").addClass("fa-check-square").data("checked","1");
        }
        else{
            check.removeClass("fa-check-square").addClass("fa-square").data("checked","0");
        }
    })
    cb.css("margin-right","5px");
    contain.append(cb,$("<span></span>").html(label));
    container.append(contain);
    return cb;
}

/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {string} label 
    * @param {string} id 
    * @param {Number} min 
    * @param {Number} max 
    * @param {Number} value 
    */
properties.gen.inputRange = function(container, label, id, min, max, value) {
    return this.inputText(container,label,id,value).attr("type","range").attr("min",min).attr("max",max);
}

/**
    * 
    * @param {JQuery<HTMLDivElement>} container 
    * @param {string} label 
    * @param {string} id 
    * @param {Array<string>|Object} values 
    */
properties.gen.select = function(container, label, id, values, selected) {
    container.append($("<label></label>").attr("for",id).text(label));

    var select=$("<select></datalist>").addClass(["block","full-width"]).attr("id",id);
    if(values.constructor==Array){
        values.forEach(function (val, index) {
            select.append($("<option></option>").text(val).prop('selected',index==selected));
        });
    }
    else{
        for(var value in values){
            select.append($("<option></option>").text(values[value]).attr('value',value).prop('selected',value==selected));
        }
    }
    container.append(select);
    return select;
}

/**
    * 
    * @param {JQuery<HTMLElement>} container 
    * @param {string} label 
    * @param {string} id 
    * @param {Object} options 
    * @param {number} height 
    */
properties.gen.monacoEditor = function(container, label, id, options, optionsOverrideName, height, placeLabel=true) {
    var mc=$("<div>").attr("id",id).height(height).addClass("doNotTouchCss defaultCursor");
    var me= monaco.editor.create(mc[0], {
        ...(options),
        ...(JSON.parse(localStorage.getItem("monacoGlobalOptions"))),
        ...(JSON.parse(localStorage.getItem("monacoCppOptions"))),
        ...(JSON.parse(localStorage.getItem("monacoPropertiesWindowOptions"))),
        ...(JSON.parse(localStorage.getItem(optionsOverrideName))),
    });
    monacoEditorPropertiesInstances[id]=me;
    if(placeLabel){
        container.append($("<label>").attr("for",id).addClass("block").text(label));
    }
    container.append(mc);
    return [mc,me];
}

var monacoEditorPropertiesInstances={};
