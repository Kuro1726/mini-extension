const next = document.querySelector('[data-testid="next-item"]')
next.addEventListener("click", () => {
    console.log ("Đã tự động click");
})
next.click()
setTimeout( () => {const next = document.querySelector('[data-testid="next-item"]')
next.addEventListener("click", () => {
    console.log ("Đã tự động click");
})
next.click()}, 2000)