const userEl = document.querySelector(".user_profile");
const userItem = document.querySelector(".user_item");
userEl.onclick = (e) => {
    e.preventDefault();
    userItem.classList.toggle("active");
}