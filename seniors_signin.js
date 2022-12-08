
$(document).ready(function(){
    $("#loginButton").click(function(e){
        e.preventDefault();
        let email=validateEmail();
        console.log(email);
        if(email){alert("logged in succesfully");}
        else{
            $(".error-msg").show();
        }
    });
});

function validateEmail(){
    let email=$("#email").val();
    console.log(email);
    const validMail=/^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
    if(validMail.test(email) || email==""){
        $('#emailError').text("");
        return true;
    }
    else{
        $("#emailError").text("Enter Valid Email");
        return false;
    }
};