
```html
<input type="text" id="description" name="description" minlength="8" maxlength="50">
```

```html
<input type="number" id="quantity" name="quantity" min="1" max="10"> 
```

```html
<input type="range" id="volume" name="volume" min="1" max="100"> 
```

Multiple
Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types.

```html
<input type="file" id="gallery" name="gallery" multiple> 
```

Pattern
Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK.

```html
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” > 
```
