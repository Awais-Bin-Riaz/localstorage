const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});



// function onSignup(){
//     // get input values
//     var username = document.getElementById("username");
//     var email = document.getElementById("signupemail");
//     var phone = document.getElementById("phone")
//     var address = document.getElementById("address")
//     var password = document.getElementById("signuppassword");
//     var message = document.getElementById("signupmessage");

//     var user = {
//         username: username.value,
//         email: email.value,
//         phone: phone.value,
//         address: address.value,
//         password: password.value,
//     }
//     var users = JSON.parse(localStorage.getItem("users")) || [];
//     // get indx
//     var userIdx = users.findIndex(function(val) {
//         return val.email.toLowerCase() === user.email.toLowerCase()
//     });

//     if (userIdx === -1) {
//         // this user is not exist
//         users.push(user);
//         // store in storage
//         localStorage.setItem("users", JSON.stringify(users));
//         // redirect to login page
//         location.href = "index.html";
//     } else {
//         message.innerHTML = user.email + " use in another account";
//     }
//     // clear state
//     setTimeout(() => {
//         message.innerHTML = "";
//     }, 2000);


//     // console.log(user);


// }



const onSignup = (user) => {
    // get input values
    var username = document.getElementById("username");
    var email = document.getElementById("signupemail");
    var phone = document.getElementById("phone")
    var address = document.getElementById("address")
    var password = document.getElementById("signuppassword");
    var message = document.getElementById("signupmessage");

    var user = {
        username: username.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function(val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    (userIdx === -1) ? (users.push(user), localStorage.setItem("users", JSON.stringify(users)), location.href = "index.html") :
    message.innerHTML = `${user.email} use in another account`
        // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);

}


// function onLogin() {
//     // get input values
//     var email = document.getElementById("loginemail");
//     var password = document.getElementById("loginpassword");
//     var message = document.getElementById("loginmessage");

//     var user = {
//         email: email.value,
//         password: password.value,
//     }

//     var users = JSON.parse(localStorage.getItem("users")) || [];
//     // get indx
//     var currentUser = users.find(function (val) {
//         return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
//     });


//     if (currentUser) {
//         localStorage.setItem("user", JSON.stringify(currentUser));
//         // user login
//         location.href = "home.html";
//     } else {
//         message.innerHTML = "Invalid credentials";
//     }
//     // clear state
//     setTimeout(() => {
//         message.innerHTML = "";
//     }, 2000);
// }



const onLogin = () => {
    // get input values
    var email = document.getElementById("loginemail");
    var password = document.getElementById("loginpassword");
    var message = document.getElementById("loginmessage");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function(val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });


    (currentUser) ? (localStorage.setItem("user", JSON.stringify(currentUser)), location.href = "home.html") : (message.innerHTML = "Invalid credentials")
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}


// function onLogout() {
//     var message = document.getElementById("message");
//     localStorage.removeItem("user");
//     message.innerHTML = "Good Bye.!";
//     // clear state
//     setTimeout(() => {
//         location.href = "#signIn";
//     }, 2000);
// }

const onLogout = () => {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "#signIn";
    }, 2000);
}

function getCurrentUser() {
    var userName = document.getElementById("name")
    var userEmail = document.getElementById("email")
    var userPhone = document.getElementById("phone")
    var userAdress = document.getElementById("address")
    var detial = document.getElementById("detial");
    var user = JSON.parse(localStorage.getItem("user"));
    userName.innerHTML = "Name: " + user.username
    userEmail.innerHTML = "Email: " + user.email
    userPhone.innerHTML = "Phone: " + user.phone
    userAdress.innerHTML = "Address: " + user.address
}



// const getCurrentUser = () => {
//     var userName = document.getElementById("name")
//     var userEmail = document.getElementById("email")
//     var userPhone = document.getElementById("phone")
//     var userAdress = document.getElementById("address")
//     var detial = document.getElementById("detial");
//     var user = JSON.parse(localStorage.getItem("user"));
//     userName.innerHTML = "Name: " + user.username
//     userEmail.innerHTML = "Email: " + user.email
//     userPhone.innerHTML = "Phone: " + user.phone
//     userAdress.innerHTML = "Address: " + user.address
// }



function logOut() {
    localStorage.removeItem("user");
    location.href = "login.html";
}


// function postShare() {
//     var postArea = document.getElementsByClassName('postArea');
//     myUl = document.createElement('ul');
//     myLi = document.createElement('li');
//     myLi2 = document.createElement('li');
//     myDiv = document.createElement('div');
//     myDiv2 = document.createElement('div');
//     myDiv3 = document.createElement('div');
//     myDiv4 = document.createElement('div');
//     myDiv5 = document.createElement('div');
//     myDiv6 = document.createElement('div');
//     myDiv7 = document.createElement('div');
//     myImg = document.createElement('img');
//     myImg2 = document.createElement('img');
//     myHeading = document.createElement('h3');
//     myPara = document.createElement('p');
//     myUl.setAttribute("class", "posts");
//     myDiv.setAttribute("class", "userData");
//     myDiv3.setAttribute("class", "userName");
//     myDiv3.setAttribute("id", "userName");
//     myDiv4.setAttribute("class", "dateNtime");
//     myDiv4.setAttribute("id", "dateNtime");
//     myDiv7.setAttribute("class", "title");
//     myImg.setAttribute("src", "user.png");
//     myImg2.setAttribute("id", "postImage");
//     myImg2.setAttribute("width", "100%");
//     myImg2.setAttribute("src", "https://source.unsplash.com/user/erondu/600x400");
//     myHeading.setAttribute("id", "sharedTitle");
//     myPara.setAttribute("id", "sharedTitlePost");
//     postArea[0].appendChild(myUl);
//     myUl.appendChild(myLi);
//     myUl.appendChild(myLi2);
//     myLi.appendChild(myDiv);
//     myDiv.appendChild(myImg);
//     myDiv.appendChild(myDiv2);
//     myDiv2.appendChild(myDiv3);
//     myDiv2.appendChild(myDiv4);
//     myLi2.appendChild(myDiv5);
//     myDiv5.appendChild(myDiv6);
//     myDiv5.appendChild(myImg2);
//     myDiv6.appendChild(myDiv7);
//     myDiv7.appendChild(myHeading);
//     myDiv7.appendChild(myPara);
//     console.log(myUl.childElementCount)
//     console.log(myUl)

//     var title = document.getElementById('title').value;
//     var titlePost = document.getElementById('titlePost').value;
//     var sharedTitle = document.getElementById('sharedTitle');
//     var sharedTitlePost = document.getElementById('sharedTitlePost');
//     var userData = document.getElementsByClassName('userData');
//     var postImage = document.getElementById('postImage');

//     var currentUser = JSON.parse(localStorage.getItem("user"));
//     myDiv3.innerText = currentUser.username;
//     dateToday = new Date();
//     myDiv4.innerText = dateToday.getDate() + "/" + dateToday.getMonth() + "/" + dateToday.getFullYear();

//     myHeading.innerText = title;
//     myPara.innerText = titlePost;
// }


function postShare() {
    var postArea = document.getElementsByClassName('postArea');
    myUl = document.createElement('ul');
    myLi = document.createElement('li');
    myLi2 = document.createElement('li');
    myDiv = document.createElement('div');
    myDiv2 = document.createElement('div');
    myDiv3 = document.createElement('div');
    myDiv4 = document.createElement('div');
    myDiv5 = document.createElement('div');
    myDiv6 = document.createElement('div');
    myDiv7 = document.createElement('div');
    myImg = document.createElement('img');
    myImg2 = document.createElement('img');
    myHeading = document.createElement('h3');
    myPara = document.createElement('p');
    myUl.setAttribute("class", "posts");
    myDiv.setAttribute("class", "userData");
    myDiv3.setAttribute("class", "userName");
    myDiv3.setAttribute("id", "userName");
    myDiv4.setAttribute("class", "dateNtime");
    myDiv4.setAttribute("id", "dateNtime");
    myDiv7.setAttribute("class", "title");
    myImg.setAttribute("src", "img/profile.png");
    myImg2.setAttribute("id", "postImage");
    myImg2.setAttribute("width", "100%");
    myImg2.setAttribute("src", "https://source.unsplash.com/user/erondu/600x400");
    myHeading.setAttribute("id", "sharedTitle");
    myPara.setAttribute("id", "sharedTitlePost");
    postArea[0].appendChild(myUl);
    myUl.appendChild(myLi);
    myUl.appendChild(myLi2);
    myLi.appendChild(myDiv);
    myDiv.appendChild(myImg);
    myDiv.appendChild(myDiv2);
    myDiv2.appendChild(myDiv3);
    myDiv2.appendChild(myDiv4);
    myLi2.appendChild(myDiv5);
    myDiv5.appendChild(myDiv6);
    myDiv5.appendChild(myImg2);
    myDiv6.appendChild(myDiv7);
    myDiv7.appendChild(myHeading);
    myDiv7.appendChild(myPara);
    console.log(myUl.childElementCount)
    console.log(myUl)

    var title = document.getElementById('title').value;
    var titlePost = document.getElementById('titlePost').value;
    var sharedTitle = document.getElementById('sharedTitle');
    var sharedTitlePost = document.getElementById('sharedTitlePost');
    var userData = document.getElementsByClassName('userData');
    var postImage = document.getElementById('postImage');

    var currentUser = JSON.parse(localStorage.getItem("user"));
    myDiv3.innerText = currentUser.username;
    dateToday = new Date();
    myDiv4.innerText = `${dateToday.getDate()} / ${dateToday.getMonth()} / ${dateToday.getFullYear()}`;

    myHeading.innerText = title;
    myPara.innerText = titlePost;
}