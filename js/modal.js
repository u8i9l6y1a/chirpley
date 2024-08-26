const body              = document.body;
const modalBody         = document.querySelector(".modal__body");
const openModal         = document.querySelector(".header__nav-btn");
const closeModal        = document.querySelector(".modal__toolbar-control_close");
const modalOverlay      = document.querySelector(".modal__overlay");
const modalItem         = document.querySelector(".modal__item");
const modalMain         = document.querySelector(".modal-main");
const modalApps         = document.querySelector(".modal-apps");
const modalFaq          = document.querySelector(".modal-faq");
const modalWallet       = document.querySelector(".modal-wallet");
const modalBtnFaq       = document.querySelector(".modal__toolbar-control_faq");
const modalFaqBtnWallet = document.querySelector(".modal__faq-link_wallet");
const modalAllApps      = document.querySelector(".modal-main__desktop-app-link_mini");
const modalBackFaq      = document.querySelector(".back-faq");
const modalBackWallet   = document.querySelector(".back-wallet");
const modalBackApps     = document.querySelector(".back-apps");
const modalSearchApp    = document.querySelector(".modal-apps__search");
const modalAppName      = document.querySelectorAll(".modal-apps__app-name");
const modalAppItem      = document.querySelectorAll(".modal-apps__app-item");
const copyLink          = document.querySelector(".bx-copy");
const alertingCopyLink  = document.querySelector(".modal__alerting");

export function modal() {

  let disableScroll = function () {
    body.classList.add("body-disable-scroll");
  };

  let enableScroll = function () {
    body.classList.remove("body-disable-scroll");
  };

  openModal.addEventListener("click", (e) => {
    modalOverlay.classList.add("modal__overlay--active");
    modalItem.classList.add("modal__item--active");
    disableScroll();
  });

  closeModal.addEventListener("click", (e) => {
    modalOverlay.classList.remove("modal__overlay--active");
    modalItem.classList.remove("modal__item--active");
    enableScroll();
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove("modal__overlay--active");
      modalItem.classList.remove("modal__item--active");
      enableScroll();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      modalOverlay.classList.remove("modal__overlay--active");
      modalItem.classList.remove("modal__item--active");
      enableScroll();
    }
  });

  modalBtnFaq.addEventListener("click", () => {
    modalMain.classList.remove("modal-main--active");
    modalWallet.classList.remove("modal-wallet--active");
    modalApps.classList.remove("modal-apps--active");
    modalFaq.classList.add("modal-faq--active");
    modalBody.style.height = "34vw";
  });

  modalBackFaq.addEventListener("click", () => {
    modalFaq.classList.remove("modal-faq--active");
    modalMain.classList.add("modal-main--active");
    modalBody.style.height = "35.5vw";
  });

  modalFaqBtnWallet.addEventListener("click", () => {
    modalFaq.classList.remove("modal-faq--active");
    modalWallet.classList.add("modal-wallet--active");
    modalBody.style.height = "30.35vw";
  });

  modalBackWallet.addEventListener("click", () => {
    modalWallet.classList.remove("modal-wallet--active");
    modalFaq.classList.add("modal-faq--active");
    modalBody.style.height = "34vw";
  });

  modalAllApps.addEventListener("click", () => {
    modalMain.classList.remove("modal-main--active");
    modalApps.classList.add("modal-apps--active");
    modalBody.style.height = "36.6vw";
  });

  modalBackApps.addEventListener("click", () => {
    modalApps.classList.remove("modal-apps--active");
    modalMain.classList.add("modal-main--active");
    modalBody.style.height = "35.5vw";
  });

  modalSearchApp.addEventListener("keyup", () => {
    let valueModalSearchApp = modalSearchApp.value.trim();
    if (valueModalSearchApp != "") {
      modalAppName.forEach((item, index) => {
        if (item.innerText.includes(valueModalSearchApp)) {
          modalAppItem[index].classList.remove("modal-apps__app-item--hide");
        } else {
          modalAppItem[index].classList.add("modal-apps__app-item--hide");
        }
      });
    } else {
      modalAppName.forEach((item, index) => {
        if (item.innerText.includes(valueModalSearchApp)) {
          modalAppItem[index].classList.remove("modal-apps__app-item--hide");
        }
      });
    }
  });

  copyLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-copy")) {
      navigator.clipboard.writeText("!").then(() => {
        alertingCopyLink.classList.add("modal__alerting--active");
        setTimeout(() => {
          alertingCopyLink.classList.remove("modal__alerting--active");
        }, 1500);
      });
    }
  });

}