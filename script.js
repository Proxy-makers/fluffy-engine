function go() {
    const input = document.getElementById('urlInput').value.trim();
    let url = "";

    if (!input) return;

    if (input.startsWith("http://") || input.startsWith("https://")) {
        url = input;
    } else if (input.includes(".")) {
        url = "https://" + input;
    } else {
        url = "https://duckduckgo.com/?q=" + encodeURIComponent(input);
    }

    document.getElementById('browserFrame').src = url;
}

document.getElementById('urlInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        go();
    }
});
