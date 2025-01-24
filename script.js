    // get the span

    document.getElementById("formvalid").addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("nameError").textContent = "";
        document.getElementById("EmailError").textContent = "";
        document.getElementById("PasswordError").textContent = "";
        document.getElementById("ConformPasswordError").textContent = "";
        //
        const username = document.getElementById("name").value.trim();
        const useremail = document.getElementById("email").value.trim();
        const userpassword = document.getElementById("password").value;
        const UserConformPassword = document.getElementById("ConformPassword").value;

        let success = true;

        //
        if (username === "") {
            document.getElementById("nameError").textContent = "username is required";
            success = false;
        } else if (!isNaN(username)) {
            document.getElementById("nameError").textContent = "Username must be at characters.";
            success = false;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (useremail === "") {
            document.getElementById("EmailError").textContent = "userEmail is required";
            success = false;
        } else if (!emailPattern.test(useremail)){
            document.getElementById("EmailError").textContent = "Invalid email format.";
            success = false;
        }

        if(userpassword === ""){
            document.getElementById("PasswordError").textContent = "Password is required";
            success = false;
        }else if(userpassword.length < 6){
            document.getElementById("PasswordError").textContent = "UserPassword must be at least 6 above characters.";
            success = false;
        }

        if(UserConformPassword === ""){
            document.getElementById("ConformPasswordError").textContent = "ConformPassword is required";
            success = false ;
        }else if(UserConformPassword !== userpassword){
            document.getElementById("ConformPasswordError").textContent = "ConformPassword not match ";
            success = false ;
        }

        if(success){
            alert("success full submit");
            document.getElementById("formvalid").reset();
        }

    })



