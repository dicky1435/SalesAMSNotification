chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
        chrome.notifications.create('', data.options);
        chrome.notifications.onClicked.addListener(function(notificationId, byUser) {
            console.log("onClosed: " + notificationId);
            chrome.notifications.clear(notificationId);
        });
    } else if (data.type === 'times') {
        chrome.action.setBadgeBackgroundColor({ color: 'blue' }, () => {
            chrome.action.setBadgeText({ text: data.number + "" });
        });
    }
});