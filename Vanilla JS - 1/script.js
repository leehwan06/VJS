const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const openmodal = () => {
    modal.classList.remove("hidden");
}
openButton.addEventListener("click", openmodal);
