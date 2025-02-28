
## Roadmap

- Finish Framework String Library

- Finish Framework Casting Library

- Work on Framework Math Library

- Finish DOM Library (Framework.Create, etc.)

- Add Custom Framework Library support

- Make Strict harder to disable

- Framework Init (why didn't i start on this)

- Fix blocking




## Support

Pull Request fix or Issue it.


## Usage/Examples

index.html:

```html
<html>
    <body>
        <script src="framework.js"></script>
    </body>
</html>
```

Your "init.js":

```javascript
Framework.LoadExtension("https://some-website.org/Framework-Extensions/Beautiful-UI.js")
```

or..

Your "extension.js":

```javascript
Framework.Wrap(function() {
    const Text = Framework.Create.Text();
    Text.textContent = "Hi, Beautiful UI!";
    Framework.BodyAppend(Text);
    Framework.Style("*", "background-color", "black");
    Framework.Style("*", "color", "white");
    Framework.Style("*", "font-family", "Arial, Sans-Serif");

    // Framework will support styles like this:

    /*Framework.Styles("*",
        ["background-color", "black"],
        ["color", "white"]
    );*/

    // But in the mean time, use these methods.
})
```