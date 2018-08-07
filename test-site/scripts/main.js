var myImage = document.querySelector('img');

function postRequest(path, params) {
    var method="post";
    var form=document.createElement("form");
    form.setAttribute("method",method);
    form.setAttribute("action",path);
    form.style.display = "none";
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField=document.createElement("input");
            hiddenField.setAttribute("type","hidden");
            hiddenField.setAttribute("name",key);
            hiddenField.setAttribute("value",params[key]);
            form.appendChild(hiddenField);
        }
    }
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/leaf.png') {
      myImage.setAttribute ('src','images/leaf2.png');
    } else {
      myImage.setAttribute ('src','images/leaf.png');
    }
    postRequest('http://www.example.com', {'name':'sqq'})
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

