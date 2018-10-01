var ListOfBookmark= document.getElementById("ListOfBookmark");
var TitleOfPage

function pageurl(TitleOfPage) {
    switch (TitleOfPage) {
        case "PSB Academy Portal":
            return browser.extension.getURL("https://www.psb-academy.edu.sg");
        case "PSB Moodle":
            return browser.extension.getURL("https://lms.psb-academy.edu.sg/");
        case "Coventry University Portal":
            return browser.extension.getURL("https://www.coventry.ac.uk");
        case "Coventry University Solar":
            return browser.extension.getURL("https://webapp.services.coventry.ac.uk/Apps/Student/0/Login.htm");
        case "Google Scholar":
            return browser.extension.getURL("https://scholar.google.com.sg/");
        case "Wikipedia":
            return browser.extension.getURL("https://www.wikipedia.org/");
    }
}

document.addEventListener("click", function (i) {
    var Page_Select
    if (i.target.classList.contains("page-choice")) {
        TitleOfPage = i.target.textContent;
        if (TitleOfPage == "PSB Academy Portal" || TitleOfPage == "PSB Moodle" || TitleOfPage == "Coventry University Portal" || TitleOfPage == "Coventry University Solar" || TitleOfPage == "Google Scholar" || TitleOfPage == "Wikipedia") {
            Page_Select = pageurl(TitleOfPage);
            if (Page_Select) {
                browser.tabs.create({
                    url: Page_Select
                });
            }
        } else {
            var search = browser.bookmarks.search(TitleOfPage);
            search.then((bookmarks) => {
                var currentBookmark = bookmarks[0];
                Page_Select = currentBookmark.url;
                if (Page_Select) {
                    browser.tabs.create({
                        url: Page_Select
                    });
                }
            });
        }
    } else {
        pageurl(i.target.textContent);
    }
});

function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
}
