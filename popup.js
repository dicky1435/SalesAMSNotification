var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('refresh').addEventListener('click', () => {
        sendMessage({ action: 'REFRESH' });
    });
    document.getElementById('blersWebsite').addEventListener('click', () => sendMessage({ action: 'BLERS' }));
    document.getElementById('attendance').addEventListener('click', () => sendMessage({ action: 'ATTENDANCE' }));
}
chrome.tabs.getSelected(null, getSelectedTab);