(() => {
    chrome.tabs.onUpdated.addListener((tabId, tab) => {
        console.log(tab);
        if (tab.url && tab.url.includes("scaler.com")) {
            const regex = /.*\/class\/(.*)\/assignment\/problems\/(.*)[?]/;
            const found = tab.url.match(regex);
            console.log({ found });

            if (found?.length) {
                const [, classId, problemId] = found;
                chrome.tabs.sendMessage(tabId, {
                    type: "NEW_QUESTION",
                    payload: {
                        tab,
                        classId,
                        problemId
                    },
                });
            }
        }
    });
})();