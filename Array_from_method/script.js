const root = document.querySelector("#root")

Array.from({ length: 20 }).map((e,i) => {
  const h1 = document.createElement("h1")
  h1.innerHTML = `Hello - ${i}`
  root.append(h1)
})
