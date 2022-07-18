export function getTheme() {
  return localStorage.getItem('color-theme') || false
}

export function newTheme() { 
  return getTheme() === 'dark' ? 'light' : 'dark'
}

export function setTheme(newTheme) {
  localStorage.setItem('color-theme', newTheme)
  document.documentElement?.setAttribute('data-color-theme', newTheme)
}

export function fadeInAnimation() {
  const theme = document.getElementById('theme')
  
  theme.classList?.remove('theme--animation')
  setTimeout(() => theme.classList?.add('theme--animation'), 300)
}

export function toogleTheme() {
  setTheme(newTheme())
  fadeInAnimation()
}

(function () {
  // default preferred browser theme
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches && 'light'

  const theme = getTheme() || preferredTheme || 'dark'

  // Set the theme between the chosen one, preferred browser one or "dark" by default
  setTheme(theme)
})()