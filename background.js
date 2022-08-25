chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("index.html");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
})

// http://localhost:5500/index.html

// The service worker thing in json might be troublesome. I heard it was outdated

// chrome.browserAction.onClicked.addListener(function(Tab tab) {...});
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.create({ url: chrome.runtime.getURL('index.html'), active: true });
// });

// function reload () {
//   window.location = "index.html"
// }
// chrome.action.onClicked.addListener(
// callback: reload()
// )
/*
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({'url':'index.html'})
})


chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    //for us index.html
    chrome.tabs.create({ url: newURL });
});

window.open(url,'_blank'); //they said this would work too
chrome.runtime.getURL()

*/

/*

  // Added in 'persistent' : true, changed it to false//

We want to do a soundboard extension?

That is fun lol

How to implement?

Maybe just a simple drum pad with random lines

Drum would expand to another page for us to have fun.

We would need to create a new tab on our browser that would bring us to our drum/soundboard.

What features do we want on this soundboard?

Should have some default sounds.

One thing we can do ability to reassign sounds. Let people in codesmith soundboard
the fellows.

*/
// 