// ==========================================================================
// LIVY — Concept 03: A New Indian Home
// Living Indian Voices and Yarns
// E-Commerce Prototype Engine & Interactivity
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // State Management
  // ------------------------------------------------------------------------
  const AppState = {
    currentCurrency: 'INR',
    activeCollection: 'all',
    cart: JSON.parse(localStorage.getItem('livy_concept03_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('livy_concept03_wishlist')) || [],
    activeModalProduct: null,
    selectedSizeId: 'queen',
    modalQty: 1
  };

  // ------------------------------------------------------------------------
  // DOM Elements
  // ------------------------------------------------------------------------
  const productsContainer = document.getElementById('productsGrid');
  const collectionTabs = document.querySelectorAll('.filter-tab');
  const currencySelector = document.getElementById('currencySelector');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const shippingMeterFill = document.getElementById('shippingMeterFill');
  const shippingMeterText = document.getElementById('shippingMeterText');
  const btnCheckoutPrimary = document.getElementById('btnCheckoutPrimary');

  // Story Landing & Journey Navigation
  const storyLanding = document.getElementById('brandStoryLanding');
  const shoppingHomepage = document.getElementById('shoppingHomepage');
  const btnEnterArtisans = document.getElementById('btnEnterArtisans');
  const storyToggleLinks = document.querySelectorAll('.story-toggle-btn');

  // Product Modal Elements
  const productModalOverlay = document.getElementById('productModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalProductSubtitle = document.getElementById('modalProductSubtitle');
  const modalCurrentPrice = document.getElementById('modalCurrentPrice');
  const modalMainImage = document.getElementById('modalMainImage');
  const modalThumbsContainer = document.getElementById('modalThumbsContainer');
  const modalSizeOptions = document.getElementById('modalSizeOptions');
  const modalQtyDisplay = document.getElementById('modalQtyDisplay');
  const modalQtyMinus = document.getElementById('modalQtyMinus');
  const modalQtyPlus = document.getElementById('modalQtyPlus');
  const btnModalAddToCart = document.getElementById('btnModalAddToCart');
  const modalSpecCluster = document.getElementById('modalSpecCluster');
  const modalSpecTechnique = document.getElementById('modalSpecTechnique');
  const modalSpecFabric = document.getElementById('modalSpecFabric');
  const modalSpecDrape = document.getElementById('modalSpecDrape');
  const modalFullDesc = document.getElementById('modalFullDesc');

  // Checkout Modal Elements
  const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutFormSection = document.getElementById('checkoutFormSection');
  const orderSuccessSection = document.getElementById('orderSuccessSection');
  const orderSuccessCode = document.getElementById('orderSuccessCode');
  const btnContinueShopping = document.getElementById('btnContinueShopping');

  // Toast Notification
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // ------------------------------------------------------------------------
  // Helper: Currency Formatter
  // ------------------------------------------------------------------------
  function formatPrice(inrAmount) {
    const currency = CURRENCIES[AppState.currentCurrency] || CURRENCIES.INR;
    const converted = Math.round(inrAmount * currency.rate);
    return `${currency.symbol}${converted.toLocaleString()}`;
  }

  function showToast(msg) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // ------------------------------------------------------------------------
  // Journey Step 3 & 4: Transition into Main Shopping Homepage
  // ------------------------------------------------------------------------
  function enterArtisansWorld() {
    shoppingHomepage.scrollIntoView({ behavior: 'smooth' });
    showToast("Welcome to LIVY: Concept 03 — A New Indian Home");
  }

  if (btnEnterArtisans) {
    btnEnterArtisans.addEventListener('click', enterArtisansWorld);
  }

  storyToggleLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (target === 'story') {
        storyLanding.scrollIntoView({ behavior: 'smooth' });
      } else {
        shoppingHomepage.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ------------------------------------------------------------------------
  // Product Catalogue Rendering
  // Default: Folded bedsheet standalone
  // Hover: Crossfade + subtle scale to matching lifestyle view on bed
  // Mobile: Tap-friendly toggle
  // ------------------------------------------------------------------------
  function renderProducts() {
    if (!productsContainer) return;

    const filtered = LIVY_CATALOG.filter(item => {
      if (AppState.activeCollection === 'all') return true;
      return item.category === AppState.activeCollection;
    });

    productsContainer.innerHTML = '';

    filtered.forEach(product => {
      const isWishlisted = AppState.wishlist.includes(product.id);
      const defaultSize = product.sizes.find(s => s.isDefault) || product.sizes[0];
      const displayPrice = formatPrice(product.priceINR * defaultSize.priceMultiplier);

      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = product.id;

      card.innerHTML = `
        <div class="product-visual-wrap" data-id="${product.id}">
          <div class="product-badges">
            <span class="badge-tag badge-sunburst">${product.skuCode}</span>
            <span class="badge-tag badge-thread">${product.threadCount.split(' ')[0]} ${product.threadCount.split(' ')[1]}</span>
          </div>

          <button class="btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${product.id}" title="Save to Wishlist" aria-label="Save to Wishlist">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${isWishlisted ? '#FF5F00' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <!-- 1. Default View: Bedsheet shown as a standalone folded product -->
          <img class="product-img-default" src="${product.images.folded}" alt="${product.name} — Standalone Folded Bedsheet" loading="lazy" />

          <!-- 2. On Hover View: Transitions to lifestyle view showing bedsheet spread on a bed -->
          <img class="product-img-lifestyle" src="${product.images.lifestyle}" alt="${product.name} — Styled on Bed Lifestyle View" loading="lazy" />

          <div class="visual-mode-pill">
            <span class="mode-dot"></span>
            <span>Hover to style on bed</span>
          </div>

          <button class="mobile-view-toggle" data-id="${product.id}">
            Tap: Bed View
          </button>
        </div>

        <div class="product-card-body">
          <div class="product-meta-row">
            <span class="product-sku-code">${product.collectionName}</span>
            <span class="product-rating-snippet">
              <span class="star-icon">★</span>
              <span>${product.rating}</span>
              <span style="opacity: 0.6;">(${product.reviewCount})</span>
            </span>
          </div>

          <h3 class="product-title" data-action="quickview" data-id="${product.id}">${product.name}</h3>
          <p class="product-subtitle">${product.subtitle}</p>

          <div class="product-specs-chips">
            <span class="spec-chip">${product.artisanCluster.split(',')[0]}</span>
            <span class="spec-chip">100% Combed Cotton</span>
            <span class="spec-chip">${product.craftTechnique.includes('Teak') ? 'Teak Relief' : 'Dabu Mud Resist'}</span>
          </div>

          <div class="product-card-footer">
            <div class="product-price-block">
              <span class="price-prefix">Foundation Set</span>
              <span class="product-price">${displayPrice}</span>
            </div>

            <button class="btn-card-add" data-action="quickview" data-id="${product.id}">
              <span>View &amp; Sizes</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Mobile Touch Toggle
      const visualWrap = card.querySelector('.product-visual-wrap');
      const mobileToggle = card.querySelector('.mobile-view-toggle');

      if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          card.classList.toggle('touch-active');
          mobileToggle.textContent = card.classList.contains('touch-active') ? 'Tap: Folded' : 'Tap: Bed View';
        });
      }

      // Card Quickview on image click or title click
      visualWrap.addEventListener('click', (e) => {
        if (e.target.closest('.btn-wishlist-toggle') || e.target.closest('.mobile-view-toggle')) return;
        openProductModal(product.id);
      });

      card.querySelectorAll('[data-action="quickview"]').forEach(el => {
        el.addEventListener('click', () => openProductModal(product.id));
      });

      // Wishlist toggle
      const wishlistBtn = card.querySelector('.btn-wishlist-toggle');
      wishlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(product.id);
      });

      productsContainer.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // Collection Filter Tabs
  // ------------------------------------------------------------------------
  collectionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      collectionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.activeCollection = tab.dataset.collection;
      renderProducts();
    });
  });

  // ------------------------------------------------------------------------
  // Wishlist Handling
  // ------------------------------------------------------------------------
  function toggleWishlist(productId) {
    const idx = AppState.wishlist.indexOf(productId);
    const product = LIVY_CATALOG.find(p => p.id === productId);

    if (idx > -1) {
      AppState.wishlist.splice(idx, 1);
      showToast(`Removed ${product ? product.name : 'Item'} from Wishlist`);
    } else {
      AppState.wishlist.push(productId);
      showToast(`Saved ${product ? product.name : 'Item'} to Wishlist ❤️`);
    }

    localStorage.setItem('livy_concept03_wishlist', JSON.stringify(AppState.wishlist));
    renderProducts();
  }

  // ------------------------------------------------------------------------
  // Currency Switcher
  // ------------------------------------------------------------------------
  if (currencySelector) {
    currencySelector.addEventListener('change', (e) => {
      AppState.currentCurrency = e.target.value;
      renderProducts();
      updateCartUI();
      if (AppState.activeModalProduct) {
        updateModalPrice();
      }
      showToast(`Currency updated to ${AppState.currentCurrency}`);
    });
  }

  // ------------------------------------------------------------------------
  // Product Detail Modal
  // ------------------------------------------------------------------------
  function openProductModal(productId) {
    const product = LIVY_CATALOG.find(p => p.id === productId);
    if (!product) return;

    AppState.activeModalProduct = product;
    AppState.selectedSizeId = 'queen';
    AppState.modalQty = 1;

    modalProductTitle.textContent = product.name;
    modalProductSubtitle.textContent = product.subtitle;
    modalFullDesc.textContent = product.fullDescription;
    modalSpecCluster.textContent = product.artisanCluster;
    modalSpecTechnique.textContent = product.craftTechnique;
    modalSpecFabric.textContent = `${product.fabricComposition} (${product.threadCount})`;
    modalSpecDrape.textContent = product.washFeel;

    // Main image defaults to folded view
    modalMainImage.src = product.images.folded;
    modalMainImage.alt = `${product.name} - Standalone Folded Bedsheet`;

    // Render gallery thumbnails (Folded Standalone + Styled on Bed Lifestyle)
    modalThumbsContainer.innerHTML = `
      <div class="modal-thumb active" data-img="${product.images.folded}" data-type="folded" title="Folded Bedsheet View">
        <img src="${product.images.folded}" alt="Folded View" />
      </div>
      <div class="modal-thumb" data-img="${product.images.lifestyle}" data-type="lifestyle" title="Spread Across Bed Lifestyle View">
        <img src="${product.images.lifestyle}" alt="Lifestyle Bed View" />
      </div>
    `;

    modalThumbsContainer.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        modalThumbsContainer.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        modalMainImage.src = thumb.dataset.img;
      });
    });

    // Render size selector
    modalSizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
      const isSelected = size.id === AppState.selectedSizeId;
      const sizeBtn = document.createElement('button');
      sizeBtn.type = 'button';
      sizeBtn.className = `size-option-btn ${isSelected ? 'active' : ''}`;
      sizeBtn.dataset.sizeId = size.id;
      sizeBtn.innerHTML = `
        <span class="size-name">${size.label}</span>
        <span class="size-dims-preview">${size.sheetDimensions.split('(')[0].trim()}</span>
      `;

      sizeBtn.addEventListener('click', () => {
        modalSizeOptions.querySelectorAll('.size-option-btn').forEach(b => b.classList.remove('active'));
        sizeBtn.classList.add('active');
        AppState.selectedSizeId = size.id;
        updateModalPrice();
      });

      modalSizeOptions.appendChild(sizeBtn);
    });

    modalQtyDisplay.textContent = AppState.modalQty;
    updateModalPrice();

    productModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalPrice() {
    if (!AppState.activeModalProduct) return;
    const size = AppState.activeModalProduct.sizes.find(s => s.id === AppState.selectedSizeId) || AppState.activeModalProduct.sizes[0];
    const unitPrice = AppState.activeModalProduct.priceINR * size.priceMultiplier;
    const totalPrice = unitPrice * AppState.modalQty;
    modalCurrentPrice.textContent = formatPrice(totalPrice);
  }

  function closeProductModal() {
    productModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    AppState.activeModalProduct = null;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (productModalOverlay) {
    productModalOverlay.addEventListener('click', (e) => {
      if (e.target === productModalOverlay) closeProductModal();
    });
  }

  if (modalQtyMinus) {
    modalQtyMinus.addEventListener('click', () => {
      if (AppState.modalQty > 1) {
        AppState.modalQty--;
        modalQtyDisplay.textContent = AppState.modalQty;
        updateModalPrice();
      }
    });
  }

  if (modalQtyPlus) {
    modalQtyPlus.addEventListener('click', () => {
      if (AppState.modalQty < 10) {
        AppState.modalQty++;
        modalQtyDisplay.textContent = AppState.modalQty;
        updateModalPrice();
      }
    });
  }

  if (btnModalAddToCart) {
    btnModalAddToCart.addEventListener('click', () => {
      if (!AppState.activeModalProduct) return;
      addToCart(AppState.activeModalProduct.id, AppState.selectedSizeId, AppState.modalQty);
      closeProductModal();
      openCartDrawer();
    });
  }

  // ------------------------------------------------------------------------
  // Working Cart Drawer
  // ------------------------------------------------------------------------
  function addToCart(productId, sizeId, quantity = 1) {
    const product = LIVY_CATALOG.find(p => p.id === productId);
    if (!product) return;

    const size = product.sizes.find(s => s.id === sizeId) || product.sizes[0];
    const existingIndex = AppState.cart.findIndex(item => item.productId === productId && item.sizeId === sizeId);

    if (existingIndex > -1) {
      AppState.cart[existingIndex].quantity += quantity;
    } else {
      AppState.cart.push({
        productId,
        sizeId,
        sizeLabel: size.label,
        quantity,
        unitPriceINR: product.priceINR * size.priceMultiplier
      });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${quantity} × ${product.name} (${size.label}) to Bag`);
  }

  function updateCartItemQty(index, delta) {
    if (!AppState.cart[index]) return;
    AppState.cart[index].quantity += delta;
    if (AppState.cart[index].quantity <= 0) {
      AppState.cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }

  function removeCartItem(index) {
    if (!AppState.cart[index]) return;
    const removed = AppState.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast('Item removed from Bag');
  }

  function saveCart() {
    localStorage.setItem('livy_concept03_cart', JSON.stringify(AppState.cart));
  }

  function updateCartUI() {
    const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadges.forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    if (!cartItemsContainer) return;

    if (AppState.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p style="font-size: 1.15rem; font-family: var(--font-editorial); font-weight: 600;">Your Bag is currently empty</p>
          <p style="font-size: 0.875rem;">Explore the 5 foundational bedsheets to introduce artisan serenity to your bed.</p>
        </div>
      `;
      cartSubtotalEl.textContent = formatPrice(0);
      shippingMeterFill.style.width = '0%';
      shippingMeterText.innerHTML = `Add items to qualify for <strong>Complimentary Pan-India Express Delivery</strong>.`;
      if (btnCheckoutPrimary) btnCheckoutPrimary.disabled = true;
      return;
    }

    if (btnCheckoutPrimary) btnCheckoutPrimary.disabled = false;

    let subtotalINR = 0;
    cartItemsContainer.innerHTML = '';

    AppState.cart.forEach((item, index) => {
      const product = LIVY_CATALOG.find(p => p.id === item.productId);
      if (!product) return;

      const lineTotalINR = item.unitPriceINR * item.quantity;
      subtotalINR += lineTotalINR;

      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item-row';
      itemRow.innerHTML = `
        <div class="cart-item-thumb">
          <img src="${product.images.foldedThumb || product.images.folded}" alt="${product.name}" />
        </div>
        <div class="cart-item-details">
          <div class="cart-item-top">
            <div>
              <h4 class="cart-item-name">${product.name}</h4>
              <span class="cart-item-size-tag">Size: ${item.sizeLabel}</span>
            </div>
            <button class="btn-remove-item" data-index="${index}" title="Remove item" aria-label="Remove item">✕</button>
          </div>
          <div class="cart-item-bottom">
            <div class="cart-item-qty">
              <button type="button" class="cart-qty-minus" data-index="${index}">−</button>
              <span>${item.quantity}</span>
              <button type="button" class="cart-qty-plus" data-index="${index}">+</button>
            </div>
            <span class="cart-item-price">${formatPrice(lineTotalINR)}</span>
          </div>
        </div>
      `;

      itemRow.querySelector('.cart-qty-minus').addEventListener('click', () => updateCartItemQty(index, -1));
      itemRow.querySelector('.cart-qty-plus').addEventListener('click', () => updateCartItemQty(index, 1));
      itemRow.querySelector('.btn-remove-item').addEventListener('click', () => removeCartItem(index));

      cartItemsContainer.appendChild(itemRow);
    });

    cartSubtotalEl.textContent = formatPrice(subtotalINR);

    // Free shipping threshold: INR 6,000
    const freeShippingThreshold = 6000;
    const progressPercent = Math.min(100, Math.round((subtotalINR / freeShippingThreshold) * 100));
    shippingMeterFill.style.width = `${progressPercent}%`;

    if (subtotalINR >= freeShippingThreshold) {
      shippingMeterText.innerHTML = `🎉 <strong>Complimentary Pan-India Express Delivery Unlocked!</strong>`;
    } else {
      const remainingINR = freeShippingThreshold - subtotalINR;
      shippingMeterText.innerHTML = `Add <strong>${formatPrice(remainingINR)}</strong> more to unlock <strong>Complimentary Delivery</strong>.`;
    }
  }

  function openCartDrawer() {
    cartDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCartDrawer();
    });
  }

  // ------------------------------------------------------------------------
  // Checkout Modal Simulation
  // ------------------------------------------------------------------------
  function openCheckoutModal() {
    closeCartDrawer();
    checkoutFormSection.style.display = 'block';
    orderSuccessSection.style.display = 'none';
    checkoutModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckoutModal() {
    checkoutModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (btnCheckoutPrimary) {
    btnCheckoutPrimary.addEventListener('click', openCheckoutModal);
  }

  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  }

  if (checkoutModalOverlay) {
    checkoutModalOverlay.addEventListener('click', (e) => {
      if (e.target === checkoutModalOverlay) closeCheckoutModal();
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Generate realistic order code
      const randomId = Math.floor(100000 + Math.random() * 900000);
      orderSuccessCode.textContent = `#LVY-IN-${randomId}`;

      // Clear cart
      AppState.cart = [];
      saveCart();
      updateCartUI();

      // Switch to order confirmation screen
      checkoutFormSection.style.display = 'none';
      orderSuccessSection.style.display = 'flex';
      showToast('Order Placed Successfully! Artisan dispatch in 24h.');
    });
  }

  if (btnContinueShopping) {
    btnContinueShopping.addEventListener('click', () => {
      closeCheckoutModal();
      shoppingHomepage.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // Hero Hotspot Interactivity
  // ------------------------------------------------------------------------
  const heroHotspot = document.getElementById('heroBedHotspot');
  if (heroHotspot) {
    heroHotspot.addEventListener('click', () => {
      openProductModal('sku-01');
    });
  }

  // ------------------------------------------------------------------------
  // Newsletter Form
  // ------------------------------------------------------------------------
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`Welcome to the LIVY Craft Club! Check your inbox soon.`);
        emailInput.value = '';
      }
    });
  }

  // ------------------------------------------------------------------------
  // Sticky Header Styling on Scroll
  // ------------------------------------------------------------------------
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // ------------------------------------------------------------------------
  // Initialize
  // ------------------------------------------------------------------------
  renderProducts();
  updateCartUI();
});
