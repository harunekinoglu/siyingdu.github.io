

(function($){
              $(window).on('read load resize', function(){
                var theWidth = $(window).width();
                var theHeigth = $(window).height();
                $('#home').css({'width': theWidth, 'height' : theHeigth });
                $('#projects').css({'width': theWidth, 'height' : theHeigth });
                $('#publication').css({'width': theWidth, 'height' : theHeigth });
                $('#contact').css({'width': theWidth, 'height' : theHeigth });
                $('.projectThumbnail').css({'width': 250, 'height' : 250 });
                $('.backgroundImg').css({'width':theWidth/2 , 'height' : 400 })
            

              });
            })(jQuery);

            // Add active class to the current button (highlight it)
            var btnContainer = document.getElementById("myBtnContainer");
            var btns = btnContainer.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
              });
            }