'use strict'

const btnOpen = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal__close-btn')
const body = document.body



const openModal = () => {
    modal.classList.add('modal--active')
    body.classList.add('body--fixed')
}
const closeModal = () => {
    modal.classList.remove('modal--active')
    body.classList.remove('body--fixed')
}



btnOpen.addEventListener('click', () =>{
    openModal()
})

btnClose.addEventListener('click', () =>{
    closeModal()
})
modal.addEventListener('click', event =>{
    event.target.classList.remove('modal--active')
})
document.addEventListener('keyup', event =>{
    if(event.code == 'Escape'){
        closeModal()
    }
})