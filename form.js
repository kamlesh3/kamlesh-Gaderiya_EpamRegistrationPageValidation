function validateForm() {
    var name1 = document.getElementById("fname").value;
    var name2 = document.getElementById('sname').value;
    var email = document.getElementById('email').value;
    var phone1 = document.getElementById('mobile').value;
    var pass1 = document.getElementById('pwd1').value;
    var pass2 = document.getElementById('pwd2').value;
    var address = document.forms["registration"]["address"];
    var gender = document.forms["registration"]["sex"];
    var agree = document.forms["registration"]["tc"];

    if (name1 == "") {
        window.alert("Please fill the username field");
        return false;
    }
    if ((name1.length <= 2) || (name1.length > 20)) {
        window.alert("**user length must be between 2 and 20");
        return false;
    }
    if (!isNaN(name1)) {
        window.alert("**only characters are allowed");
        return false;
    }
    if (name2 == "") {
        window.alert("Please fill the second-name field");
        return false;
    }
    if ((name2.length <= 2) || (name2.length > 20)) {
        window.alert("**lastname length must be between 2 and 20");
        return false;
    }
    if (!isNaN(name2)) {
        window.alert("**only characters are allowed");
        return false;
    }
    if (email == "") {
        window.alert("Please enter email");
        return false;
    }
    if (email.indexOf('@') <= 0) {
        window.alert("** @ invalid position");
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        window.alert("** . invalid position");
        return false;
    }
    if (phone1 == "") {
        window.alert("Please enter mobile number");
        return false;
    }
    if (phone1.length != 10) {
        window.alert("**mobile number must be 10 digits");
        return false;
    }
    if (isNaN(phone1)) {
        window.alert("**User must enter digits;not a character");
        return false;
    }
    if (pass1 == "") {
        window.alert("Please fill password field");
        return false;
    }
    if ((pass1.length <= 5) || (pass1.length > 20)) {
        window.alert("password length must be between 5 and 20");
        return false;
    }
    if (pass2 == "") {
        window.alert("Please fill second-password field");
        return false;
    }
    if (pass1 != pass2) {
        window.alert("both password are not matched");
        return false;
    }
    if ((gender[0].checked == false) && (gender[1].checked == false) && (gender[2].checked == false)) {
        window.alert("Please select gender");

        return false;
    }
    if ((agree[0].checked == false) && (agree[1].checked == false)) {
        window.alert("Please check agree");
        return false;
    }

}