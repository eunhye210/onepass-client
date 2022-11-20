(() => {
  chrome.runtime.onMessage.addListener(async (message, sender, response) => {
    const { type } = message;

    if (type === "TAB") {
      const { currentUrl } = message;

      const domain = currentUrl
        .replace("http://", "")
        .replace("https://", "")
        .split(".")[1];

      chrome.storage.local.get(["userId"], async function (data) {
        const { userId } = data;

        const res = await fetch(
          `http://localhost:8080/users/${userId}/url/${domain}`
        );
        const result = await res.json();

        if (res.status === 200) {
          const { data } = result;

          chrome.storage.local.set({
            type: "FOUND",
            result: {
              username: data.username,
              password: data.password,
            },
          });
        } else {
          const { errorMessage } = result;

          chrome.storage.local.set({
            type: "EMPTY",
            result: { errorMessage },
          });
        }
      });
    }

    if (type === "SHOW") {
      const inputs = document.getElementsByTagName("input");

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase() === "password") {
          inputs[i - 1].value = "abcd";

          chrome.storage.local.get(["result"], function (data) {
            const { result } = data;

            inputs[i - 1].value = result.username;
            inputs[i].value = result.password;
          });
        }
      }
    }
  });
})();
