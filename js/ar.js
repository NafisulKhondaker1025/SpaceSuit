AFRAME.registerComponent('next-button', {
    init() {
      const animateModel = document.getElementById('model1')
      const standModel = document.getElementById('model2')
      const nextButton = document.getElementById('nextbutton')

      nextButton.style.display = 'block'
      const nextAnimation = () => {
        if (standModel.getAttribute('visible') == true) {
            standModel.setAttribute('visible', 'false')
            animateModel.setAttribute('visible', 'true')
            nextButton.innerHTML = 'Stand'
        }
        else {
            standModel.setAttribute('visible', 'true')
            animateModel.setAttribute('visible', 'false')
            nextButton.innerHTML = 'Dance'
        }
      }
      nextButton.onclick = nextAnimation  // Switch to the next animation when the button is pressed.
    },
})