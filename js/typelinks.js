cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  alert("Error 418: I'm a teapot (RFC 2324)");
});

cheet('h a c k e r t y p e r', function() {
    window.location.href = "http://hackertyper.net/";
});

cheet('r e d d i t', function() {
    window.location.href = "http://reddit.com/";
});

cheet('b b c', function() {
    window.location.href = "http://bbc.co.uk/";
});

cheet('i d e', function() {
    window.location.href = "https://ideone.com/";
});

cheet('h a c k e r n e w s', function() {
    window.location.href = "https://news.ycombinator.com/";
});

cheet('w a', function() {
    window.location.href = "https://wolframalpha.com/";
});

cheet ('g i t', function() {
    window.location.href = "https://github.com/";
});

cheet ('c 9', function() {
    window.location.href = "https://c9.io/";
});

cheet ('p e r i o d i c', function() {
    periodic();
});

cheet ('d e s m o s', function() {
    desmos();
})

function periodic() {
    document.write("<iframe src=\"./templates/periodic.html\" style=\"position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;\">Your browser doesn't support iframes</iframe>");
}

function desmos() {
    document.write('<div id="calculator" style="width: 50rm; height: 400px;"></div><script onload="initDesmos()" src="js/desmos.js"></script>')
}