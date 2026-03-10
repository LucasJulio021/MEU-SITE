/* =============================================
   PIZZARIA MUSSARELA — CARDÁPIO DIGITAL
   script.js — Lógica da aplicação
   ============================================= */

"use strict";

/* ============================================
   1. CONFIGURAÇÕES DA LOJA
   ─ Edite aqui o nome, WhatsApp, endereço etc.
   ============================================ */
const configuracoesLoja = {
  nome:      "Pizzaria Mussarela",
  slogan:    "Sabor que conquista",
  whatsapp:  "5567998220707",
  endereco:  "Três Lagoas - MS",
  horario:   "Todos os dias das 18h às 23h",
  instagram: "@pizzariamussarela",
  moeda:     "R$",
  logo:      "imagens/logo.png",

  cores: {
    fundo:            "#05080b",
    fundoSecundario:  "#0b1117",
    card:             "#101820",
    borda:            "#1c2833",
    texto:            "#ffffff",
    textoSuave:       "#c9d1d9",
    primaria:         "#e58a2f",
    primariaHover:    "#f19a45",
    destaque:         "#ef4444",
    destaqueHover:    "#dc2626",
    sucesso:          "#22c55e"
  }
};

/* ============================================
   2. CATEGORIAS
   ─ Adicione, remova ou renomeie categorias aqui
   ============================================ */
const categorias = [
  { id: "todas",        nome: "Todas",               emoji: "🍽️" },
  { id: "tradicionais", nome: "Pizzas Tradicionais", emoji: "🍕" },
  { id: "especiais",    nome: "Pizzas Especiais",    emoji: "⭐" },
  { id: "bebidas",      nome: "Bebidas",             emoji: "🥤" }
];

/* ============================================
   3. PRODUTOS
   ─ Adicione, edite ou remova produtos aqui.
   ─ Para adicionar uma categoria nova, crie-a
     na seção 2 e use o mesmo id aqui.
   ─ Imagens: coloque na pasta "imagens/" e
     referencie com "imagens/nome.jpg".
     Se não existir, exibe emoji como placeholder.
   ============================================ */
const produtos = [

  /* ---- PIZZAS TRADICIONAIS ---- */
  {
    id: 1,
    nome: "Pizza Mussarela",
    categoria: "tradicionais",
    descricao: "Molho de tomate artesanal, generosa camada de mussarela fresca e manjericão",
    imagem: "imagens/mussarela.jpg",
    placeholder: "🧀",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 39.90 },
      { nome: "Média (30cm)",    preco: 49.90 },
      { nome: "Grande (35cm)",   preco: 59.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 },
      { nome: "Cheddar",            preco: 8 },
      { nome: "Chocolate",          preco: 8 }
    ],
    adicionais: [
      { nome: "Extra mussarela", preco: 6 },
      { nome: "Bacon crocante",  preco: 7 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 2,
    nome: "Pizza Calabresa",
    categoria: "tradicionais",
    descricao: "Molho, mussarela, calabresa fatiada e cebola caramelizada",
    imagem: "imagens/calabresa.jpg",
    placeholder: "🌶️",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 42.90 },
      { nome: "Média (30cm)",    preco: 52.90 },
      { nome: "Grande (35cm)",   preco: 62.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 },
      { nome: "Cheddar",            preco: 8 }
    ],
    adicionais: [
      { nome: "Extra calabresa",  preco: 7 },
      { nome: "Extra mussarela",  preco: 6 },
      { nome: "Pimenta dedo-de-moça", preco: 3 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 3,
    nome: "Pizza Frango com Catupiry",
    categoria: "tradicionais",
    descricao: "Molho, mussarela, frango desfiado temperado e cream cheese catupiry",
    imagem: "imagens/frango-catupiry.jpg",
    placeholder: "🐔",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 44.90 },
      { nome: "Média (30cm)",    preco: 54.90 },
      { nome: "Grande (35cm)",   preco: 64.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 },
      { nome: "Cheddar",            preco: 8 }
    ],
    adicionais: [
      { nome: "Extra catupiry",  preco: 6 },
      { nome: "Milho",           preco: 4 },
      { nome: "Palmito",         preco: 5 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 4,
    nome: "Pizza Portuguesa",
    categoria: "tradicionais",
    descricao: "Molho, mussarela, presunto, ovos, azeitonas, pimentão e cebola",
    imagem: "imagens/portuguesa.jpg",
    placeholder: "🍳",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 44.90 },
      { nome: "Média (30cm)",    preco: 54.90 },
      { nome: "Grande (35cm)",   preco: 64.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 },
      { nome: "Cheddar",            preco: 8 }
    ],
    adicionais: [
      { nome: "Extra presunto",  preco: 6 },
      { nome: "Extra ovos",      preco: 4 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 5,
    nome: "Pizza Margherita",
    categoria: "tradicionais",
    descricao: "Molho de tomate fresco, mussarela de búfala, manjericão e azeite extra virgem",
    imagem: "imagens/margherita.jpg",
    placeholder: "🌿",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 44.90 },
      { nome: "Média (30cm)",    preco: 54.90 },
      { nome: "Grande (35cm)",   preco: 64.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 }
    ],
    adicionais: [
      { nome: "Rúcula",          preco: 5 },
      { nome: "Tomate seco",     preco: 6 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 6,
    nome: "Pizza Atum",
    categoria: "tradicionais",
    descricao: "Molho, mussarela, atum em pedaços, milho e cebola roxa",
    imagem: "imagens/atum.jpg",
    placeholder: "🐟",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 42.90 },
      { nome: "Média (30cm)",    preco: 52.90 },
      { nome: "Grande (35cm)",   preco: 62.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 },
      { nome: "Cheddar",            preco: 8 }
    ],
    adicionais: [
      { nome: "Extra atum",      preco: 7 },
      { nome: "Milho",           preco: 4 },
      { nome: "Azeitona",        preco: 4 }
    ],
    observacaoHabilitada: true
  },

  /* ---- PIZZAS ESPECIAIS ---- */
  {
    id: 7,
    nome: "Quatro Queijos",
    categoria: "especiais",
    descricao: "Mussarela, catupiry, parmesão e gorgonzola sobre molho de tomate especial",
    imagem: "imagens/quatro-queijos.jpg",
    placeholder: "🧀",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 49.90 },
      { nome: "Média (30cm)",    preco: 59.90 },
      { nome: "Grande (35cm)",   preco: 72.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 },
      { nome: "Cheddar",            preco: 8 }
    ],
    adicionais: [
      { nome: "Ervas finas",     preco: 4 },
      { nome: "Nozes",           preco: 7 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 8,
    nome: "Pizza Bacon",
    categoria: "especiais",
    descricao: "Molho defumado, mussarela, bacon em tiras crocantes e cebola roxa",
    imagem: "imagens/bacon.jpg",
    placeholder: "🥓",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 47.90 },
      { nome: "Média (30cm)",    preco: 57.90 },
      { nome: "Grande (35cm)",   preco: 69.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Cheddar",            preco: 8 },
      { nome: "Catupiry",           preco: 8 }
    ],
    adicionais: [
      { nome: "Extra bacon",     preco: 8 },
      { nome: "Ovo frito",       preco: 5 },
      { nome: "Jalapeño",        preco: 4 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 9,
    nome: "Moda da Casa",
    categoria: "especiais",
    descricao: "Receita exclusiva da casa: frango, bacon, catupiry, milho e pimentão",
    imagem: "imagens/moda-da-casa.jpg",
    placeholder: "👨‍🍳",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 52.90 },
      { nome: "Média (30cm)",    preco: 64.90 },
      { nome: "Grande (35cm)",   preco: 77.90 }
    ],
    bordas: [
      { nome: "Sem borda recheada", preco: 0 },
      { nome: "Catupiry",           preco: 8 },
      { nome: "Cheddar",            preco: 8 },
      { nome: "Chocolate",          preco: 8 }
    ],
    adicionais: [
      { nome: "Extra catupiry",  preco: 6 },
      { nome: "Extra bacon",     preco: 8 }
    ],
    observacaoHabilitada: true
  },

  {
    id: 10,
    nome: "Pizza Chocolate",
    categoria: "especiais",
    descricao: "Creme de chocolate, morango fresco, banana caramelada e granulado colorido",
    imagem: "imagens/chocolate.jpg",
    placeholder: "🍫",
    tamanhos: [
      { nome: "Pequena (25cm)",  preco: 45.90 },
      { nome: "Média (30cm)",    preco: 55.90 },
      { nome: "Grande (35cm)",   preco: 67.90 }
    ],
    bordas: [
      { nome: "Sem borda",        preco: 0 },
      { nome: "Ninho c/ Nutella", preco: 10 }
    ],
    adicionais: [
      { nome: "Morango extra",    preco: 5 },
      { nome: "Leite condensado", preco: 4 },
      { nome: "Amendoim crocante",preco: 4 }
    ],
    observacaoHabilitada: true
  },

  /* ---- BEBIDAS ---- */
  {
    id: 11,
    nome: "Coca-Cola 2L",
    categoria: "bebidas",
    descricao: "Refrigerante gelado Coca-Cola garrafa 2 litros",
    imagem: "imagens/coca-cola.jpg",
    placeholder: "🥤",
    tamanhos: [
      { nome: "2 Litros", preco: 12.90 }
    ],
    bordas: [],
    adicionais: [],
    observacaoHabilitada: false
  },

  {
    id: 12,
    nome: "Guaraná Antarctica 2L",
    categoria: "bebidas",
    descricao: "Refrigerante gelado Guaraná Antarctica garrafa 2 litros",
    imagem: "imagens/guarana.jpg",
    placeholder: "🧃",
    tamanhos: [
      { nome: "2 Litros", preco: 11.90 }
    ],
    bordas: [],
    adicionais: [],
    observacaoHabilitada: false
  }

];

/* ============================================
   4. ESTADO DA APLICAÇÃO
   ============================================ */
let estado = {
  categoriaAtiva: "todas",
  termoBusca:     "",
  carrinho:       [],
  cartAberto:     false,
  modalProduto:   null,
  modalQtd:       1,
  modalTamanhoIdx: null,
  modalBordaIdx:  null,
  modalAdicionais: []
};

/* ============================================
   5. SELETORES DOM
   ============================================ */
const $ = (id) => document.getElementById(id);

const DOM = {
  categoriasList:    $("categoriasList"),
  produtosGrid:      $("produtosGrid"),
  produtosVazio:     $("produtosVazio"),
  searchInput:       $("searchInput"),
  searchActive:      $("searchActive"),
  searchTerm:        $("searchTerm"),
  clearSearch:       $("clearSearch"),
  cartToggle:        $("cartToggle"),
  cartBadge:         $("cartBadge"),
  cart:              $("cart"),
  cartOverlay:       $("cartOverlay"),
  cartClose:         $("cartClose"),
  cartItems:         $("cartItems"),
  cartEmpty:         $("cartEmpty"),
  cartSummary:       $("cartSummary"),
  cartTotal:         $("cartTotal"),
  btnCheckout:       $("btnCheckout"),
  modalOverlay:      $("modalOverlay"),
  modal:             $("modal"),
  modalClose:        $("modalClose"),
  modalImg:          $("modalImg"),
  modalNome:         $("modalNome"),
  modalDesc:         $("modalDesc"),
  secaoTamanhos:     $("secaoTamanhos"),
  opcoesTamanhos:    $("opcoesTamanhos"),
  secaoBordas:       $("secaoBordas"),
  opcoesBordas:      $("opcoesBordas"),
  secaoAdicionais:   $("secaoAdicionais"),
  opcoesAdicionais:  $("opcoesAdicionais"),
  secaoObs:          $("secaoObs"),
  modalObs:          $("modalObs"),
  qtyMinus:          $("qtyMinus"),
  qtyPlus:           $("qtyPlus"),
  qtyValue:          $("qtyValue"),
  modalPrecoTotal:   $("modalPrecoTotal"),
  btnAdicionarCarrinho: $("btnAdicionarCarrinho"),
  headerWhatsapp:    $("headerWhatsapp"),
  bannerWhatsapp:    $("bannerWhatsapp"),
  infoHorario:       $("infoHorario"),
  infoEndereco:      $("infoEndereco"),
  infoInstagram:     $("infoInstagram"),
  footerNome:        $("footerNome"),
  footerSlogan:      $("footerSlogan"),
  footerAno:         $("footerAno")
};

/* ============================================
   6. FUNÇÕES UTILITÁRIAS
   ============================================ */

/** Formata número como moeda */
function formatarPreco(valor) {
  return `${configuracoesLoja.moeda} ${valor.toFixed(2).replace(".", ",")}`;
}

/** Normaliza string para busca (remove acentos, lowercase) */
function normalizar(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/** Gera ID único para itens do carrinho */
function gerarIdItem() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

/** Salva carrinho no localStorage */
function salvarCarrinho() {
  try {
    localStorage.setItem("pizzaria_mussarela_cart", JSON.stringify(estado.carrinho));
  } catch (e) { /* sem localStorage */ }
}

/** Carrega carrinho do localStorage */
function carregarCarrinho() {
  try {
    const salvo = localStorage.getItem("pizzaria_mussarela_cart");
    if (salvo) estado.carrinho = JSON.parse(salvo);
  } catch (e) { estado.carrinho = []; }
}

/** Calcula total do carrinho */
function calcularTotal() {
  return estado.carrinho.reduce((acc, item) => acc + item.precoTotal * item.quantidade, 0);
}

/** Conta total de itens no carrinho */
function contarItens() {
  return estado.carrinho.reduce((acc, item) => acc + item.quantidade, 0);
}

/** Aplica cores da marca nas variáveis CSS */
function aplicarTema() {
  const root = document.documentElement;
  const cores = configuracoesLoja.cores;

  if (!root || !cores) return;

  root.style.setProperty("--cor-fundo", cores.fundo);
  root.style.setProperty("--cor-fundo-secundario", cores.fundoSecundario);
  root.style.setProperty("--cor-card", cores.card);
  root.style.setProperty("--cor-borda", cores.borda);
  root.style.setProperty("--cor-texto", cores.texto);
  root.style.setProperty("--cor-texto-suave", cores.textoSuave);
  root.style.setProperty("--cor-primaria", cores.primaria);
  root.style.setProperty("--cor-primaria-hover", cores.primariaHover);
  root.style.setProperty("--cor-destaque", cores.destaque);
  root.style.setProperty("--cor-destaque-hover", cores.destaqueHover);
  root.style.setProperty("--cor-sucesso", cores.sucesso);
}

/** Tenta aplicar logo onde existir elemento compatível */
function aplicarLogo() {
  if (!configuracoesLoja.logo) return;

  const seletores = [
    "#logoLoja",
    ".logo-loja",
    ".brand__logo",
    "[data-store-logo]"
  ];

  seletores.forEach(seletor => {
    document.querySelectorAll(seletor).forEach(el => {
      if (el.tagName === "IMG") {
        el.src = configuracoesLoja.logo;
        el.alt = `Logo ${configuracoesLoja.nome}`;
      } else {
        el.style.backgroundImage = `url('${configuracoesLoja.logo}')`;
        el.style.backgroundSize = "contain";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";
      }
    });
  });
}

/* ============================================
   7. RENDERIZAÇÃO — CONFIGURAÇÕES DA LOJA
   ============================================ */
function renderizarConfiguracoes() {
  const c = configuracoesLoja;
  const whatsLink = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido 🍕")}`;

  if (DOM.headerWhatsapp) DOM.headerWhatsapp.href = whatsLink;
  if (DOM.bannerWhatsapp) DOM.bannerWhatsapp.href = whatsLink;
  if (DOM.infoHorario) DOM.infoHorario.textContent = c.horario;
  if (DOM.infoEndereco) DOM.infoEndereco.textContent = c.endereco;
  if (DOM.infoInstagram) DOM.infoInstagram.textContent = c.instagram;
  if (DOM.footerNome) DOM.footerNome.textContent = c.nome;
  if (DOM.footerSlogan) DOM.footerSlogan.textContent = c.slogan;
  if (DOM.footerAno) DOM.footerAno.textContent = new Date().getFullYear();

  document.title = `${c.nome} — Cardápio Digital`;

  aplicarTema();
  aplicarLogo();
}

/* ============================================
   8. RENDERIZAÇÃO — CATEGORIAS
   ============================================ */
function renderizarCategorias() {
  DOM.categoriasList.innerHTML = "";
  categorias.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (cat.id === estado.categoriaAtiva ? " ativo" : "");
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", cat.id === estado.categoriaAtiva ? "true" : "false");
    btn.dataset.catId = cat.id;
    btn.innerHTML = `<span class="cat-emoji" aria-hidden="true">${cat.emoji}</span>${cat.nome}`;
    btn.addEventListener("click", () => selecionarCategoria(cat.id));
    DOM.categoriasList.appendChild(btn);
  });
}

function selecionarCategoria(id) {
  estado.categoriaAtiva = id;
  renderizarCategorias();
  renderizarProdutos();
}

/* ============================================
   9. RENDERIZAÇÃO — PRODUTOS + BUSCA/FILTROS
   ============================================ */
function produtosFiltrados() {
  let lista = [...produtos];

  if (estado.categoriaAtiva !== "todas") {
    lista = lista.filter(p => p.categoria === estado.categoriaAtiva);
  }

  if (estado.termoBusca) {
    const termo = normalizar(estado.termoBusca);
    lista = lista.filter(p =>
      normalizar(p.nome).includes(termo) ||
      normalizar(p.descricao).includes(termo)
    );
  }

  return lista;
}

function renderizarProdutos() {
  const lista = produtosFiltrados();
  DOM.produtosGrid.innerHTML = "";

  if (lista.length === 0) {
    DOM.produtosGrid.hidden = true;
    DOM.produtosVazio.hidden = false;
    return;
  }

  DOM.produtosGrid.hidden = false;
  DOM.produtosVazio.hidden = true;

  lista.forEach((produto, i) => {
    const precoBase = produto.tamanhos.length > 0 ? produto.tamanhos[0].preco : 0;
    const ehSimples = produto.tamanhos.length === 1 && produto.bordas.length === 0 && produto.adicionais.length === 0;

    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", produto.nome);
    card.style.animationDelay = `${i * 40}ms`;

    card.innerHTML = `
      <div class="card__img-wrap">
        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="card__placeholder" style="display:none" aria-hidden="true">${produto.placeholder || "🍕"}</div>
      </div>
      <div class="card__body">
        <h3 class="card__nome">${produto.nome}</h3>
        <p class="card__desc">${produto.descricao}</p>
        <div class="card__footer">
          <div class="card__preco">
            <span>A partir de</span>
            <strong>${formatarPreco(precoBase)}</strong>
          </div>
          <button class="card__btn" data-id="${produto.id}" aria-label="${ehSimples ? "Adicionar " + produto.nome + " ao carrinho" : "Ver opções de " + produto.nome}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              ${ehSimples
                ? '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'
                : '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'}
            </svg>
            ${ehSimples ? "Adicionar" : "Ver opções"}
          </button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".card__btn") && ehSimples) {
        adicionarProdutoSimples(produto);
      } else {
        abrirModal(produto);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirModal(produto);
      }
    });

    DOM.produtosGrid.appendChild(card);
  });
}

function limparFiltros() {
  estado.categoriaAtiva = "todas";
  estado.termoBusca = "";
  DOM.searchInput.value = "";
  DOM.searchActive.hidden = true;
  renderizarCategorias();
  renderizarProdutos();
}

/* ============================================
   10. MODAL DE PRODUTO
   ============================================ */
function abrirModal(produto) {
  estado.modalProduto = produto;
  estado.modalQtd = 1;
  estado.modalTamanhoIdx = produto.tamanhos.length === 1 ? 0 : null;
  estado.modalBordaIdx = null;
  estado.modalAdicionais = [];

  DOM.modalImg.src = produto.imagem;
  DOM.modalImg.alt = produto.nome;
  DOM.modalNome.textContent = produto.nome;
  DOM.modalDesc.textContent = produto.descricao;
  DOM.modalObs.value = "";
  DOM.qtyValue.textContent = 1;

  renderizarOpcoesTamanho();

  if (produto.bordas && produto.bordas.length > 0) {
    DOM.secaoBordas.hidden = false;
    renderizarOpcoesBorda();
  } else {
    DOM.secaoBordas.hidden = true;
  }

  if (produto.adicionais && produto.adicionais.length > 0) {
    DOM.secaoAdicionais.hidden = false;
    renderizarOpcoesAdicionais();
  } else {
    DOM.secaoAdicionais.hidden = true;
  }

  DOM.secaoObs.hidden = !produto.observacaoHabilitada;

  atualizarPrecoModal();

  DOM.modalOverlay.hidden = false;
  requestAnimationFrame(() => {
    DOM.modalOverlay.classList.add("aberto");
    DOM.modal.scrollTop = 0;
  });
  document.body.style.overflow = "hidden";

  if (typeof fbq !== "undefined") {
    fbq("track", "ViewContent", { content_name: produto.nome });
  }
}

function fecharModal() {
  DOM.modalOverlay.classList.remove("aberto");
  setTimeout(() => {
    DOM.modalOverlay.hidden = true;
    estado.modalProduto = null;
  }, 280);
  document.body.style.overflow = "";
}

function renderizarOpcoesTamanho() {
  const p = estado.modalProduto;
  DOM.opcoesTamanhos.innerHTML = "";
  p.tamanhos.forEach((tam, i) => {
    const label = document.createElement("label");
    label.className = "opcao-radio" + (estado.modalTamanhoIdx === i ? " selecionado" : "");
    label.innerHTML = `
      <input type="radio" name="tamanho" value="${i}" ${estado.modalTamanhoIdx === i ? "checked" : ""}/>
      <span class="opcao-indicador"></span>
      <span class="opcao-nome">${tam.nome}</span>
      <span class="opcao-preco">${formatarPreco(tam.preco)}</span>
    `;
    label.addEventListener("click", () => {
      estado.modalTamanhoIdx = i;
      renderizarOpcoesTamanho();
      atualizarPrecoModal();
    });
    DOM.opcoesTamanhos.appendChild(label);
  });
}

function renderizarOpcoesBorda() {
  const p = estado.modalProduto;
  DOM.opcoesBordas.innerHTML = "";
  p.bordas.forEach((borda, i) => {
    const label = document.createElement("label");
    label.className = "opcao-radio" + (estado.modalBordaIdx === i ? " selecionado" : "");
    const precoLabel = borda.preco > 0 ? `+${formatarPreco(borda.preco)}` : "Grátis";
    const ehPlus = borda.preco > 0;
    label.innerHTML = `
      <input type="radio" name="borda" value="${i}" ${estado.modalBordaIdx === i ? "checked" : ""}/>
      <span class="opcao-indicador"></span>
      <span class="opcao-nome">${borda.nome}</span>
      <span class="opcao-preco ${ehPlus ? "preco-plus" : ""}">${precoLabel}</span>
    `;
    label.addEventListener("click", () => {
      estado.modalBordaIdx = estado.modalBordaIdx === i ? null : i;
      renderizarOpcoesBorda();
      atualizarPrecoModal();
    });
    DOM.opcoesBordas.appendChild(label);
  });
}

function renderizarOpcoesAdicionais() {
  const p = estado.modalProduto;
  DOM.opcoesAdicionais.innerHTML = "";
  p.adicionais.forEach((ad, i) => {
    const selecionado = estado.modalAdicionais.includes(i);
    const label = document.createElement("label");
    label.className = "opcao-check" + (selecionado ? " selecionado" : "");
    label.innerHTML = `
      <input type="checkbox" value="${i}" ${selecionado ? "checked" : ""}/>
      <span class="opcao-check-box">✓</span>
      <span class="opcao-nome">${ad.nome}</span>
      <span class="opcao-preco preco-plus">+${formatarPreco(ad.preco)}</span>
    `;
    label.addEventListener("click", () => {
      if (selecionado) {
        estado.modalAdicionais = estado.modalAdicionais.filter(x => x !== i);
      } else {
        estado.modalAdicionais.push(i);
      }
      renderizarOpcoesAdicionais();
      atualizarPrecoModal();
    });
    DOM.opcoesAdicionais.appendChild(label);
  });
}

function calcularPrecoModal() {
  const p = estado.modalProduto;
  if (!p) return 0;

  let total = 0;

  if (estado.modalTamanhoIdx !== null) {
    total += p.tamanhos[estado.modalTamanhoIdx].preco;
  }
  if (estado.modalBordaIdx !== null) {
    total += p.bordas[estado.modalBordaIdx].preco;
  }
  estado.modalAdicionais.forEach(i => {
    total += p.adicionais[i].preco;
  });

  return total * estado.modalQtd;
}

function atualizarPrecoModal() {
  const p = estado.modalProduto;
  const total = calcularPrecoModal();
  DOM.modalPrecoTotal.textContent = formatarPreco(total);

  const precisaTamanho = p && p.tamanhos.length > 1 && estado.modalTamanhoIdx === null;
  DOM.btnAdicionarCarrinho.disabled = precisaTamanho;

  if (precisaTamanho) {
    DOM.btnAdicionarCarrinho.textContent = "Selecione o tamanho";
  } else {
    DOM.btnAdicionarCarrinho.innerHTML = `Adicionar • <span id="modalPrecoTotal">${formatarPreco(total)}</span>`;
  }
}

/* ============================================
   11. CARRINHO
   ============================================ */
function adicionarAoCarrinho() {
  const p = estado.modalProduto;
  if (!p) return;
  if (p.tamanhos.length > 1 && estado.modalTamanhoIdx === null) return;

  const tamanho = estado.modalTamanhoIdx !== null ? p.tamanhos[estado.modalTamanhoIdx] : p.tamanhos[0];
  const borda = estado.modalBordaIdx !== null ? p.bordas[estado.modalBordaIdx] : null;
  const ads = estado.modalAdicionais.map(i => p.adicionais[i]);
  const obs = estado.modalObs.value.trim();

  let precoUnit = tamanho.preco;
  if (borda) precoUnit += borda.preco;
  ads.forEach(ad => { precoUnit += ad.preco; });

  const item = {
    uid:        gerarIdItem(),
    produtoId:  p.id,
    nome:       p.nome,
    tamanho:    tamanho.nome,
    borda:      borda ? borda.nome : null,
    adicionais: ads.map(a => a.nome),
    observacao: obs,
    precoTotal: precoUnit,
    quantidade: estado.modalQtd
  };

  estado.carrinho.push(item);
  salvarCarrinho();
  renderizarCarrinho();
  fecharModal();
  animarBadge();

  if (typeof fbq !== "undefined") {
    fbq("track", "AddToCart", {
      content_name: p.nome,
      value: precoUnit * estado.modalQtd,
      currency: "BRL"
    });
  }
}

function adicionarProdutoSimples(produto) {
  const tamanho = produto.tamanhos[0];
  const item = {
    uid:        gerarIdItem(),
    produtoId:  produto.id,
    nome:       produto.nome,
    tamanho:    tamanho.nome,
    borda:      null,
    adicionais: [],
    observacao: "",
    precoTotal: tamanho.preco,
    quantidade: 1
  };

  estado.carrinho.push(item);
  salvarCarrinho();
  renderizarCarrinho();
  animarBadge();

  if (typeof fbq !== "undefined") {
    fbq("track", "AddToCart", {
      content_name: produto.nome,
      value: tamanho.preco,
      currency: "BRL"
    });
  }
}

function alterarQuantidadeItem(uid, delta) {
  const item = estado.carrinho.find(i => i.uid === uid);
  if (!item) return;

  item.quantidade += delta;

  if (item.quantidade <= 0) {
    removerItem(uid);
    return;
  }

  salvarCarrinho();
  renderizarCarrinho();
}

function removerItem(uid) {
  estado.carrinho = estado.carrinho.filter(i => i.uid !== uid);
  salvarCarrinho();
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const total = calcularTotal();
  const qtdItens = contarItens();

  DOM.cartBadge.textContent = qtdItens;
  DOM.cartBadge.style.display = qtdItens > 0 ? "flex" : "none";

  if (estado.carrinho.length === 0) {
    DOM.cartItems.innerHTML = "";
    DOM.cartEmpty.hidden = false;
    DOM.cartSummary.hidden = true;
    return;
  }

  DOM.cartEmpty.hidden = true;
  DOM.cartSummary.hidden = false;
  DOM.cartTotal.textContent = formatarPreco(total);
  DOM.cartItems.innerHTML = "";

  estado.carrinho.forEach(item => {
    const detalhes = [];
    if (item.tamanho) detalhes.push(item.tamanho);
    if (item.borda && item.borda !== "Sem borda recheada" && item.borda !== "Sem borda") {
      detalhes.push("Borda: " + item.borda);
    }
    if (item.adicionais.length > 0) detalhes.push("+ " + item.adicionais.join(", "));
    if (item.observacao) detalhes.push("Obs: " + item.observacao);

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div style="flex:1">
        <p class="cart-item__nome">${item.nome}</p>
        ${detalhes.length ? `<p class="cart-item__detalhe">${detalhes.join(" · ")}</p>` : ""}
        <p class="cart-item__preco">${formatarPreco(item.precoTotal * item.quantidade)}</p>
        <div class="cart-item__controls">
          <div class="cart-item__qty">
            <button class="cart-item__qty-btn" data-uid="${item.uid}" data-delta="-1" aria-label="Diminuir quantidade">−</button>
            <span class="cart-item__qty-val">${item.quantidade}</span>
            <button class="cart-item__qty-btn" data-uid="${item.uid}" data-delta="1" aria-label="Aumentar quantidade">+</button>
          </div>
          <button class="cart-item__remove" data-uid="${item.uid}">Remover</button>
        </div>
      </div>
    `;
    DOM.cartItems.appendChild(div);
  });

  DOM.cartItems.querySelectorAll(".cart-item__qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alterarQuantidadeItem(btn.dataset.uid, Number(btn.dataset.delta));
    });
  });

  DOM.cartItems.querySelectorAll(".cart-item__remove").forEach(btn => {
    btn.addEventListener("click", () => removerItem(btn.dataset.uid));
  });
}

function animarBadge() {
  DOM.cartBadge.classList.remove("bump");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => DOM.cartBadge.classList.add("bump"));
  });
  setTimeout(() => DOM.cartBadge.classList.remove("bump"), 300);
}

function abrirCarrinho() {
  estado.cartAberto = true;
  DOM.cart.classList.add("aberto");
  DOM.cart.setAttribute("aria-hidden", "false");
  DOM.cartOverlay.classList.add("visivel");
  document.body.style.overflow = "hidden";
}

function fecharCarrinho() {
  estado.cartAberto = false;
  DOM.cart.classList.remove("aberto");
  DOM.cart.setAttribute("aria-hidden", "true");
  DOM.cartOverlay.classList.remove("visivel");
  document.body.style.overflow = "";
}

/* ============================================
   12. INTEGRAÇÃO WHATSAPP
   ============================================ */
function gerarMensagemWhatsApp() {
  const c = configuracoesLoja;
  let msg = `🍕 *${c.nome}* — Novo Pedido\n\n`;

  estado.carrinho.forEach((item, i) => {
    msg += `*${i + 1}. ${item.nome}*\n`;
    if (item.tamanho) msg += `   📏 Tamanho: ${item.tamanho}\n`;
    if (item.borda && item.borda !== "Sem borda recheada" && item.borda !== "Sem borda") {
      msg += `   🧀 Borda: ${item.borda}\n`;
    }
    if (item.adicionais.length > 0) msg += `   ➕ Adicionais: ${item.adicionais.join(", ")}\n`;
    if (item.observacao) msg += `   📝 Obs: ${item.observacao}\n`;
    msg += `   🔢 Qtd: ${item.quantidade}x — ${formatarPreco(item.precoTotal)}/un\n`;
    msg += `   💰 Subtotal: ${formatarPreco(item.precoTotal * item.quantidade)}\n\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━\n`;
  msg += `🛒 *Total do pedido: ${formatarPreco(calcularTotal())}*\n`;
  msg += `━━━━━━━━━━━━━━━━━\n\n`;
  msg += `Aguardando confirmação! 😊`;

  return msg;
}

function finalizarPedido() {
  if (estado.carrinho.length === 0) return;

  const msg = gerarMensagemWhatsApp();
  const link = `https://wa.me/${configuracoesLoja.whatsapp}?text=${encodeURIComponent(msg)}`;

  if (typeof fbq !== "undefined") {
    fbq("track", "InitiateCheckout", {
      value: calcularTotal(),
      currency: "BRL",
      num_items: contarItens()
    });
  }

  window.open(link, "_blank", "noopener,noreferrer");
}

/* ============================================
   13. META PIXEL — EVENTOS AUTOMÁTICOS
   ============================================ */
function disparaPageView() {
  if (typeof fbq !== "undefined") {
    fbq("track", "PageView");
  }
}

/* ============================================
   14. INICIALIZAÇÃO
   ============================================ */
function inicializar() {
  renderizarConfiguracoes();
  carregarCarrinho();
  renderizarCategorias();
  renderizarProdutos();
  renderizarCarrinho();
  disparaPageView();

  DOM.searchInput.addEventListener("input", () => {
    estado.termoBusca = DOM.searchInput.value.trim();
    if (estado.termoBusca) {
      DOM.searchActive.hidden = false;
      DOM.searchTerm.textContent = estado.termoBusca;
    } else {
      DOM.searchActive.hidden = true;
    }
    renderizarProdutos();
  });

  DOM.clearSearch.addEventListener("click", () => {
    DOM.searchInput.value = "";
    estado.termoBusca = "";
    DOM.searchActive.hidden = true;
    renderizarProdutos();
  });

  DOM.modalClose.addEventListener("click", fecharModal);
  DOM.modalOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.modalOverlay) fecharModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!DOM.modalOverlay.hidden) fecharModal();
      if (estado.cartAberto) fecharCarrinho();
    }
  });

  DOM.qtyMinus.addEventListener("click", () => {
    if (estado.modalQtd > 1) {
      estado.modalQtd--;
      DOM.qtyValue.textContent = estado.modalQtd;
      atualizarPrecoModal();
    }
  });

  DOM.qtyPlus.addEventListener("click", () => {
    estado.modalQtd++;
    DOM.qtyValue.textContent = estado.modalQtd;
    atualizarPrecoModal();
  });

  DOM.btnAdicionarCarrinho.addEventListener("click", adicionarAoCarrinho);

  DOM.cartToggle.addEventListener("click", () => {
    estado.cartAberto ? fecharCarrinho() : abrirCarrinho();
  });

  DOM.cartClose.addEventListener("click", fecharCarrinho);
  DOM.cartOverlay.addEventListener("click", fecharCarrinho);
  DOM.btnCheckout.addEventListener("click", finalizarPedido);

  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = "0 2px 20px rgba(0,0,0,.12)";
    } else {
      header.style.boxShadow = "";
    }
  }, { passive: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar);
} else {
  inicializar();
}
