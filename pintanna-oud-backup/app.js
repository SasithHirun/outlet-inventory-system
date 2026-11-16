/* ==========================================================================
   PINTANNA OUD — INTERACTIVE STOREFRONT APPLICATION LOGIC
   Authentic Demo Data Sourced from https://pintannaoud.lk/
   ========================================================================== */

const BEST_SELLER_PRODUCTS = [
  {
    id: 'bs-1',
    name: 'Unanduwa Prestige Oud 100ml',
    category: 'Prestige Oud Collection',
    price: 'LKR 50,900',
    oldPrice: 'LKR 59,900',
    rawPrice: 50900,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/prestige-oud-100ml.png',
    url: 'https://pintannaoud.lk/product/unanduwa-prestige-oud-100ml-with-wooden-box/',
    notes: 'Pure Aged Silani Oud, Royal Amber, Warm Spices & Handcrafted Wooden Collector Box',
    description: 'Presented in a bespoke engraved wooden collector box, Unanduwa Prestige Oud 100ml is the pinnacle of Sri Lankan agarwood perfumery crafted under the vision of Kumar Dharmasena.'
  },
  {
    id: 'bs-2',
    name: 'Silani Ravana Pure Oud Oil',
    category: 'Heritage Oud Oil',
    price: 'LKR 38,500',
    oldPrice: 'LKR 45,000',
    rawPrice: 38500,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/silani-ravana-oil.png',
    url: 'https://pintannaoud.lk/oud-oils/',
    notes: 'Distillation: Hydro Distillation | Aura: Predominance, Royal, Complex | Notes: Spicy, Earthy, Fruity, Musky, Oceanic Breeze, Sweet',
    description: 'Hydro-distilled from rare Wallapatta agarwood at the 1,500-acre Pintanna Estate in Ayagama. Silani Ravana delivers an opulent, royal, and deeply complex aura.'
  },
  {
    id: 'bs-3',
    name: 'Unanduwa Elite – Golden Amber',
    category: 'Unanduwa Elite 100ml',
    price: 'LKR 47,000',
    oldPrice: '',
    rawPrice: 47000,
    onSale: false,
    badge: '',
    image: 'assets/cutouts/elite-golden-amber.png',
    url: 'https://pintannaoud.lk/shop/',
    notes: 'Golden Amber, Pure Silani Agarwood, Saffron, Velvety Musk',
    description: 'Crowned with the iconic golden sculptor stopper, Golden Amber 100ml from the Unanduwa Elite Collection blends warm luminous amber with rare Ceylon oud.'
  },
  {
    id: 'bs-4',
    name: 'Unanduwa Kesaraja EDP 50ml',
    category: 'Legacy Collection',
    price: 'LKR 17,550',
    oldPrice: 'LKR 20,650',
    rawPrice: 17550,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/legacy-kesaraja.png',
    url: 'https://pintannaoud.lk/product/unanduwa-kesaraja-eau-de-parfum-50ml/',
    notes: 'Majestic Lion Emblem | Smoky Oud, Ceylon Cinnamon, Warm Leather & Resin',
    description: 'Inspired by ancient Sri Lankan royal heritage, Kesaraja Eau de Parfum 50ml commands presence with bold woody oud notes and refined spice.'
  },
  {
    id: 'bs-5',
    name: 'Silani Peacock Artisanal Oil',
    category: 'Artisanal Oud Oil',
    price: 'LKR 34,000',
    oldPrice: 'LKR 40,000',
    rawPrice: 34000,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/silani-peacock-oil.png',
    url: 'https://pintannaoud.lk/oud-oils/',
    notes: 'Distillation: Water Distillation | Aura: Spiritual, Oceanic, Winter | Notes: Herbal, Oceanic Breeze, Sweet, Patchouli, Minty, Grass',
    description: 'Water-distilled artisanal pure oud oil with a spiritual, oceanic breeze character and crisp herbal-patchouli undertones.'
  },
  {
    id: 'bs-6',
    name: 'Unanduwa Elite – Ancient Silani',
    category: 'Unanduwa Elite 100ml',
    price: 'LKR 39,950',
    oldPrice: 'LKR 47,000',
    rawPrice: 39950,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/elite-ancient-silani.png',
    url: 'https://pintannaoud.lk/shop/',
    notes: 'Aged Wallapatta Heartwood, Frankincense, Dark Vanilla & Sandalwood',
    description: 'An homage to ancient Ceylon ("Silani" in classical Arabian trade), celebrating centuries-old agarwood trade routes with deep resinous sophistication.'
  },
  {
    id: 'bs-7',
    name: 'Unanduwa Elite – Arabian Wanderer',
    category: 'Unanduwa Elite 100ml',
    price: 'LKR 47,000',
    oldPrice: '',
    rawPrice: 47000,
    onSale: false,
    badge: '',
    image: 'assets/cutouts/elite-arabian-wanderer.png',
    url: 'https://pintannaoud.lk/product/unanduwa-elite-collection-arabian-wanderer-100ml/',
    notes: 'Desert Rose, Smoky Silani Agarwood, Saffron, Warm Amber & Olibanum',
    description: 'Crafted for connoisseurs of classic Middle Eastern and Ceylon oud traditions, Arabian Wanderer 100ml delivers commanding projection and regal sillage.'
  },
  {
    id: 'bs-8',
    name: 'Unanduwa Makara EDP 50ml',
    category: 'Legacy Collection',
    price: 'LKR 17,550',
    oldPrice: 'LKR 20,650',
    rawPrice: 17550,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/legacy-makara.png',
    url: 'https://pintannaoud.lk/product/unanduwa-makara-eau-de-parfum-50ml/',
    notes: 'Mythical Makara Arch Motif | Deep Oud, Bergamot, Black Pepper & Vetiver',
    description: 'Part of the celebrated Unanduwa Legacy Collection, Makara 50ml pairs vibrant island spices with a mystical, long-lasting agarwood base.'
  }
];

const NEW_ARRIVAL_PRODUCTS = [
  {
    id: 'na-1',
    name: 'Unanduwa Elite – Royal Bloom',
    category: 'Unanduwa Elite 100ml',
    price: 'LKR 39,950',
    oldPrice: 'LKR 47,000',
    rawPrice: 39950,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/elite-royal-bloom.png',
    url: 'https://pintannaoud.lk/shop/',
    notes: 'Damask Rose, Ceylon Oud, White Jasmine & Pink Pepper',
    description: 'A regal floral-oud masterpiece from the Unanduwa Elite 100ml line, encased in rose-tinted crystal with a sculpted golden cap.'
  },
  {
    id: 'na-2',
    name: 'Legacy 5ml Discovery Set (6V)',
    category: 'Discovery Gift Box',
    price: 'LKR 8,999',
    oldPrice: '',
    rawPrice: 8999,
    onSale: false,
    badge: '',
    image: 'assets/cutouts/legacy-discovery-set.png',
    url: 'https://pintannaoud.lk/product/unanduwa-5ml-legacy-collection-discovery-set-6v/',
    notes: 'Includes Kesaraja, Bherunda, Kandula, Panchanari, Makara & Signature 5ml Vials',
    description: 'Experience the complete Unanduwa Legacy Collection in a luxury presentation box featuring six 5ml Eau de Parfum travel sprays.'
  },
  {
    id: 'na-3',
    name: 'Essoud Tiger Eau de Parfum 90ml',
    category: 'Essoud Collection',
    price: 'LKR 8,490',
    oldPrice: 'LKR 9,990',
    rawPrice: 8490,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/essoud-tiger.png',
    url: 'https://pintannaoud.lk/shop/',
    notes: 'The Pulse of Power | Citrus Zest, Spiced Cardamom, Smoked Oud & Cedar',
    description: 'Bold, energetic, and charismatic—Essoud Tiger 90ml is crafted for everyday luxury with unmistakable Silani oud depth.'
  },
  {
    id: 'na-4',
    name: 'Rose Oud Reed Diffuser 100ml',
    category: 'Home Fragrance',
    price: 'LKR 5,500',
    oldPrice: '',
    rawPrice: 5500,
    onSale: false,
    badge: '',
    image: 'assets/cutouts/diffuser-rose-oud.png',
    url: 'https://pintannaoud.lk/product-category/home-fragrance/diffusers-collection/',
    notes: 'Velvet Rose Petals, Pure Agarwood Distillate & Warm Musk',
    description: 'Transform living spaces into a tranquil sanctuary with continuous, flame-free diffusion of rich Rose Oud.'
  },
  {
    id: 'na-5',
    name: 'Essoud Panther EDP 90ml',
    category: 'Essoud Collection',
    price: 'LKR 8,490',
    oldPrice: 'LKR 9,990',
    rawPrice: 8490,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/essoud-panther.png',
    url: 'https://pintannaoud.lk/shop/',
    notes: 'Nocturnal Elegance | Dark Berry, Leather, Patchouli & Pure Oud',
    description: 'Sleek and enigmatic, Essoud Panther 90ml leaves a magnetic trail of dark woods and velvety amber.'
  },
  {
    id: 'na-6',
    name: 'Monsoon Oil Control Face Serum',
    category: 'Monsoon Skincare 30ml',
    price: 'LKR 1,500',
    oldPrice: '',
    rawPrice: 1500,
    onSale: false,
    badge: '',
    image: 'assets/monsoon-serum-banner.png',
    url: 'https://pintannaoud.lk/product/monsoon-oil-control-face-serum-30ml/',
    notes: 'Balances Oil & Hydration | Reduces Shine, Enhances Glow | Soothes Skin Post-Humidity',
    description: 'Soothe, hydrate, and restore your skin with our Monsoon Face Serum. Designed to calm oily, imbalanced skin while locking in lasting hydration with a velvety matte glow.'
  },
  {
    id: 'na-7',
    name: 'Unanduwa Kandula EDP 50ml',
    category: 'Legacy Collection',
    price: 'LKR 17,550',
    oldPrice: 'LKR 20,650',
    rawPrice: 17550,
    onSale: true,
    badge: '-15%',
    image: 'assets/cutouts/legacy-kandula.png',
    url: 'https://pintannaoud.lk/shop/',
    notes: 'Royal Tusker Tribute | Earthy Oud, Sandalwood, Nutmeg & Ambergris',
    description: 'Named after the legendary royal tusker of ancient Lanka, Kandula 50ml embodies noble strength and enduring warmth.'
  },
  {
    id: 'na-8',
    name: 'Sacral Chakra Luxury Candle',
    category: 'Candle Collection',
    price: 'LKR 3,000',
    oldPrice: '',
    rawPrice: 3000,
    onSale: false,
    badge: '',
    image: 'assets/cutouts/candle-sacral-chakra.png',
    url: 'https://pintannaoud.lk/product/sacral-chakra/',
    notes: 'Natural Soy Wax, Oud-Infused Botanicals, Sweet Orange & Ylang-Ylang',
    description: 'Hand-poured aromatherapy candle designed to awaken creativity, warmth, and holistic balance in your home.'
  }
];

const ALL_PRODUCTS = [...BEST_SELLER_PRODUCTS, ...NEW_ARRIVAL_PRODUCTS];

// State
let cart = [
  { ...BEST_SELLER_PRODUCTS[1], qty: 1 },
  { ...NEW_ARRIVAL_PRODUCTS[2], qty: 1 }
];
let wishlistIds = new Set(['bs-1']);

// Format LKR
function formatLKR(num) {
  return 'LKR ' + num.toLocaleString('en-US');
}

// Render a Product Card matching the exact 2-row metadata layout in the screenshot
function createProductCardHTML(product) {
  const badgeHTML = product.onSale && product.badge
    ? `<span class="product-badge">${product.badge}</span>`
    : '';

  // Notice in the reference screenshot:
  // If on sale: top-right price is strikethrough oldPrice, bottom-right is bold orange sale price
  // If not on sale: top-right price is regular price, bottom-right is blank
  const topPriceHTML = product.onSale
    ? `<span class="product-price-top strikethrough">${product.oldPrice}</span>`
    : `<span class="product-price-top regular-only">${product.price}</span>`;

  const bottomPriceHTML = product.onSale
    ? `<span class="product-price-sale">${product.price}</span>`
    : `<span class="product-price-sale"></span>`;

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-thumb">
        ${badgeHTML}
        <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openQuickView('${product.id}')" style="cursor:pointer;" />
        <div class="product-hover-actions">
          <button class="btn-quick-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
          <button class="btn-quick-view" onclick="openQuickView('${product.id}')" title="Quick View" aria-label="Quick View">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-meta">
        <div class="product-meta-row1">
          <h3 class="product-title" onclick="openQuickView('${product.id}')">${product.name}</h3>
          ${topPriceHTML}
        </div>
        <div class="product-meta-row2">
          <span class="product-category">${product.category}</span>
          ${bottomPriceHTML}
        </div>
      </div>
    </article>
  `;
}

function renderGrids(filterQuery = '') {
  const bsGrid = document.getElementById('best-seller-grid');
  const naGrid = document.getElementById('new-arrival-grid');
  const q = filterQuery.trim().toLowerCase();

  const filteredBS = q
    ? BEST_SELLER_PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    : BEST_SELLER_PRODUCTS;

  const filteredNA = q
    ? NEW_ARRIVAL_PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    : NEW_ARRIVAL_PRODUCTS;

  if (bsGrid) {
    bsGrid.innerHTML = filteredBS.length
      ? filteredBS.map(createProductCardHTML).join('')
      : `<p style="grid-column: 1/-1; text-align:center; color:#888; padding:24px;">No matching Best Seller products found for "${filterQuery}".</p>`;
  }

  if (naGrid) {
    naGrid.innerHTML = filteredNA.length
      ? filteredNA.map(createProductCardHTML).join('')
      : `<p style="grid-column: 1/-1; text-align:center; color:#888; padding:24px;">No matching New Arrival products found for "${filterQuery}".</p>`;
  }
}

// Cart Logic
function updateCartUI() {
  const countEl = document.getElementById('cart-badge-count');
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-amount');

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.rawPrice * item.qty, 0);

  if (countEl) countEl.textContent = totalCount;
  if (subtotalEl) subtotalEl.textContent = formatLKR(totalAmount);

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align:center; padding: 48px 16px; color:#888;">
          <p style="font-size:14px; margin-bottom:8px;">Your shopping bag is currently empty.</p>
          <p style="font-size:12px;">Explore our pure Silani Oud oils and Unanduwa perfumes.</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-cat">${item.category}</div>
            <div class="cart-item-price">${item.price}</div>
            <div class="cart-qty-controls">
              <button class="cart-qty-btn" onclick="changeCartQty('${item.id}', -1)">−</button>
              <span style="font-size:12px; font-weight:600;">${item.qty}</span>
              <button class="cart-qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button onclick="removeFromCart('${item.id}')" style="color:#999; font-size:16px; align-self:flex-start;" title="Remove">×</button>
        </div>
      `).join('');
    }
  }
}

function addToCart(productId) {
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`Added "${product.name}" to your bag`);
}

function changeCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

// Drawers & Modals
function toggleDrawer(drawerId, open) {
  const drawer = document.getElementById(drawerId);
  const backdrop = document.getElementById('drawer-backdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  }
}

function closeAllDrawers() {
  document.querySelectorAll('.side-drawer').forEach(d => d.classList.remove('open'));
  const backdrop = document.getElementById('drawer-backdrop');
  if (backdrop) backdrop.classList.remove('open');
}

function openQuickView(productId) {
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('qv-img').src = product.image;
  document.getElementById('qv-img').alt = product.name;
  document.getElementById('qv-cat').textContent = product.category;
  document.getElementById('qv-title').textContent = product.name;
  document.getElementById('qv-price-now').textContent = product.price;
  document.getElementById('qv-price-old').textContent = product.onSale ? product.oldPrice : '';
  document.getElementById('qv-desc').textContent = product.description;
  document.getElementById('qv-notes').textContent = product.notes;
  document.getElementById('qv-official-link').href = product.url;

  const addBtn = document.getElementById('qv-add-btn');
  addBtn.onclick = () => {
    addToCart(product.id);
    closeQuickView();
  };

  document.getElementById('quickview-modal-overlay').classList.add('open');
}

function closeQuickView() {
  document.getElementById('quickview-modal-overlay').classList.remove('open');
}

// Toast Notification
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const textEl = document.getElementById('toast-message');
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Testimonial Slider Dots Interaction
const TESTIMONIAL_SETS = [
  [
    {
      stars: 4,
      quote: '“The quality of Silani Ravana Oud Oil exceeded our expectations from the moment the bottle arrived. The rich resinous depth, packaging, and sillage feel truly world-class and authentic.”',
      name: 'Kasun Perera',
      role: 'Colombo, Sri Lanka',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80'
    },
    {
      stars: 4,
      quote: '“The entire shopping experience at Pintanna Oud was seamless from choosing the Unanduwa Kesaraja parfum to islandwide delivery. Customer service was polite, responsive, and professional throughout.”',
      name: 'Amaya Senanayake',
      role: 'Kandy, Sri Lanka',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80'
    },
    {
      stars: 4,
      quote: '“Well-crafted and rare to find pure sustainable Wallapatta agarwood of this caliber. Every bottle from the Unanduwa Elite Collection feels essential in our collection and lasts all day.”',
      name: 'Tariq Al-Mansoor',
      role: 'Dubai, UAE',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80'
    }
  ],
  [
    {
      stars: 5,
      quote: '“Visiting the Pintanna Oud showroom at One Galle Face was unforgettable. The Essoud Tiger and Rose Oud Reed Diffuser have completely transformed our home ambiance.”',
      name: 'Dilshan Jayawardena',
      role: 'Nugegoda, Sri Lanka',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80'
    },
    {
      stars: 5,
      quote: '“The Monsoon Oil Control Face Serum and Aloe Vera collection feel so soothing in Sri Lanka’s tropical climate. Truly nature-powered luxury backed by real plantation heritage.”',
      name: 'Nethmi Wijeratne',
      role: 'Galle, Sri Lanka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80'
    },
    {
      stars: 5,
      quote: '“Unanduwa Prestige Oud in its custom wooden box is the most impressive luxury gift from Sri Lanka. The craftsmanship from the Ayagama estate to the bottle is remarkable.”',
      name: 'Rashid Al-Maktoum',
      role: 'Abu Dhabi, UAE',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80'
    }
  ]
];

function switchTestimonialSet(index) {
  const set = TESTIMONIAL_SETS[index % TESTIMONIAL_SETS.length];
  const grid = document.getElementById('testimonials-grid');
  const dots = document.querySelectorAll('.testimonial-dot');
  dots.forEach((d, idx) => d.classList.toggle('active', idx === index));

  if (!grid) return;
  grid.innerHTML = set.map(item => `
    <div class="testimonial-card">
      <div>
        <div class="stars-row" style="justify-content:center;">
          ${'★'.repeat(item.stars)}${item.stars < 5 ? '<span class="star-muted">★</span>' : ''}
        </div>
        <p class="testimonial-quote">${item.quote}</p>
      </div>
      <div class="testimonial-author">
        <img src="${item.avatar}" alt="${item.name}" class="author-avatar" />
        <div class="author-name">${item.name}</div>
        <div class="author-role">${item.role}</div>
      </div>
    </div>
  `).join('');
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderGrids();
  updateCartUI();

  // Search input listener
  const searchInput = document.getElementById('header-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderGrids(e.target.value);
    });
  }

  // Sticky Header shadow on scroll
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
