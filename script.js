document.addEventListener("mousemove", function (event) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${event.pageX - 4}px`;
    sparkle.style.top = `${event.pageY - 4}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });