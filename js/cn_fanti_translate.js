function runFanTiJavaScript() {
    var s = document.getElementById("tongwenlet_tw");
    if (s != null) {
        document.body.removeChild(s);
    }
    var s = document.createElement("script");
    s.language = "javascript";
    s.type = "text/javascript";
    s.src = "https://rawgit.com/skofkyo/userChromeJS/master/UserScriptLoader/bookmarklet_tw.js";
    s.id = "tongwenlet_tw";
    document.body.appendChild(s);
}

function handleChange(select) {
    var selectedOption = select.options[select.selectedIndex];
    var value = selectedOption.value;
    if (value.startsWith("javascript:")) {
        eval(value.substring(11));
    } else {
        window.location.href = value;
    }
}