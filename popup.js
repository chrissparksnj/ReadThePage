chrome.storage.local.get("summary", function(data) {
  document.getElementById("summary").innerText = data.summary;
});
