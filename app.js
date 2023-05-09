const closeBtn = document.querySelector('.close');
const containerEl = document.querySelector('.container');
const learnEl = document.querySelector('.learn');
const moreEl = document.querySelector(".more");
const btnEl = document.querySelector('.btn')


closeBtn.addEventListener("click", () => {
    containerEl.remove();
});


learnEl.addEventListener('click', learnMore)

function learnMore() {
    if (moreEl.style.display === "none") {
        moreEl.style.display = "block"
    } else {
        moreEl.style.display = "none";
    };
};
