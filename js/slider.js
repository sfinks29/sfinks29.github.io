		window.onload = function(){

			var left = document.querySelector("input[value='left']");
			var right = document.querySelector("input[value='right']");
			var stop = document.querySelector("input[value='stopCicle']");
			var li = document.querySelectorAll("ul li");
			var ul = document.querySelector("ul.gallery-ul");
			var pos = 100;
			var del = null;
			var el=null;
			var a =100;
			var stile = 0;
			var last = null;
			for(var i=0; i<li.length; i++){
				li[i].style.left = pos+"px";
				pos = pos+100;
			}
			var centerLoop = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.querySelector("img");
			centerLoop.classList.add("loop");
			var span = document.querySelector(".galleryName");
			 span.innerHTML = centerLoop.getAttribute("value");

			function loopRight(){
				centerLoop.classList.remove("loop");
				centerLoop = centerLoop.parentNode.nextElementSibling.querySelector("img");
				centerLoop.classList.add("loop");
				 span.innerHTML = centerLoop.getAttribute("value");
				return;
			}

				function loopLeft(){
				centerLoop.classList.remove("loop");
				centerLoop = centerLoop.parentNode.previousElementSibling.querySelector("img");
				centerLoop.classList.add("loop");
				span.innerHTML = centerLoop.getAttribute("value");
				return;
			}

			

			function leftClick(){
				var n = a;
				del = ul.removeChild(ul.lastElementChild);	
				for(var i=0; i<li.length; i++){
					li[i].style.left = (n+100)+"px";
					n=n+100;
				}
				a=a+100;
				el = ul.insertBefore(del, ul.firstElementChild);
				stile = el.style.left = (100)+"px";
				last = ul.firstElementChild.nextElementSibling.style.left = (parseInt(stile)+100)+"px";
				last = ul.firstElementChild.nextElementSibling.nextElementSibling.style.left = (parseInt(stile)+200)+"px";
				last = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.left = (parseInt(stile)+300)+"px";
				last = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.left = (parseInt(stile)+400)+"px";
				last = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.left = (parseInt(stile)+500)+"px";
				last = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.left = (parseInt(stile)+600)+"px";
				last = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.left = (parseInt(stile)+700)+"px";
				last = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.left = (parseInt(stile)+800)+"px";
				 loopLeft()
				return;
			}
			left.onclick = leftClick;
			setTimeout(leftClick, 2000)

			var time = setInterval(leftClick, 7000);
			stop.onclick = function(){
				if(stop.value == "stopCicle"){
					clearInterval(time);
					stop.value = "startCicle";
					return;
				}
				if(stop.value == "startCicle"){
					time = setInterval(leftClick, 7000);
					stop.value = "stopCicle";
					return;
				}
			}

			right.onclick = function(){

				del = ul.removeChild(ul.firstElementChild);
				var n = a;
				for(var i=0; i<li.length; i++){
					li[i].style.left = (n-100)+"px";
					n=n+100;
				}
				a=a-100;
				el = ul.appendChild(del);
				stile = el.style.left = (900)+"px";
				last = ul.lastElementChild.previousElementSibling.style.left = (parseInt(stile)-100)+"px";
				last = ul.lastElementChild.previousElementSibling.previousElementSibling.style.left = (parseInt(stile)-200)+"px";

				last = ul.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.style.left = (parseInt(stile)-300)+"px";

				last = ul.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.left = (parseInt(stile)-400)+"px";

				last = ul.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.left = (parseInt(stile)-500)+"px";

				last = ul.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.left = (parseInt(stile)-600)+"px";

				last = ul.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.left = (parseInt(stile)-700)+"px";

				last = ul.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.left = (parseInt(stile)-800)+"px";
				loopRight();
				return;
			}

		}