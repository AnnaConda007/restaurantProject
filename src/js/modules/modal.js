const modal = (trigerSelector, modalSelector, modalClose, display) => {
  const modalBtn = document.querySelectorAll(trigerSelector)
  const modalWindow = document.querySelector(modalSelector)
  const allModal = document.querySelectorAll('.modal')
  const closeModal = document.querySelector(modalClose)

  modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalWindow.style.display = display
      document.body.style.overflow = 'hidden'
    })
  })

  closeModal.addEventListener('click', () => {
    allModal.forEach((modal) => {
      modal.style.display = 'none'
      document.body.style.overflow = 'auto'
    })
  })
}
export default modal
