// Add or remove from Array
function addRemoveValue(theArray, theValue) {
  var index = theArray.indexOf(theValue);
  if (index > -1) {
    // value exists in array
    theArray.splice(index, 1); // remove value
  } else {
    theArray.push(theValue); // add value
  }
}

// Toggle Right Modal - id need to be #rightModal, #modalOverlay
// function toggleRightModal() {
//   document.getElementById("rightModal").classList.toggle("closed");
//   document.getElementById("modalOverlay").classList.toggle("closed");
// }

// Search Table
function toggleLense(theSearchBoxId) {
  var searchString = document.getElementById(theSearchBoxId).value;
  var theButton = document.getElementById("closeBtn");
  // if nothing is inside searchbox hide "X" and show "glass"
  if (searchString == "") {
    theButton.innerHTML = "search"; // id hardcoded
    theButton.classList.add("searchLense");
  } else {
    theButton.innerHTML = "close"; // id hardcoded
    theButton.classList.remove("searchLense");
  }
}


function clearSearchBox(theTableVar, theField, theOperator, theSearchBoxId) {
  var searchString = document.getElementById(theSearchBoxId).value;
  theTableVar.removeFilter(theField, theOperator, searchString);
  var theButton = document.getElementById("closeBtn");
  document.getElementById(theSearchBoxId).value = "";
  theButton.innerHTML = "search"; // id hardcoded
  theButton.classList.add("searchLense");
}


// Highlight 

function highlight(text,tabulator_field_name) {

  var inputText = document.querySelectorAll(tabulator_field_name);
  var innerHTML = '';
  var index = '';
  var length = '';

  inputText.forEach(function (entry, i) {
    if (i === 0) {
      return;
    }

    innerHTML = entry.innerHTML
      .replace(/<mark[^>]+\?>/i, "")
      .replace(/<\/mark>/i, "")
      .replace(/<[//]{0,1}(MARK|mark)[^><]*>/g, "");

    index = innerHTML.toLowerCase().indexOf(text);
    length = index + text.length;
    if (index != -1) {
      innerHTML = innerHTML.substring(0, index) + "<mark>" + innerHTML.substring(index, length) + "</mark>" + innerHTML.substring(length);
      entry.innerHTML = innerHTML;
    }
  });}