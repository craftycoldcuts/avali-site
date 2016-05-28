/* This is the main JS file which runs the dummy merchant site
 * @author Brad Owen
 * @date 19/07/2015
 */

 String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var isDev = false;

var callerOrigin;

//var trustOrigin = "http://127.0.0.1:8080";
var trustOrigin = "http://www.kelf.co.nz";

/* ==============================================
Load document
=============================================== */

	( function ( $ ) {
		'use strict';
		$(document).ready(function(){

			
			$('#timer').on('click', function() {
				setTimeout(function() {
					updateParent();
				},2000);
			});


		 function updateParent() {

		 	var message = {'target' :'iframe', 'action' :'close'};
		 	window.document.documentElement.innerHTML = '';
		 	window.parent.postMessage(JSON.stringify(message),callerOrigin);
		 }

			// Called sometime after postMessage is called
			function receiveMessage(event)
			{

				callerOrigin = event.origin;
			  // Do we trust the sender of this message?
			  if (event.origin !== trustOrigin)
			    return;

			  console.log("postmessage received on avali site:" + event.data);

			  var jsonMessage = JSON.parse(event.data);
			  if (jsonMessage.action === 'open') {
					$('.avali-form-wrapper').addClass('animate-top');
		
			  };

			}

			window.addEventListener("message", receiveMessage, false);

		});	

		//Mobile Detect
		var testMobile;
		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
		    BlackBerry: function() {
		        return navigator.userAgent.match(/BlackBerry/i);
		    },
		    iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		    any: function() {
		        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		    }
		};
	}( jQuery ));




    
