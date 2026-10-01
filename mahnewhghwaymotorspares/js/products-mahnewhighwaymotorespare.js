/**
🔧 Mah New Highway Motor Spares - Centralized Product Data & Utilities (ULTRA PERFORMANCE EDITION)
📁 Path: /js/products-mahnewhighwaymotorespare.js
✅ Premium auto parts, engine oils, clutch kits, brake systems, and motor spares
*/
(function () {
'use strict';

// 🎛️ ADVANCED CONFIGURATION
const CONFIG = {
  // ⚠️ IMPORTANT: Replace with your Google Apps Script deployment URL when ready
  SHEETS_API_URL: "https://script.google.com/macros/s/AKfycbycliXZTZfmPaJw-Fo9vg_CB46ExWzSY700SST9dZ7Y9ElG7JzLreLHrGOI0DqiZDWrOw/exec",
  basePath: "",
  imageDir: "/images",
  fallbackImage: "/images/mah-new-highway-logo.jpg",
  businessName: "Mah New Highway Motor Spares",
  businessLogo: "/images/mah-new-highway-logo.jpg",
  CACHE_KEY: "mahhighway_products_cache_v1",
  CART_KEY: "mahhighway_cart_v1",
  CACHE_TTL: 10 * 60 * 1000, // 10 minutes
  WHATSAPP_NUMBER: "27123456789",
  
  resolveImage: function(src) {
    if (!src) return CONFIG.fallbackImage;
    if (src.indexOf('http://') === 0 || src.indexOf('https://') === 0) return src;
    if (src.indexOf(CONFIG.basePath) === 0) return src;
    if (src.indexOf('/') === 0) return src;
    return CONFIG.basePath + CONFIG.imageDir + "/" + src;
  }
};

// 🛠️ STATIC FALLBACK DATA (Auto Parts from Mah New Highway)
const FALLBACK_PRODUCTS = [
  {
    id: "shell-hx5-15w40-5l",
    name: "Shell HX5 15W40 5L",
    price: 395.00,
    category: "Engine Oils",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Premium Shell HX5 15W40 engine oil, 5L container. Excellent active cleansing protection for petrol engines.",
    badge: "🔥 Best Seller",
    image: "/images/products/shell-hx5.jpg",
    popupImages: ["/images/products/shell-hx5.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "castro-gtx-15w40-diesel-5l",
    name: "Castro GTX 15W40 Diesel 5L",
    price: 395.00,
    category: "Engine Oils",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Castro GTX 15W40 diesel engine oil, 5L. Superior wear protection and sludge defense for diesel engines.",
    badge: "✨ Popular",
    image: "/images/products/castro-gtx.jpg",
    popupImages: ["/images/products/castro-gtx.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "engen-xtreme-20w50-5l",
    name: "Engen Xtreme 20W50 5L",
    price: 290.00,
    category: "Engine Oils",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Engen Xtreme 20W50 mineral oil, 5L. Ideal for older engines and high-temperature driving conditions.",
    badge: "💰 Value",
    image: "/images/products/engen-xtreme.jpg",
    popupImages: ["/images/products/engen-xtreme.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "quantum-oil-filter-gud",
    name: "Quantum Oil Filter (GUD)",
    price: 85.00,
    category: "Filters & Belts",
    niche: "auto-parts",
    location: "johannesburg",
    description: "High-quality GUD oil filter by Quantum. Ensures clean oil flow for optimal engine health and longevity.",
    badge: "💰 Value",
    image: "/images/products/quantum-oil-filter.jpg",
    popupImages: ["/images/products/quantum-oil-filter.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "quantum-fan-belt",
    name: "Quantum Fan Belt",
    price: 165.00,
    category: "Filters & Belts",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Heavy-duty Quantum fan belt. Resists cracking, stretching, and ensures consistent accessory drive.",
    badge: "✨ Popular",
    image: "/images/products/quantum-fan-belt.jpg",
    popupImages: ["/images/products/quantum-fan-belt.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "nissan-almera-1-5-valeo-clutch-kit",
    name: "Nissan Almera 1.5 Valeo Clutch Kit",
    price: 1550.00,
    category: "Clutch Kits",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Genuine Valeo clutch kit for Nissan Almera 1.5. Smooth engagement, precise biting point, and long-lasting durability.",
    badge: "⭐ Premium",
    image: "/images/products/valeo-clutch-almera.jpg",
    popupImages: ["/images/products/valeo-clutch-almera.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "vw-polo-vivo-1-6-clutch-kit",
    name: "VW Polo Vivo 1.6 Clutch Kit",
    price: 1850.00,
    category: "Clutch Kits",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Complete heavy-duty clutch kit for VW Polo Vivo 1.6. Includes pressure plate, clutch disc, and release bearing.",
    badge: "🔥 Best Seller",
    image: "/images/products/vivo-clutch-kit.jpg",
    popupImages: ["/images/products/vivo-clutch-kit.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "brake-pad-suzuki-dzire",
    name: "Brake Pad Suzuki Dzire",
    price: 350.00,
    category: "Brake Systems",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Reliable, low-dust brake pads for Suzuki Dzire. Excellent stopping power and quiet operation.",
    badge: "✨ Popular",
    image: "/images/products/suzuki-dzire-brakes.jpg",
    popupImages: ["/images/products/suzuki-dzire-brakes.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "quantum-brake-pads-safeline",
    name: "Quantum Brake Pads Safeline",
    price: 195.00,
    category: "Brake Systems",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Quantum Safeline brake pads. Affordable, reliable, and safe braking performance for everyday driving.",
    badge: "💰 Value",
    image: "/images/products/quantum-safeline.jpg",
    popupImages: ["/images/products/quantum-safeline.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "vw-polo-vivo-1-6-service-kit",
    name: "VW Polo Vivo 1.6 Service Kit",
    price: 985.00,
    category: "Service Kits",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Complete major service kit for VW Polo Vivo 1.6. Includes oil filter, air filter, fuel filter, and spark plugs.",
    badge: "🔥 Best Seller",
    image: "/images/products/vivo-service-kit.jpg",
    popupImages: ["/images/products/vivo-service-kit.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "vw-polo-vivo-control-arms",
    name: "VW Polo Vivo Control Arms",
    price: 395.00,
    category: "Steering & Suspension",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Durable, heavy-duty control arms for VW Polo Vivo. Price is per arm. Restores precise handling and alignment.",
    badge: "✨ Popular",
    image: "/images/products/vivo-control-arm.jpg",
    popupImages: ["/images/products/vivo-control-arm.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "vw-polo-vivo-steering-rack",
    name: "VW Polo Vivo Steering Rack",
    price: 1890.00,
    category: "Steering & Suspension",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Direct replacement steering rack for VW Polo Vivo. Restores tight, responsive, and safe steering.",
    badge: "⭐ Premium",
    image: "/images/products/vivo-steering-rack.jpg",
    popupImages: ["/images/products/vivo-steering-rack.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "isuzu-kb250-tail-light",
    name: "Isuzu KB250 Tail Light",
    price: 595.00,
    category: "Lighting",
    niche: "auto-parts",
    location: "johannesburg",
    description: "High-quality replacement tail light assembly for Isuzu KB250. Durable lens and perfect OEM-fit.",
    badge: "💰 Value",
    image: "/images/products/isuzu-kb250-tail-light.jpg",
    popupImages: ["/images/products/isuzu-kb250-tail-light.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  },
  {
    id: "toyota-hilux-2-5-2015-tail-light",
    name: "Toyota Hilux 2.5 2015 Tail Light",
    price: 595.00,
    category: "Lighting",
    niche: "auto-parts",
    location: "johannesburg",
    description: "Direct replacement tail light for Toyota Hilux 2.5 (2015 model). High-quality lens, housing, and bulb sockets.",
    badge: "✨ Popular",
    image: "/images/products/hilux-2015-tail-light.jpg",
    popupImages: ["/images/products/hilux-2015-tail-light.jpg"],
    businessName: "Mah New Highway Motor Spares",
    businessLogo: "/images/mah-new-highway-logo.jpg",
    active: true
  }
];

// 🌐 State management
let PRODUCTS = [];
let PRODUCTS_MAP = new Map();
let isLoading = false;
let loadError = null;
let lastRawSnapshot = null;

// ⚡ localStorage cache helpers
function getCachedProducts() {
  try {
    const cached = localStorage.getItem(CONFIG.CACHE_KEY);
    if (!cached) return null;
    const data = JSON.parse(cached);
    if (Date.now() - data.timestamp > CONFIG.CACHE_TTL) {
      localStorage.removeItem(CONFIG.CACHE_KEY);
      return null;
    }
    return data.products;
  } catch (e) { return null; }
}

function setCachedProducts(products) {
  try {
    localStorage.setItem(CONFIG.CACHE_KEY, JSON.stringify({
      products: products,
      timestamp: Date.now()
    }));
  } catch (e) {}
}

// 🔄 Fetch products with advanced caching
async function fetchProducts(forceRefresh = false) {
  if (isLoading) {
    return new Promise(resolve => {
      const checkLoaded = setInterval(() => {
        if (!isLoading) { clearInterval(checkLoaded); resolve(PRODUCTS); }
      }, 50);
    });
  }
  isLoading = true;
  try {
    if (!forceRefresh) {
      const cached = getCachedProducts();
      if (cached && cached.length > 0) {
        console.log('⚡ Loaded Mah New Highway products from cache (instant)');
        processProducts(cached);
        isLoading = false;
        setTimeout(() => backgroundRefresh(), 100);
        return PRODUCTS;
      }
    }
    
    if (!CONFIG.SHEETS_API_URL || CONFIG.SHEETS_API_URL === "" || CONFIG.SHEETS_API_URL.includes("YOUR_DEPLOYMENT_ID")) {
      console.warn("⚠️ Using fallback data - SHEETS_API_URL not configured");
      processProducts(FALLBACK_PRODUCTS);
      isLoading = false;
      return PRODUCTS;
    }
    
    const url = CONFIG.SHEETS_API_URL + (CONFIG.SHEETS_API_URL.includes('?') ? '&' : '?') + 't=' + Date.now() + '&format=json';
    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const productsArray = Array.isArray(data) ? data : (data.products || []);
    
    if (productsArray && productsArray.length >= 0) {
      processProducts(productsArray);
      setCachedProducts(productsArray);
      console.log('✅ Products loaded from Google Sheets');
    } else {
      throw new Error('Invalid data format');
    }
  } catch (error) {
    console.warn('⚠️ Failed to load from API, using fallback:', error.message);
    loadError = error;
    processProducts(FALLBACK_PRODUCTS);
  }
  isLoading = false;
  return PRODUCTS;
}

// Background refresh
async function backgroundRefresh(knownHash) {
  if (!CONFIG.SHEETS_API_URL || CONFIG.SHEETS_API_URL === "" || CONFIG.SHEETS_API_URL.includes("YOUR_DEPLOYMENT_ID")) return;
  try {
    const url = CONFIG.SHEETS_API_URL + (CONFIG.SHEETS_API_URL.includes('?') ? '&' : '?') + 't=' + Date.now() + '&bg=1&format=json';
    const response = await fetch(url, { cache: 'no-cache' });
    const data = await response.json();
    const productsArray = Array.isArray(data) ? data : (data.products || []);
    if (!productsArray) return;
    
    const snapshot = JSON.stringify(productsArray);
    if (lastRawSnapshot === null) lastRawSnapshot = JSON.stringify(window.MAH_HIGHWAY_PRODUCTS || []);
    if (snapshot === lastRawSnapshot) {
      console.log('🔄 Background refresh: no changes since last sync');
      return;
    }
    lastRawSnapshot = snapshot;
    processProducts(productsArray);
    setCachedProducts(productsArray);
    console.log('🔄 Background refresh: newer product data found, updated silently');
    
    if (document.getElementById('dynamicCategoriesContainer')) {
      if (typeof window.renderDynamicCategories === 'function') window.renderDynamicCategories();
    }
  } catch (error) {}
}

// 🔄 Process raw product data
function processProducts(rawProducts) {
  PRODUCTS = rawProducts.map(product => {
    const resolvedImage = CONFIG.resolveImage(product.image);
    const rawPopup = product.popupImages || product.popup_images || product.images || [];
    const resolvedPopupImages = (Array.isArray(rawPopup) ? rawPopup : [rawPopup]).map(img => CONFIG.resolveImage(img));
    
    const processed = {
      id: (product.id || "").trim(),
      name: (product.name || "").trim(),
      price: parseFloat(product.price) || 0,
      category: (product.category || "").trim(),
      subcategory: (product.subcategory || "").trim(),
      niche: (product.niche || "auto-parts").trim(),
      location: (product.location || "johannesburg").trim(),
      description: (product.description || "").trim(),
      badge: (product.badge || "").trim(),
      image: resolvedImage,
      popupImages: resolvedPopupImages,
      imageFallback: CONFIG.fallbackImage,
      businessName: (product.businessName || CONFIG.businessName).trim(),
      businessLogo: CONFIG.resolveImage(product.businessLogo),
      whatsappNumber: (product.whatsappNumber || CONFIG.WHATSAPP_NUMBER).trim(),
      categorySlug: (product.category || "uncategorized").trim().toLowerCase().replace(/\s+/g, '-'),
      nicheSlug: (product.niche || "auto-parts").trim().toLowerCase().replace(/\s+/g, '-'),
      locationSlug: (product.location || "johannesburg").trim().toLowerCase().replace(/\s+/g, '-')
    };
    PRODUCTS_MAP.set(processed.id, processed);
    return processed;
  });
  
  // ✅ CRITICAL: Expose to window so index.html can render them instantly!
  window.MAH_HIGHWAY_PRODUCTS = PRODUCTS;
  window.MAH_HIGHWAY_DATA = PRODUCTS;
  return PRODUCTS;
}

// 🛠️ Utility API
window.MahHighwayProducts = {
  getAll: () => PRODUCTS,
  getById: (id) => PRODUCTS_MAP.get(id),
  getByCategory: (category) => PRODUCTS.filter(p => p.categorySlug === category.toLowerCase().replace(/\s+/g, '-')),
  getByLocation: (location) => PRODUCTS.filter(p => p.locationSlug === location.toLowerCase()),
  getByNiche: (niche) => PRODUCTS.filter(p => p.nicheSlug === niche.toLowerCase()),
  filter: (filters) => {
    return PRODUCTS.filter(p => {
      if (filters.category && p.categorySlug !== filters.category.toLowerCase().replace(/\s+/g, '-')) return false;
      if (filters.location && p.locationSlug !== filters.location.toLowerCase()) return false;
      if (filters.niche && p.nicheSlug !== filters.niche.toLowerCase()) return false;
      if (filters.search) {
        const s = filters.search.toLowerCase();
        if (!p.name.toLowerCase().includes(s) && !p.description.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  },
  renderCard: (p) => {
    const priceDisplay = p.price > 0 ? `R${p.price.toFixed(2)}` : 'POA';
    const btnText = p.price > 0 ? '<i class="fas fa-cart-plus"></i> Add' : '<i class="fas fa-quote-right"></i> Quote';
    return `
      <article class="product-card" data-id="${p.id}" data-category="${p.categorySlug}" data-price="${p.price}" data-name="${p.name}" data-description="${p.description}" data-image="${p.image}" onclick="openModal('${p.id}')" role="button" tabindex="0" style="cursor:pointer;">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" class="product-image" onerror="this.src='${p.imageFallback}'">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-description">${p.description}</p>
          <div class="product-price">${priceDisplay}</div>
          <div class="product-actions">
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); MahHighwayProducts.addToCart('${p.id}'); return false;">
              ${btnText}
            </button>
            <a href="${MahHighwayProducts.getWhatsAppLink(p)}" class="whatsapp-product-btn" target="_blank" rel="noopener" onclick="event.stopPropagation();" aria-label="WhatsApp about ${p.name}" title="Chat on WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </article>`;
  },
  getWhatsAppLink: (product, phoneNumber) => {
    phoneNumber = phoneNumber || product.whatsappNumber || CONFIG.WHATSAPP_NUMBER;
    const priceStr = product.price > 0 ? `R${product.price.toFixed(2)}` : 'Price on Application';
    const msg = encodeURIComponent(`Hi ${product.businessName}! I'd like to inquire about:\n\n🔧 *${product.name}*\n💰 Price: ${priceStr}\n\nPlease confirm availability.`);
    return `https://wa.me/${phoneNumber}?text=${msg}`;
  },
  refresh: () => fetchProducts(true),
  addToCart: (productId, quantity = 1) => {
    // Bridges to the HTML's cart object if it exists, otherwise uses internal logic
    if (typeof window.cart !== 'undefined' && window.cart.addToCart) {
      const product = PRODUCTS_MAP.get(productId);
      if (product) window.cart.addToCart(product, quantity);
    }
  },
  getStatus: () => ({
    loaded: PRODUCTS.length > 0,
    count: PRODUCTS.length,
    error: loadError ? loadError.message : null,
    loading: isLoading
  })
};

// 🚀 INITIALIZATION
(async function init() {
  // ✅ Check for inline products injected by Apps Script or HTML placeholder
  const inlineData = window.MAH_HIGHWAY_PRODUCTS;
  const hasInlineData = Array.isArray(inlineData) && inlineData.length > 0;
  
  if (hasInlineData) {
    processProducts(inlineData);
    setCachedProducts(inlineData);
    isLoading = false;
    console.log(`⚡ ${PRODUCTS.length} products loaded instantly from inline data (0 network requests)`);
    try {
      document.dispatchEvent(new CustomEvent('mahhighway:products:loaded', { detail: { products: PRODUCTS } }));
    } catch (err) {}
    setTimeout(() => backgroundRefresh(window.MAH_HIGHWAY_PRODUCTS_HASH), 1500);
  } else {
    await fetchProducts();
    try {
      document.dispatchEvent(new CustomEvent('mahhighway:products:loaded', { detail: { products: PRODUCTS } }));
    } catch (err) {}
  }
  
  console.group('🔧 Mah New Highway Motor Spares Products Initialized');
  console.log(`✅ ${PRODUCTS.length} products ready`);
  console.groupEnd();
})();

// ========== 🚀 DYNAMIC PRODUCT SCHEMA GENERATION (SEO) ==========
function generateProductSchema() {
  if (PRODUCTS.length === 0) return;
  const productList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mah New Highway Motor Spares Product Catalog",
    "description": "Complete catalog of premium auto parts, engine oils, clutch kits, brake systems, and motor spares from Mah New Highway Motor Spares in Johannesburg.",
    "numberOfItems": PRODUCTS.length,
    "itemListElement": PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image.startsWith('http') ? product.image : `https://mahnewhighway.co.za${product.image}`,
        "sku": product.id,
        "brand": { "@type": "Brand", "name": "Mah New Highway Motor Spares" },
        "offers": {
          "@type": "Offer",
          "url": `https://mahnewhighway.co.za/#product-${product.id}`,
          "priceCurrency": "ZAR",
          "price": product.price > 0 ? product.price.toFixed(2) : "0",
          "priceValidUntil": new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
          "availability": product.price > 0 ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": { "@type": "Organization", "name": "Mah New Highway Motor Spares" }
        }
      }
    }))
  };
  
  let schemaEl = document.getElementById('mahhighwayProductSchema') || document.getElementById('productSchema');
  if (!schemaEl) {
    schemaEl = document.createElement('script');
    schemaEl.type = 'application/ld+json';
    schemaEl.id = 'mahhighwayProductSchema';
    document.head.appendChild(schemaEl);
  }
  schemaEl.textContent = JSON.stringify(productList);
}

document.addEventListener('mahhighway:products:loaded', () => setTimeout(generateProductSchema, 500));
document.addEventListener('DOMContentLoaded', () => {
  if (PRODUCTS.length > 0) setTimeout(generateProductSchema, 500);
});

})();