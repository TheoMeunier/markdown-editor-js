# Editor Markdown Js + Scss
Markdown editor, very easy to add in a project like laravel or symfony or other. With a preview section,
for the comfort of the user.

## Dependencies:

- Codemirror 5 (editor)
- Showdown (preview)

## Demo:

### Editor

[![Edior](img/editor.png)](https://github.com/TheoMeunier/markdown-editor-js/blob/master/img/editor.png)

### Preview
[![Parser](img/preview.png)](https://github.com/TheoMeunier/markdown-editor-js/blob/master/img/preview.png)

## Add Action:
### Create button in toolbar
```html
<div class="icon" id="button">
    <!-- Icon Button action -->
</div>
```

### Define function in js
```js
const button = document.querySelector('#button');

if (button) {
    button.addEventListener('click', () => {
        // define function
    });
}
```