//      This is a JavaScript Code     //
        const log_colm = document.querySelector('.password');
        const show_btn = document.querySelector('.show');

        show_btn.addEventListener('click', function(){
        //      Add if else Statment    //
            if(log_colm.type === "password"){
                log_colm.type = "text";
                show_btn.style.color = "red";
                show_btn.textContent = "HIDE";
            }else{
                log_colm.type = "password";
                show_btn.style.color = "green";
             show_btn.textContent = "SHOW";
            }
        });
   //         Javascript file End        //