const boxes = document.querySelectorAll("[id^=box]")

const resizeObserver = new ResizeObserver(entries => {
    console.log(entries)
});

boxes.forEach(box => {
    resizeObserver.observe(box)
})
