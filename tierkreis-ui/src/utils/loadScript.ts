export const loadScript = async (url: string) => {
  return new Promise((resolve, reject) => {
    var s
    s = document.createElement('script')
    s.src = url
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}
