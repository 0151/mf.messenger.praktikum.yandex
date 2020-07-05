export const sanitize = string => {
    const decoder = document.createElement('div')
    decoder.innerHTML = string.trim()
    return decoder.textContent
}