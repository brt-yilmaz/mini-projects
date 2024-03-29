# Notes from [SASS](https://sass-lang.com/)

Note: Original commits can be seen at this address: <https://github.com/note-repos/sass-notes/blob/main/sass-notes.md>, moved to this repo for completeness

The **@extend** rule may only be used within style rules.

// This comment won't be included in the CSS.

/_But this comment will, except in compressed mode._/

/_! This comment will be included even in compressed mode._/

The deeper you nest, the more bandwidth it takes to serve your CSS and the more work it takes the browser to render it. Keep those selectors shallow!

Some of these CSS properties have shorthand versions that use the namespace as the property name. For these, you can write both the shorthand value and the more explicit nested versions.

Exp:

scss:

```scss
.info-page {
  margin: auto {
    bottom: 10px;
    top: 2px;
  }
}
```

css:

```css
.info-page {
  margin: auto;
  margin-bottom: 10px;
  margin-top: 2px;
}
```

---

scss:

```scss
$primary: #81899b;
$accent: #302e24;
$warn: #dfa612;

:root {
  --primary: #{$primary}; // to give sass variable to css variable use #{}
  --accent: #{$accent};
  --warn: #{$warn};

  // Even though this looks like a Sass variable, it's valid CSS so it's not
  // evaluated.
  --consumed-by-js: $primary;
}
```

css:

```css
:root {
  --primary: #81899b;
  --accent: #302e24;
  --warn: #dfa612;
  --consumed-by-js: $primary;
}
```

---

Unfortunately, interpolation removes quotes from strings, which makes it difficult to use quoted strings as values for custom properties when they come from Sass variables. As a workaround, you can use the meta.inspect() function to preserve the quotes.

scss:

```scss
@use "sass:meta";

$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas;

:root {
  --font-family-sans-serif: #{meta.inspect($font-family-sans-serif)};
  --font-family-monospace: #{meta.inspect($font-family-monospace)};
}
```

css:

```css
:root {
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas;
}
```

The parent selector, &, is a special selector invented by Sass that’s used in nested selectors to refer to the outer selector.

Sass has a special kind of selector known as a “placeholder”. It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output. In fact, any complex selector (the ones between the commas) that even contains a placeholder selector isn't included in the CSS, nor is any style rule whose selectors all contain placeholders.

What’s the use of a selector that isn’t emitted? It can still be extended! Unlike class selectors, placeholders don’t clutter up the CSS if they aren’t extended and they don’t mandate that users of a library use specific class names for their HTML.

Ex:
scss:

```scss
%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, 0.12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover {
    border: 2px rgba(#000, 0.5) solid;
  }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}

.reset-buttons {
  @extend %toolbelt;
  color: #cddc39;
}
```

css:

```css
.action-buttons,
.reset-buttons {
  box-sizing: border-box;
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
  padding: 16px 0;
  width: 100%;
}
.action-buttons:hover,
.reset-buttons:hover {
  border: 2px rgba(0, 0, 0, 0.5) solid;
}

.action-buttons {
  color: #4285f4;
}

.reset-buttons {
  color: #cddc39;
}
```

---

### Sass Variables

Sass variables are imperative, which means if you use a variable and then change its value, the earlier use will stay the same. CSS variables are declarative, which means if you change the value, it’ll affect both earlier uses and later uses.

Sass variables, like all Sass identifiers, treat hyphens and underscores as identical. This means that `$font-size` and `$font_size` both refer to the same variable

Variables defined with `!default` can be configured when loading a module with the @use rule. Sass libraries often use !default variables to allow their users to configure the library’s CSS.

If you need to set a global variable’s value from within a local scope (such as in a mixin), you can use the !global flag. A variable declaration flagged as `!global` will always assign to the global scope.

scss:

```scss
$variable: first global value;

.content {
  $variable: second global value !global;
  value: $variable;
}

.sidebar {
  value: $variable;
}
```

css:

```css
.content {
  value: second global value;
}

.sidebar {
  value: second global value;
}
```

_The !global flag may only be used to set a variable that has already been declared at the top level of a file. It may not be used to declare a new variable._

Define a map from names to values that you can then access using variables.  
scss:

```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```

css:

```css
.alert {
  background-color: #ffc107;
}
```

---

### Interpolation

Interpolation can be used almost anywhere in a Sass stylesheet to embed the **result** of a SassScript expression into a chunk of CSS. Just wrap an expression in `#{}`

Interpolation in SassScript always returns an **unquoted** string.

While it’s tempting to use this feature to convert quoted strings to unquoted strings, it’s a lot clearer to use the `string.unquote()` function. Instead of `#{$string}`.

---

### @use

A stylesheet’s @use rules must come before any rules other than @forward, including style rules. However, you can declare variables before @use rules to use when configuring modules.

You can do this by writing `@use "<url>" as <namespace>`.

You can even load a module without a namespace by writing `@use "<url>" as *`

Sass makes it easy to define a private member by starting its name with either `-` or `_`

If you want to make a member private to an entire package rather than just a single module, just don’t forward its module from any of your package’s entrypoints (the stylesheets you tell your users to load to use your package). You can even hide that member while forwarding the rest of its module!

scss:

```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
```

```scss
@use "library" with (
  $black: #222,
  $border-radius: 0.1rem
);
```

A stylesheet can define variables with the !default flag to make them configurable.
Exm:
scss:

```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
```

```scss
// style.scss
@use "library" with (
  $black: #222,
  $border-radius: 0.1rem
);
```

Built-in module variables (such as math.$pi) cannot be reassigned.

---

### @forward

If you do write both a @forward and a @use for the same module in the same file, it’s always a good idea to write the @forward first. That way, if your users want to configure the forwarded module, that configuration will be applied to the @forward before your @use loads it without any configuration.

This is written @forward "<url>" as <prefix>-_, and it adds the given prefix to the beginning of every mixin, function, and variable name forwarded by the module. For example, if the module defines a member named reset and it’s forwarded as list-_, downstream stylesheets will refer to it as list-reset.

scss:

```scss
// src/_list.scss
@mixin reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

```scss
// bootstrap.scss
@forward "src/list" as list-*;
```

```scss
// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

css:

```css
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

The `hide` form means that the listed members shouldn’t be forwarded, but everything else should. The `show` form means that only the named members should be forwarded. In both forms, you list the names of mixins, functions, or variables (including the $).

---

### @import

The Sass team discourages the continued use of the @import rule. Sass will gradually phase it out over the next few years, and eventually remove it from the language entirely. Prefer the @use rule instead. (Note that only Dart Sass currently supports @use. Users of other implementations must use the @import rule instead.)

---

### @mixin and @include

Mixin names, like all Sass identifiers, treat hyphens and underscores as identical. This means that reset-list and reset_list both refer to the same mixin

Argument lists can also have trailing commas! This makes it easier to avoid syntax errors when refactoring your stylesheets.

scss:

```scss
@mixin rtl($property, $ltr-value, $rtl-value) {
  #{$property}: $ltr-value;

  [dir="rtl"] & {
    #{$property}: $rtl-value;
  }
}

.sidebar {
  @include rtl(float, left, right);
}
```

css:

```css
.sidebar {
  float: left;
}
[dir="rtl"] .sidebar {
  float: right;
}
```

Normally, every argument a mixin declares must be passed when that mixin is included. However, you can make an argument optional by defining a default value which will be used if that argument isn’t passed. Default values use the same syntax as variable declarations: the variable name, followed by a colon and a SassScript expression.

scss:

```scss
@mixin replace-text($image, $x: 50%, $y: 50%) {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;

  background: {
    image: $image;
    repeat: no-repeat;
    position: $x $y;
  }
}

.mail-icon {
  @include replace-text(url("/images/mail.svg"), 0);
}
```

css:

```css
.mail-icon {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;
  background-image: url("/images/mail.svg");
  background-repeat: no-repeat;
  background-position: 0 50%;
}
```

Default values can be any SassScript expression, and they can even refer to earlier arguments!

Keyword Arguments: When a mixin is included, arguments can be passed by name in addition to passing them by their position in the argument list.

scss:

```scss
@mixin square($size, $radius: 0) {
  width: $size;
  height: $size;

  @if $radius != 0 {
    border-radius: $radius;
  }
}

.avatar {
  @include square(100px, $radius: 4px);
}
```

css:

```css
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 4px;
}
```

Sometimes it’s useful for a mixin to be able to take any number of arguments. If the last argument in a @mixin declaration ends in `...`, then all extra arguments to that mixin are passed to that argument as a list. This argument is known as an argument list.

scss:

```scss
@mixin order($height, $selectors...) {
  @for $i from 0 to length($selectors) {
    #{nth($selectors, $i + 1)} {
      position: absolute;
      height: $height;
      margin-top: $i * $height;
    }
  }
}

@include order(150px, "input.name", "input.address", "input.zip");
```

css:

```css
input.name {
  position: absolute;
  height: 150px;
  margin-top: 0px;
}

input.address {
  position: absolute;
  height: 150px;
  margin-top: 150px;
}

input.zip {
  position: absolute;
  height: 150px;
  margin-top: 300px;
}
```

In addition to taking arguments, a mixin can take an entire block of styles, known as a content block. A mixin can declare that it takes a content block by including the @content at-rule in its body. The content block is passed in using curly braces like any other block in Sass, and it’s injected in place of the @content rule.

scss:

```scss
@mixin hover {
  &:not([disabled]):hover {
    @content;
  }
}

.button {
  border: 1px solid black;
  @include hover {
    border-width: 2px;
  }
}
```

css:

```css
.button {
  border: 1px solid black;
}
.button:not([disabled]):hover {
  border-width: 2px;
}
```

A content block is lexically scoped, which means it can only see local variables in the scope where the mixin is included. It can’t see any variables that are defined in the mixin it’s passed to, even if they’re defined before the content block is invoked.

---

### functions

While it’s technically possible for functions to have side-effects like setting global variables, this is strongly discouraged. Use mixins for side-effects, and use functions just to compute values.

Sometimes it’s useful for a function to be able to take any number of arguments. If the last argument in a @function declaration ends in ..., then all extra arguments to that function are passed to that argument as a list. This argument is known as an argument list.

scss:

```scss
SCSS SYNTAX @function sum($numbers...) {
  $sum: 0;
  @each $number in $numbers {
    $sum: $sum + $number;
  }
  @return $sum;
}

.micro {
  width: sum(50px, 30px, 100px);
}
```

css:

```css
.micro {
  width: 180px;
}
```

It’s only allowed within a @function body, and each @function must end with a @return.

Because any unknown function will be compiled to CSS, it’s easy to miss when you typo a function name. Consider running a CSS linter [stylelint](https://stylelint.io/) on your stylesheet’s output to be notified when this happens!

---

### @extend

@extend <selector>, and it tells Sass that one selector should inherit the styles of another.

scss:

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}
```

css:

```css
.error,
.error--serious {
  border: 1px #f00;
  background-color: #fdd;
}
.error--serious {
  border-width: 3px;
}
```

Of course, selectors aren’t just used on their own in style rules. Sass knows to extend everywhere the selector is used. This ensures that your elements are styled exactly as if they matched the extended selector.

scss:

```scss
.error:hover {
  background-color: #fee;
}

.error--serious {
  @extend .error;
  border-width: 3px;
}
```

css:

```css
.error:hover,
.error--serious:hover {
  background-color: #fee;
}

.error--serious {
  border-width: 3px;
}
```

Extends are resolved after the rest of your stylesheet is compiled. In particular, it happens after parent selectors are resolved. This means that if you @extend .error, it won’t affect the inner selector in .error { &\_\_icon { ... } }. It also means that parent selectors in SassScript can’t see the results of extend.

Like module members, a placeholder selector can be marked private by starting its name with either - or \_. A private placeholder selector can only be extended within the stylesheet that defines it. To any other stylesheets, it will look as though that selector doesn’t exist.

Like module members, a placeholder selector can be marked private by starting its name with either - or \_. A private placeholder selector can only be extended within the stylesheet that defines it. To any other stylesheets, it will look as though that selector doesn’t exist.

As a rule of thumb, extends are the best option when you’re expressing a relationship between semantic classes (or other semantic selectors). Because an element with class .error--serious is an error, it makes sense for it to extend .error. But for non-semantic collections of styles, writing a mixin can avoid cascade headaches and make it easier to configure down the line.

While @extend is allowed within @media and other CSS at-rules, it’s not allowed to extend selectors that appear outside its at-rule. This is because the extending selector only applies within the given media context, and there’s no way to make sure that restriction is preserved in the generated selector without duplicating the entire style rule.

scss:

```scss
@media screen and (max-width: 600px) {
  .error--serious {
    @extend .error;
    //      ^^^^^^
    // Error: ".error" was extended in @media, but used outside it.
  }
}

.error {
  border: 1px #f00;
  background-color: #fdd;
}
```

---

### @error

When writing mixins and functions that take arguments, you usually want to ensure that those arguments have the types and formats your API expects. If they aren't, the user needs to be notified and your mixin/function needs to stop running.

Sass makes this easy with the @error rule, which is written @error <expression>. It prints the value of the expression (usually a string) along with a stack trace indicating how the current mixin or function was called. Once the error is printed, Sass stops compiling the stylesheet and tells whatever system is running it that an error occurred.

SCSS:

```scss
@mixin reflexive-position($property, $value) {
  @if $property != left and $property != right {
    @error "Property #{$property} must be either left or right.";
  }

  $left-value: if($property == right, initial, $value);
  $right-value: if($property == right, $value, initial);

  left: $left-value;
  right: $right-value;
  [dir="rtl"] & {
    left: $right-value;
    right: $left-value;
  }
}

.sidebar {
  @include reflexive-position(top, 12px);
  //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Error: Property top must be either left or right.
}
```

---

### @warn

When writing mixins and functions, you may want to discourage users from passing certain arguments or certain values. They may be passing legacy arguments that are now deprecated, or they may be calling your API in a way that’s not quite optimal.

The @warn rule is designed just for that. It’s written @warn <expression> and it prints the value of the expression (usually a string) for the user, along with a stack trace indicating how the current mixin or function was called. Unlike the @error rule, though, it doesn’t stop Sass entirely.

```scss
$known-prefixes: webkit, moz, ms, o;

@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    @if not index($known-prefixes, $prefix) {
      @warn "Unknown prefix #{$prefix}.";
    }

    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.tilt {
  // Oops, we typo'd "webkit" as "wekbit"!
  @include prefix(transform, rotate(15deg), wekbit ms);
}
```

---

### @debug

Sometimes it’s useful to see the value of a variable or expression while you’re developing your stylesheet. That’s what the @debug rule is for: it’s written @debug <expression>, and it prints the value of that expression, along with the filename and line number.

```scss
@mixin inset-divider-offset($offset, $padding) {
  $divider-offset: (2 * $padding) + $offset;
  @debug "divider offset: #{$divider-offset}";

  margin-left: $divider-offset;
  width: calc(100% - #{$divider-offset});
}
```

You can pass any value to @debug, not just a string! It prints the same representation of that value as the meta.inspect() function.

---

### @at-root

The @at-root rule is usually written @at-root <selector> { ... } and causes everything within it to be emitted at the root of the document instead of using the normal nesting. It's most often used when doing advanced nesting with the SassScript parent selector and selector functions.

For example, suppose you want to write a selector that matches the outer selector and an element selector. You could write a mixin like this one that uses the selector.unify() function to combine & with a user’s selector.

scss:

```scss
@use "sass:selector";

@mixin unify-parent($child) {
  @at-root #{selector.unify(&, $child)} {
    @content;
  }
}

.wrapper .field {
  @include unify-parent("input") {
    /* ... */
  }
  @include unify-parent("select") {
    /* ... */
  }
}
```

css:

```css
.wrapper input.field {
  /* ... */
}

.wrapper select.field {
  /* ... */
}
```

---

### @if and @else

Anywhere true or false are allowed, you can use other values as well. The values false and null are falsey, which means Sass considers them to indicate falsehood and cause conditions to fail. Every other value is considered truthy, so Sass considers them to work like true and cause conditions to succeed.

For example, if you want to check if a string contains a space, you can just write string.index($string, " "). The string.index() function returns null if the string isn’t found and a number otherwise.

_Some languages consider more values falsey than just false and null. Sass isn’t one of those languages! Empty strings, empty lists, and the number 0 are all truthy in Sass._

---

### @each

`@each <variable> in <expression> { ... }`, where the expression returns a list. The block is evaluated for each element of the list in turn, which is assigned to the given variable name.
scss:

```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}
```

css:

```css
.icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

You can also use @each to iterate over every key/value pair in a map by writing it `@each <variable>, <variable> in <expression> { ... }`. The key is assigned to the first variable name, and the element is assigned to the second.

scss:

```scss
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}

```

css:

```css
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}
```

If you have a list of lists, you can use @each to automatically assign variables to each of the values from the inner lists by writing it `@each <variable...> in <expression> { ... }`. This is known as destructuring, since the variables match the structure of the inner lists. Each variable name is assigned to the value at the corresponding position in the list, or null if the list dosn’t have enough values.

scss:

```scss
$icons:
  "eye" "\f112" 12px,
  "start" "\f12e" 16px,
  "stop" "\f12f" 10px;

@each $name, $glyph, $size in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
    font-size: $size;
  }

```

css:

```css
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
  font-size: 12px;
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
  font-size: 16px;
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
  font-size: 10px;
}
```

---

### @for

The @for rule, written @for <variable> from <expression> to <expression> { ... } or @for <variable> from <expression> through <expression> { ... }, counts up or down from one number (the result of the first expression) to another (the result of the second) and evaluates a block for each number in between. Each number along the way is assigned to the given variable name. If `to` is used, the final number is excluded; if `through` is used, it's included.

scss:

```scss
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```

css:

```css
ul:nth-child(3n + 1) {
  background-color: #004080;
}

ul:nth-child(3n + 2) {
  background-color: #004d99;
}

ul:nth-child(3n + 3) {
  background-color: #0059b3;
}
```

---

### @while

Although @while is necessary for a few particularly complex stylesheets, you’re usually better of using either @each or @for if either of them will work. They’re clearer for the reader, and often faster to compile as well.

---

### From CSS

Sass supports all the at-rules that are part of CSS proper. To stay flexible and forwards-compatible with future versions of CSS, Sass has general support that covers almost all at-rules by default. A CSS at-rule is written @<name> <value>, @<name> { ... }, or @<name> <value> { ... }. The name must be an identifier, and the value (if one exists) can be pretty much anything. Both the name and the value can contain interpolation.

If a CSS at-rule is nested within a style rule, the two automatically swap positions so that the at-rule is at the top level of the CSS output and the style rule is within it. This makes it easy to add conditional styling without having to rewrite the style rule’s selector.

scss

```scss
.print-only {
  display: none;

  @media print { display: block; }
}
```

css:

```css
.print-only {
  display: none;
}
@media print {
  .print-only {
    display: block;
  }
}
```

---

### using maps

Maps are all about associating keys and values, so naturally there’s a way to get the value associated with a key: the map.get($map, $key) function! This function returns the value in the map associated with the given key. It returns null if the map doesn’t contain the key.

```scss
$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.get($font-weights, "medium"); // 500
@debug map.get($font-weights, "extra-bold"); // null
```

Note that because Sass maps are immutable, map.set() and map.merge() do not modify the original list.

Maps in Sass are immutable, which means that the contents of a map value never changes. Sass’s map functions all return new maps rather than modifying the originals

---

### sass:color

The $red, $green, and $blue arguments must be unitless and between -255 and 255 (inclusive).

The $hue argument must have either the unit deg or no unit.

The $saturation, $lightness, $whiteness, and $blackness arguments must be between -100% and 100% (inclusive), and may not be unitless.

The $alpha argument must be unitless and between -1 and 1 (inclusive).

```scss
@debug color.adjust(#6b717f, $red: 15); // #7a717f

@debug color.adjust(#d2e1dd, $red: -10, $blue: 10); // #c8e1e7

@debug color.adjust(#998099, $lightness: -30%, $alpha: -0.4); // rgba(71, 57, 71, 0.6)

```

```scss
color.red() for getting a color’s red channel.
color.green() for getting a color’s green channel.
color.hue() for getting a color’s hue.
color.saturation() for getting a color’s saturation.
color.lightness() for getting a color’s lightness.
color.whiteness() for getting a color’s whiteness.
color.alpha() for getting a color’s alpha channel.
color.red() for getting a color’s red channel.
color.green() for getting a color’s green channel.
color.hue() for getting a color’s hue.
color.saturation() for getting a color’s saturation.
color.lightness() for getting a color’s lightness.
color.whiteness() for getting a color’s whiteness.
color.blackness() for getting a color’s blackness.
color.alpha() for getting a color’s alpha channel.
```

```scss
color.complement($color)
complement($color) //=> color 

// Hue 222deg becomes 42deg.
@debug color.complement(#6b717f); // #7f796b

// Hue 164deg becomes 344deg.
@debug color.complement(#d2e1dd); // #e1d2d6

// Hue 210deg becomes 30deg.
@debug color.complement(#036); // #663300
```

This is identical to `color.adjust($color, $hue: 180deg)`

To makes $color darker.

```scss
darken($color, $amount) //=> color 
```

The `darken()` function decreases lightness by a fixed amount, which is often not the desired effect. To make a color a certain percentage darker than it was before, use `color.scale()` instead.

```scss
// #036 has lightness 20%, so when darken() subtracts 30% it just returns black.
@debug darken(#036, 30%); // black

// scale() instead makes it 30% darker than it was originally.
@debug color.scale(#036, $lightness: -30%); // #002447
```

To makes $color less saturated.

```scss
desaturate($color, $amount) //=> color 
```

```scss
// #d2e1dd has saturation 20%, so when desaturate() subtracts 30% it just
// returns gray.
@debug desaturate(#d2e1dd, 30%); // #dadada

// scale() instead makes it 30% less saturated than it was originally.
@debug color.scale(#6b717f, $saturation: -30%); // #6e727c
```

to returns the inverse or negative of $color.

```scss
color.invert($color, $weight: 100%)
invert($color, $weight: 100%) //=> color 
@debug color.invert(#b37399); // #4c8c66
@debug color.invert(black); // white
@debug color.invert(#550e0c, 20%); // #663b3a
```

To return a color that’s a mixture of $color1 and $color2.

```scss
color.mix($color1, $color2, $weight: 50%)
mix($color1, $color2, $weight: 50%) //=> color 
@debug color.mix(#036, #d2e1dd); // #698aa2
@debug color.mix(#036, #d2e1dd, 75%); // #355f84
@debug color.mix(#036, #d2e1dd, 25%); // #9eb6bf
@debug color.mix(rgba(242, 236, 228, 0.5), #6b717f); // rgba(141, 144, 152, 0.75)

// A larger weight indicates that more of $color1 should be used, and a smaller weight indicates that more of $color2 should be used.

```

---
