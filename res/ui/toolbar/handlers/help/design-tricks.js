'use strict';
var toolBar= toolBar || {};
toolBar.handlers= toolBar.handlers || {};
toolBar.handlers.help= toolBar.handlers.help || {};

toolBar.handlers.help.design_tricks= function (e) {
    dialog(
        html`
        <p>With these tips, you can create UI elements that are not natively supported by Gui900: <strong>(Most of these are performance-unfriendly!)</strong></p>
        <h3>Grouping elements like <code>GroupBox</code> in Windows Forms or <code>fieldset</code> in HTML</h3>
        <p>
            Possible using a button and a label: 
            <ol>
                <li>Create a button
                    <br>Note: Make sure that the button is behind the child elements (children appear after the button)
                </li>
                <li>Move and resize the button to create a box which covers the elements you want to group</li>
                <li>
                    Set these properties of the button:
                    <ul>
                        <li>Background color: Same as page color</li>
                        <li>Border color: Any color is accepted, but it should be different than page background color</li>
                        <li>Text: Leave empty</li>
                    </ul>
                </li>
                <li>Do not add handler code for the button</li>
                <li>Create a label</li>
                <li>Move the label to the top border of the button</li>
                <li>Set the text of the label to the title of the element group.</li>
            </ol>
            <button data-example="groupBox"></button>
        </p>

        <h3>Creating 2 buttons touching each other, without having a border in between</h3>
        <p>
            Possible with an extra button:
            <ol>
                <li>Create a button with normal styles, with a width enough for the two buttons to fit inside. Leave text empty.</li>
                <li>Create your two buttons and position them so they fit inside the button you created in step #1</li>
                <li>
                    Set these colors for the two buttons:
                    <ul>
                        <li>Background: same as the button in step #1</li>
                        <li>Border: same as background</li>
                    </ul>
                </li>
            </ol>
            <p>Limitation: Buttons need to be much smaller if the extra button is round.</p>
            <button data-example="twoButtonsWithMergedSquare"></button>
        </p>

        <h3>Creating 3 or more buttons touching each other, with only first and last buttons having border radius</h3>
        <p>
            <ol>
                <li>Create buttons side by side and touching each other as if there is no border radius.</li>
                <li>Then apply the border radius on the first and last button.</li>
                <li>Make the first and last button wider by as much as their border radius</li>
                <li>Move the last button to left by as much as it's border radius.</li>
                <li>Use spaces in the end or beginning of button texts to align the text</li>
                <li>Reorder the first and last buttons so they are behind other buttons</li>
            </ol>
            <button data-example="roundButtonGroup"></button>
        </p>
        `,[
        {
            "id": 0,
            "text": "OK",
            "key": 27
        }
    ],function (id,e) {dialog.close();}, true);
    var examples={
        "groupBox": '{"title":"Group box demo","pages":[{"elements":[{"type":"Button","position":{"x":20,"y":20},"size":{"width":280,"height":50},"text":"","colors":{"text":"#ffffff","background":"#000000","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Label","position":{"x":30,"y":5},"text":"Normal group","color":"#ffffff","font":"&FreeSans9pt7b","text_size":{"x":1,"y":1},"enabled":true,"visible":true},{"type":"Button","position":{"x":30,"y":35},"size":{"width":100,"height":30},"text":"Child","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":20,"y":90},"size":{"width":280,"height":50},"text":"","colors":{"text":"#ffffff","background":"#000000","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":30,"y":80},"size":{"width":205,"height":20},"text":"Group with opaque label","colors":{"text":"#ffffff","background":"#000000","border":"#000000"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Slider","position":{"x":30,"y":115},"size":{"width":260,"height":10,"touchAreaHeight":30},"colors":{"thumb":"#ffffff","background":{"left":"#000000","right":"#000000"},"border":"#ffffff"},"thumbWidth":7,"min":0,"value":20,"max":100,"enabled":true,"visible":true,"title":"Untitled"},{"type":"Button","position":{"x":20,"y":160},"size":{"width":280,"height":60},"text":"","colors":{"text":"#ffffff","background":"#000000","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":30,"y":150},"size":{"width":230,"height":20},"text":"With opaque label & border","colors":{"text":"#ffffff","background":"#000000","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Check-box","position":{"x":30,"y":180},"text":"Child","colors":{"text":"#ffffff","box":{"background":"#ffffff","border":"#000000","tick":"#000000"}},"size":2,"checked":false,"enabled":true,"visible":true},{"type":"Radio button","position":{"x":160,"y":180},"text":"Child","colors":{"text":"#ffffff","box":{"background":"#ffffff","border":"#000000","indicator":"#222222"}},"size":2,"group":0,"checked":false,"enabled":true,"visible":true}],"background":"#000000","name":"The only page"}],"settings":{"screenSize":{"width":320,"height":240},"screenBrightness":{"value":255,"simulateInPreview":true},"orientation":1,"touchCalibration":{"XP":"6","XM":"A2","YP":"A1","YM":"7","MINPRESSURE":10,"MAXPRESSURE":1000,"TS_LEFT":950,"TS_RT":100,"TS_TOP":100,"TS_BOT":944},"backlightPin":"-1","screenTimeout":{"enabled":true,"value":60,"animationTime":1.024,"removeScrOnOffCode":true},"appearance":{"dimDisabledElements":true},"maxElPerPage":{"button":0,"label":0,"checkBox":0,"slider":0,"radioButton":0}},"code":{"globalBeginning":"","globalAfterConfig":"","globalAfterLibrary":"","setupBeginning":"","setupBeforeStart":"","setupAfterStart":"","loop":"","globalAfterLoop":""},"fileVersion":"0.0.2","$schema":"https://mammad900.github.io/Gui900-visual-editor/res/file/project-file-json-schema.json"}',
        "twoButtonsWithMergedSquare": '{"title":"Double buttons demo","pages":[{"elements":[{"type":"Button","position":{"x":20,"y":20},"size":{"width":200,"height":40},"text":"","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":21,"y":21},"size":{"width":98,"height":38},"text":"One","colors":{"text":"#ffffff","background":"#303030","border":"#303030"},"radius":0,"enabled":true,"visible":true,"clickEvent":"Serial.println(\\\"One\\\");"},{"type":"Button","position":{"x":120,"y":21},"size":{"width":99,"height":38},"text":"Two","colors":{"text":"#ffffff","background":"#303030","border":"#303030"},"radius":0,"enabled":true,"visible":true,"clickEvent":"Serial.println(\\\"Two\\\")"}],"background":"#000000","name":"The only page"}],"settings":{"screenSize":{"width":320,"height":240},"screenBrightness":{"value":255,"simulateInPreview":true},"orientation":1,"touchCalibration":{"XP":"6","XM":"A2","YP":"A1","YM":"7","MINPRESSURE":10,"MAXPRESSURE":1000,"TS_LEFT":950,"TS_RT":100,"TS_TOP":100,"TS_BOT":944},"backlightPin":"-1","screenTimeout":{"enabled":true,"value":60,"animationTime":1.024,"removeScrOnOffCode":true},"appearance":{"dimDisabledElements":true},"maxElPerPage":{"button":0,"label":0,"checkBox":0,"slider":0,"radioButton":0}},"code":{"globalBeginning":"","globalAfterConfig":"","globalAfterLibrary":"","setupBeginning":"Serial.begin(9600);","setupBeforeStart":"","setupAfterStart":"","loop":"","globalAfterLoop":""},"fileVersion":"0.0.2","$schema":"https://mammad900.github.io/Gui900-visual-editor/res/file/project-file-json-schema.json"}',
        "roundButtonGroup": `{"pages":[{"elements":[{"type":"Button","position":{"x":20,"y":20},"size":{"width":130,"height":60},"text":"This is a 2D     ","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":20,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":130,"y":20},"size":{"width":110,"height":40},"text":"rounded","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":330,"y":20},"size":{"width":130,"height":60},"text":"          group  ","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":20,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":240,"y":20},"size":{"width":110,"height":40},"text":"button","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":20,"y":60},"size":{"width":220,"height":40},"text":"Cool, isn't it?","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":240,"y":60},"size":{"width":73,"height":40},"text":"hdsgs","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":313,"y":60},"size":{"width":74,"height":40},"text":"shhssh","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":387,"y":60},"size":{"width":73,"height":40},"text":"abcde","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":20,"y":100},"size":{"width":440,"height":40},"text":"ABCDEFGHIJKLMNOPQRSTUVWXYZ","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":20,"y":200},"size":{"width":130,"height":60},"text":"Untitled   ","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":20,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":330,"y":200},"size":{"width":130,"height":60},"text":"Untitled","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":20,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":20,"y":140},"size":{"width":50,"height":80},"text":"123","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":70,"y":140},"size":{"width":340,"height":80},"text":"Untitled","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":410,"y":140},"size":{"width":50,"height":80},"text":"456","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":130,"y":220},"size":{"width":110,"height":40},"text":"Untitled","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":240,"y":220},"size":{"width":110,"height":40},"text":"Untitled","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Label","position":{"x":20,"y":260},"text":"You can see that corner buttons look bad. ","color":"#ffffff","font":"&FreeSans9pt7b","text_size":{"x":1,"y":1},"enabled":true,"visible":true},{"type":"Label","position":{"x":20,"y":285},"text":"You can fix it when Gui900 visual editor supports text offset","color":"#ffffff","font":"NULL","text_size":{"x":1,"y":1},"enabled":true,"visible":true}],"background":"#000000","name":"Grid"},{"elements":[{"type":"Button","position":{"x":10,"y":50},"size":{"width":150,"height":100},"text":"Another       ","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":50,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":110,"y":50},"size":{"width":100,"height":100},"text":"Rounded","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":260,"y":50},"size":{"width":150,"height":100},"text":"       Group","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":50,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":210,"y":50},"size":{"width":100,"height":100},"text":"Button","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""}],"background":"#000000","name":"Another basic"},{"elements":[{"type":"Label","position":{"x":0,"y":0},"text":"There are more examples in other pages","color":"#ffffff","font":"&FreeSans12pt7b","text_size":{"x":1,"y":1},"enabled":true,"visible":true},{"type":"Button","position":{"x":10,"y":50},"size":{"width":110,"height":40},"text":" Basic  ","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":10,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":110,"y":50},"size":{"width":130,"height":40},"text":"Rounded","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":330,"y":50},"size":{"width":110,"height":40},"text":"  Group","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":10,"enabled":true,"visible":true,"clickEvent":""},{"type":"Button","position":{"x":240,"y":50},"size":{"width":100,"height":40},"text":"Button","colors":{"text":"#ffffff","background":"#303030","border":"#808080"},"radius":0,"enabled":true,"visible":true,"clickEvent":""}],"background":"#000000","name":"Basic"}],"settings":{"screenSize":{"width":480,"height":320},"screenBrightness":{"value":255,"simulateInPreview":true},"orientation":1,"touchCalibration":{"XP":"6","XM":"A2","YP":"A1","YM":"7","MINPRESSURE":10,"MAXPRESSURE":1000,"TS_LEFT":950,"TS_RT":100,"TS_TOP":100,"TS_BOT":944},"backlightPin":"-1","screenTimeout":{"enabled":true,"value":60,"animationTime":1.024,"removeScrOnOffCode":true},"appearance":{"dimDisabledElements":true},"maxElPerPage":{"button":0,"label":0,"checkBox":0,"slider":0,"radioButton":0}},"code":{"globalBeginning":"","globalAfterConfig":"","globalAfterLibrary":"","setupBeginning":"","setupBeforeStart":"","setupAfterStart":"","loop":"","globalAfterLoop":""},"title":"Button group demo","fileVersion":"0.0.3","$schema":"https://mammad900.github.io/Gui900-visual-editor/res/file/project-file-json-schema.json"}`,

    };
    $("#dialog button[data-example]").addClass("button").css({"padding":"10px", "display": "block"}).text("Open example")
    .attr("title","Middle click to open in a new tab").on("click",(e)=>{
        fileIO.load(examples[$(e.target).attr("data-example")]);
    }).on("mousedown",(e)=>{
        if(e.button==1){
            e.preventDefault();
            localStorage.setItem("fileToBeLoaded",examples[$(e.target).attr("data-example")]);
            window.open(window.location);
        }
    })
}
