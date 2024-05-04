function veda_fn_a75e1026a3c7436487fd1f514e0e4e23 () {
      
  if (window.veda_fn_a75e1026a3c7436487fd1f514e0e4e23Cleanup === undefined) {
    window.veda_fn_a75e1026a3c7436487fd1f514e0e4e23Cleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_a75e1026a3c7436487fd1f514e0e4e23Cleanup.cleanup();

      try {
        const uniqueId = "id_cdad3a85-a06d-43e8-9daa-3da89a0c66c5";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_a75e1026a3c7436487fd1f514e0e4e23();
function veda_fn_7a93969acdbc45849a14ccf95fab56ff () {
      
  if (window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup === undefined) {
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.cleanup();

      try {
        const uniqueId = "id_85c4d86f-029c-4de5-9e44-b8dd39d7951a";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          let loading = false;
const {
  cart,
  productWishList,
  productCompare,
  photoSwipe,
  message,
  toggleGroup,
  collapse,
  swiper,
  imageZoom,
  sticky,
} = veda.plugins;
const {
  objectParse,
  imageUrl,
  getObjectAttributes,
  random,
  store,
  findAtomicCss,
} = veda.utils;
let iconType = "";
const productStickyEl = container.querySelector(".veda-product-sticky");
const wishListDataEl = container.querySelector(".product-card-data-js");
const productData = objectParse(wishListDataEl.textContent);
let initialPickUp = false;
store.create("@visiblePickup", {
  initialState: false,
});
sticky.subscribe((height) => {
  productStickyEl.style.top = `${height + 10}px`;
});
let unsubscribePickUp = () => {};

store.create("@@productRecentlyViewed", {
  initialState: [],
  useStorage: true,
});
let productRecentlyViewed = store.get("@@productRecentlyViewed");
if (productRecentlyViewed?.length) {
  productRecentlyViewed = productRecentlyViewed.filter(
    (item) => item !== `id:${productData.id}`
  );
  store.set("@@productRecentlyViewed", () => {
    return [`id:${productData.id}`, ...productRecentlyViewed];
  });
} else {
  store.set("@@productRecentlyViewed", () => {
    return [`id:${productData.id}`];
  });
}
function initAddonMobile() {
  const addonDesktop = container.querySelector(
    ".veda-product-information-addon-desktop"
  );
  const addonDesktopContent = container.querySelector(
    ".veda-product-information-addon-desktop-content"
  );
  const addonMobile = container.querySelector(
    ".veda-product-information-addon-mobile"
  );
  if (window.innerWidth < 992) {
    addonMobile.innerHTML = "";
    addonMobile.insertAdjacentElement("afterbegin", addonDesktopContent);
  } else {
    addonMobile.innerHTML = "";
    addonDesktop.innerHTML = "";
    addonDesktop.insertAdjacentElement("afterbegin", addonDesktopContent);
  }
}

initAddonMobile();
window.addEventListener("resize", initAddonMobile);
class PageProduct {
  constructor() {
    this.data = productData;
    this.option = productData.selected_or_first_available_variant.options;
    this.variantId = productData.selected_or_first_available_variant.id;
    this.toggleGroup = [];
    this.pickupLoading = false;
    this.swipper = swiper(container);
    this.init();
  }

  async handleClickDraw() {
    if (builderMode) {
      const pickUpEl = container.querySelector(".pickup-js");
      const overlayEl = pickUpEl.querySelector(".pickup-close-js");
      overlayEl.classList.remove("pe:none", "op:0");
      initialPickUp = true;
      store.set("@visiblePickup", true);
    } else {
      initialPickUp = true;
      store.set("@visiblePickup", true);
    }
  }

  handleUpdateJsPickUp(el) {
    const btnPickUpCloseEls = el.querySelectorAll(".pickup-close-js");
    btnPickUpCloseEls.forEach((btnPickUpCloseEl) => {
      const handleClick = () => {
        store.set("@visiblePickup", false);
      };
      btnPickUpCloseEl.addEventListener("click", handleClick);
      window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
        btnPickUpCloseEl.removeEventListener("click", handleClick);
      });
    });
  }

  async updatePickUp() {
    const btnTogglePickUp = container.querySelector(".veda-pickup-toggle-js");
    if (!!btnTogglePickUp) {
      try {
        const res = await fetch(`${this.data.url}?variant=${this.variantId}`);
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const pickupContainerEl = doc.querySelector(".pickup-container-js");
        const pickupInformationEl = doc.querySelector(
          ".pickup-availability-information"
        );
        const newContainerHtml = pickupContainerEl.innerHTML;
        const newInformationHtml = pickupInformationEl.innerHTML;
        const realEl = container.querySelector(".pickup-container-js");
        const realInformationEl = container.querySelector(
          ".pickup-availability-information"
        );
        realEl.innerHTML = newContainerHtml;
        realInformationEl.innerHTML = newInformationHtml;
        const testEl = document.querySelector(".pickup-draw-js");
        if (!testEl) {
          const contentPickUp = document.createElement("div");
          contentPickUp.className = "pickup-draw-js pos:relative z:9999999";
          const pickUpContentEl = container.querySelector(".pickup-js");
          contentPickUp.innerHTML = pickUpContentEl.innerHTML;
          handleUpdateJsPickUp(contentPickUp);
        } else {
          const pickUpContentEl = container.querySelector(".pickup-js");
          testEl.innerHTML = pickUpContentEl.innerHTML;
          handleUpdateJsPickUp(testEl);
        }
        const currentBtn = realInformationEl.querySelector(
          ".veda-pickup-toggle-js"
        );
        currentBtn.addEventListener("click", this.handleClickDraw);
        window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
          currentBtn.removeEventListener("click", this.handleClickDraw);
        });
        this.pickupLoading = false;
        findAtomicCss(newContainerHtml);
        findAtomicCss(newInformationHtml);
      } catch (e) {
        console.log(e);
      }
    }
  }

  handleChangeVariant(variant, changeSlide) {
    const btnAddCart = container.querySelector(".product-card-add-js");
    const btnBuyNow = container.querySelector(".btn-buy-now-js");
    if (!!variant) {
      if (builderMode != true) {
        window.history.replaceState(
          {},
          "",
          `${this.data.url}?variant=${variant.id}`
        );
      }
      if (variant.available) {
        btnAddCart?.classList?.remove(..."pe:none op:0.5".split(" "));
        const btnCartText = btnAddCart?.querySelector(".veda-button-text");
        const cartAvailableText = container.getAttribute("data-available-text");
        if (!!btnCartText && cartAvailableText) {
          btnCartText.textContent = cartAvailableText;
        }
      } else if (!btnAddCart?.classList?.contains("pe:none")) {
        btnAddCart?.classList?.add(..."pe:none op:0.5".split(" "));
        const btnCartText = btnAddCart?.querySelector(".veda-button-text");
        const cartUnavailableText = container.getAttribute(
          "data-unavailable-text"
        );
        if (!!btnCartText && cartUnavailableText) {
          btnCartText.textContent = cartUnavailableText;
        }
      }
      btnBuyNow?.parentNode?.classList?.remove(..."pe:none op:0.5".split(" "));
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      availableEl?.classList?.remove("d:none");
      skuEl?.classList?.remove("d:none");
      if (priceEl?.classList?.contains("d:none")) {
        priceEl?.classList?.remove("d:none");
      }
      const currentSelectedIdEl = container.querySelector(
        ".veda-product-variant-select-id-js"
      );
      const slideEls = container.querySelectorAll("[data-media-id]");
      if (slideEls.length) {
        const variantPosition = Array.from(slideEls).findIndex(
          (slideEl) =>
            slideEl.getAttribute("data-media-id") == variant?.featured_media?.id
        );
        if (changeSlide && variantPosition != -1) {
          this.swipper?.slideTo(variantPosition);
        }
      }
      this.variantId = variant.id;
      currentSelectedIdEl.value = `${this.variantId}`;
      if (!builderMode && !this.pickupLoading) {
        this.pickupLoading = true;
        this.updatePickUp();
      }
      // change available
      if (!!availableEl) {
        const availableTitle = availableEl.getAttribute("data-title");
        const availableInStockText =
          availableEl.getAttribute("data-instock-text");
        const availableOutOfStockText = availableEl.getAttribute(
          "data-outofstock-text"
        );
        if (variant.available && variant.inventory_quantity != 0) {
          const inStockText = availableInStockText.replace(
            /\d+/g,
            `${variant.inventory_quantity}`
          );
          availableEl.textContent = `${availableTitle}: ${inStockText}`;
        } else {
          availableEl.textContent = `${availableTitle}: ${availableOutOfStockText}`;
        }
      }
      // change price
      if (!!priceEl) {
        const onSaleEl = priceEl.querySelector(".product-price-on-sale-js");
        const notSaleEl = priceEl.querySelector(".product-price-not-sale-js");
        const regularPriceValue =
          Number(`${variant.compare_at_price}`.replaceAll(/\W/g, "")) | 0;
        const salePriceValue =
          Number(`${variant.price}`.replaceAll(/\W/g, "")) | 0;
        if (
          Number(variant.veda_compare_at_price) > Number(variant.veda_price)
        ) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.innerHTML = variant.price;
          salePrice.innerHTML = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.innerHTML = variant.price;
        }
      }
      if (!!skuEl && !!variant.sku) {
        skuEl.textContent = `SKU: ${variant.sku}`;
      }
      this.data?.options_with_values?.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        if (!!titleEl) {
          titleEl.textContent = `${option.name}: ${
            this.option[option.position - 1]
          }`;
        }
      });
    } else {
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      if (!btnAddCart?.classList?.contains("pe:none")) {
        btnAddCart?.classList?.add(..."pe:none op:0.5".split(" "));
        const btnCartText = btnAddCart?.querySelector(".veda-button-text");
        const cartUnavailableText = container.getAttribute(
          "data-unavailable-text"
        );
        if (!!btnCartText && cartUnavailableText) {
          btnCartText.textContent = cartUnavailableText;
        }
      }
      if (!!btnBuyNow && !btnBuyNow?.classList?.contains?.("pe:none")) {
        btnBuyNow.parentNode.classList.add(..."pe:none op:0.5".split(" "));
      }
      if (!availableEl?.classList?.contains?.("d:none") && !!availableEl) {
        availableEl?.classList?.add("d:none");
      }
      if (!!skuEl && !skuEl?.classList?.contains("d:none")) {
        skuEl?.classList?.add("d:none");
      }
      if (!priceEl?.classList?.contains("d:none") && !!priceEl) {
        priceEl.classList.add("d:none");
      }
      this.data?.options_with_values?.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        titleEl.textContent = `${option.name}: ${
          this.option[option.position - 1]
        }`;
      });
    }
  }

  updateVariantStatuses() {
    const selectedOptionOneVariants = this.data.variants.filter(
      (variant) => this.option[0] === variant.options[0]
    );
    const toggleEls = container.querySelectorAll(".veda-toggle-group");
    toggleEls.forEach((option, index) => {
      if (index === 0) return;
      const optionInputs = [
        ...option.querySelectorAll(".veda-toggle-group__item"),
      ];
      const previousOptionSelected = this.option[index - 1];
      const availableOptionInputsValue = selectedOptionOneVariants
        .filter(
          (variant) =>
            variant.available &&
            variant.options[`${index - 1}`] === previousOptionSelected
        )
        .map((variantOption) => variantOption.options[`${index}`]);
      optionInputs.forEach((input) => {
        if (
          availableOptionInputsValue.includes(
            input.getAttribute("data-tooltip-text")
          )
        ) {
          input.style.display = "block";
        } else {
          input.style.display = "none";
        }
      });
    });
  }

  handleChangeSlide() {
    const checkEl = container.querySelector(".veda-toggle-group-1");
    if (!this.data.has_only_default_variant && !!checkEl) {
      this.data.options_with_values.forEach((option, index) => {
        const activeIndex = option.values.findIndex(
          (item) => item == this.option[index]
        );
        this.toggleGroup[index].go(activeIndex);
      });
    }
  }

  handleSelectOption() {
    const checkEl = container.querySelector(".veda-toggle-group-1");
    if (!this.data.has_only_default_variant && !!checkEl) {
      this.data.options_with_values.forEach((option) => {
        const position = Number(option.position) - 1;
        const currentActiveIndex = option.values.findIndex(
          (item) => item === option.selected_value
        );
        const el = container.querySelector(
          `.veda-toggle-group-${option.position}`
        );
        const itemDataCss = getObjectAttributes(
          el.getAttribute("data-item-css")
        );
        const itemActiveDataCss = getObjectAttributes(
          el.getAttribute("data-item-active-css")
        );
        let classItemAdd = "c:color-light bgc:color-gray9";
        let classItemRemove = "c:color-gray9 bgc:color-gray2";
        if (option.name === "Color") {
          classItemAdd = "bd:1px_solid_color-gray9";
          classItemRemove = "bd:1px_solid_color-gray3";
        }
        const currentToggle = toggleGroup(el, {
          activeIndex: Number(currentActiveIndex),
          onChange: (index) => {
            const itemEls = el.querySelectorAll(".veda-toggle-group__item");
            this.option.splice(position, 1, option.values[index]);
            const currentVariant = this.data.variants.filter(
              (variant) =>
                variant.options.length === this.option.length &&
                variant.options.every((value, index) => {
                  return value === this.option[index];
                })
            )[0];
            this.handleChangeVariant(currentVariant, true);
            this.updateVariantStatuses();
            itemEls.forEach((itemEl, currentIndex) => {
              if (index != currentIndex) {
                itemEl.setAttribute("data-css", itemDataCss["data-css"]);
              }
            });
            itemEls[index].setAttribute(
              "data-css",
              itemActiveDataCss["data-css"]
            );
          },
          addClassName: classItemAdd,
          removeClassName: classItemRemove,
        });
        this.toggleGroup = [...this.toggleGroup, currentToggle];
      });
    }
  }

  checkHasItem(productData, storeData) {
    return storeData?.some((item) => item.id === productData.id);
  }

  changeStatus(el, hasItem) {
    if (!el) {
      return;
    }
    /** @type HTMLElement */
    const iconEl = el.querySelector('i[class^="fa"]');
    if (!iconType) {
      iconType = Array.from(iconEl.classList).find((className) =>
        /fa\w/g.test(className)
      );
    }
    if (hasItem()) {
      el.setAttribute("data-tooltip-active", true);
      el.style.setProperty("color", "var(--color-primary)", "important");
      if (iconType.includes("fa")) {
        iconEl.classList.remove(iconType);
        iconEl.classList.add("fas");
      }
    } else {
      el.setAttribute("data-tooltip-active", false);
      el.style.removeProperty("color");
      if (iconType.includes("fa")) {
        iconEl.classList.remove("fas");
        iconEl.classList.add(iconType);
      }
    }
    return hasItem;
  }

  handleQuantity() {
    const quantityEl = container.querySelector(".veda-counter");
    if (!quantityEl) {
      return;
    }
    veda.plugins.counter(container, {
      min: 1,
      max: Infinity,
      step: 1,
      value: 1,
      onChange: (value) => {},
    });
  }

  handleWishList() {
    const btnWishListEl = container.querySelector(".wishlist-toggle-js");
    const wishListDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(wishListDataEl.textContent);
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productWishList.getData());
    this.changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      const hasItem = () =>
        this.checkHasItem(productData, productWishList.getData());
      const addText = btnWishListEl.getAttribute("data-add-text");
      const removeText = btnWishListEl.getAttribute("data-remove-text");
      productWishList.toggleWishList(productData);
      this.changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        message.success(addText);
      } else {
        message.error(removeText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    let unsubscribeWishList = productWishList.subscribe((state) => {
      const btnWishListEl = container.querySelector(".wishlist-toggle-js");
      const wishListDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(wishListDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnWishListEl, hasItem);
    });
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      unsubscribeWishList();
      btnWishListEl.removeEventListener("click", handleClick);
    });
  }

  handleCompare() {
    const btnCompareEl = container.querySelector(".compare-toggle-js");
    const compareDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const ratingCustom = container.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productCompare.getData());
    this.changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const addText = btnCompareEl.getAttribute("data-add-text");
      const removeText = btnCompareEl.getAttribute("data-remove-text");
      this.changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        addText && message.success(addText);
      } else {
        removeText && message.error(removeText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
    let unsubscribeCompare = productCompare.subscribe((state) => {
      const btnCompareEl = container.querySelector(".compare-toggle-js");
      const compareDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnCompareEl, hasItem);
    });
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      unsubscribeCompare();
    });
  }

  addCartSuccess(el) {
    const check = `
      <svg class="checkmark w:14px h:14px mr:10px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
    el.insertAdjacentHTML("afterbegin", check);
    setTimeout(() => {
      const checkEl = el.querySelector(".checkmark");
      const iconEl = el.querySelector(".product-cart-add-icon-js");
      if (!!checkEl) {
        checkEl.remove();
        iconEl?.style?.removeProperty("display");
      }
      loading = false;
    }, 2000);
  }

  handleAddCart() {
    const btnAddCart = container.querySelector(".product-card-add-js");
    if (!btnAddCart) {
      return;
    }
    const handleClick = () => {
      if (!loading) {
        const iconEl = btnAddCart.querySelector(".product-cart-add-icon-js");
        const quantityEl =
          container.querySelector(
            "input[name='quantity']:checked.veda-buy_more_save-more-quantity"
          ) || container.querySelector(".veda-product-quantity-js");
        loading = true;
        const spinner =
          "<div class='veda-spinner bdw:2px mr:10px' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
        btnAddCart.insertAdjacentHTML("afterbegin", spinner);
        if (iconEl) {
          iconEl.style.display = "none";
        }
        if (builderMode) {
          setTimeout(() => {
            const currentSpinner = btnAddCart.querySelector(".veda-spinner");
            currentSpinner.remove();
            this.addCartSuccess(btnAddCart);
          }, 2000);
        } else {
          let addToCartForm = container.querySelector("#product-add-cart");
          let formData = new FormData(addToCartForm);
          fetch(window.Shopify.routes.root + "cart/add.js", {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              this.addCartSuccess(btnAddCart);
              return response.json();
            })
            .catch((error) => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              loading = false;
              message.error(error?.description);
            });
        }
      }
    };
    btnAddCart.addEventListener("click", handleClick);
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      btnAddCart.removeEventListener("click", handleClick);
    });
  }

  handleViewing() {
    const viewingEl = container.querySelector(".quantity-viewing-js");
    if (!viewingEl) {
      return;
    }
    const min = viewingEl.getAttribute("data-min");
    const max = viewingEl.getAttribute("data-max");
    const text = viewingEl.getAttribute("data-text");
    const time = viewingEl.getAttribute("data-time");
    const intervalID = setInterval(() => {
      viewingEl.textContent = `${text.replace(
        /\d/g,
        `${random(Number(min), Number(max))}`
      )}`;
    }, Number(time) * 1000);
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      clearInterval(intervalID);
    });
  }

  handleDOM() {
    this.handleSelectOption();
    this.handleQuantity();
    this.handleWishList();
    this.handleCompare();
    this.handleAddCart();
    this.handleViewing();
    this.updateVariantStatuses();
    const collapseContainerEl = container.querySelector(
      ".veda-page-product-js"
    );
    collapse(collapseContainerEl, {
      activeClass: "collapse-active",
    });
  }

  init() {
    this.handleDOM();
    this.handleChangeSlide();
  }
}
new PageProduct();
const photo = photoSwipe({
  gallery: ".veda-photo-swipe",
});
const destroyZoom = imageZoom(container);
window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
  photo();
  destroyZoom();
  window.removeEventListener("resize", initAddonMobile);
});

async function handleClickDraw() {
  if (builderMode) {
    const pickUpEl = container.querySelector(".pickup-js");
    const overlayEl = pickUpEl.querySelector(".pickup-close-js");
    overlayEl.classList.remove("pe:none", "op:0");
    initialPickUp = true;
    store.set("@visiblePickup", true);
  } else {
    initialPickUp = true;
    store.set("@visiblePickup", true);
  }
}

function handleUpdateJsPickUp(el) {
  const btnPickUpCloseEls = el.querySelectorAll(".pickup-close-js");
  btnPickUpCloseEls.forEach((btnPickUpCloseEl) => {
    const handleClick = () => {
      store.set("@visiblePickup", false);
    };
    btnPickUpCloseEl.addEventListener("click", handleClick);
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      btnPickUpCloseEl.removeEventListener("click", handleClick);
    });
  });
}

async function renderPickUp() {
  const btnTogglePickUp = container.querySelector(".veda-pickup-toggle-js");
  if (!btnTogglePickUp) {
    return;
  }

  if (builderMode) {
    const pickUpEl = container.querySelector(".pickup-js");
    const overlayEl = pickUpEl.querySelector(".pickup-close-js");
    const unsubscribePickUp = store.subscribe("@visiblePickup", (visible) => {
      if (visible) {
        if (initialPickUp) {
          overlayEl.classList.remove("pe:none", "op:0");
          const pickUpContaierEls = pickUpEl.querySelectorAll(
            ".pickup-container-js"
          );
          pickUpContaierEls.forEach((pickUpContaier) =>
            pickUpContaier.classList.add("trf:translateX(0)!")
          );
        } else {
          initialPickUp = true;
        }
      } else {
        const pickUpContaierEls = pickUpEl.querySelectorAll(
          ".pickup-container-js"
        );
        if (!overlayEl.classList.contains("op:0")) {
          overlayEl.classList.add("op:0", "pe:none");
        }
        const id = setTimeout(() => {
          pickUpContaierEls.forEach((pickUpContaier) => {
            pickUpContaier.classList.remove("trf:translateX(0)!");
          });
          clearTimeout(id);
        }, 0);
      }
    });
    handleUpdateJsPickUp(container);
    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      unsubscribePickUp();
    });
  } else {
    const pickUpInitialized = document.querySelector(".pickup-draw-js");
    if (!pickUpInitialized) {
      const contentPickUp = document.createElement("div");
      contentPickUp.className = "pickup-draw-js pos:relative z:9999999";
      const pickUpContentEl = container.querySelector(".pickup-js");
      contentPickUp.innerHTML = pickUpContentEl.innerHTML;
      const body = document.querySelector("body");
      body.append(contentPickUp);
      unsubscribevisiblePickup = store.subscribe(
        "@visiblePickup",
        (visible) => {
          if (visible) {
            const contentPickUpEl = document.querySelector(".pickup-draw-js");
            const overlayEl = contentPickUpEl.querySelector(".pickup-close-js");
            const id = setTimeout(() => {
              overlayEl.classList.remove("op:0", "pe:none");
              const pickUpContaierEls = contentPickUpEl.querySelectorAll(
                ".pickup-container-js"
              );
              pickUpContaierEls.forEach((pickUpContaier) => {
                if (!pickUpContaier.classList.contains("trf:translateX(0)!")) {
                  pickUpContaier.classList.add("trf:translateX(0)!");
                }
              });
              clearTimeout(id);
            }, 100);
            window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            const contentPickUpEl = document.querySelector(".pickup-draw-js");
            const pickUpContaierEls = contentPickUpEl.querySelectorAll(
              ".pickup-container-js"
            );
            const overlayEl = contentPickUpEl.querySelector(".pickup-close-js");
            if (!overlayEl.classList.contains("op:0")) {
              overlayEl.classList.add("op:0", "pe:none");
            }
            pickUpContaierEls.forEach((pickUpContaier) => {
              pickUpContaier.classList.remove("trf:translateX(0)!");
            });
          }
        }
      );
      contentPickUp.innerHTML = pickUpContentEl.innerHTML;
      handleUpdateJsPickUp(contentPickUp);
    }

    window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
      unsubscribevisiblePickup();
    });
  }
  btnTogglePickUp.addEventListener("click", handleClickDraw);
  window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
    btnTogglePickUp.removeEventListener("click", handleClickDraw);
  });
}
renderPickUp();

const { createIntersectionObserver } = veda.utils;

const intersectionObserver = createIntersectionObserver({
  rootMargin: "0px",
});
const videoEls = container.querySelectorAll("video");
videoEls.forEach((videoEl) => {
  function handleVideo(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
    });
  }
  intersectionObserver.addListener(handleVideo, videoEl);
  window.veda_fn_7a93969acdbc45849a14ccf95fab56ffCleanup.push(() => {
    intersectionObserver.removeListener(handleVideo);
  });
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_7a93969acdbc45849a14ccf95fab56ff();
function veda_fn_bcbd91adac66433dadf22d6efa4c3719 () {
      
  if (window.veda_fn_bcbd91adac66433dadf22d6efa4c3719Cleanup === undefined) {
    window.veda_fn_bcbd91adac66433dadf22d6efa4c3719Cleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_bcbd91adac66433dadf22d6efa4c3719Cleanup.cleanup();

      try {
        const uniqueId = "id_66d27f2a-ce0d-4685-860c-ecb4f90acb45";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { getObjectAttributes, storage } = veda.utils;
const tabEl = container.querySelector(".veda-tabs");
const cssLink = getObjectAttributes(tabEl.getAttribute("tabs-data-css"));
const cssActiveLink = getObjectAttributes(
  tabEl.getAttribute("tabs-data-css-active")
);
const tabLinkEls = tabEl.querySelectorAll(".veda-tabs__link");
const tabCollapseEls = tabEl.querySelectorAll(".veda-tabs__collapse-button");

function handleChange(els, currentIndex) {
  els.forEach((el, index) => {
    if (index != currentIndex) {
      el.setAttribute("data-css", cssLink["data-css"]);
    }
  });
  els[currentIndex].setAttribute("data-css", cssActiveLink["data-css"]);
}

const instance = veda.plugins.tabs(tabEl, {
  activeIndex: Number(storage.getItem("current-tab-detail")) || 0,
  onChange: (currentIndex) => {
    handleChange(tabLinkEls, currentIndex);
    handleChange(tabCollapseEls, currentIndex);
    if (builderMode) {
      storage.setItem("current-tab-detail", `${currentIndex}`);
    }
  },
});
if (builderMode) {
  instance.go(Number(storage.getItem("current-tab-detail")) || 0);
}
window.veda_fn_bcbd91adac66433dadf22d6efa4c3719Cleanup.push(() => {
  instance.destroy();
});

function handleActiveAddOn() {
  const paneItems = container.querySelectorAll(".veda-tabs__pane");
  const currentIndexTab =
    Array.from(paneItems)?.findIndex(
      (item) => !!item?.querySelector(".veda-review_widget")
    ) || 0;
    if(Array.from(paneItems)?.findIndex(
      (item) => !!item?.querySelector(".veda-review_widget")
    ) != -1) {
      const starRatingEls = document.querySelectorAll(
        ".veda-review-addon_rating[href='veda-review-addon']"
      );
      starRatingEls.forEach((starRatingEl) => {
        starRatingEl.removeAttribute("href");
      });
    }
  const ratingItem = document.querySelector(".veda-review_rating");
  const reviewItem = document.querySelector(".veda-review_widget");
  if (!!ratingItem && !!reviewItem) {
    function handleClickAddon() {
      const currentSection = reviewItem.closest("section");
      if (instance.index != currentIndexTab) {
        instance.go(Number(currentIndexTab));
      }
      const id = setTimeout(() => {
        if (!!currentSection) {
          window.scrollTo({
            top: currentSection.getBoundingClientRect().top,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: reviewItem.getBoundingClientRect().top,
            behavior: "smooth",
          });
        }
        clearTimeout(id);
      }, 300);
    }
    ratingItem.addEventListener("click", handleClickAddon, true);
    window.veda_fn_bcbd91adac66433dadf22d6efa4c3719Cleanup.push(() => {
      ratingItem.removeEventListener("click", handleClickAddon, true);
    });
  }
}
handleActiveAddOn();

if (builderMode) {
  function handleMessage(event) {
    if (event.data?.type == "Veda:AddonToggle") {
      const currentSection = document.querySelector(
        `[data-id="${event.data?.payload?.sectionIds?.[0]}"`
      );
      if (!!currentSection) {
        const paneItems = container.querySelectorAll(".veda-tabs__pane");
        const currentIndexTab = Array.from(paneItems)?.findIndex(
          (item) =>
            !!item?.querySelector(`[data-id="${event.data?.payload?.id}"]`)
        );
        if (currentIndexTab) {
          if (instance.index != currentIndexTab) {
            instance.go(Number(currentIndexTab));
          }
        }
        const id = setTimeout(() => {
          const currentSection1 = document.querySelector(
            `[data-id="${event.data?.payload?.sectionIds?.[0]}"`
          );
          window.scrollTo({
            top: currentSection1.getBoundingClientRect().top,
            behavior: "smooth",
          });
          clearTimeout(id);
        }, 300);
      }
    }
  }
  window.addEventListener("message", handleMessage);
  window.veda_fn_bcbd91adac66433dadf22d6efa4c3719Cleanup.push(() => {
    window.removeEventListener("message", handleMessage);
  });
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_bcbd91adac66433dadf22d6efa4c3719();
function veda_fn_53f14349a6ce4f7e864de3eb0017cf78 () {
      
  if (window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup === undefined) {
    window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.cleanup();

      try {
        const uniqueId = "id_1db14417-3782-4095-81fd-6e24a0d94a56";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  swiper,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:5px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl.style.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px' style='--spinner-color: var(--color-gray9); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          iconEl.style.display = "none";
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const quickViewDataEl = container.querySelector(".quickview-data-js");
      const quickViewData = objectParse(quickViewDataEl.textContent);
      console.log(quickViewDataEl, quickViewData);
      const availableEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".available-product-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.innerHTML = variant.price;
          salePrice.innerHTML = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.innerHTML = variant.price;
        }
      }
      if (!!availableEl) {
        if (variant.available) {
          if (variant.inventory_quantity > 1) {
            const inStockText = quickViewData.in_stock.replace(
              /\d/g,
              variant.inventory_quantity
            );
            const availableCss =
              availableEl.parentNode.getAttribute("data-instock");
            availableEl.textContent = inStockText;
            availableEl.parentNode.classList.remove(
              ..."c:#139f62 c:#e4a72d c:#eb4747".split(" ")
            );
            availableEl.parentNode.classList.add("c:#139f62");
            if (!!availableCss) {
              availableEl.parentNode.setAttribute(
                "data-css",
                getObjectAttributes(availableCss)["data-css"]
              );
            }
          } else {
            const availableCss = availableEl.getAttribute("data-available-one");
            availableEl.textContent = `${quickViewData.only}`;
            availableEl.parentNode.classList.remove(
              ..."c:#139f62 c:#e4a72d c:#eb4747".split(" ")
            );
            availableEl.parentNode.classList.add("c:#e4a72d");
            if (!!availableCss) {
              availableEl.parentNode.setAttribute(
                "data-css",
                getObjectAttributes(availableCss)["data-css"]
              );
            }
          }
        } else {
          const availableCss = availableEl.getAttribute("data-outofstock");
          availableEl.textContent = `${quickViewData.out_of_stock}`;
          availableEl.parentNode.classList.remove(
            ..."c:#139f62 c:#e4a72d c:#eb4747".split(" ")
          );
          availableEl.parentNode.classList.add("c:#eb4747");
          if (!!availableCss) {
            availableEl.setAttribute(
              "data-css",
              getObjectAttributes(availableCss)["data-css"]
            );
          }
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function handleSwiper() {
  const id = setTimeout(() => {
    const swiperInstance = swiper(container);
    const el = container.querySelector(".swiper-wrapper");
    el.style.alignItems = "stretch";
    window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
      swiperInstance.destroy();
    });
    clearTimeout(id);
  }, 0);
  window.veda_fn_53f14349a6ce4f7e864de3eb0017cf78Cleanup.push(() => {
    clearTimeout(id);
  });
}

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
handleSwiper();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_53f14349a6ce4f7e864de3eb0017cf78();