chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const API_URL = "https://api.openai.com/v1/completions";

  
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      "model": "text-davinci-002",
      "text": request.text + "\n\n\ Tl;dr",
      "max_tokens": 50,
      "output_format": "text"
    })
  })
  .then(response => response.text())
  .then(summary => {
    chrome.storage.local.set({summary: summary});
  });
});
