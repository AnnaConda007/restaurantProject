const modal = ({ trigerSelector, modalSelector, modalClose, display }) => {
  const modalBtn = document.querySelectorAll(trigerSelector);
  const modalWindow = document.querySelector(modalSelector);
  const allModal = document.querySelectorAll('.modal');
  const closeModal = document.querySelectorAll(modalClose);
  const closeAllModals = () => {
    allModal.forEach((modal) => {
      modal.style.display = 'none';
      document.body.classList.remove('hidden');
    });
  };

  modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalWindow.style.display = display;
      document.body.classList.add('hidden');
    });
  });

  closeModal.forEach((btn) => {
    btn.addEventListener('click', closeAllModals);
  });

  if (modalWindow) {
    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow) {
        closeAllModals();
      }
    });
  }

};
export default modal


