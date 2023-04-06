const modal = ({trigerSelector, modalSelector, modalClose, display}) => {
  const modalBtn = document.querySelectorAll(trigerSelector)
  const modalWindow = document.querySelector(modalSelector)
  const allModal = document.querySelectorAll('.modal')
  const closeModal = document.querySelector(modalClose)

  modalBtn.forEach((btn) => {/*item-order повторяется дважды, так как форма вызывается с 2 разных мест */
    btn.addEventListener('click', () => {
      modalWindow.style.display = display
      document.body.classList.add("hidden")
    })
  })

  closeModal.addEventListener('click', () => {
    allModal.forEach((modal) => { /*.modal используется при открытии формы через всплывающее окно */
      modal.style.display = 'none'
      document.body.classList.remove("hidden")
    })
  })
}
export default modal
