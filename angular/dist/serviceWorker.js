/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./chrome/src/serviceWorker.ts ***!
  \*************************************/
(function () {
    chrome.tabs.onUpdated.addListener(function (tabId, tab) {
        console.log(tab);
        if (tab.url && tab.url.includes("scaler.com")) {
            var regex = /.*\/class\/(.*)\/assignment\/problems\/(.*)[?]/;
            var found = tab.url.match(regex) || [];
            if (found === null || found === void 0 ? void 0 : found.length) {
                var classId = found[1], problemId = found[2];
                chrome.tabs.sendMessage(tabId, {
                    type: "NEW_QUESTION",
                    payload: {
                        tab: tab,
                        classId: classId,
                        problemId: problemId
                    }
                });
            }
        }
    });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZVdvcmtlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2FsZXIvLi9jaHJvbWUvc3JjL3NlcnZpY2VXb3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHRhYklkLCB0YWIpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFiKTtcbiAgICAgICAgaWYgKHRhYi51cmwgJiYgdGFiLnVybC5pbmNsdWRlcyhcInNjYWxlci5jb21cIikpIHtcbiAgICAgICAgICAgIHZhciByZWdleCA9IC8uKlxcL2NsYXNzXFwvKC4qKVxcL2Fzc2lnbm1lbnRcXC9wcm9ibGVtc1xcLyguKilbP10vO1xuICAgICAgICAgICAgdmFyIGZvdW5kID0gdGFiLnVybC5tYXRjaChyZWdleCkgfHwgW107XG4gICAgICAgICAgICBpZiAoZm91bmQgPT09IG51bGwgfHwgZm91bmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvdW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc0lkID0gZm91bmRbMV0sIHByb2JsZW1JZCA9IGZvdW5kWzJdO1xuICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTkVXX1FVRVNUSU9OXCIsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYjogdGFiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NJZDogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2JsZW1JZDogcHJvYmxlbUlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==