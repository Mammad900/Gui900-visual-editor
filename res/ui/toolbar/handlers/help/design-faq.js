'use strict';
toolBar.handlers.help.design_FAQ= function (e) {
    dialog.new(
        `<h3>How to group several elements in a group, like Windows forms <code>GroupBox</code>?</h3>
        <p>
            It is not natively supported, but there is a workaround with a button and a label to do this:
            <ol>
                <li>Create a button</li>
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
            You have a group box which looks like the Windows forms <code>GroupBox</code>, but more customizable!
        </p>`,[
        {
            "id": 0,
            "text": "OK",
            "key": 27
        }
    ],function (id,e) {dialog.close();})
}