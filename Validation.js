function validateForm() {
    var year1 = document.forms["myForm"]["pyear"].value;
    var hticket = document.forms["myForm"]["hticket"].value;
    var dob1 = document.forms["myForm"]["dob"].value;
    var name = document.forms["myForm"]["name"].value;
    var fname = document.forms["myForm"]["fname"].value;
    var aadhar = document.forms["myForm"]["aadhar"].value;
    var mobile = document.forms["myForm"]["mobile"].value;
    var email = document.forms["myForm"]["email"].value;
    var bp = document.forms["myForm"]["bpoint"].value;
    var dob1 = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    if (year1 == "") {
        alert("SSC pass of year must be filled out");
        return false;
    }
    if (hticket == "") {
        alert("Hall ticket must be filled out");
        return false;
    }
    if (!dob.test(dob1)) {
        alert("Invalid dob");
        return false;
    }
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (fname == "") {
        alert("Father name must be filled out");
        return false;
    }
    if (aadhar == "") {
        alert("Aadhar number must be filled out");
        return false;
    }
    if (mobile == "") {
        alert("Mobile must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (bp == "") {
        alert("Boarding point must be filled out");
        return false;
    }
}