// OrionNet365 v2 - light JS (active nav link)
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.style.background = "rgba(255,255,255,.08)";
  });
})();
