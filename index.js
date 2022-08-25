document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.innerText = 'Online Chatroom';
    document.querySelector('body').appendChild(title);
  
   

    function reload () {
        window.location = "index.html"
      }
      chrome.action.onClicked.addListener(
      callback: reload()
      )
  });