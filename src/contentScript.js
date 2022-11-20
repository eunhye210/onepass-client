(() => {
  chrome.runtime.onMessage.addListener(async (message, sender, response) => {
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

    // (2) apply 버튼을 눌렀을 때
    // -> input 창에 유저의 email과 password 정보가 입력되도록 하기
  });
})();
