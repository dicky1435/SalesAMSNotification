if (window.location.href.includes('blis.eclass.hk/SalesAMS/enquiry/enquiry_edit.php?isNew=0')) {
    const urlParams = new URLSearchParams(window.location.search);
    const enquiryID = urlParams.get('EnquiryID');
    window.location.href = 'https://blis.eclass.hk/SalesAMS/enquiry/enquiry_note_list.php?EnquiryID=' + enquiryID;
}

if (window.location.href.includes('blis.eclass.hk/SalesAMS/enquiry/?') || window.location.href.includes('blis.eclass.hk/SalesAMS/enquiry/index.php') || window.location.href.includes('blis.eclass.hk/SalesAMS/enquiry/enquiry_notice.php')) {

    var intervalID = setInterval(function() {
        window.location.reload();
    }, 60000 * 15);

    window.onload = function() {

        checkCookieRefreshCount();

        if (window.location.href.includes('enquiry_notice')) {
            window.close();
            return;
        }

        var numCount = 0;
        console.log("window loaded");
        var rows = document.getElementsByTagName("tr");

        for (var i = 0; i < rows.length; i++) {
            if (rows[i].id != '') {
                numCount++;
            }
        }

        if (numCount > 0) {
            chrome.runtime.sendMessage('', {
                type: 'times',
                number: numCount,
            });
        }

        if (checkCookie(numCount)) {
            chrome.runtime.sendMessage('', {
                type: 'notification',
                options: {
                    title: 'Blers CS System',
                    message: '最新Task數: ' + numCount,
                    iconUrl: '/icon.png',
                    type: 'basic'
                }
            });
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(number) {
    let blersNum = getCookie("blersCsNew");
    if (blersNum != '') {
        if (number != blersNum) {
            setCookie("blersCsNew", number + "", 365);
            return true;
        } else {
            return false;
        }
    } else {
        setCookie("blersCsNew", number + "", 365);
        return true;
    }
}

function checkCookieRefreshCount() {
    var blersNum = getCookie("blersCsRefreshCount");
    if (blersNum != '') {
        blersNum = parseInt(blersNum) + 1;
        console.log(blersNum);
        setCookie("blersCsRefreshCount", blersNum, 365);
    } else {
        setCookie("blersCsRefreshCount", 1, 365);
        return true;
    }
}