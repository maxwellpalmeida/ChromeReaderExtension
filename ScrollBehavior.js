function tryit() {
    alert("this is a test");
}

window.addEventListener('scroll', function (e) {
    debugger;
    var last_known_scroll_position = window.scrollY;
    window.requestAnimationFrame(function () {
        StoreScrollPosition();
        //doSomething(last_known_scroll_position);
    });
});

function ValidadeBrowser() {
    if (typeof (Storage) == "undefined") {
        alert("Sorry, your browser is not ready to keep all our functionality");
        return false;
    }
}

function StoreScrollPosition() {
    ValidadeBrowser();
    localStorage.setItem("urlPositions", window.scrollY);
}

function RecoverScrollPosition() {
    ValidadeBrowser();
    if (localStorage.getItem("urlPositions") != undefined) {
     //   document.documentElement.scrollTop = ;
        window.scrollTo(0, localStorage.getItem("urlPositions"));
    }
}

RecoverScrollPosition();