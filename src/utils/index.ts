export const getImageUrl = (name: string) =>  new URL(`../assets/imgs/${name}.svg`, import.meta.url).href
