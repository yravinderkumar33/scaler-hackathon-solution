const constants = {
  api_dev_key: "hmadHHkmdddSmI4ybS-iVV5wK0HqAPEt",
  buttons: {
    share: {
      title: "Share - Create a Shareable Link",
      classList: ["tappable", "btn", "btn-small", "btn-icon", "btn-dark"],
      innerHTML: '<i class="cr-icon-code cr-editor-toolbar-component__icon"></i>'
    },
    timer: {
      title: "Start Timer - Track time taken on this submission",
      classList: ["tappable", "btn", "btn-small", "btn-icon", "btn-dark"],
      innerHTML: '<i class="cr-icon-meter cr-editor-toolbar-component__icon"></i>'
    }
  },
  messages: {
    timerStarted: "Timer Started. Timer ends on Submission."
  }
}

let start_time, end_time, time_taken;
let class_id, problem_id, revisions = [];

const selectors = {
  toolbarContainer: '.me-cr-editor-toolbar__container.me-cr-editor-toolbar__container--right',
  submitBtn: '.cr-judge-action--submit'
}

const findHTMLElement = selector => document.querySelector(selector);

const getAssetURL = path => chrome.runtime.getURL(path);

const addElement = ({ childElement, parentContainer, listener }) => {
  const element = document.createElement("a");
  const { title, innerHTML, classList } = childElement;
  element.title = title;

  (classList as string[]).forEach(className => {
    element.classList.add(className);
  });

  element.innerHTML = innerHTML;
  element.addEventListener('click', listener);
  parentContainer.appendChild(element);
}

const shareBtnHandler = async () => {
  try {
    const response = await createSubmission({});
    console.log(response);
    alert('Share button clicked');
  } catch (error) {
    alert('Share Button clicked');
    // alert('Something went wrong. Please try again later ?');
  }
}

const timerBtnHandler = () => {
  start_time = Date.now();
  alert(constants.messages.timerStarted);
}

const submitBtnHandler = async () => {
  end_time = Date.now();
  time_taken = end_time - start_time;
  chrome.storage.sync.set({
    [`${class_id}_${problem_id}`]: JSON.stringify([...revisions, {
      version: Date.now(),
      timeTaken: `${time_taken} Seconds`
    }])
  });
  alert(`Code Submitted. Time taken is ${time_taken / 1000} Second`);

}

const injectButtons = () => {
  var observer = new MutationObserver(function (mutations) {
    const parentContainer = findHTMLElement(selectors.toolbarContainer)
    if (parentContainer) {
      start_time = Date.now();
      addElement({ childElement: constants.buttons.share, parentContainer, listener: shareBtnHandler });
      addElement({ childElement: constants.buttons.timer, parentContainer, listener: timerBtnHandler });
      handleCodeSubmission();
      observer.disconnect();
    }
  });

  observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
}

const handleCodeSubmission = () => {
  const submitBtn = findHTMLElement(selectors.submitBtn);
  if (!submitBtn) return;
  submitBtn.addEventListener('click', submitBtnHandler);
}

const onMessageHandler = (obj, sender, response) => {
  const { type, payload } = obj;
  console.log(obj);

  switch (type) {
    case 'NEW_QUESTION': {
      const { classId, problemId } = payload;
      class_id = classId;
      problem_id = problemId;
      init();
      break;
    }

    default: {
      break;
    }
  }
  response("currentVideoBookmarks");
}

const init = () => {
  reset();
  injectButtons();
}

const reset = () => {
  start_time = end_time = time_taken = null;
}

const createSubmission = ({ code = "test", language = "plaintext" }) => {
  var axios = require('axios');
  var qs = require('qs');
  var data = qs.stringify({
    'language': language,
    'content': code
  });
  var config = {
    method: 'post',
    url: 'http://pastie.org/pastes/create',
    headers: {
      'Host': "pastie.org",
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Referer': 'http://pastie.org/pastes/create'
    },
    data: data
  };

  return axios(config);
}

(() => {
  init();
  chrome.runtime.onMessage.addListener(onMessageHandler);
  chrome.storage.sync.set({ authenticated: false })
})();
