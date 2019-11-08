# html-tag-js

A simple library for creating and manipulating DOM using JavaScript DOM api.
See

## Documentation

### Installation

```bash
npm i html-tag-js
```

or directly import into browser

```text
path/to/html-element-js/dist/tag.js
```

### Usage

#### es6

```javascript
import tag from 'html-tag-js';
```

##### usage

```javascript
//creating element with options
const span = tag('span' ,{
  textContent: 'This is span tag',
  className: 'myspan',
  id: 'span1'
});

console.log(span);

//create element with child
const div = tag('div', {
  child: span
});

const elements = [el1, el2, el3];

//append child(s)
div.append(...elements);

//easily get any child of parent element using get method which
//takes query selector string as argument
div.get('#span1');

//get all element
//return array of html elements
div.getAll('span');

// --or--

tag.get('body');
tag.getAll('.mydiv');

//parse html string
//returns html element
const el = tag.parse('<div class="mydiv"></div>');
console.log(el);

//return html element collection
const el2 = tag.parse('<div class="mydiv"></div><p class="myp">');

//templates
const html = '<div class="mydiv">${{text}}</div>';
console.log(tag.template(html, {
  text: 'new text'
})); //<div class="mydiv">new text</div>


```
