/**
 * Using the LocalStorage API, save the contents of the text box
 * when users click the "save" button. 
 * Load the saved text when users click the "Load" button.
 *
 * Here's the documentation you need:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */
;
var saveButton = $('#save-button');
var loadButton = $('#load-button');


function populateStorage() {
	saveButton.click(function(){
var savedText = localStorage.setText('#save-me');
});
}

function setStyles() {
	  loadButton.click(function(){
var currentText = localStorage.getText('#save-me', document.getElementbyId('#save-me').value);
});
	  return currentText;
}



$(document).ready(function(){
    $("#load-button").click(function(){
        return $("savedText").text();
    });
});
/**
 * Gets the text from the element for you
 * @return {String}
 */
function getText() {
	    loadButton.click(function(){
  return $('#save-me').val();
   });
}

/**
 * Puts different text
 * @param {String} text the stuff you want to put in the box
 */
function setText(text) {
	saveButton.click(function(){
  return $('#save-me').val(text);
});
}