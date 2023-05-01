function copyToClipboard(selector) {
    const el = document.querySelector(selector);
    el.select();
    document.execCommand('copy');
}
