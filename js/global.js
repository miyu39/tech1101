document.getElementById("barsBtn").onclick = funcBars;
document.getElementById("XBarsBtn").onclick = funcBars;
document.body.onresize = resizePage;

// menu open = true
let menuStatus = false;

function funcBars() {
    let colMenu = document.getElementById("colMenu");
    if (!menuStatus) {
        colMenu.style.display = "flex";
        colMenu.style.position = "absolute";
        menuStatus = true;
    } else {
        colMenu.style.display = "none";
        colMenu.style.position = "static";
        menuStatus = false;
    }
}

function resizePage() {
    let width = document.body.clientWidth;
    let colMenu = document.getElementById("colMenu");
    if (width > 1090) {
        document.getElementById("colMenu").style.display = "flex";
        document.getElementById("XBarsBtn").style.display = "none";
        document.getElementById("barsBtn").style.display = "none";
        colMenu.style.position = "static";
        // reset menu status
        menuStatus = false;
    } else {
        document.getElementById("colMenu").style.display = "none";
        document.getElementById("XBarsBtn").style.display = "flex";
        document.getElementById("barsBtn").style.display = "flex";
        colMenu.style.position = "absolute";
        // reset menu status
        menuStatus = false;
    }
}