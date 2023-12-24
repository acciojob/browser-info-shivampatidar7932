//your JS code here. If required.
function detectBrowser() {
        // Get user agent string
        var userAgent = navigator.userAgent;
        
        // Initialize variables for browser name and version
        var browserName, version;

        // Check for Chrome
        if (userAgent.indexOf("Chrome") > -1) {
            browserName = "Chrome";
        }
        // Check for Firefox
        else if (userAgent.indexOf("Firefox") > -1) {
            browserName = "Firefox";
        }
        // Check for Safari
        else if (userAgent.indexOf("Safari") > -1) {
            browserName = "Safari";
        }
        // Check for Edge
        else if (userAgent.indexOf("Edg") > -1) {
            browserName = "Microsoft Edge";
        }
        // Check for Internet Explorer
        else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
            browserName = "Internet Explorer";
        }
        // Default to unknown browser
        else {
            browserName = "Unknown Browser";
        }

        // Get browser version
        version = navigator.appVersion;

        // Display browser information in the specified div
        document.getElementById("browser-info").innerText = "You are using " + browserName + " version " + version;
    }

    // Call the detectBrowser function when the page loads
    detectBrowser();