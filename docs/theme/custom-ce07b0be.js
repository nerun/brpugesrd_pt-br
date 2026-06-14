document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.querySelector(".sidebar-scrollbox");
  var link = document.createElement("a");
  link.href = "https://nerun.github.io/brpugesrd_pt-br/index.html"; // ou caminho absoluto do seu book
  link.className = "sidebar-logo-link";
  sidebar.prepend(link);
});
