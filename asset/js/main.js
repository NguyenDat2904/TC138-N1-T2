const loginForm=document.getElementById("login")
const errorEl=document.querySelector(".errorMsg")

loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    const emailEl=loginForm.email;
    const emaill=emailEl.value;
    const relexEmail=/^\w{4,}@\w+\.\w+$/;
    if(emaill===" ")
    {
        errorEl.innerHTML="Vui lòng không để chống thông tin";
        emailEl.classList.add("errorborder");
    }
    else if(emaill.length<8)
    {
        errorEl.innerHTML="Email phải có ít nhất 8 ký tự.Ví dụ : infor@gmail.com";
        emailEl.classList.add("errorborder");
    }
    else if(relexEmail.test(emaill)===false)
    {
        errorEl.innerHTML="Vui lòng điền đúng định dạng Email. Ví dụ: infor@gmail.com";
        emailEl.classList.add("errorborder");
    }
    else
    {
        errorEl.innerHTML="";
        emailEl.classList.remove("errorborder");
    }
});