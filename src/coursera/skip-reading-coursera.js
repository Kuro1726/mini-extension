const choose = document.querySelector('[data-testid="mark-complete"]')
const next = document.querySelector('[data-testid="next-item"]')

choose.addEventListener("click", () => {
    console.log ("Đã tự động click");
})
next.addEventListener("click", () => {
    console.log ("Đã tự động click");
})

choose.click()
next.click()