 let myImage = document.querySelector('img');

 myImage.onclick = function () {
     let mySrc = myImage.getAttribute('src');
     if (mySrc === 'images/p1.png'){
         myImage.setAttribute('src','images/p2.png');
     } else {
         myImage.setAttribute('src','images/p1.png');
     }
 }

 let myButton = document.querySelector('button');
 let myHeading = document.querySelector('h1');

 function setUserName() {
     let myname = prompt('请输入你的名字');
     if (!myname || myname === null) {
         setUserName();
     } else {
         localStorage.setItem('name', myname);
         myHeading.innerHTML = 'Mozilla 酷毙了，' + myname;
     }
 }

 if (!localStorage.getItem('name')) {
     setUserName();
 } else {
     let storedName = localStorage.getItem('name');
     myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
 }

 myButton .onclick = function () {
     setUserName();
 }