AFRAME.registerComponent('next-button', {
    init() {
      const animateModel = document.getElementById('model1')
      const standModel = document.getElementById('model2')
      const nextButton = document.getElementById('nextbutton')

      nextButton.style.display = 'block'

      let idx = 1  // Start with the 2nd animation because the model starts with idle animation
      const nextAnimation = () => {
        if (standModel.getAttribute('visible') == true) {
            standModel.setAttribute('visisble', 'false')
            animateModel.setAttribute('visible', 'true')
            nextButton.innerHTML = 'Stand'
        }
        else {
            standModel.setAttribute('visisble', 'true')
            animateModel.setAttribute('visible', 'false')
            nextButton.innerHTML = 'Dance'
        }
      }
      nextButton.onclick = nextAnimation  // Switch to the next animation when the button is pressed.
    },
  })