function main(){
    
    document.getElementById('CustomRequest').addEventListener('submit', handleCustRequest)
}

function handleCustRequest(event){


    var custForm = document.getElementById('CustomRequest');
    var valid = true;



    if (custForm.lname.value ==""){
        event.preventDefault();
        valid=false;
        document.getElementById('lnameError').style.display = "block";
    }
    else{
        document.getElementById('lnameError').style.display = "none";
        valid=true;
    }
    if (custForm.fname.value ==""){
        event.preventDefault();
        valid = false;
        document.getElementById('fnameError').style.display = "block";
        
    }
    else{
        document.getElementById('fnameError').style.display = "none";
        valid = true;
    }

    if (custForm.email.value ==""){
        document.getElementById('emailError').style.display = 'block';
        valid = false;
        event.preventDefault();
    }
    else {
        valid=true;
        document.getElementById('emailError').style.display = 'none';
    }

    if (valid){
        console.log("Custom Request Submitted")
    }



    event.preventDefault();



}