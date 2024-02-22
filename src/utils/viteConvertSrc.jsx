// function takes two parameters: path (src) and url, where url is importr.meta.url
export const viteConvertSrc = (src, url) => {
    return new URL(src, url).href
}