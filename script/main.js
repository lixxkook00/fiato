const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

// loading animation
window.addEventListener('load', (event) => {
    bind1('.loading').style.display = "none"
    bind1('body').classList.remove('isLoading')
});