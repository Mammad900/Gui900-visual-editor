function LP_CreateBoxes() {
    var HTMLs={


        preview:          [html`<section class="box" id="preview">
                                    <div class="vertical-center box-header defaultCursor">
                                        <i class="fa fa-chevron-down" onclick="$('#preview').toggleClass('hiddenbox');cetnbtp()" id="preview-openclose-button"></i
                                        ><h2 style="margin: 5px; display: inline-block;margin-left: 0;">
                                            Preview
                                        </h2>
                                    </div>
                                    <canvas width="240px" height="320px" id="preview-canvas" class="sharpZoom"></canvas>
                                    <button class="button block" onclick="preview.refresh()" style="width:100%;border-bottom-left-radius: var(--box-border-radius);border-bottom-right-radius: var(--box-border-radius); margin-top: -4px;padding: 5px;">
                                        <i class="fas fa-sync"></i>
                                        Refresh
                                    </button>
                                </section>`,false],


        properties:       [html`<section class="box" id="properties" style="padding: 0;">
                                    <div class="box-header defaultCursor">
                                        <h2>
                                            Properties
                                        </h2>
                                        <i class="fa fa-chevron-down" id="properties-openclose-button" onclick="$('#properties').toggleClass('hiddenbox');cetnbtp()"></i>
                                        <span class="float-right" id="properties-header-details">No item selected</span>
                                    </div>
                                    <div style="border-bottom-right-radius: var(--box-border-radius); 
                                                overflow: hidden; width: 100%;
                                                height: calc( 100% - 39px);">
                                        <div id="properties-shadow-top"></div>
                                        <div id="properties-content">
                                        </div>
                                        <div id="properties-shadow-bottom"></div>
                                    </div>
                                </section>`,false],

            
        elements:         [html`<section class="box" id="elements" style="padding: 0;">
                                    <table class="table np" style="border-radius: 10px;" id="elements_table">
                                        <tr style="border-radius: 10px;" class="box-header defaultCursor">
                                            <th style="padding: 0; min-width: 165px;">
                                                <div class="vertical-center">
                                                    <i class="fa fa-chevron-down" id="elements-openclose-button"  onclick="$('#elements').toggleClass('hiddenbox')"></i
                                                    ><h2 style="margin: 5px; display: inline-block;margin-left: 0px">
                                                        Elements
                                                    </h2>
                                                    <div class="float-right noselect tooltip" style="margin-right: 10px;" id="new_element_button">
                                                        <button class="noHoverEffect noRippleEffect button size38" title="New element">
                                                            <i class="fa fa-plus"></i>
                                                        </button>
                                                        <div class="tooltiptext" id="new-element-buttons">

                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                            <th title="Index">#</th>
                                            <th>Title</th>
                                            <th>Type</th>
                                        </tr>
                                    </table>
                                </section>`,false],


        pages:            [html`<section class="box" id="pages" style="padding: 0; min-width: max-content;">
                                    <table class="table np" style="border-radius: 10px;" id="pages_table">
                                        <tr style="border-radius: 10px;" class="box-header defaultCursor">
                                            <th style="padding: 0;">
                                                <div class="vertical-center">
                                                    <i class="fa fa-chevron-down" id="pages-openclose-button"  onclick="$('#pages').toggleClass('hiddenbox')"></i
                                                    ><h2 style="margin: 5px; display: inline-block;margin-left: 0px;">
                                                        Pages
                                                    </h2>
                                                    <button class="float-right button size38 noselect" title="New page"
                                                        style="margin-right: 10px;" id="new_page_button">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </th>
                                            <th>Number</th>
                                            <th>Title</th>
                                        </tr>
                                    </table>
                                </section>`,false],


        "code-editor":    [html`<section class="box" id="code-editor">
                                    <div ondblclick="codeEditorFullScreen()" class="vertical-center box-header defaultCursor">
                                        <i class="fas fa-chevron-down" onclick="$('#code-editor').toggleClass('hiddenbox')"></i
                                        ><h2>Code</h2>
                                    </div>
                                    <div id="codeParts-container">
                                        <div id="codeParts">
                                            <div>
                                                <span data-name="globalBeginning" data-selected="true">Code in the biginning (global)</span
                                                ><span data-name="globalAfterConfig">Code after config defines</span
                                                ><span data-name="globalAfterLibrary">Code after Gui900 include</span
                                                ><span data-name="setupBeginning">Code in the beginning of <code>setup()</code></span
                                                ><span data-name="setupBeforeStart">Code before <code>start()</code></span
                                                ><span data-name="setupAfterStart">Code after <code>start()</code></span
                                                ><span data-name="loop">Code in <code>loop()</code></span
                                                ><span data-name="globalAfterLoop">Code after <code>loop()</code></span>
                                            <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="monaco-container" class="defaultCursor"></div>
                                </section>`,false]
    }


    var boxConfig= JSON.parse(localStorage.getItem("boxesPositions")) || [
        ["preview", "properties"],
        ["elements", "pages"],
        ["code-editor"],
        [],
        [],
    ];
    boxConfig.forEach( (row, index) => {
        var flexBox= $("<div>").addClass("flexbox box-row");
        if(index!=0){ 
            flexBox.addClass("responsive"); // All rows except first one are responsive
        }
        if(row.length==0) {
            flexBox.addClass("empty");
        } else {
            row.forEach( box => {
                var html= HTMLs[box][0];
                HTMLs[box][1]= true;
                flexBox.append(html);
            });
        }
        $("main.content").append(flexBox);
    });
    for(var name in HTMLs) {
        if(!(HTMLs[name][1])){
            $(".box-row").eq({
                "preview": 0, "properties": 0,
                "elements": 1, "pages": 1,
                "code-editor": 2
            }[name]).removeClass("empty").append(HTMLs[name][0]);
        }
    }


    (function () {
        var container=$("#new-element-buttons");
        for(let type in elements.types) { // Using "var" instead of "let" causes all buttons to create the last element type. It's because "let" is in block scope while "var" is in function scope
            container.append($("<button>").text(type).addClass("button block").on("click",async function(){
                await elements.create(type);
            }))
        }
    })();
}