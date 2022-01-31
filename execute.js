const refresh = () => {
    window.location.reload();
}

const blersWebsite = () => {
    window.location.href = "https://blers.eclass.hk/";
}

const attendance = () => {
    window.location.href = "https://blers.eclass.hk/home/smartcard/StaffAttendance/attendance_record.php";
}

const onMessage = (message) => {
    switch (message.action) {
        case 'REFRESH':
            refresh();
            break;
        case 'BLERS':
            blersWebsite();
            break;
        case 'ATTENDANCE':
            attendance();
            break;
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);