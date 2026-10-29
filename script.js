// ==========================================
// COLIVRER — CATALOGUE DES 32 PRODUITS
// ==========================================

const products = [
  // MAISON ET MÉNAGE
  {id:1,name:"Aspirateur balai sans fil",category:"Maison",price:89.90,oldPrice:119.90,emoji:"🧹",tag:"BON PLAN",tagType:"popular",rating:4.6,reviews:328,description:"Léger et pratique pour les sols"},
  {id:2,name:"Robot aspirateur compact",category:"Maison",price:129.90,oldPrice:159.90,emoji:"🤖",tag:"POPULAIRE",tagType:"popular",rating:4.7,reviews:512,description:"Pour un nettoyage au quotidien"},
  {id:3,name:"Balai spray avec réservoir",category:"Maison",price:19.90,oldPrice:null,emoji:"🧽",tag:"",rating:4.4,reviews:86,description:"Nettoyez sans vous encombrer"},
  {id:4,name:"Organisateurs de tiroirs",category:"Maison",price:14.50,oldPrice:null,emoji:"🗄️",tag:"",rating:4.5,reviews:174,description:"Des rangements bien ordonnés"},
  {id:5,name:"Boîtes de rangement empilables",category:"Maison",price:24.90,oldPrice:29.90,emoji:"📦",tag:"BON PLAN",tagType:"popular",rating:4.5,reviews:209,description:"Gagnez de la place chez vous"},
  {id:6,name:"Diffuseur d’huiles essentielles",category:"Maison",price:27.90,oldPrice:null,emoji:"🌿",tag:"",rating:4.3,reviews:143,description:"Une ambiance douce et parfumée"},
  {id:7,name:"Lampe de bureau LED",category:"Maison",price:29.90,oldPrice:36.90,emoji:"💡",tag:"PETIT PRIX",rating:4.4,reviews:246,description:"Éclairage réglable et moderne"},
  {id:8,name:"Cafetière à piston",category:"Maison",price:24.90,oldPrice:null,emoji:"☕",tag:"",rating:4.6,reviews:311,description:"Le café simplement préparé"},

  // MANGAS
  {id:9,name:"One Piece — tome manga",category:"Manga",price:7.20,oldPrice:null,emoji:"🏴‍☠️",tag:"COUP DE CŒUR",tagType:"new",rating:4.9,reviews:1204,description:"L’aventure culte en version papier"},
  {id:10,name:"Dragon Ball — tome manga",category:"Manga",price:7.20,oldPrice:null,emoji:"🐉",tag:"",rating:4.8,reviews:834,description:"Retrouvez Goku et ses amis"},
  {id:11,name:"Demon Slayer — tome manga",category:"Manga",price:7.30,oldPrice:null,emoji:"⚔️",tag:"POPULAIRE",tagType:"popular",rating:4.8,reviews:712,description:"Une saga intense et captivante"},
  {id:12,name:"Naruto — tome manga",category:"Manga",price:7.20,oldPrice:null,emoji:"🍥",tag:"",rating:4.8,reviews:936,description:"Le parcours d’un ninja légendaire"},
  {id:13,name:"Jujutsu Kaisen — tome manga",category:"Manga",price:7.30,oldPrice:null,emoji:"👹",tag:"NOUVEAUTÉ",tagType:"new",rating:4.7,reviews:483,description:"Action et surnaturel au rendez-vous"},
  {id:14,name:"Carnet de collection manga",category:"Manga",price:12.90,oldPrice:null,emoji:"📓",tag:"",rating:4.3,reviews:95,description:"Notez vos séries et vos favoris"},
  {id:15,name:"Figurine anime de collection",category:"Manga",price:34.90,oldPrice:39.90,emoji:"🧙",tag:"COLLECTION",tagType:"new",rating:4.6,reviews:178,description:"Une pièce décorative pour les fans"},
  {id:21,name:"Fairy Tail — tome manga",category:"Manga",price:7.20,oldPrice:null,emoji:"🔥",tag:"COUP DE CŒUR",tagType:"new",rating:4.8,reviews:624,description:"Retrouvez Natsu, Lucy et la guilde"},
  {id:22,name:"Fairy Tail — coffret de collection",category:"Manga",price:39.90,oldPrice:44.90,emoji:"📚",tag:"COLLECTION",tagType:"popular",rating:4.7,reviews:186,description:"Un coffret pour les fans de la série"},

  // HIGH-TECH
  {id:16,name:"Écouteurs sans fil premium",category:"Tech",price:249.00,oldPrice:279.00,emoji:"🎧",tag:"POPULAIRE",tagType:"popular",rating:4.8,reviews:1284,description:"Écouteurs sans fil — prix indicatif"},
  {id:17,name:"Casque à réduction de bruit",category:"Tech",price:299.99,oldPrice:349.99,emoji:"🎧",tag:"BON PLAN",tagType:"popular",rating:4.8,reviews:842,description:"Pour écouter votre musique"},
  {id:18,name:"Liseuse électronique",category:"Tech",price:159.99,oldPrice:null,emoji:"📖",tag:"",rating:4.7,reviews:652,description:"Vos lectures partout avec vous"},
  {id:19,name:"Enceinte Bluetooth portable",category:"Tech",price:119.99,oldPrice:139.99,emoji:"🔊",tag:"",rating:4.7,reviews:734,description:"Votre musique à la maison ou dehors"},

  // ACCESSOIRES
  {id:20,name:"Sac à dos pour tous les jours",category:"Accessoires",price:54.95,oldPrice:null,emoji:"🎒",tag:"",rating:4.6,reviews:915,description:"Un classique pratique au quotidien"},

  // INSTRUMENTS DE MUSIQUE
  {id:23,name:"Guitare acoustique débutant",category:"Musique",price:89.90,oldPrice:109.90,emoji:"🎸",tag:"BON PLAN",tagType:"popular",rating:4.5,reviews:203,description:"Pour apprendre et jouer à la maison"},
  {id:24,name:"Clavier électronique 61 touches",category:"Musique",price:119.90,oldPrice:139.90,emoji:"🎹",tag:"",rating:4.4,reviews:167,description:"Un clavier polyvalent pour débuter"},
  {id:25,name:"Ukulélé soprano",category:"Musique",price:34.90,oldPrice:null,emoji:"🪕",tag:"PETIT PRIX",rating:4.5,reviews:292,description:"Compact, léger et facile à emporter"},

  // FIGURINES, LEGO ET KAPLA
  {id:26,name:"Figurine anime de collection",category:"Jouets",price:29.90,oldPrice:34.90,emoji:"🦸",tag:"COLLECTION",tagType:"new",rating:4.6,reviews:211,description:"Une figurine décorative pour les fans"},
  {id:27,name:"Boîte de briques LEGO créatives",category:"Jouets",price:29.99,oldPrice:null,emoji:"🧱",tag:"",rating:4.8,reviews:781,description:"Des briques pour construire à l’infini"},
  {id:28,name:"Kapla — boîte de planchettes",category:"Jouets",price:39.90,oldPrice:44.90,emoji:"🪵",tag:"JEU CRÉATIF",tagType:"popular",rating:4.7,reviews:328,description:"Construisez sans colle ni fixation"},

  // INFORMATIQUE
  {id:29,name:"Ordinateur portable polyvalent",category:"Informatique",price:599.00,oldPrice:649.00,emoji:"💻",tag:"BON PLAN",tagType:"popular",rating:4.5,reviews:416,description:"Pour le travail, les études et le web"},
  {id:30,name:"Clavier et souris sans fil",category:"Informatique",price:34.90,oldPrice:null,emoji:"⌨️",tag:"",rating:4.4,reviews:533,description:"Un ensemble pratique pour le bureau"},

  // ARMOIRES ET MOBILIER
  {id:31,name:"Armoire de rangement 2 portes",category:"Mobilier",price:149.90,oldPrice:179.90,emoji:"🚪",tag:"MAISON",tagType:"popular",rating:4.3,reviews:145,description:"Un rangement pratique pour la maison"},
  {id:32,name:"Étagère de rangement modulable",category:"Mobilier",price:49.90,oldPrice:null,emoji:"🗄️",tag:"",rating:4.5,reviews:274,description:"Organisez livres, accessoires et objets"}
];

// ==========================================
// VARIABLES
// ==========================================

let activeCategory = "Tous";
let searchQuery = "";
let sortMode = "featured";
let cart = {};
let favorites = new Set();
let toastTimer;

const euro = value =>
  value.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR"
  });

const grid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

// ==========================================
// OUTILS DU CATALOGUE
// ==========================================

function categoryLabel(category) {
  const labels = {
    Maison: "Maison & ménage",
    Manga: "Manga & culture",
    Tech: "High-tech",
    Accessoires: "Accessoires",
    Musique: "Instruments de musique",
    Jouets: "Jeux & construction",
    Informatique: "Informatique",
    Mobilier: "Mobilier"
  };

  return labels[category] || category;
}

function starText(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function filteredProducts() {
  let result = products.filter(product => {
    const categoryMatch =
      activeCategory === "Tous" ||
      product.category === activeCategory;

    const haystack =
      `${product.name} ${product.category} ${product.description}`
        .toLocaleLowerCase("fr");

    return categoryMatch &&
      haystack.includes(searchQuery.toLocaleLowerCase("fr"));
  });

  if (sortMode === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sortMode === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sortMode === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  }

  return result;
}

// ==========================================
// AFFICHAGE DES PRODUITS
// ==========================================

function renderProducts() {
  const shown = filteredProducts();

  document.getElementById("resultCount").textContent =
    `${shown.length} produit${shown.length > 1 ? "s" : ""}`;

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === activeCategory
    );
  });

  if (shown.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div style="font-size:35px">🔎</div>
        <strong>Aucun produit trouvé</strong>
        Essayez un autre mot-clé ou une autre catégorie.
      </div>
    `;
    return;
  }

  grid.innerHTML = shown.map(product => `
    <article class="product-card">
      <div class="product-visual">
        <span class="product-emoji" aria-hidden="true">
          ${product.emoji}
        </span>

        ${product.tag ? `
          <span class="product-tag ${product.tagType ? `tag-${product.tagType}` : ""}">
            ${product.tag}
          </span>
        ` : ""}

        <button
          class="favorite-button ${favorites.has(product.id) ? "is-favorite" : ""}"
          data-favorite="${product.id}"
          aria-label="Ajouter ou retirer des favoris"
          aria-pressed="${favorites.has(product.id)}">
          ${favorites.has(product.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <div class="product-category">
          ${categoryLabel(product.category)}
        </div>

        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="product-rating" aria-label="Note ${product.rating} sur 5">
          ${starText(product.rating)}
          <span>(${product.reviews.toLocaleString("fr-FR")})</span>
        </div>

        <div class="product-price-line">
          <span class="product-price">${euro(product.price)}</span>
          ${product.oldPrice ? `
            <span class="product-old-price">${euro(product.oldPrice)}</span>
          ` : ""}
        </div>

        <div class="product-stock">Disponible (démo)</div>

        <button class="add-button" data-add="${product.id}">
          Ajouter au panier <span>＋</span>
        </button>
      </div>
    </article>
  `).join("");
}

// ==========================================
// GESTION DU PANIER
// ==========================================

function cartCount() {
  return Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0
  );
}

function cartTotal() {
  return products.reduce(
    (sum, product) =>
      sum + product.price * (cart[product.id] || 0),
    0
  );
}

function renderCart() {
  const items = products.filter(product => cart[product.id] > 0);
  const count = cartCount();
  const total = cartTotal();

  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTitleCount").textContent = `(${count})`;
  document.getElementById("subtotal").textContent = euro(total);
  document.getElementById("checkout").disabled = count === 0;

  if (items.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <strong>Votre panier attend ses premières trouvailles</strong>
        <p>Ajoutez un produit pour calculer automatiquement votre total.</p>
        <button class="continue-shopping" id="continueShopping">
          Découvrir la boutique
        </button>
      </div>
    `;
  } else {
    cartItems.innerHTML = items.map(product => `
      <article class="cart-item">
        <div class="cart-item-visual">${product.emoji}</div>

        <div>
          <h4>${product.name}</h4>
          <div class="cart-unit">${euro(product.price)} / unité</div>

          <div class="quantity-control">
            <button data-qty="${product.id}" data-delta="-1"
              aria-label="Diminuer la quantité">−</button>
            <span>${cart[product.id]}</span>
            <button data-qty="${product.id}" data-delta="1"
              aria-label="Augmenter la quantité">＋</button>
          </div>
        </div>

        <div class="cart-item-end">
          ${euro(product.price * cart[product.id])}
          <button class="remove-item" data-remove="${product.id}">
            Retirer
          </button>
        </div>
      </article>
    `).join("");
  }

  const remaining = Math.max(0, 50 - total);

  document.getElementById("shippingText").textContent =
    count === 0
      ? "Ajoutez un produit pour commencer."
      : remaining === 0
        ? "Super ! La livraison est offerte dans cette démo."
        : `Encore ${euro(remaining)} pour atteindre les 50 € de livraison offerte.`;

  document.getElementById("shippingProgress").style.width =
    `${Math.min(100, total / 50 * 100)}%`;
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  showToast("Produit ajouté à votre panier ✓");
}

function changeQuantity(id, delta) {
  cart[id] = (cart[id] || 0) + delta;

  if (cart[id] <= 0) {
    delete cart[id];
  }

  renderCart();
}

// ==========================================
// PANIER COULISSANT
// ==========================================

function openCart() {
  overlay.classList.add("open");
  drawer.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("closeCart").focus();
}

function closeCart() {
  overlay.classList.remove("open");
  drawer.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// NOTIFICATIONS ET FENÊTRE D'INFORMATION
// ==========================================

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function showModal(title, message) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalMessage").textContent = message;
  document.getElementById("modalBackdrop").classList.add("open");
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
}

// ==========================================
// FILTRES ET NAVIGATION
// ==========================================

function selectCategory(category, scroll = true) {
  activeCategory = category;
  renderProducts();

  if (scroll) {
    document.getElementById("catalogue").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();

  searchQuery = document.getElementById("searchInput").value.trim();
  renderProducts();

  document.getElementById("catalogue").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("searchInput").addEventListener("input", event => {
  searchQuery = event.target.value.trim();
  renderProducts();
});

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (button) {
    selectCategory(button.dataset.category, false);
  }
});

document.querySelectorAll("[data-nav]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    selectCategory(link.dataset.nav);
  });
});

document.querySelectorAll("[data-jump]").forEach(button => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.jump);
  });
});

document.getElementById("sortSelect").addEventListener("change", event => {
  sortMode = event.target.value;
  renderProducts();
});

// ==========================================
// CLICS SUR LES CARTES PRODUITS
// ==========================================

grid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.favorite);

    if (favorites.has(id)) {
      favorites.delete(id);
    } else {
      favorites.add(id);
    }

    renderProducts();

    showToast(
      favorites.has(id)
        ? "Ajouté à vos favoris ♥"
        : "Retiré de vos favoris"
    );
  }
});

// ==========================================
// CLICS DANS LE PANIER
// ==========================================

cartItems.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-qty]");

  if (quantityButton) {
    changeQuantity(
      Number(quantityButton.dataset.qty),
      Number(quantityButton.dataset.delta)
    );
    return;
  }

  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    delete cart[Number(removeButton.dataset.remove)];
    renderCart();
    showToast("Produit retiré du panier");
    return;
  }

  if (event.target.closest("#continueShopping")) {
    closeCart();
  }
});

// ==========================================
// BOUTONS PRINCIPAUX
// ==========================================

document.getElementById("openCart")
  .addEventListener("click", openCart);

document.getElementById("closeCart")
  .addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);

document.getElementById("heroShop")
  .addEventListener("click", () => selectCategory("Tous"));

document.getElementById("checkout").addEventListener("click", () => {
  if (cartCount() > 0) {
    showModal(
      "Votre panier est prêt !",
      "Cette boutique est une maquette. Le paiement sécurisé et la validation des commandes ne sont pas encore connectés."
    );
  }
});

document.getElementById("accountButton").addEventListener("click", () => {
  showModal(
    "Votre espace client",
    "La création de compte et la connexion seront disponibles lorsque Colivrer sera relié à un service client sécurisé."
  );
});

document.getElementById("closeModal")
  .addEventListener("click", closeModal);

document.getElementById("modalOk")
  .addEventListener("click", closeModal);

document.getElementById("modalBackdrop").addEventListener("click", event => {
  if (event.target.id === "modalBackdrop") {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    closeModal();
  }
});

// ==========================================
// LANCEMENT DE LA BOUTIQUE
// ==========================================

renderProducts();
renderCart();
