chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
        chrome.notifications.create('', data.options);
        chrome.notifications.onClicked.addListener(function(notificationId, byUser) {
            console.log("onClosed: " + notificationId);
            chrome.notifications.clear(notificationId);
        });
    } else if (data.type === 'times') {
        chrome.browserAction.setBadgeBackgroundColor({ color: 'blue' }, () => {
            chrome.browserAction.setBadgeText({ text: data.number + "" });
        });
    }
});

if (window.location.href.includes('enquiry_notice.php')) {
    window.close();
}