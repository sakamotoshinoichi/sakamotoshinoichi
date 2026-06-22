// 坂本篠一株式会社 site script — language toggle + mobile nav
(function(){
  var root = document.documentElement;
  var KEY = "sakamoto-lang";

  function applyLang(lang){
    if(lang === "cn"){ root.classList.add("show-cn"); }
    else{ root.classList.remove("show-cn"); }
    var btns = document.querySelectorAll(".lang-toggle");
    btns.forEach(function(b){ b.textContent = lang === "cn" ? "JA / 日本語" : "中文 / CN"; });
  }

  try{
    var saved = localStorage.getItem(KEY);
    if(saved){ applyLang(saved); }
  }catch(e){ /* localStorage unavailable, default to JP */ }

  document.addEventListener("click", function(e){
    if(e.target.classList && e.target.classList.contains("lang-toggle")){
      var current = root.classList.contains("show-cn") ? "cn" : "jp";
      var next = current === "cn" ? "jp" : "cn";
      applyLang(next);
      try{ localStorage.setItem(KEY, next); }catch(err){}
    }
    if(e.target.closest && e.target.closest(".nav-toggle")){
      var nav = document.querySelector("nav.main-nav");
      if(nav){ nav.classList.toggle("open"); }
    }
  });
})();
