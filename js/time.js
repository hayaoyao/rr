! function(n) {
	var e = n.document,
		t = e.documentElement,
		i = 2000,
		d = i / 100,
		o = "orientationchange" in n ? "orientationchange" : "resize",
		a = function() {
			var n = t.clientWidth || 320;
			n > 2000 && (n = 2000);
			t.style.fontSize = n / d + "px"
		};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);	
	
		var wait;
	var i = 10;
	var iid = 0;	 


//window.onscroll = function () {
//          var scrollT = document.documentElement.scrollTop || document.body.scrollTop; //滚动条的垂直偏移
//          var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight; //元素的整体高度
//          var clientH = document.documentElement.clientHeight || document.body.clientHeight; //元素的可见高度
//          if (scrollT + clientH == scrollH) {
//              console.log("到底部了");
//          } 
//      }

 // 判断浏览器函数
 if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			document.addEventListener('touchmove', function() {
			 var h=$(document.body).height();//网页文档的高度
			 var c = $(document).scrollTop();//滚动条距离网页顶部的高度
			 var wh = $(window).height(); //页面可视化区域高度
			
			 if (Math.ceil(wh+c)>=h){
			  $('.time').show()			   
			 }
	        })
			
} else {
			$(window).scroll(function(){
			 var h=$(document.body).height();//网页文档的高度
			 var c = $(document).scrollTop();//滚动条距离网页顶部的高度
			 var wh = $(window).height(); //页面可视化区域高度
			
			 if (Math.ceil(wh+c)>=h){
			  $('.time').show()			   
			 }
			})
}



	iid = setInterval("sTimer()", 1000);
	function sTimer() {
		if(i == 0) {
			clearInterval(iid);
			$('.time span')[0].innerHTML='';
			$('.submit').show();
		} else if($('.time').css('display')=='block'){
			$('.time span')[0].innerHTML = i--;
			
		}
	}
