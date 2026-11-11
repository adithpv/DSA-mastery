document.querySelectorAll("[data-trace]").forEach((trace) => {
    const steps = Array.from(trace.querySelectorAll(".trace-step"));
    const previous = trace.querySelector("[data-previous]");
    const next = trace.querySelector("[data-next]");
    const counter = trace.querySelector("[data-counter]");
    let current = 0;

    function render() {
        steps.forEach((step, index) => {
            step.hidden = index !== current;
        });

        previous.disabled = current === 0;
        next.disabled = current === steps.length - 1;
        counter.textContent = `Step ${current + 1} of ${steps.length}`;
    }

    previous.addEventListener("click", () => {
        current = Math.max(0, current - 1);
        render();
    });

    next.addEventListener("click", () => {
        current = Math.min(steps.length - 1, current + 1);
        render();
    });

    render();
});
