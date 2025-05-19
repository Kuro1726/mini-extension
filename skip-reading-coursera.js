const choose = document.querySelector('[data-testid="mark-complete"]')
choose.addEventListener("click", () => {
    console.log ("Đã tự động click");
})
choose.click()