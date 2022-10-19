let uploadContainers = [...document.querySelectorAll('.upload1, .upload2')].slice(0,2)

uploadContainers.forEach(container => {
    const linkedContainer = document.getElementsByClassName(container.getAttribute('class'))[1]
    container.querySelector("input[type=file]").addEventListener('change', (event) => {
        linkedContainer.querySelector('img').setAttribute('src', './img/edit.jpg')
        const checkImg = document.createElement('img')
        checkImg.setAttribute('src', './img/chek.jpg')
        linkedContainer.querySelector('.check').append(checkImg)
    })
})


