async function loadMarkdown(path, elementId) {
    const response = await fetch(path);
    const markdown = await response.text();

    document.getElementById(elementId).innerHTML =
        marked.parse(markdown);
}

loadMarkdown("md/Math/Geometry/Planimetry/Triangle.md", "triangle");