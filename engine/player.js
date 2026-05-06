function playMacro(macro) {
    let start = Date.now();

    macro.forEach(e => {
        setTimeout(() => {

            if (e.type === "click") {
                document.elementFromPoint(e.x, e.y)?.click();
            }

            if (e.type === "type") {
                if (document.activeElement) {
                    document.activeElement.value += e.value;
                }
            }

        }, e.time - macro[0].time);
    });
}
