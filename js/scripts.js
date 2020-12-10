
//JS For Filtering the Find Page

//start by showing all elements on the page
filterSelection("normal")

//function to filter depending on the argument c
function filterSelection(c) {
  var x, i, y;
  console.log(c);
  x = document.getElementsByClassName("card");
  y = document.getElementsByClassName("industry-info");
  if (c == "all") c = "123";
  
  //Remove the "show" class from the elements that are not selected and add the "show" class  to the filtered elements
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  for (i = 0; i < y.length; i++) {
      console.log(y[i]);
    w3RemoveClass(y[i], "show-text");
    if (y[i].className.indexOf(c) > -1) w3AddClass(y[i], "show-text");
  }
}

// Helper function to show elements by adding a class to them
function w3AddClass(element, name) {
  var i, arr1, arr2;

  //create a list
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  //loop through the classes and add the new class to them if the class isn't already on the element
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Helper function to remove show class from elements filtered out
function w3RemoveClass(element, name) {
  var i, arr1, arr2;

  //splits the classname into its individual components
  arr1 = element.className.split(" ");

  //splits the name into a list of the classes to remove
  arr2 = name.split(" ");

  //loop through the array to find the class with the same 'name' and cut it out
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  //join an ' ' to the end of the classNames for the element.
  element.className = arr1.join(" ");
}

// Add active class to the current control button 
var btnContainer = document.getElementById("industryList");
var btns = btnContainer.getElementsByClassName("industry");

/*add the eventlistener to all of the buttons so that when a button is clicked calls a function that replaces the active button's active class with nothing and sets
the clicked button's class to be active */
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activebtn");
    if(current.length > 0) {
    current[0].className = current[0].className.replace("activebtn", "");
    }
    this.className += " activebtn";
  });
}