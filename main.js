var config = {
  apiKey: "AIzaSyAUBgBByQRWjZInDoVhLjgpYxRVT06J0cU",
  authDomain: "acmwebsite-f2153.firebaseapp.com",
  databaseURL: "https://acmwebsite-f2153-default-rtdb.firebaseio.com",
  projectId: "acmwebsite-f2153",
  storageBucket: "acmwebsite-f2153.appspot.com",
  messagingSenderId: "873940639543",
  //appId: "1:873940639543:web:3ddc1aa872d8dcc464c4b2",
  //measurementId: "G-X39Y1V2875"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();


  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name, company, email, phone, message);

  document.querySelector('.alert').style.display = 'block';

  
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


  document.getElementById('contactForm').reset();
}


function getInputVal(id){
  return document.getElementById(id).value;
}


function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}