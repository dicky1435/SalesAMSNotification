chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0];
    var tabId = tab.id;
    
    document.getElementById('refresh').addEventListener('click', () => {
        chrome.tabs.reload(tabs[0].id);
    });

    document.getElementById('blersWebsite').addEventListener('click', () => {
        chrome.tabs.update(tabId, { url: 'https://ecers.eclass.hk/' });
    });

    document.getElementById('attendance').addEventListener('click', () => {
        chrome.tabs.update(tabId, { url: 'https://ecers.eclass.hk/home/smartcard/StaffAttendance/attendance_record.php' });
    });
});

if (window.location.href.includes('enquiry_notice.php')) {
    window.close();
}