const mutationObserver = new MutationObserver(mutations => {
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
            for (let elem of node.querySelectorAll("a[href='/feed']")) {
                elem.remove();
            }
        }
    }
})

mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
})
