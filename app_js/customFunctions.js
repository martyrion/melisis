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
function toggleRightModal() {
  var modal = document.getElementById("rightModal");
  modal.classList.toggle("closed");
  var overlay = document.getElementById("modalOverlay");
  overlay.classList.toggle("closed");
}

// Search Table
function searchTable(theTableVar, theField, theOperator, theSearchBoxId) {
  var searchString = document.getElementById(theSearchBoxId).value;
  theTableVar.setFilter(theField, theOperator, searchString);
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
