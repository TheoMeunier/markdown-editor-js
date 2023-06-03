import '../css/style.scss';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import CodeMirror from "codemirror";
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/theme/neo.css'

// -------------------------------------------
// DEFAULT INPUT AND OUTPUT AREA
//
let textarea = document.querySelector('#input-area');

// -------------------------------------------
// TOOLBAR
// -------------------------------------------
const boldButton = document.querySelector('#bold');
const italicButton = document.querySelector('#italic');
const codeButton = document.querySelector('#code');
const linkButton = document.querySelector('#link');

// -------------------------------------------
// CodeMirror
// -------------------------------------------
// Créez une instance de l'état de l'éditeur
const editor = CodeMirror.fromTextArea(textarea, {
    mode: "markdown",
    theme: 'neo',
    lineNumbers: false,
    lineWrapping: true,
    cursorBlinkRate: 500,
})

const select = editor.getSelections();
const cursorStart = editor.getCursor("start");
const cursorEnd = editor.getCursor("end");

if (boldButton) {
    boldButton.addEventListener('click', () => {
        if (select.length > 0 && select[0] !== "") {
            editor.replaceRange('**' + select[0] + '**', cursorStart, cursorEnd);
        } else {
            editor.replaceSelection('**demo**');
        }
    });
}

if (italicButton) {
    italicButton.addEventListener('click', () => {

        if (select.length > 0 && select[0] !== "") {
            editor.replaceRange("*" + select[0] + "*", editor.getCursor("start"), editor.getCursor("end"))
        } else {
            editor.replaceSelection("*demo*")
        }
    });
}

if (codeButton) {
    codeButton.addEventListener('click', () =>
        editor.replaceSelection("```\nYour code\n```")
    );
}

if (linkButton) {
    linkButton.addEventListener('click', () => {
        editor.replaceRange('[](http://...)', editor.getCursor())
    });
}