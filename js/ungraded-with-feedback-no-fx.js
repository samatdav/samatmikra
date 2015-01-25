/*
Example code by Philip Hutchison, March 2008 (http://pipwerks.com).
This code uses the MooTools 1.1.1 framework, but can be easily edited
to use standard DOM scripting techniques or other JS frameworks.

getEventTarget function copied from 
http://usabletype.com/weblog/event-delegation-without-javascript-library/
*/




//Helper function to ensure cross-browser compatibility
function getEventTarget(e){						
	var e = e || window.event;
	var targ = e.target || e.srcElement; 
	if (targ.nodeType == 3) { 
		targ = targ.parentNode;
	}
	return targ;
}


//Show the feedback for the clicked DT item.
function toggleFeedback(dt){					
	$(dt);										//Apply MooTools prototypes to the DT object
	var dl = dt.getParent();					//Get the parent DL of the clicked DT. Using MooTools $ and getParent functions
	if(dl && dl.nodeName === "DL"){				//Ensure 'dl' is what we're expecting
		var dd = dt.getNext();					//Get the next sibling of the clicked DT (should be the DD conatining the feedback)
		var actives = $$(".active");			//Find items with the class 'active' so we can de-activate
		for(var i=0; i < actives.length; i++){	//Loop through the 'actives' so we can toggle them to inactive
			var me = $(actives[i]);				//Apply MooTools prototypes to the current element
			if(me != dd){						//If there is an active DD, and it isn't the DD we want to set to active,
				me.removeClass("active"); 		//Remove the class so it's no longer active
			}
		}
		dt.addClass("active");					//Set our target DT to active!
		dd.addClass("active");					//Set our target DD to active!
	}
}


//Initialize the quiz
function initQuiz(){
	var q = $("question");						//Get the 'question' DL (using MooTools $ function)
	q.onclick = function(e){					//Use event delegation to handle any clicks on the DL and child items
		var me = getEventTarget(e);				//Shortcut
		if(me.nodeName === "DT"){				//If the clicked item is a DT element,
			toggleFeedback(me);					//Invoke the toggleFeedback function
		}
	}
}


//Using MooTools DomReady to initialize the quiz (faster than onload)
window.addEvent('domready', initQuiz);

