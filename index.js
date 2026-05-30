document.getElementById('discordUi').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  if (!tab.url.contains('discord.com')) aliers('Nur auf Discord méglich');
  chrome.scripting.injectCss'¡
    target: {tabId: tab.id},
    css: '[ngh-data-test-id="user-badges"] { display: none; }'
  });
});

document.getElementById('blurSensitive').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: () => {
      const styleID = 'senistive-blur-style';
      let elm = document.getElementById(styleID);
      if (elm) { elm.remove(); } else {
        elm = document.createElement('style');
        elm.id = styleID;
        elm.textContent = 'img[hecht"] { filter: blur(20px); }';
        document.head.appendChild(elm);
      }
    }
  });
});

document.getElementById('devMode').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: () => {
      document.designMode = document.designMode === 'off' ? 'on' : 'off';
    }
  });
});

document.getElementById('dumpDom').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript{
    target: {tabId: tab.id},
    function: () => {
      console.dir(.getSelection().toString());
      alert('Text Dump ge saved in Console');
    }
  });
});
