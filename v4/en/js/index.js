function renderHomepage3TouchDemo(e){}function playVideo(e){var n=document.getElementById(e);n&&n.play();var t=document.getElementById(e+"-play");t&&(t.style.display="none");var i=document.getElementById(e+"-pause");i&&(i.style.display="block")}function pauseVideo(e){var n=document.getElementById(e);n&&n.pause();var t=document.getElementById(e+"-play");t&&(t.style.display="block");var i=document.getElementById(e+"-pause");i&&(i.style.display="none")}!function(){if(!$(".lower-ie").length){document.getElementById("nav-index").className="active";var e=$(".navbar-default");e.addClass("navbar-bg"),$("#page-index").scroll(function(){600<$("#page-index")[0].scrollTop?e.removeClass("navbar-bg"):e.addClass("navbar-bg")});n(),$(window).resize(n)}function n(){var e=document.getElementById("video-index");window.innerWidth/window.innerHeight<16/9?(e.style.height=window.innerHeight+"px",e.style.width="auto",e.style.marginLeft=Math.floor((window.innerWidth-window.innerHeight/9*16)/2)+"px",e.style.marginTop=0):(e.style.width=window.innerWidth+"px",e.style.height="auto",e.style.marginTop=Math.floor(window.innerHeight-window.innerWidth/16*9)+"px",e.style.marginLeft=0)}}();