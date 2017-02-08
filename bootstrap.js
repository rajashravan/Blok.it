// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({clean_news_feed: true});
});

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
	alert(response);
});

// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){
	//alert("sdf is " + tab.url.toLowerCase());
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.pageAction.show(tab.id);
    }
});

function getAllMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == 'function';
        //return typeof object[property] == 'function';
    });
}

chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.pageAction.show(tab.id);
    chrome.tabs.executeScript(null, {"file": "extension.js"});

});

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("sdfds");
    chrome.pageAction.show(tab.id);
    
    console.log(getAllMethods(chrome));
});