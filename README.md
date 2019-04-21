# html-element-js

A simple library for create and manipulating DOM using JavaScript DOM api.
See [demo](https://deadlyjack.github.io/html-element-js/build/)

## Documentation

### Installation

```bash
npm install --save html-element-js
```

or directly import into browser

```text
path/to/html-element-js/build/html-element.js
```

### Usage

#### Create a new element

###### To create a span tag

```javascript
const span = html.create('span');
```

or

```javascript
const span = html.span();
```

###### Creating element with options

```javascript
const span = html.span({
  textContent: 'This is span tag',
  className: 'myspan',
  id: 'span1'
});
```

##### HTML tags
* create tag `html.create(tagname:String, options?:HTMLOptions)` anchor tag
* a `html.a(options?)` anchor tag
* button `html.button(options?)` button tag
* div `html.div(options?)` div tag
* img `html.img(src:String, alt:String, options?)` img tag
* input `html.input(options?)` input tag

#### Get element(s) from DOM

###### Get first matching element

```javascript
const mydiv = html.get('.mydiv'); //returns HTMLElement
```

is equivalent to 

```javascript
const mydiv = document.querySelector('.mydiv'); //returns HTMLElement
```

###### Get all matching elements

```javascript
const mydivCollection = html.getAll('.mydiv'); //returns HTMLAllCollection
```

is equivalent to

```javascript
const mydivCollection = document.querySelectorAll('.mydiv'); //returns HTMLAllCollection
```

### Remove event listeners

###### Remove all EventListeners

```javascript
const mydiv = html.div();
mydiv.addEventListener('click', function(e){
  console.log(e);
}); //adds a event listener

mydiv.removeEvents(); //remvoes all event listener
```

###### Remove specific EventListeners

```javascript
const mydiv = html.div();
mydiv.addEventListener('click', function(e){
  console.log(e);
}); //adds a event listener

mydiv.removeEvents('click'); //remvoes all click event listener
```

### Add bubble effect

```javascript
const mydiv = html.div({
  className: 'bubble'
});

mydiv.bubble();
```

see [demo](https://deadlyjack.github.io/html-element-js/#bubble)

### Range slider

Creates range slider equivalent to input type range

```javascript
const slider = html.rangeSlider({
  min: 0,
  max: 100,
  step: 2,
  value: 46
});
```

###### Properties
* **min** number:*private* (minimum value of range)
* **max** number:*private* (maximum value of range)
* **size** string:*private* (size of slider)
* **step** string:*private* (step value)
* **value** number:*public*

###### Methods
* **onchange** function:*public*
* **setvalue** function:*public*

### Toggler

Creates a toggle button equivalent to input type checkbox or radio

```javascript
const toggler = html.toggler({
  size: 40,
  valType: 'on/off',
  value: true
});
```

###### Properties
* **size** number:*private* (size of slider)
* **valType** string:*private* (step value, possible value 'bool' or 'on/off')
* **value** number:*public*

###### Methods
* **onchange** function:*public*
* **setvalue** function:*public*