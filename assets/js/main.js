import '../css/style.scss';
import CodeMirror from "codemirror";
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/theme/neo.css'
import showdown from "showdown";

// -------------------------------------------
// DEFAULT INPUT AND OUTPUT AREA
//
let textarea = document.querySelector('#input-area');
let output = document.querySelector('#output-area')

// -------------------------------------------
// TOOLBAR
// -------------------------------------------
const boldButton = document.querySelector('#bold');
const italicButton = document.querySelector('#italic');
const codeButton = document.querySelector('#code');
const linkButton = document.querySelector('#link');
const previewButton = document.querySelector('#preview');

// -------------------------------------------
// CodeMirror
// -------------------------------------------
const editor = CodeMirror.fromTextArea(textarea, {
    mode: "markdown",
    theme: 'neo',
    lineNumbers: false,
    lineWrapping: true,
    cursorBlinkRate: 500,
})

if (boldButton) {
    boldButton.addEventListener('click', () => {
        if (editor.getSelection() !== "") {
            editor.replaceSelection('**' + editor.getSelection() + '**');
            editor.focus()
        } else {
            editor.replaceSelection('**demo**');
            editor.focus()
        }
    });
}

if (italicButton) {
    italicButton.addEventListener('click', () => {
        if (editor.getSelection() !== "") {
            editor.replaceSelection("*" + editor.getSelection() + "*")
            editor.focus()
        } else {
            editor.replaceSelection("*demo*")
            editor.focus()
        }
    });
}

if (codeButton) {
    codeButton.addEventListener('click', () => {
        editor.replaceSelection("```\nYour code\n```")
        editor.focus()
    });
}

if (linkButton) {
    linkButton.addEventListener('click', () => {
        editor.replaceRange('[](http://...)', editor.getCursor())
        editor.focus()
    });
}

// -------------------------------------------
// Preview
// -------------------------------------------
const converser = new showdown.Converter()
previewButton.addEventListener('click', (e) => {
    e.preventDefault()
    output.classList.toggle('show')
    previewButton.classList.toggle('active')
    output.innerHTML = converser.makeHtml(editor.getValue())
})