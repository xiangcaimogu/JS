// JavaScript Document
function toggle(span) {
    if (span.className == "open") {
        span.className = "closed";
        document.querySelector('ul.tree ul.show').className = 'hide'
    } else if (span.className == "closed") {//ul.tree span.open,只会出现一个开着的
        // span.className = "open";
        var openSpan = document.querySelector("ul.tree span.open");
        // openSpan.className="closed";
        // document.querySelector("ul.tree ul.show").className="hide"
        if (openSpan) {
            openSpan.className = "closed";
            document.querySelector("ul.tree ul.show").className = "hide"
            span.className = "open";
            document.querySelector("ul.tree span.open+ul").className = "show"
        }
        span.className = "open";
        document.querySelector("ul.tree span.open+ul").className = "show"
    }
}