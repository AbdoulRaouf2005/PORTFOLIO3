window.addEventListener("load", () => {
      const container = document.getElementById("Zone_Image")

      const img = document.createElement("img")
      img.src = "asset/Hero Man/Ma_Photo2.png"
      img.alt = "Ma_Photo"
      img.classList.add("img-fluid", "w-auto")
      container.appenChild(img)
})

document.addEventListener('DOMContentLoaded', () => {
      AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
            offset: 100
      })
})
