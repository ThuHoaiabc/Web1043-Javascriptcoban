const menus = document.querySelectorAll('.title');
const openText = document.querySelectorAll('.myText');
menus.forEach((el) => {
    el.addEventListener("click", (e) => {
        console.log(el.nextElementSibling);
        remove();
        el.nextElementSibling.classList.toggle("active");

    })
})
function remove() {
    openText.forEach((el) => {
        el.classList.remove("active");
    })
}