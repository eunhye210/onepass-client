(() => {
  chrome.runtime.onMessage.addListener(async (message, sender, response) => {
    const { type } = message;

    if (type === "SHOW") {
      const inputs = document.getElementsByTagName("input");

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase() === "password") {
          chrome.storage.local.get(["result"], function (data) {
            const { result } = data;

            if (i - 1 >= 0) {
              inputs[i - 1].value = result.username;
            }
            inputs[i].value = result.password;
          });
        }
      }
    }

    if (type === "RANDOM") {
      const inputs = document.getElementsByTagName("input");

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase() === "password") {
          chrome.storage.local.get(["result"], function (data) {
            const { result } = data;

            inputs[i].value = result.password;
          });
        }
      }
    }
  });
})();
