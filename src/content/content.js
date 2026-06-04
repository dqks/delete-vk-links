let isDeleted = false

const deleteLinks = () => {
    const newsElement = document.querySelector('a[href="/feed"]')

    if (newsElement) {
        isDeleted = true
        newsElement.remove()
        clearInterval(deleteLinks)
        return null;
    }
}

setInterval(deleteLinks, 300)

