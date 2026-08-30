async function loadMarkdown(path, elementId) {
    const response = await fetch(path);
    const markdown = await response.text();

    const element = document.getElementById(elementId);

    element.innerHTML = marked.parse(markdown);

    renderMathInElement(element, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
        ]
    });
}

loadMarkdown("md/Math/Geometry/Planimetry/Triangle.md", "triangle");