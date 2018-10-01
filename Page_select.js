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

function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
}
