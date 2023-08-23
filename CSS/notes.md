CSS from [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=de)

Note: Original commits can be seen at this address: <https://github.com/note-repos/css-notes/blob/main/css.md>, moved to this repo for completeness

To link styles.css to index.html, add the following line somewhere inside the <head> of the HTML document:

`<link rel="stylesheet" href="styles.css" />`

You can target multiple selectors at the same time by separating the selectors with a comma. If you want all paragraphs and all list items to be green, your rule would look like this:

```css
p,
li {
  color: green;
}
```

You can apply the class of special to any element on your page that you want to have the same look as this list item.

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

you can use a selector called the `descendant combinator`, which takes the form of a space between two other selectors.

```css
li em {
  color: rebeccapurple;
}
```

Something else you might like to try is styling a paragraph when it comes directly after a heading at the same hierarchy level in the HTML. To do so, place a `+` (an _adjacent sibling combinator_) between the selectors.

```css
h1 + p {
  font-size: 200%;
}
```

In some circumstances, internal stylesheets can be useful. For example, perhaps you're working with a content management system where you are blocked from modifying external CSS files.

`width: calc(90% - 30px)` the values define the width of this box to be 90% of the containing block width, minus 30 pixels.

CSS @rules (pronounced "at-rules") provide instruction for what CSS should perform or how it should behave. Some @rules are simple with just a keyword and a value.

Some properties like `font`, `background`, `padding`, `border`, and `margin` are called shorthand properties. This is because shorthand properties set several values in a single line.

CSS comments begin with `/*` and end with `*/`.

Inheritance also needs to be understood in this context — some CSS property values set on parent elements are inherited by their child elements, and some aren't.

Properties like `width` (as mentioned earlier), `margin`, `padding`, and `border` are not inherited properties.

CSS provides five special universal property values for controlling inheritance. Every CSS property accepts these values.

`inherit` : Sets the property value applied to a selected element to be the same as that of its parent element. Effectively, this "turns on inheritance".

`initial` : Sets the property value applied to a selected element to the initial value of that property.

`revert` : Resets the property value applied to a selected element to the browser's default styling rather than the defaults applied to that property. This value acts like unset in many cases.

`revert-layer` : Resets the property value applied to a selected element to the value established in a previous cascade layer.

`unset` : Resets the property to its natural value, which means that if the property is naturally inherited it acts like inherit, otherwise it acts like initial.

Inline styles take precedence over all author styles, no matter the layer.

If a box has an outer display type of `inline`, then:

- The `width` and `height` properties will not apply.

- _Vertical_ `padding`, `margins`, and `borders` will apply but will not cause other inline boxes to move away from the box.

- _Horizontal_ `padding`, `margins`, and `borders` will apply and will cause other inline boxes to move away from the box.

inline-size is a logical property that defines the width of an element when the writing-mode is horizontal, or the height of the element when the writing-mode is vertical.As a design choice, you might want to display vertical text on an element, say a header:

> CSS Logical Properties (search this topic later)

To use the alternative box model for all of your elements (which is a common choice among developers), set the `box-sizing` property on the `<html>`element and set all other elements to inherit that value:

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

In the example below, we have two paragraphs. The topparagraph has a `margin-bottom` of 50 pixels, the other hasa `margin-top` of 30 pixels. The margins have collapsedtogether so the actual margin between the boxes is 50pixels and not the total of the two margins.

Unlike margins, you cannot have a negative padding.

Any background applied to your element will display behind the padding.

`display: inline-block` is a special value of `display`, which provides a middle ground between `inline` and `block`. Use it if you do not want an item to break onto a new line, but do want it to respect `width` and `height` and avoid the overlapping.

Where this can be useful is when you want to give a link a larger hit area by adding padding. `<a>` is an inline element like `<span>`; you can use `display: inline-block` to allow padding to be set on it, making it easier for a user to click the link.

If you specify a background color in addition to a background image then the image displays on top of the color.

`background-repeat: no-repeat` stop the background from repeating altogether.

`background-size: cover` the browser will make the image just large enough so that it completely covers the box area while still retaining its aspect ratio. In this case, part of the image is likely to end up outside the box.

`background-size: contain` the browser will make the image the right size to fit inside the box. In this case, you may end up with gaps on either side or on the top and bottom of the image, if the aspect ratio of the image is different from that of the box.

**Note**: The default background-position value is (0,0).

**Note**: background-position is a shorthand for background-position-x and background-position-y, which allow you to set the different axis position values individually.  
`background-position: top 20px right 10px;`

`background-image: linear-gradient(105deg, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%);`

It is also possible to have multiple background images — you specify multiple `background-image` values in a single property value, separating each one with a comma.The backgrounds will layer with the last listed background image at the bottom of the stack, and each previous image stacking on top of the one that follows it in the code.

**Note**: Gradients can be mixed with regular background images.

Another option we have available for backgrounds is specifying how they scroll when the content scrolls. This is controlled using the `background-attachment` property, which can take the following values:

- `scroll`: causes the element's background to scroll when the page is scrolled. If the element content is scrolled, the background does not move. In effect, the background is fixed to the same position on the page, so it scrolls as the page scrolls.

`fixed`: causes an element's background to be fixed to the viewport so that it doesn't scroll when the page or element content is scrolled. It will always remain in the same position on the screen.

`local`: fixes the background to the element it is set on, so when you scroll the element, the background scrolls with it.

The `background-attachment` property only has an effect when there is content to scroll, so we've made a demo to demonstrate the differences between the three values — have a look at [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (also see the [source code](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds)).

to make the top right corner have a horizontal radius of 1em, and a vertical radius of 10%:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

The `writing-mode` property lets us switch from one writing mode to another.

The three possible values for the `writing-mode` property are:

- `horizontal-tb`: Top-to-bottom block flow direction. Sentences run horizontally.
- `vertical-rl`: Right-to-left block flow direction. Sentences run vertically.
- `vertical-lr`: Left-to-right block flow direction. Sentences run vertically.

The property mapped to `width` when in a horizontal writing mode is called `inline-size` — it refers to the size in the inline dimension. The property for `height` is named `block-size` and is the size in the block dimension.

Exm:

```html
<div class="wrapper">
  <div class="box logical">
    <img src="big-star.png" alt="star" />
    <p>
      This box uses logical properties. The star image has been floated
      inline-start, it also has a margin on the inline-end and block-end.
    </p>
  </div>
</div>
```

```css
.box {
  inline-size: 200px;
  writing-mode: horizontal-tb;
}

img {
  float: inline-end;
  margin-inline-end: px;
  margin-block-end: 10px;
}
```

**Note**: Currently, only Firefox supports flow relative values for float. If you are using Google Chrome or Microsoft Edge, you may find that the image did not float.

If you are not using multiple writing modes, then for now you might prefer to use the physical versions. However, ultimately we expect that people will transition to the logical versions for most things, as they make a lot of sense once you also start dealing with layout methods such as flexbox and grid.

`overflow: visible` default
`overflow: hidden`  
`overflow: scroll`

> To just scroll on the y axis, you could use the overflow-y property, setting `overflow-y: scroll`.

`overflow: scroll hidden`

If you only want scrollbars to appear when there is more content than can fit in the box, use `overflow: auto`.

When developing a site, always keep overflow in mind.

**em** : size of the parent.  
**rem** : Font size of the root element.  
**rlh** : Line height of the root element. When used on the `font-size` or `line-height` properties of the root element, it refers to the properties' initial value.  
**vw** : 1% of the viewport's width.  
**vh** : 1% of the viewport's height.

To start with, we set 16px as the font size on the `<html>` element.

Note: Setting an alpha channel on a color has one key difference to using the opacity property we looked at earlier. When you use opacity you make the element and everything inside it opaque, whereas using RGBA colors only makes the color you are specifying opaque.

**Note**: Setting an alpha channel on a color has one key difference to using the `opacity` property we looked at earlier. When you use opacity you make the element and everything inside it opaque, whereas using RGBA colors only makes the color you are specifying opaque.

When you use margin and padding set in percentages, the value is calculated from the **inline size** of the containing block — therefore the width when working in a horizontal language.

A common use of `max-width` is to cause images to scale down if there is not enough space to display them at their intrinsic width while making sure they don't become larger than that width.

1vw = 1% of viewport width
1vh = 1% of viewport height
1vmin = 1vw or 1vh, whichever is smaller
1vmax = 1vw or 1vh, whichever is larger

`object-fit: cover;` to protect aspect ratio.

---

**Form Styling**

To force the image to stretch to fill the grid cell it is in, you'd have to do something like the following:

```css
img {
  width: 100%;
  height: 100%;
}
```

[Style and Working with Form Element](https://developer.mozilla.org/en-US/docs/Learn/Forms)

[Styling web forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms)

[Advanced form styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)

In some browsers, form elements do not inherit font styling by default. Therefore, if you want to be sure that your form fields use the font defined on the body, or on a parent element, you should add this rule to your CSS.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

In addition to the rules mentioned above, you should also set `overflow: auto` on `<textarea>` s to stop IE showing a scrollbar when there is no need for one:

```css
textarea {
  overflow: auto;
}
```

[very popular stylesheet used as a base by many projects](https://necolas.github.io/normalize.css/)

---

## Styling Tables

[A very good referance to style tables](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)

---

A good first step, therefore, is to run your HTML and CSS through a validator, to pick up and fix any errors.

---

[Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

## CSS Layout

There are five types of positioning you should know about:

**Static positioning** is the default that every element gets. It just means "put the element into its normal position in the document layout flow — nothing special to see here".

**Relative positioning** allows you to modify an element's position on the page, moving it relative to its position in normal flow, as well as making it overlap other elements on the page.

**Absolute positioning** moves an element completely out of the page's normal layout flow, like it's sitting on its own separate layer. From there, you can fix it to a position relative to the edges of its closest positioned ancestor (which becomes <html> if no other ancestors are positioned). This is useful for creating complex layout effects, such as tabbed boxes where different content panels sit on top of one another and are shown and hidden as desired, or information panels that sit off-screen by default, but can be made to slide on screen using a control button.

**Fixed positioning** is very similar to absolute positioning except that it fixes an element relative to the browser viewport, not another element. This is useful for creating effects such as a persistent navigation menu that always stays in the same place on the screen as the rest of the content scrolls.

**Sticky positioning** is a newer positioning method that makes an element act like `position: relative` until it hits a defined offset from the viewport, at which point it acts like `position: fixed`.

---

## Flexbox from [Css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

`nowrap` (default): all flex items will be on one line
`wrap`: flex items will wrap onto multiple lines, from top to bottom.
`wrap-reverse`: flex items will wrap onto multiple lines from bottom to top.

### flex-flow

This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. _The default value is row nowrap_.

exp:

```css
.container {
  flex-flow: column wrap;
}
```

### justify-content

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly | start | end | left | right;
}
```

`space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line

`space-around`: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.

`space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal.<https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-content>

[Visit for visual](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content)

### align-items

This defines the default behavior for how flex items are laid out along the _cross axis_ on the current line. Think of it as the _justify-content_ version for the _cross-axis_ (perpendicular to the main-axis).

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first
    baseline | last baseline | start | end;
}
```

`flex-start / start / self-start`: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.

`flex-end / end / self-end`: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.

`baseline`: items are aligned such as their baselines align.

[Visit for visual](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items)

### align-content

This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

**Note**: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    space-evenly | stretch | start | end | baseline;
}
```

[Click to exp about align-content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-content)

---

### gap, row-gap, column-gap

The gap property explicitly controls the space between flex items. It applies that spacing only between items not on the outer edges.

```css
.container {
  display: flex;
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```

The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.

It is not exclusively for flexbox, gap works in grid and multi-column layout as well.

### order

```css
.item {
  order: 5; /* default is 0 */
}
```

### flex-grow

This defines the ability for a flex item to grow if necessary.

Negative numbers are invalid.

```css
.item {
  flex-grow: 4; /* default 0 */
}
```

### flex-shrink

This defines the ability for a flex item to shrink if necessary.

Negative numbers are invalid.

```css
.item {
  flex-shrink: 3; /* default 1 */
}
```

### flex-basis

This defines the default size of an element before the remaining space is distributed.

this keyword isn’t well supported

### flex

This is the shorthand for `flex-grow`, `flex-shrink` and `flex-basis` combined.

The second and third parameters (flex-shrink and flex-basis) are optional. The default is 0 1 auto,but if you set it with a single number value, like flex: 5;, that changes the flex-basis to 0%, so it’s like setting flex-grow: 5; flex-shrink: 1; flex-basis: 0%;.

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

**It is recommended that you use this shorthand property rather than set the individual properties. The shorthand sets the other values intelligently.**

### align-self

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

.item {
align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

Note that float, clear and vertical-align have no effect on a flex item.

## Prefixing Flexbox

Flexbox requires some vendor prefixing to support the most browsers possible. It doesn’t just include prepending properties with the vendor prefix, but there are actually entirely different property and value names

Perhaps the best way to handle this is to write in the new (and final) syntax and run your CSS through _Autoprefixer_, which handles the fallbacks very well.

### [Flexbox Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-tricks)

---

---

## [GRID From Css-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

**Grid Line**: The dividing lines that make up the structure of the grid. They can be either vertical (“column grid lines”) or horizontal (“row grid lines”) and reside on either side of a row or column.

**Grid Track**: The space between two adjacent grid lines. You can think of them as the columns or rows of the grid.

```css
.container {
  display: grid | inline-grid;
}
```

`grid` – generates a block-level grid
`inline-grid` – generates an inline-level grid

### grid-template-columns and grid-template-rows

Grid lines are automatically assigned positive numbers from these assignments (-1 being an alternate for the very last row).

```css
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];

  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];

  /* Note that a line can have more than one name. For example, here the second line will have two names: row1-end and row2-start: */
}
```

If your definition contains repeating parts, you can use the `repeat()` notation to streamline things:

```css
.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}
```

Which is equivalent to this:

```css
.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}
```

If multiple lines share the same name, they can be referenced by their line name and count.

```css
.item {
  grid-column-start: col-start 2;
}
```

The fr unit allows you to set the size of a track as a fraction of the free space of the grid container. For example, this will set each item to one third the width of the grid container:

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

### grid-template-areas

`.` – a period signifies an empty grid cell

Example:

```css
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

That’ll create a grid that’s four columns wide by three rows tall. The entire top row will be composed of the header area. The middle row will be composed of two main areas, one empty cell, and one sidebar area. The last row is all footer.

You can use any number of adjacent periods to declare a single empty cell. _As long as the periods have no spaces between them they represent a single cell._

### grid-template

A shorthand for setting `grid-template-areas`, `grid-template-rows` and `grid-template-columns` in a single declaration.

```css
.container {
  grid-template: none | <grid-template-rows> / <grid-template-columns>;
}
```

It also accepts a more complex but quite handy syntax for specifying all three. Here’s an example:

```css
.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```

That’s equivalent to this:

```css
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas:
    "header header header"
    "footer footer footer";
}
```

Since grid-template doesn’t reset the implicit grid properties (grid-auto-columns, grid-auto-rows, and grid-auto-flow), which is probably what you want to do in most cases, it’s recommended to use the grid property instead of grid-template.

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  column-gap: 10px;
  row-gap: 15px

  /* old */
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```

The gutters are only created between the columns/rows, not on the outer edges.

```css
.container {
  /* standard */
  gap: <grid-row-gap> <grid-column-gap>;

  /* old */
  grid-gap: <grid-row-gap> <grid-column-gap>;

  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  gap: 15px 10px;
}
```

---

### justify-items

This value applies to all grid items inside the container.

```css
.container {
  justify-items: start | end | center | stretch;
}
```

This behavior can also be set on individual grid items via the `justify-self` property.

### align-items

This value applies to all grid items inside the container.

```css
.container {
  justify-items: start | end | center | stretch | baseline;
}
```

This behavior can also be set on individual grid items via the `align-self` property.

There are also modifier keywords safe and unsafe (usage is like `align-items: safe end`). The safe keyword means “try to align like this, but not if it means aligning an item such that it moves into inaccessible overflow area”, while unsafe will allow moving content into inaccessible areas (“data loss”).

---

### place-items

place-items sets both the `align-items` and `justify-items` properties in a single declaration.

<align-items> / <justify-items> – The first value sets align-items, the second value justify-items. If the second value is omitted, the first value is assigned to both properties.

```css
.center {
  display: grid;
  place-items: center;
}
```

### justify-content/align-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container.

```css
.container {
  justify-content/align-content: start | end | center | stretch | space-around |
    space-between | space-evenly;
}
```

---

### place-content

`place-content` sets both the align-content and justify-content properties in a single declaration.

<align-content> / <justify-content> – The first value sets align-content, the second value justify-content. If the second value is omitted, the first value is assigned to both properties.

---

### grid-auto-columns / grid-auto-rows

Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid.

```css
.container {
  grid-auto-columns: 60px;
}
```

---

### grid-auto-flow

This property controls how the auto-placement algorithm works.

`row` – tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)

`column` – tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary

`dense` – tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

Note that dense only changes the visual order of your items and might cause them to appear out of order, which is bad for accessibility.

```css
.container {
  grid-auto-flow: row | column;
}
```

---

### grid

```css
.container {
  grid:
    [row1-start] "header header header" 1fr [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```

That’s equivalent to this:

```css
.container {
  grid-template-areas:
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
}
```

---

## Properties for the Children (Grid Items)

`grid-column-start`  
`grid-column-end`  
`grid-row-start`  
`grid-row-end`  

`grid-column`  
`grid-row`  
  
Shorthand for `grid-column-start` + `grid-column-end`, and `grid-row-start` + `grid-row-end`, respectively.  

Example:

```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

If no end line value is declared, the item will span 1 track by default.

---

### justify-self / align-self / place-self

```css
.item-a {
  justify-self: center;
}
```

To set alignment for all the items in a grid, this behavior can also be set on the grid container via the `justify/align-items` property.

`place-self` sets both the align-self and justify-self properties in a single declaration.

```css
.item-b {
place-self: start;
}
```

---

## Special Units & Functions

### fr units

They essentially mean “portion of the remaining space”.

### Sizing Keywords

`min-content`: the minimum size of the content. Imagine a line of text like “E pluribus unum”, the min-content is likely the width of the word “pluribus”.

`max-content`: the maximum size of the content. Imagine the sentence above, the max-content is the length of the whole sentence.

`auto`: this keyword is a lot like fr units, except that they “lose” the fight in sizing against fr units when allocating the remaining space.

`fit-content`: use the space available, but never less than min-content and never more than max-content.

### Sizing Functions

The `minmax()` function does exactly what it seems like: it sets a minimum and maximum value for what the length is able to be. This is useful for in combination with relative units

```css
grid-template-columns: minmax(100px, 1fr) 3fr;
```

### The repeat() Function and Keywords

```css
grid-template-columns:
  repeat(8, minmax(10px, 1fr));
```

But repeat() can get extra fancy when combined with keywords:

- `auto-fill`: Fit as many possible columns as possible on a row, even if they are empty.

- `auto-fit`: Fit whatever columns there are into the space. Prefer expanding columns to fill space rather than empty columns.

This bears the most famous snippet in all of CSS Grid and one of the all-time great CSS tricks:

```css
grid-template-columns: 
  repeat(auto-fit, minmax(250px, 1fr));
```

---

### Masonry

```css
  grid-template-rows: masonry;
```

### Subgrid

Subgrid is an extremely useful feature of grids that allows grid items to have a grid of their own that inherits grid lines from the parent grid.

```css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
.grid-item {
  grid-column: 2 / 7;

  display: grid;
  grid-template-columns: subgrid;
}
.child-of-grid-item {
  /* gets to participate on parent grid! */
  grid-column: 3 / 6;
}
```

## CSS Grid animation

According to the CSS Grid Layout Module Level 1 specification, there are 5 animatable grid properties:

grid-gap, grid-row-gap, grid-column-gap as length, percentage, or calc.

```css
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px;
  grid-gap: 20px;
  transition: all 1s;
}
```

**[Css-Grid tricks](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-css-grid-tricks)**
