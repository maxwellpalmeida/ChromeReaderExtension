window.addEventListener('scroll', function (e) {
    var last_known_scroll_position = window.scrollY;
    window.requestAnimationFrame(function () {
        StoreScrollPosition();
        //doSomething(last_known_scroll_position);
    });
});

function objectUnique(array, field, value) {
    var objectFound = undefined;
    if (array.length > 0) {
        array.forEach(function (entry) {
            if (entry[field] == value) {
                objectFound = entry;
            }
        });
    }
    return objectFound;
}

function ScrollFunctionality() {
    o = this;
    o.urlPositionsStored = [];
    o.pulledScrollObject;
    o.current = {
        url: window.location.href,
        scroll: window.scrollY
    };
    o.ValidadeBrowser = function () {
        if (typeof (Storage) == "undefined") {
            alert("Sorry, your browser is not ready to keep all our functionality");
            return false;
        }
    }
    o.pullObjectFromArray = function () {
        var objectFound = undefined;
        if (o.urlPositionsStored.length > 0) {
            o.urlPositionsStored.forEach(function (entry) {
                if (entry["url"] == o.current.url) {
                    objectFound = entry;
                }
            });
        }
        return objectFound;
    }
    o.Inicialize = function () {
        o.ValidadeBrowser();

        if (localStorage.getItem("urlPositions") != undefined) {
            o.urlPositionsStored = JSON.parse(localStorage.getItem("urlPositions"));
        }

        o.pulledScrollObject = o.pullObjectFromArray(o.current.url);
    }

    o.Inicialize();
}

function StoreScrollPosition() {
    var ScrollFuncs = new ScrollFunctionality();

    if (ScrollFuncs.pulledScrollObject != undefined) {
        ScrollFuncs.pulledScrollObject.scroll = ScrollFuncs.current.scroll;
    }
    else {
        ScrollFuncs.urlPositionsStored.push({
            scroll: ScrollFuncs.current.scroll,
            url: ScrollFuncs.current.url,
            date: new Date(),
        });
    }
    localStorage.setItem("urlPositions", JSON.stringify(ScrollFuncs.urlPositionsStored));
}

function RecoverScrollPosition() {
    var ScrollFuncs = new ScrollFunctionality();
    if (localStorage.getItem("urlPositions") != undefined) {
        if (ScrollFuncs.pulledScrollObject != undefined)
            window.scrollTo(0, ScrollFuncs.pulledScrollObject.scroll);
    }
}

RecoverScrollPosition();
