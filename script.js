var defaultbg  = "#252525", greybg   = "#FFFFFF";
       document.body.style.backgroundColor = defaultbg;
       
       document.addEventListener("click", function(){
         if(document.body.style.backgroundColor!=="rgb(255, 255, 255)") {
            //alert("Fire Only if BG is not Grey")
            document.body.style.backgroundColor = greybg;
         } else {
			 document.body.style.backgroundColor = defaultbg;
		 }
      });