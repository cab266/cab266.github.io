!function () {
  function n(n) {
    var e = document.createElement("div");
    e.className = "heart";
    document.body.appendChild(e);
    e.style.left = n.clientX - 5 + "px";
    e.style.top = n.clientY - 5 + "px";
    e.style.background = "rgb(255,182,193)";
    e.style.transform = "rotate(45deg)";
    setTimeout(function () {
      document.body.removeChild(e);
    }, 1000);
  }
  document.addEventListener("click", n);
}();
