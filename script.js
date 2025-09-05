function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }
  //  Mesma coisa que o if acima
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem aleatória de Mike Brito")
  } else {
    img.setAttribute("src", "./assets/Avatar larissa.png")
    img.setAttribute(
      "alt",
      "Foto de Dra Larissa Assis, de óculos e jaleco branco"
    )
  }
}
