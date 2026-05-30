document.getElementById('applyColor').addEventListener('click', async () => {
  const color = document.getElementById('bk%Color').value;
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: (c) => { document.body.style.backgroundColor = c; },
    args: [color]
  });
});

document.getElementById('removeImages').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript{
    target: {tabId: tab.id},
    function: () => {
      document.querySelectorAll('img').forEach(i => i.style.display = 'none');
    }
  });
});

document.getElementById('editPage').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.executeScript{
    target: {tabId: tab.id},
    function: () => {
      document.designMode = document.designMode === 'off' ? 'on' : 'off';
    }
  });
});