# HTML From [MDN](https://developer.mozilla.org/en-US/)

Note: Original commits can be seen at this address: <https://github.com/note-repos/html-notes/blob/main/html(from%20mdn).md>, moved to this repo for completeness

The `<head>` element. This element acts as a container for everything you want to include on the HTML page, that isn't the content the page will show to viewers.  

The `<title>` element. This sets the title of the page, which is the title that appears in the browser tab the page is loaded in.  

To write an HTML comment, wrap it in the special markers `<!-- and -->` For example:  

Many `<meta>` elements include `name` and `content` attributes:

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications." />
```

A favicon can be added to your page by:

`<link rel="icon" href="favicon.ico" type="image/x-icon" />`  

Applying CSS and JavaScript to HTML

<link rel="stylesheet" href="my-css-file.css" />

The `<script>` element should also go into the head, and should include a src attribute containing the path to the JavaScript you want to load, and `defer`, which basically instructs the browser to load the JavaScript after the page has finished parsing the HTML.  

`<script src="my-js-file.js" defer></script>`  

You can also set subsections of your document to be recognized as different languages. For example, we could set our Japanese language section to be recognized as Japanese, like so:

`<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>`  

In HTML we use the `<em>` (emphasis) element to mark up such instances. Browsers style this as italic by default, but you shouldn't use this tag purely to get italic styling. To do that, you'd use a `<span>` element and some CSS, or perhaps an `<i>` element (see below).  

`<p>I am <em>glad</em> you weren't <em>late</em>.</p>`  

In HTML we use the `<strong>` (strong importance) element to mark up such instances

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

Here's the best rule you can remember: It's only appropriate to use `<b>`, `<i>`, or `<u>` to convey a meaning traditionally conveyed with bold, italics, or underline when there isn't a more suitable element; and there usually is. Consider whether `<strong>`, `<em>`, `<mark>`, or `<span>` might be more appropriate.  

`<i>` is used to convey a meaning traditionally conveyed by italic: foreign words, taxonomic designation, technical terms, a thought…

`<b>` is used to convey a meaning traditionally conveyed by bold: keywords, product names, lead sentence…

`<u>` is used to convey a meaning traditionally conveyed by underline: proper name, misspelling…

---

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Search engines use link text to index target files, so it is a good idea to include keywords in your link text to effectively describe what is being linked to.

Good link text: <a href="https://www.mozilla.org/firefox/">
  Download Firefox
</a>

Bad link text:<a href="https://www.mozilla.org/firefox/">
  Click here
</a>
to download Firefox

Additional information about the link should be given.

<p>
  <a href="https://www.example.com/large-report.pdf">
    Download the sales report (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Watch the video (stream opens in separate tab, HD quality)
  </a>
</p>

<p>
  <a href="https://www.example.com/car-game">
    Play the car game (requires Flash)
  </a>
</p>

When you are linking to a resource that's to be downloaded rather than opened in the browser, you can use the `download` attribute to provide a default save filename.  

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

Description lists use a different wrapper than the other list types — `<dl>`; in addition each term is wrapped in a `<dt>` (description term) element, and each description is wrapped in a `<dd>` (description definition) element.

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
</dl>
```

Result:

<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
</dl>

If a section of block level content (be it a paragraph, multiple paragraphs, a list, etc.) is quoted from somewhere else, you should wrap it inside a `<blockquote>` element to signify this, and include a URL pointing to the source of the quote inside a `cite` attribute.

```html
<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

Result:
<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

Inline quotations work in exactly the same way, except that they use the `<q>` element.  

```html
<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q></p>
```

Result:
<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q></p>

Another example :

```html
<p>
  According to the
  <a href="/en-US/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>
```

`<abbr>` — this is used to wrap around an abbreviation or acronym

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

> `<acronym>` should not be used.

The `<address>` element should only be used to provide contact information for the document contained with the nearest `<article>` or `<body>` element. It would be correct to use it in the footer of a site to include the contact information of the entire site, or inside an article for the contact details of the author, but not to mark up a list of addresses unrelated to the content of that page.  

`sup` and `sub`

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

Result:

<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>

`<code>`: For marking up generic pieces of computer code.  
`<pre>`: For retaining whitespace (generally code blocks) — if you use indentation or excess whitespace inside your text, browsers will ignore it and you will not see it on your rendered page. If you wrap the text in `<pre></pre>` tags however, your whitespace will be rendered identically to how you see it in your text editor.  
`<var>`: For specifically marking up variable names.  
`<kbd>`: For marking up keyboard (and other types of) input entered into the computer.  
`<samp>`: For marking up the output of a computer program.  

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Result :

<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

> Many web designers consider the navigation bar to be part of the header rather than an individual component, but that's not a requirement; in fact, some also argue that having the two separate is better for accessibility, as screen readers can read the two features better if they are separate.  

header: `<header>`.  
navigation bar: `<nav>`.  
main content: `<main>`, with various content subsections represented by `<article>`, `<section>`, and `<div>` elements.  
sidebar: `<aside>`; often placed inside `<main>`.  
footer: `<footer>`.  

[Sample for basic web site](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)  

```html
<main> is for content unique to this page. Use <main> only once per page, and put it directly inside <body>. Ideally this shouldn't be nested within other elements.


<article> encloses a block of related content that makes sense on its own without the rest of the page (e.g., a single blog post).

<section> is similar to <article>, but it is more for grouping together a single part of the page that constitutes one single piece of functionality (e.g., a mini map, or a set of article headlines and summaries), or a theme. It's considered best practice to begin each section with a heading; also note that you can break <article>s up into different <section>s, or <section>s up into different <article>s, depending on the context.

<aside> contains content that is not directly related to the main content but can provide additional information indirectly related to it (glossary entries, author biography, related links, etc.).

<header> represents a group of introductory content. If it is a child of <body> it defines the global header of a webpage, but if it's a child of an <article> or <section> it defines a specific header for that section (try not to confuse this with titles and headings).

<nav> contains the main navigation functionality for the page. Secondary links, etc., would not go in the navigation.

<footer> represents a group of end content for a page.
```

[To validate Html code](https://validator.w3.org/)

__Note__ : Search engines also read image filenames and count them towards SEO. Therefore, you should give your image a descriptive filename; dinosaur.jpg is better than img835.png.  

If the image is described adequately by the main text body, you can just use alt="".

A better solution, is to use the HTML `<figure>` and `<figcaption>` elements. These are created for exactly this purpose: to provide a semantic container for figures, and to clearly link the figure to the caption. Our above example could be rewritten like this:

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    A T-Rex on display in the Manchester University Museum.
  </figcaption>
</figure>
```

A figure could be several images, a code snippet, audio, video, equations, a table, or something else.  

Summing up: if an image has meaning, in terms of your content, you should use an HTML image. If an image is purely decoration, you should use CSS background images.  

The `<video>` element allows you to embed a video very easily. A really simple example looks like this:  

```html
<video src="rabbit320.webm" controls>
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="rabbit320.webm">link to the video</a> instead.
  </p>
</video>
```

You must either use the `controls` attribute to include the browser's own control interface, or build your interface using the appropriate JavaScript API. At a minimum, the interface must include a way to start and stop the media, and to adjust the volume.  

This is called fallback content — this will be displayed if the browser accessing the page doesn't support the `<video>` element, allowing us to provide a fallback for older browsers.  

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support this video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

Each `<source>` element also has a type attribute. This is optional, but it is advised that you include it.  
browsers can use the `type` to immediately skip videos they don't understand. If `type` isn't included, browsers will load and try to play each file until they find one that works, which obviously takes time and is an unnecessary use of resources.  

other example

```html
<video
  controls
  width="400"
  height="400"
  autoplay
  loop
  muted
  preload="auto"
  poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support this video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

`autoplay` Makes the audio or video start playing right away, while the rest of the page is loading. You are advised not to use autoplaying video (or audio) on your sites, because users can find it really annoying.  

`loop` Makes the video (or audio) start playing again whenever it finishes. This can also be annoying, so only use if really necessary.  

`muted` Causes the media to play with the sound turned off by default.  

`poster` The URL of an image which will be displayed before the video is played. It is intended to be used for a splash screen or advertising screen.  

`preload` Used for buffering large files; it can take one of three values:

"none" does not buffer the file  
"auto" buffers the media file  
"metadata" buffers only the metadata for the file.  

The `<audio>`  element doesn't support the width/height attributes  `poster` attribute  — again, there is no visual component, so there is nothing to assign a width or height to.  

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

Note: Text tracks also help you with SEO, since search engines especially thrive on text. Text tracks even allow search engines to link directly to a spot partway through the video.  

```html
<head>
  <style>
    iframe {
      border: none;
    }
  </style>
</head>
<body>
  <iframe
    src="https://developer.mozilla.org/en-US/docs/Glossary"
    width="100%"
    height="500"
    allowfullscreen
    sandbox>
    <p>
      <a href="/en-US/docs/Glossary">
        Fallback link for browsers that don't support iframes
      </a>
    </p>
  </iframe>
</body>
```

```html
<head>
  <style>
    iframe {
      border: none;
    }
  </style>
</head>
<body>
  <iframe
    src="https://developer.mozilla.org/en-US/docs/Glossary"
    width="100%"
    height="500"
    allowfullscreen
    sandbox>
    <p>
      <a href="/en-US/docs/Glossary">
        Fallback link for browsers that don't support iframes
      </a>
    </p>
  </iframe>
</body>
```

Fallback content:
In the same way as other similar elements like `<video>`, you can include fallback content between the opening and closing `<iframe></iframe>` tags that will appear if the browser doesn't support the `<iframe>`. In this case, we have included a link to the page instead. It is unlikely that you'll come across any browser that doesn't support `<iframe>`s these days.  

Note: In order to improve speed, it's a good idea to set the iframe's src attribute with JavaScript after the main content is done with loading. This makes your page usable sooner and decreases your official page load time (an important SEO metric.)  

Rules for `<iframe>` :

- Only embed when necessary.  
- Use HTTPS : HTTPS prevents embedded content from accessing content in your parent document, and vice versa.  
- Always use the `sandbox` attribute : Unsandboxed content can do way too much (executing JavaScript, submitting forms, popup windows, etc.) By default, you should impose all available restrictions by using the sandbox attribute with no parameters, as shown in our previous example.

If absolutely required, you can add permissions back one by one (inside the `sandbox=""` attribute value) — see the sandbox reference entry for all the available options. One important note is that you should never add both `allow-scripts` and `allow-same-origin` to your sandbox attribute — in that case, the embedded content could bypass the Same-origin policy that stops sites from executing scripts, and use JavaScript to turn off sandboxing altogether.  

- Configure CSP directives : This can prevent other websites from embedding your content in their web pages (which would enable clickjacking and a host of other attacks).  

The `<embed>` and `<object>` elements serve a different function to `<iframe>` — these elements are general purpose embedding tools for embedding external content, such as PDFs.  

Raster images are defined using a grid of pixels — a raster image file contains information showing exactly where each pixel is to be placed, and exactly what color it should be. Popular web raster formats include Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.).  

Vector images are defined using algorithms — a vector image file contains shape and path definitions that the computer can use to work out what the image should look like when rendered on the screen. The __SVG__ format allows us to create powerful vector graphics for use on the Web.  

For creating SVG images, most people use a vector graphics editor like [Inkscape](https://inkscape.org/) or [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator).  

SVG has some additional advantages besides those described so far:  

- Text in vector images remains accessible (which also benefits your SEO).  

- SVGs lend themselves well to styling/scripting, because each component of the image is an element that can be styled via CSS or scripted via JavaScript.  

So why would anyone want to use raster graphics over SVG? Well, SVG does have some disadvantages:  

- SVG can get complicated very quickly, meaning that file sizes can grow; complex SVGs can also take significant processing time in the browser.  

- SVG can be harder to create than raster images, depending on what kind of image you are trying to create.SVG can be harder to create than raster images, depending on what kind of image you are trying to create.  

- To embed an SVG via an <img> element, you just need to reference it in the src attribute as you'd expect. You will need a height or a width attribute (or both if your SVG has no inherent aspect ratio)(quick way)  

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
```

Quick Way's :  
Pros:

- Quick, familiar image syntax with built-in text equivalent available in the alt attribute.
- You can make the image into a hyperlink easily by nesting the `<img>` inside an `<a>` element.
- The SVG file can be cached by the browser, resulting in faster loading times for any page that uses the image loaded in the future.

Cons:  

- You cannot manipulate the image with JavaScript.
- If you want to control the SVG content with CSS, you must include inline CSS styles in your SVG code. (External stylesheets invoked from the SVG file take no effect.)
- You cannot restyle the image with CSS pseudoclasses (like :focus).  

- You can also use SVGs as CSS background images, as shown below. In the below code, older browsers will stick with the PNG that they understand, while newer browsers will load the SVG:

```html
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

- If your SVGs aren't showing up at all, it might be because your server isn't set up properly. If that's the problem.  

You can also open up the SVG file in a text editor, copy the SVG code, and paste it into your HTML document — this is sometimes called putting your SVG inline, or inlining SVG. Make sure your SVG code snippet begins with an `<svg>` start tag and ends with an `</svg>` end tag. Here's a very simple example of what you might paste into your document:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

Pros:  

- Putting your SVG inline saves an HTTP request, and therefore can reduce a bit your loading time.
- You can assign classes and ids to SVG elements and style them with CSS, either within the SVG or wherever you put the CSS style rules for your HTML document. In fact, you can use any SVG presentation attribute as a CSS property.
- Inlining SVG is the only approach that lets you use CSS interactions (like :focus) and CSS animations on your SVG image (even in your regular stylesheet.)
- You can make SVG markup into a hyperlink by wrapping it in an `<a>` element.  

We can however use two attributes — `srcset` and `sizes` — to provide several additional source images along with hints to help the browser pick the right one.  

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```  

**Note**: For the slot width, rather than providing an absolute width (for example, `480px`), you can alternatively provide a width relative to the viewport (for example, `50vw`) — but __NOT__ a percentage. You may have noticed that the last slot width has no media condition (this is the default that is chosen when none of the media conditions are true). The browser ignores everything after the first matching condition, so be careful how you order the media conditions.  

Older browsers that don't support these features will just ignore them. Instead, those browsers will go ahead and load the image referenced in the src attribute as normal.

If you're supporting multiple display resolutions, but everyone sees your image at the same real-world size on the screen, you can allow the browser to choose an appropriate resolution image by using `srcset` with x-descriptors and without `sizes` — a somewhat easier syntax!

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

if css `widht` is there, `sizes` is not needed — the browser works out what resolution the display is that it is being shown on, and serves the most appropriate image referenced in the `srcset`.  

It would probably be better to show a smaller, portrait image on mobile, which zooms in on the person. The `<picture>` element allows us to implement just this kind of solution.  

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

In all cases, you must provide an `<img>` element, with `src` and `alt`, right before `</picture>`, otherwise no images will appear. This provides a default case that will apply when none of the media conditions return true (you could actually remove the second `<source>` element in this example), and a fallback for browsers that don't support the `<picture>` element.  

**Note**: You should use the media attribute only in art direction scenarios; when you do use media, don't also offer media conditions within the sizes attribute.  

you couldn't load the `<img>` element, then detect the viewport width with JavaScript, and then dynamically change the source image to a smaller one if desired. By then, the original image would already have been loaded, and you would load the small image as well, which is even worse in responsive image terms.  

New image formats like `WebP` and `AVIF` can maintain a low file size and high quality at the same time. These formats now have relatively broad browser support but little "historical depth".

`<picture>` lets us continue catering to older browsers. You can supply MIME types inside `type` attributes so the browser can immediately reject unsupported file types:  

```html
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg" />
  <source type="image/webp" srcset="pyramid.webp" />
  <img
    src="pyramid.png"
    alt="regular pyramid built from four equilateral triangles" />
</picture>
```

- Do not use the `media` attribute, unless you also need art direction.
- In a `<source>` element, you can only refer to images of the type declared in `type`.
- Use comma-separated lists with `srcset` and `sizes`, as needed.

---

This section from [Jason Grigsby](https://cloudfour.com/thinks/responsive-images-101-part-5-sizes/) (use this section for responsive images):  

The `sizes` attribute is required any time you use `srcset` width descriptors. In fact, sizes only makes sense if you’re using the width descriptors. If you’re using the display density descriptors, you don’t need the sizes attribute. The browser won’t know what to do with it.  

```html
<img src="cat.jpg" alt="cat"
  srcset="cat-160.jpg 160w, cat-320.jpg 320w, cat-640.jpg 640w, cat-1280.jpg 1280w"
  sizes="(max-width: 480px) 100vw, (max-width: 900px) 33vw, 254px">
```

Srcset and sizes = Smart browsers.  

```html
<picture>
  <source media="(min-width: 900px)" srcset="cat-vertical.jpg">
  <source media="(min-width: 750px)" srcset="cat-horizontal.jpg">
  <img src="cat.jpg" alt="cat">
</picture>
```

The value of the `media` attribute is a media query. Unlike the `media` condition that the `sizes` attribute uses, this is the full media query. As the browser looks through the list of source elements, the first source whose media query matches is the one that is used. If no media queries match, then the `<img>` element is used.  

*Media attribute is a directive, not a suggestion*  This is why the element with the media attribute is perfect for art direction.  

```html
<picture>
  <source srcset="homepage-person@desktop.png, homepage-person@desktop-2x.png 2x"       
          media="(min-width: 990px)">
  <source srcset="homepage-person@tablet.png, homepage-person@tablet-2x.png 2x" 
          media="(min-width: 750px)">
  <img srcset="homepage-person@mobile.png, homepage-person@mobile-2x.png 2x" 
       alt="Shopify Merchant, Corrine Anestopoulos">
</picture>
```

- `source … media=”(min-width: 990px)”`> — The largest image size, which Shopify calls desktop, is the first source. The media attribute tells the browser that this source should only be used if the viewport is larger than or equal to 990 pixels wide.
- `source … media=”(min-width: 750px)”`> — The second source, the “tablet” image, will be used for viewports larger than or equal to 750 pixels. Because the first source takes effect at 990 pixels and the browser selects the first source that matches, the effective range of the second source is from 750 to 989 pixels.
- `<img>` — If there are no matches for the two sources, then the viewport must be smaller than 750 pixels wide. When that is the case, the srcset on the <img> element will be used. This “mobile” image is the cropped image used for small screens.  

for different type :

```html
<picture>
  <source type="image/svg+xml" srcset="logo.xml">
  <source type="image/webp" srcset="logo.webp"> 
  <img src="logo.png" alt="ACME Corp">
</picture>
```

---

Using tables for layout rather than CSS layout techniques is a bad idea. The main reasons are as follows:

- Layout tables reduce accessibility for visually impaired users: screen readers, used by blind people, interpret the tags that exist in an HTML page and read out the contents to the user. Because tables are not the right tool for layout, and the markup is more complex than with CSS layout techniques, the screen readers' output will be confusing to their users.
- Tables produce tag soup: As mentioned above, table layouts generally involve more complex markup structures than proper layout techniques. This can result in the code being harder to write, maintain, and debug.
- Tables are not automatically responsive: When you use proper layout containers (such as `<header>`, `<section>`, `<article>`, or `<div>`), their width defaults to 100% of their parent element. Tables on the other hand are sized according to their content by default, so extra measures are needed to get table layout styling to effectively work across a variety of devices.  

The `scope` attribute, which can be added to the `<th>` element to tell screen readers exactly what cells the header is a header for.  
