export const htmlToNode = (html: string) => {
    const template = document.createElement('template')
    template.innerHTML = html
    const node = template.content.firstElementChild

    return node
}