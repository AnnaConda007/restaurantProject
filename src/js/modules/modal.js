const modal = ({trigerSelector, modalSelector, modalClose, display}) => {
  const modalBtn = document.querySelectorAll(trigerSelector)
  const modalWindow = document.querySelector(modalSelector)
  const allModal = document.querySelectorAll('.modal')
  const closeModal = document.querySelectorAll(modalClose)

  modalBtn.forEach((btn) => { 
    btn.addEventListener('click', () => {
      modalWindow.style.display = display
      document.body.classList.add("hidden")
    })
  })

  closeModal.forEach(btn=>{
btn.addEventListener('click', () => {
  allModal.forEach((modal) => {  
    modal.style.display = 'none'
    document.body.classList.remove("hidden")
  })
})
  })
  
}
export default modal
