const postContainerEl = document.querySelector(".post-container");
const heartEl = document.querySelector("#heart");

postContainerEl.addEventListener("dblclick", function () {
  Object.assign(heartEl.style, {
    transform: "translate(-50%, -50%) scale(1)",
    opacity: 0.8,
  });
  setTimeout(() => {
    Object.assign(heartEl.style, {
      opacity: 0,
    });
  }, 1000);
  setTimeout(() => {
    Object.assign(heartEl.style, {
      transform: "translate(-50%, -50%) scale(0)",
    });
  }, 1500);
});
