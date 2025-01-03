export const getImageUrl = (name: string) =>  new URL(`../assets/imgs/${name}.svg`, import.meta.url).href

export const getToken = () =>localStorage.getItem(import.meta.env.VITE_TOKEN_KEY)

export const setToken = (token: string) => localStorage.setItem(import.meta.env.VITE_TOKEN_KEY, token)

export const resetToken = () =>localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY)