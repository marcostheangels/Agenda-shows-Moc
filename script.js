// =========================
// AGENDA SHOWS MOC - JS
// =========================

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const STORAGE_KEY = 'agendaShowsMOC_data';

// ============== DADOS PADRÃO (fallback) ==============
const defaultData = {
    config: {
        siteName: 'Agenda Shows MOC',
        whatsapp: '(38) 99999-9999',
        email: 'contato@agendashowsmoc.com',
        instagram: '@agendashowsmoc',
        eventosMes: 150,
        seguidores: 20,
        visualizacoes: 50,
        countdownTitulo: 'Festival de Forró de MOC — 3ª Edição',
        countdownData: '2026-10-15T20:00',
        countdownLocal: 'Arena MOC • 15 de Outubro, 2026 • 20h',
        pacotePreco: 'R$ 49',
        anuncieTexto: 'Quero Anunciar'
    },
    eventos: [
        { id: 1, titulo: 'Forró do Bom — Wesley Safadão Cover', cat: 'Casa de Forró', bairro: 'Centro', preco: 30, data: '15 SET', hora: 'Sábado, 22h', local: 'Villa Forró - Centro', desc: 'A noite mais esperada do forró em MOC! Cerveja gelada, ambiente climatizado e a melhor sanfona da cidade tocando os maiores sucessos do momento.', img: 'linear-gradient(135deg,#ff3d6e,#ff8a3d)', tag: 'HOT' },
        { id: 2, titulo: 'Rock Night — Bandas Locais', cat: 'Barzinho', bairro: 'Independência', preco: 0, data: '17 SET', hora: 'Terça, 21h', local: 'Boteco do Rock - Av. Independência', desc: 'Noite de rock com bandas autorais e clássicos inesquecíveis.', img: 'linear-gradient(135deg,#7c3aed,#3b82f6)', tag: '' },
        { id: 3, titulo: 'Sertanejo & Vinho — Jantar Musical', cat: 'Restaurante', bairro: 'Centro', preco: 89, data: '20 SET', hora: 'Sexta, 20h', local: 'Restaurante Sabor da Terra', desc: 'Jantar harmonizado com pratos da culinária regional e show de sertanejo ao vivo.', img: 'linear-gradient(135deg,#10b981,#059669)', tag: 'NOVO' },
        { id: 4, titulo: 'Pagode do MOC — Grupo Revelação Cover', cat: 'Show ao Vivo', bairro: 'Todos os Santos', preco: 40, data: '22 SET', hora: 'Domingo, 20h', local: 'Arena MOC - Bairro Todos os Santos', desc: 'O melhor pagode da região com banda cover e open de chopp até meia-noite.', img: 'linear-gradient(135deg,#f59e0b,#ef4444)', tag: '' },
        { id: 5, titulo: 'Festa Universitária — DJ Marcos', cat: 'Festa', bairro: 'Centro', preco: 25, data: '27 SET', hora: 'Sábado, 23h', local: 'Lounge Club - Avenida MOC', desc: 'A balada mais badalada da cidade com DJ Marcos e convidados.', img: 'linear-gradient(135deg,#ec4899,#8b5cf6)', tag: '' },
        { id: 6, titulo: 'Samba de Roda — Noite Especial', cat: 'Show ao Vivo', bairro: 'Centro', preco: 35, data: '29 SET', hora: 'Domingo, 21h', local: 'Casa do Samba - Centro Histórico', desc: 'Roda de samba com clássicos que marcaram época.', img: 'linear-gradient(135deg,#0ea5e9,#1e40af)', tag: 'VIP' }
    ],
    estabelecimentos: [
        { id: 1, nome: 'Villa Forró', cat: 'Forró', desc: 'A casa mais tradicional de forró da cidade', img: 'linear-gradient(135deg,#dc2626,#7c2d12)' },
        { id: 2, nome: 'Boteco do Rock', cat: 'Bar', desc: 'Rock, petiscos e cerveja gelada', img: 'linear-gradient(135deg,#1e40af,#7c3aed)' },
        { id: 3, nome: 'Sabor da Terra', cat: 'Restaurante', desc: 'Culinária regional com música ao vivo', img: 'linear-gradient(135deg,#059669,#065f46)' },
        { id: 4, nome: 'Lounge Club', cat: 'Festa', desc: 'A balada mais badalada de MOC', img: 'linear-gradient(135deg,#db2777,#831843)' }
    ],
    categorias: [
        { id: 1, nome: 'Casa de Forró', slug: 'forro', icone: '🎶', cor: '#dc2626' },
        { id: 2, nome: 'Barzinho', slug: 'bar', icone: '🍺', cor: '#7c3aed' },
        { id: 3, nome: 'Restaurante', slug: 'restaurante', icone: '🍽️', cor: '#10b981' },
        { id: 4, nome: 'Show ao Vivo', slug: 'show', icone: '🎤', cor: '#ec4899' },
        { id: 5, nome: 'Sertanejo', slug: 'sertanejo', icone: '🤠', cor: '#f59e0b' },
        { id: 6, nome: 'Pagode', slug: 'pagode', icone: '🥁', cor: '#d97706' },
        { id: 7, nome: 'Rock', slug: 'rock', icone: '🎸', cor: '#1e293b' },
        { id: 8, nome: 'Festa', slug: 'festa', icone: '🎉', cor: '#a855f7' }
    ],
    blog: [
        { id: 1, titulo: 'Festival de Forró de MOC anuncia line-up da 3ª edição', cat: 'Cobertura', data: '02 Set 2026', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', resumo: 'Os maiores nomes do forró nacional se apresentam em outubro na Arena MOC.' }
    ],
    depoimentos: []
};

const isImgSrc = s => s && (s.startsWith('data:image') || s.startsWith('http') || s.startsWith('blob:') || s.startsWith('fotos/') || s.startsWith('./fotos/') || s.startsWith('/fotos/') || s.startsWith('../fotos/') || /\.(jpe?g|png|webp|gif|avif|svg)(\?.*)?$/i.test(s));
const siteBase = (() => {
    try {
        const u = new URL('.', window.location.href);
        return u.pathname.endsWith('/') ? u.pathname : u.pathname + '/';
    } catch { return './'; }
})();
const resolveImgSrc = img => {
    if (!img) return '';
    if (img.startsWith('data:') || img.startsWith('blob:')) return img;
    if (img.startsWith('http')) return img;
    if (img.startsWith('./')) return img.substring(2);
    if (img.startsWith('/')) return img;
    if (img.startsWith('../')) return img;
    if (img.includes('/')) return siteBase + img;
    return siteBase + 'fotos/' + img;
};
const bgStyle = img => {
    if (!img) return 'background:linear-gradient(135deg,#ff3d6e,#ff8a3d)';
    if (isImgSrc(img)) {
        const src = resolveImgSrc(img);
        return `background-image:linear-gradient(135deg,rgba(0,0,0,0.25),rgba(0,0,0,0.45)),url("${src}");background-size:cover;background-position:center;background-color:#222`;
    }
    return `background:${img}`;
};

function loadLocal() {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch(e) { return null; }
    if (stored) {
        try { return JSON.parse(stored); } catch(e) {}
    }
    return null;
}

let adminData = loadLocal();
let useAdmin = adminData !== null;

async function loadRemote() {
    try {
        const res = await fetch('data.json?v=' + Date.now(), { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } });
        if (!res.ok) return false;
        const json = await res.json();
        if (!json || !json.eventos) return false;
        adminData = json;
        useAdmin = true;
        applyConfig();
        renderEventosFromAdmin();
        renderEstabelecimentosFromAdmin();
        renderCategoriasFromAdmin();
        renderBlogFromAdmin();
        renderDepoimentosFromAdmin();
        renderCalendar();
        updateCountdown();
        const total = json.eventos.length;
        const comFoto = json.eventos.filter(e => e.img && (e.img.startsWith('fotos/') || e.img.startsWith('http') || e.img.startsWith('data:image'))).length;
        console.log('%c✅ data.json carregado: ' + total + ' eventos', 'color:#10b981;font-weight:bold');
        return true;
    } catch (e) {
        console.warn('❌ Falha ao carregar data.json remoto:', e.message);
        return false;
    }
}

// ============== APLICAR DADOS DO ADMIN NO SITE ==============
function applyConfig() {
    if (!adminData) return;
    const cfg = adminData.config;
    if (cfg.whatsapp) {
        document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
            const num = cfg.whatsapp.replace(/\D/g, '');
            a.href = `https://wa.me/55${num}`;
        });
    }
    if (cfg.email) {
        const m = document.querySelector('a[href^="mailto:"]');
        if (m) m.href = 'mailto:' + cfg.email;
    }
    if (cfg.countdownTitulo) {
        const t = document.querySelector('.cd-title');
        if (t) t.textContent = cfg.countdownTitulo;
    }
    if (cfg.countdownLocal) {
        const i = document.querySelector('.cd-info');
        if (i) i.textContent = '📍 ' + cfg.countdownLocal;
    }
    if (cfg.eventosMes) {
        const el = document.querySelector('[data-target="150"]');
        if (el) el.setAttribute('data-target', cfg.eventosMes);
    }
    if (cfg.seguidores) {
        const el = document.querySelector('[data-target="20"]');
        if (el) el.setAttribute('data-target', cfg.seguidores);
    }
    if (cfg.visualizacoes) {
        const el = document.querySelector('[data-target="50"]');
        if (el) el.setAttribute('data-target', cfg.visualizacoes);
    }
    if (cfg.pacotePreco) {
        const els = document.querySelectorAll('.cta-list li:last-child');
        els.forEach(el => { if (el.textContent.includes('R$')) el.textContent = '✓ Pacotes a partir de ' + cfg.pacotePreco + '/mês'; });
    }
    if (cfg.anuncieTexto) {
        const els = document.querySelectorAll('a[href="#contato"].btn');
        els.forEach(el => el.textContent = cfg.anuncieTexto);
    }
}

function renderEventosFromAdmin() {
    if (!adminData || !adminData.eventos.length) return false;
    const grid = $('#eventGrid');
    const count = $('#eventsCount');
    if (!grid) return false;
    grid.innerHTML = adminData.eventos.map(ev => {
        const imgStyle = bgStyle(ev.img);
        return `
        <article class="event-card" data-id="${ev.id}" data-cat="${ev.cat}" data-bairro="${ev.bairro}" data-preco="${ev.preco}" data-titulo="${ev.titulo.replace(/"/g,'&quot;')}" data-local="${ev.local.replace(/"/g,'&quot;')}" data-endereco="${(ev.endereco || '').replace(/"/g,'&quot;')}" data-data="${ev.data}" data-hora="${ev.hora}" data-desc="${(ev.desc || '').replace(/"/g,'&quot;')}" data-galeria="${JSON.stringify(ev.galeria || []).replace(/"/g,'&quot;')}">
            <button class="fav-card" data-fav="${ev.id}" aria-label="Favoritar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <div class="event-img" style="${imgStyle}">
                <span class="event-date">${ev.data}</span>
                ${ev.tag ? `<span class="event-tag tag-${ev.tag.toLowerCase()}">${ev.tag}</span>` : ''}
                ${ev.galeria && ev.galeria.length ? `<span class="event-tag tag-fotos">📷 +${ev.galeria.length}</span>` : ''}
            </div>
            <div class="event-info">
                <span class="event-cat">${ev.cat}</span>
                <h3 class="event-title">${ev.titulo}</h3>
                <p class="event-local">📍 ${ev.local}</p>
                <p class="event-time">⏰ ${ev.hora} • ${ev.preco === 0 ? 'Entrada Franca' : 'R$ ' + ev.preco}</p>
                <a href="#" class="event-btn open-modal" data-id="${ev.id}">Ver Detalhes</a>
            </div>
        </article>
    `}).join('');
    if (count) count.textContent = `Mostrando ${adminData.eventos.length} eventos`;

    bindEventActions();
    updateFilters();
    return true;
}

function renderEstabelecimentosFromAdmin() {
    if (!adminData || !adminData.estabelecimentos.length) return false;
    const grids = document.querySelectorAll('.est-grid');
    if (!grids.length) return false;
    grids.forEach(grid => {
        grid.innerHTML = adminData.estabelecimentos.map(e => {
            const temFoto = e.img && isImgSrc(e.img);
            const fallbackImg = !temFoto
                ? (adminData.eventos.find(ev => ev.img && isImgSrc(ev.img) && categoriaCombina(ev.cat, e.cat)) || {}).img
                : null;
            const imgFinal = temFoto ? e.img : (fallbackImg || e.img);
            return `
            <a href="#" class="est-card">
                <div class="est-img" style="${bgStyle(imgFinal)}">
                    <span class="est-cat">${e.cat}</span>
                </div>
                <div class="est-info">
                    <h3>${e.nome}</h3>
                    <p>${e.desc}</p>
                    <span class="est-link">Ver agenda →</span>
                </div>
            </a>
        `}).join('');
    });
    return true;
}

function normalizarCat(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function categoriaCombina(catEvento, catEstabelecimento) {
    const a = normalizarCat(catEvento);
    const b = normalizarCat(catEstabelecimento);
    if (!a || !b) return false;
    return a.includes(b) || b.includes(a);
}

function renderCategoriasFromAdmin() {
    if (!adminData || !adminData.categorias.length) return false;
    const grid = document.querySelector('.cat-grid');
    if (!grid) return false;
    grid.innerHTML = adminData.categorias.map(c => {
        const count = adminData.eventos.filter(e => e.cat === c.nome).length;
        const firstEvent = adminData.eventos.find(e => e.cat === c.nome && e.img && isImgSrc(e.img));
        const firstEst = !firstEvent ? adminData.estabelecimentos.find(e => e.cat === c.nome && e.img && isImgSrc(e.img)) : null;
        const catClass = 'cat-' + (c.slug || c.nome.toLowerCase().replace(/\s+/g, '-'));
        const catBg = firstEvent
            ? `background-image:linear-gradient(135deg,${c.cor}88,${c.cor}44),url("${resolveImgSrc(firstEvent.img)}");background-size:cover;background-position:center;`
            : firstEst
            ? `background-image:linear-gradient(135deg,${c.cor}88,${c.cor}44),url("${resolveImgSrc(firstEst.img)}");background-size:cover;background-position:center;`
            : '';
        return `
        <a href="#" class="cat-card ${catClass}">
            <div class="cat-img" style="${catBg}"></div>
            <div class="cat-body">
                <div class="cat-badge">${c.icone} ${c.nome}</div>
                <h3>${c.nome}</h3>
                <p>Confira os melhores eventos desta categoria em Montes Claros</p>
                <div class="cat-meta">
                    <span class="cat-count">${count} evento${count !== 1 ? 's' : ''}</span>
                    <span class="cat-arrow">→</span>
                </div>
            </div>
        </a>`;
    }).join('');
    return true;
}

function renderBlogFromAdmin() {
    if (!adminData || !adminData.blog || !adminData.blog.length) return false;
    const grid = document.querySelector('.blog-grid');
    if (!grid) return false;
    grid.innerHTML = adminData.blog.map((p, i) => {
        const isDestaque = i === 0 && adminData.blog.length > 3;
        return `
        <article class="blog-card ${isDestaque ? 'blog-destaque' : ''}">
            <div class="blog-img" style="${isImgSrc(p.img) ? `background-image:linear-gradient(135deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(&quot;${resolveImgSrc(p.img)}&quot;);background-size:cover;background-position:center;background-color:#222` : `background:${p.img || 'linear-gradient(135deg,#ff3d6e,#7c3aed)'}`}">
                <span class="blog-cat">${p.cat}</span>
            </div>
            <div class="blog-body">
                <span class="blog-date">📅 ${p.data}</span>
                <h3>${p.titulo}</h3>
                <p>${p.resumo}</p>
                <a href="#" class="blog-link">Ler matéria completa →</a>
            </div>
        </article>`;
    }).join('');
    return true;
}

function renderDepoimentosFromAdmin() {
    if (!adminData || !adminData.depoimentos || !adminData.depoimentos.length) return false;
    const grid = document.querySelector('.dep-grid');
    if (!grid) return false;
    grid.innerHTML = adminData.depoimentos.map(d => `
        <article class="dep-card">
            <div class="dep-stars">${'★'.repeat(d.estrelas)}</div>
            <p>"${d.texto}"</p>
            <div class="dep-author">
                <div class="dep-avatar" style="background:${d.cor}">${d.nome.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
                <div>
                    <strong>${d.nome}</strong>
                    <span>${d.cargo}</span>
                </div>
            </div>
        </article>
    `).join('');
    return true;
}

function updateFilters() {
    const sel = $('#filterCat');
    if (!sel || !adminData) return;
    const current = sel.value;
    sel.innerHTML = '<option value="">Todas as categorias</option>' +
        adminData.categorias.map(c => `<option ${current === c.nome ? 'selected' : ''}>${c.nome}</option>`).join('');
}

function renderModalGallery(card) {
    const box = $('#modalGallery');
    if (!box) return;
    let gal = [];
    try { gal = JSON.parse(card.dataset.galeria || '[]'); } catch { gal = []; }
    if (!Array.isArray(gal)) gal = [];
    gal = gal.filter(g => isImgSrc(g)).slice(0, 6);
    box.innerHTML = gal.map((g, i) => `<img src="${String(g).replace(/"/g,'&quot;')}" alt="foto ${i + 2}" loading="lazy">`).join('');
    box.querySelectorAll('img').forEach(img => img.addEventListener('click', () => {
        const main = $('#modalImg');
        const cur = main.getAttribute('style');
        main.setAttribute('style', `background-image:url("${img.src}");background-size:cover;background-position:center`);
        img.style.outline = '2px solid #ff3d6e';
        setTimeout(() => img.style.outline = '', 800);
        void cur;
    }));
}

function bindEventActions() {
    $$('.fav-card').forEach(btn => btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const id = +btn.dataset.fav;
        toggleFav(id);
        showToast(favorites.includes(id) ? '❤️ Adicionado aos favoritos' : '💔 Removido');
    }));
    $$('.open-modal').forEach(btn => btn.addEventListener('click', e => {
        e.preventDefault();
        const id = +btn.dataset.id;
        const card = document.querySelector(`.event-card[data-id="${id}"]`);
        if (!card) return;
        $('#modalTitle').textContent = card.dataset.titulo;
        $('#modalCat').textContent = card.dataset.cat;
        $('#modalCat').style.cssText = 'display:inline-block;background:rgba(255,61,110,0.12);color:#ff3d6e;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1px;';
        $('#modalData').textContent = '📅 ' + card.dataset.data;
        $('#modalHora').textContent = '⏰ ' + card.dataset.hora;
        $('#modalLocal').textContent = '📍 ' + card.dataset.local;
        $('#modalPreco').textContent = '💰 ' + (card.dataset.preco === '0' ? 'Entrada Franca' : 'R$ ' + card.dataset.preco);
        $('#modalDesc').textContent = card.dataset.desc;
        $('#modalImg').setAttribute('style', card.querySelector('.event-img').getAttribute('style'));
        renderModalGallery(card);
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`🎶 ${card.dataset.titulo}\n📅 ${card.dataset.data}\n📍 ${card.dataset.local}\nConfira: `);
        $('#shareWpp').href = `https://wa.me/?text=${text}${url}`;
        $('#shareFb').href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        $('#shareTw').href = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        $('#shareCp').onclick = e => { e.preventDefault(); navigator.clipboard.writeText(window.location.href); showToast('🔗 Link copiado!'); };
    const mapQuery = card.dataset.endereco
        ? card.dataset.endereco + ' Montes Claros MG'
        : card.dataset.local + ' Montes Claros';
    $('#modalMap').href = `https://www.google.com/maps/search/${encodeURIComponent(mapQuery)}`;
    $('#modalMap').style.display = 'inline-flex';
        const favBtn2 = $('#modalFav');
        favBtn2.textContent = favorites.includes(id) ? '❤️ Favoritado' : '🤍 Favoritar';
        favBtn2.onclick = () => {
            toggleFav(id);
            favBtn2.textContent = favorites.includes(id) ? '❤️ Favoritado' : '🤍 Favoritar';
        };
        modal.classList.add('open');
    }));
}

// ============== MENU MOBILE ==============
const menuToggle = $('#menuToggle');
const nav = $('#nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
$$('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

// ============== HEADER SCROLL ==============
const header = $('.header');
const backTop = $('#backTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    if (window.scrollY > 600) backTop.classList.add('show');
    else backTop.classList.remove('show');
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ============== TOAST ==============
const toast = $('#toast');
const showToast = (msg, dur = 2500) => {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), dur);
};

// ============== FAVORITOS (localStorage) ==============
const FAV_KEY = 'agendaShowsMOC_favs';
let favorites = [];
try { favorites = JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch(e) { favorites = []; }

const updateFavCount = () => {
    const c = $('#favCount');
    c.textContent = favorites.length;
    c.setAttribute('data-zero', favorites.length === 0);
};
updateFavCount();

const saveFavs = () => { try { localStorage.setItem(FAV_KEY, JSON.stringify(favorites)); } catch(e) {} };

const toggleFav = id => {
    const idx = favorites.indexOf(id);
    if (idx > -1) favorites.splice(idx, 1);
    else favorites.push(id);
    saveFavs();
    updateFavCount();
    syncFavCards();
    renderFavPanel();
};

const syncFavCards = () => {
    $$('.fav-card').forEach(btn => {
        const id = +btn.dataset.fav;
        btn.classList.toggle('active', favorites.includes(id));
    });
};
syncFavCards();

$$('.fav-card').forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const id = +btn.dataset.fav;
    toggleFav(id);
    showToast(favorites.includes(id) ? '❤️ Adicionado aos favoritos' : '💔 Removido dos favoritos');
}));

// ============== PAINEL DE FAVORITOS ==============
const favPanel = $('#favPanel');
const favBtn = $('#favBtn');
const favClose = $('#favClose');
favBtn.addEventListener('click', () => { favPanel.classList.add('open'); renderFavPanel(); });
favClose.addEventListener('click', () => favPanel.classList.remove('open'));

const renderFavPanel = () => {
    const list = $('#favList');
    if (favorites.length === 0) {
        list.innerHTML = '<p class="fav-empty">Você ainda não favoritou nenhum evento. Clique no ❤️ dos eventos para salvá-los aqui!</p>';
        return;
    }
    const allCards = $$('.event-card');
    list.innerHTML = '';
    favorites.forEach(id => {
        const card = document.querySelector(`.event-card[data-id="${id}"]`);
        if (!card) return;
        const titulo = card.dataset.titulo;
        const local = card.dataset.local;
        const data = card.dataset.data;
        const imgStyle = card.querySelector('.event-img').getAttribute('style');
        const item = document.createElement('div');
        item.className = 'fav-item';
        item.innerHTML = `
            <div class="fav-item-img" style="${imgStyle}"></div>
            <div class="fav-item-info">
                <h4>${titulo}</h4>
                <span>${data} • ${local}</span>
            </div>
            <button class="fav-item-del" data-del="${id}">×</button>
        `;
        list.appendChild(item);
    });
    $$('.fav-item-del').forEach(b => b.addEventListener('click', () => {
        toggleFav(+b.dataset.del);
        showToast('💔 Removido dos favoritos');
    }));
};

// ============== MODAL DE EVENTO ==============
const modal = $('#eventModal');
const modalClose = $('#modalClose');
const openModalBtns = $$('.open-modal');

openModalBtns.forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();
    const id = +btn.dataset.id;
    const card = document.querySelector(`.event-card[data-id="${id}"]`);
    if (!card) return;

    $('#modalTitle').textContent = card.dataset.titulo;
    $('#modalCat').textContent = card.dataset.cat;
    $('#modalCat').style.cssText = 'display:inline-block;background:rgba(255,61,110,0.12);color:#ff3d6e;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1px;';
    $('#modalData').textContent = '📅 ' + card.dataset.data;
    $('#modalHora').textContent = '⏰ ' + card.dataset.hora;
    $('#modalLocal').textContent = '📍 ' + card.dataset.local;
    if (card.dataset.endereco) {
        const endEl = $('#modalEndereco');
        if (endEl) { endEl.textContent = '🏠 ' + card.dataset.endereco; endEl.style.display = 'block'; }
    }
    $('#modalPreco').textContent = '💰 ' + (card.dataset.preco === '0' ? 'Entrada Franca' : 'R$ ' + card.dataset.preco);
    $('#modalDesc').textContent = card.dataset.desc;
    $('#modalImg').setAttribute('style', card.querySelector('.event-img').getAttribute('style'));
    renderModalGallery(card);

    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`🎶 ${card.dataset.titulo}\n📅 ${card.dataset.data}\n📍 ${card.dataset.local}\nConfira em: `);
    $('#shareWpp').href = `https://wa.me/?text=${text}${url}`;
    $('#shareFb').href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    $('#shareTw').href = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    $('#shareCp').onclick = e => { e.preventDefault(); navigator.clipboard.writeText(window.location.href); showToast('🔗 Link copiado!'); };

    $('#modalMap').href = `https://www.google.com/maps/search/${encodeURIComponent(card.dataset.local + ' Montes Claros')}`;

    const favBtn2 = $('#modalFav');
    favBtn2.textContent = favorites.includes(id) ? '❤️ Favoritado' : '🤍 Favoritar';
    favBtn2.onclick = () => {
        toggleFav(id);
        favBtn2.textContent = favorites.includes(id) ? '❤️ Favoritado' : '🤍 Favoritar';
        showToast(favorites.includes(id) ? '❤️ Adicionado!' : '💔 Removido!');
    };

    modal.classList.add('open');
}));

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        modal.classList.remove('open');
        favPanel.classList.remove('open');
    }
});

// ============== BUSCA E FILTROS ==============
const searchInput = $('#searchInput');
const filterCat = $('#filterCat');
const filterBairro = $('#filterBairro');
const filterPreco = $('#filterPreco');
const searchBtn = $('#searchBtn');
const eventGrid = $('#eventGrid');
const eventsCount = $('#eventsCount');

const applyFilters = () => {
    const q = searchInput.value.toLowerCase();
    const cat = filterCat.value;
    const bairro = filterBairro.value;
    const preco = filterPreco.value;
    const cards = $$('.event-card');
    let visible = 0;

    cards.forEach(card => {
        const titulo = card.dataset.titulo.toLowerCase();
        const local = card.dataset.local.toLowerCase();
        const cCat = card.dataset.cat;
        const cBairro = card.dataset.bairro;
        const cPreco = +card.dataset.preco;

        const matchQ = !q || titulo.includes(q) || local.includes(q);
        const matchCat = !cat || cCat === cat;
        const matchBairro = !bairro || cBairro === bairro;
        let matchPreco = true;
        if (preco === 'Gratuito') matchPreco = cPreco === 0;
        else if (preco === 'Até R$ 30') matchPreco = cPreco <= 30;
        else if (preco === 'Até R$ 60') matchPreco = cPreco <= 60;
        else if (preco === 'Até R$ 100') matchPreco = cPreco <= 100;
        else if (preco === 'Acima de R$ 100') matchPreco = cPreco > 100;

        const show = matchQ && matchCat && matchBairro && matchPreco;
        card.style.display = show ? '' : 'none';
        if (show) visible++;
    });

    eventsCount.textContent = visible === 0
        ? '❌ Nenhum evento encontrado'
        : `Mostrando ${visible} evento${visible > 1 ? 's' : ''}`;
};

[searchInput, filterCat, filterBairro, filterPreco].forEach(el => el.addEventListener('input', applyFilters));
searchBtn.addEventListener('click', e => { e.preventDefault(); applyFilters(); $('#eventos').scrollIntoView({ behavior: 'smooth' }); });
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') applyFilters(); });

// ============== CALENDÁRIO ==============
const calGrid = $('#calGrid');
const calMonth = $('#calMonth');

let calDate = new Date(2026, 8, 1);

const parseData = (dataStr) => {
    if (!dataStr) return null;
    const m = dataStr.match(/(\d+)\s+([A-Z]{3})/);
    if (!m) return null;
    const meses = { JAN: 0, FEV: 1, MAR: 2, ABR: 3, MAI: 4, JUN: 5, JUL: 6, AGO: 7, SET: 8, OUT: 9, NOV: 10, DEZ: 11 };
    const dia = parseInt(m[1]);
    const mes = meses[m[2]];
    if (mes === undefined) return null;
    return new Date(2026, mes, dia);
};

const renderCalendar = () => {
    const year = calDate.getFullYear();
    const month = calDate.getMonth();
    const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    calMonth.textContent = `${monthNames[month]} ${year}`;
    calGrid.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
        calGrid.innerHTML += '<div class="cal-day empty"></div>';
    }
    for (let d = 1; d <= daysInMonth; d++) {
        const eventsOnDay = (adminData && adminData.eventos) ? adminData.eventos.filter(ev => {
            const dt = parseData(ev.data);
            return dt && dt.getFullYear() === year && dt.getMonth() === month && dt.getDate() === d;
        }) : [];
        const hasEvents = eventsOnDay.length > 0;
        const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        const classes = ['cal-day'];
        if (isToday) classes.push('today');
        if (hasEvents) classes.push('has-events');
        if (eventsOnDay.length >= 3) classes.push('many-events');

        const dots = hasEvents ? Array(Math.min(eventsOnDay.length, 3)).fill(0).map(() => '<span class="cal-dot"></span>').join('') : '';
        calGrid.innerHTML += `
            <div class="${classes.join(' ')}" data-day="${d}" data-month="${month}" data-year="${year}" ${hasEvents ? 'style="cursor:pointer"' : ''}>
                <span class="cal-day-num">${d}</span>
                <div class="cal-dots">${dots}</div>
            </div>`;
    }

    // Click nos dias com eventos
    $$('.cal-day.has-events, .cal-day.many-events').forEach(day => day.addEventListener('click', () => {
        const d = +day.dataset.day;
        const m = +day.dataset.month;
        const y = +day.dataset.year;
        showDayEvents(y, m, d);
    }));
};

const showDayEvents = (year, month, day) => {
    if (!adminData) return;
    const eventsOnDay = adminData.eventos.filter(ev => {
        const dt = parseData(ev.data);
        return dt && dt.getFullYear() === year && dt.getMonth() === month && dt.getDate() === day;
    });
    if (eventsOnDay.length === 0) return;

    const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    $('#dayModalTitle').textContent = `${day} de ${monthNames[month]} de ${year}`;
    $('#dayModalCount').textContent = `${eventsOnDay.length} evento${eventsOnDay.length > 1 ? 's' : ''}`;

    const body = $('#dayModalBody');
    body.innerHTML = eventsOnDay.map(ev => `
        <div class="day-event" data-id="${ev.id}">
            <div class="day-event-img" style="${bgStyle(ev.img)}"></div>
            <div class="day-event-info">
                <span class="day-event-cat">${ev.cat}</span>
                <h4>${ev.titulo}</h4>
                <p>⏰ ${ev.hora}</p>
                <p>📍 ${ev.local}</p>
                <p>💰 ${ev.preco === 0 ? 'Entrada Franca' : 'R$ ' + ev.preco}</p>
            </div>
            <div class="day-event-cta">→</div>
        </div>
    `).join('');

    // Click no evento do dia
    $$('.day-event', body).forEach(el => el.addEventListener('click', () => {
        const id = +el.dataset.id;
        $('#dayModal').classList.remove('open');
        setTimeout(() => {
            const card = document.querySelector(`.event-card[data-id="${id}"]`);
            if (card) {
                card.querySelector('.open-modal').click();
                $('#eventos').scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }));

    $('#dayModal').classList.add('open');
};

$('#dayModalClose').addEventListener('click', () => $('#dayModal').classList.remove('open'));
$('#dayModal').addEventListener('click', e => { if (e.target.id === 'dayModal') $('#dayModal').classList.remove('open'); });

renderCalendar();
$('#calPrev').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() - 1); renderCalendar(); });
$('#calNext').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() + 1); renderCalendar(); });

// ============== COUNTDOWN ==============
const updateCountdown = () => {
    let eventDate;
    if (adminData && adminData.config && adminData.config.countdownData) {
        eventDate = new Date(adminData.config.countdownData);
    } else {
        eventDate = new Date('2026-10-15T20:00:00');
    }
    const now = new Date();
    const diff = eventDate - now;
    if (diff < 0) {
        $('#cdDays').textContent = '00';
        $('#cdHours').textContent = '00';
        $('#cdMins').textContent = '00';
        $('#cdSecs').textContent = '00';
        return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    $('#cdDays').textContent = String(d).padStart(2, '0');
    $('#cdHours').textContent = String(h).padStart(2, '0');
    $('#cdMins').textContent = String(m).padStart(2, '0');
    $('#cdSecs').textContent = String(s).padStart(2, '0');
};
updateCountdown();
setInterval(updateCountdown, 1000);

// ============== CONTADOR ANIMADO STATS ==============
const animateNum = (el, target) => {
    let cur = 0;
    const inc = target / 50;
    const t = setInterval(() => {
        cur += inc;
        if (cur >= target) { cur = target; clearInterval(t); }
        el.textContent = Math.floor(cur);
    }, 30);
};

const statsObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $$('.stat strong', entry.target).forEach(s => {
                if (s.dataset.target) animateNum(s, +s.dataset.target);
            });
            statsObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
const heroStats = $('.hero-stats');
if (heroStats) statsObs.observe(heroStats);

// ============== ANIMAÇÕES DE SCROLL ==============
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

$$('.cat-card, .event-card, .est-card, .contato-card, .dep-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(el);
});

// ============== TABS DE CATEGORIA ==============
$$('.cat-tab').forEach(tab => tab.addEventListener('click', () => {
    $$('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    showToast('🔍 Filtro: ' + tab.textContent);
}));

// ============== NEWSLETTER ==============
$('.news-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input.value && input.value.includes('@')) {
        showToast('🎉 Inscrição realizada! Você receberá a agenda semanal.');
        input.value = '';
    } else {
        showToast('⚠️ Insira um e-mail válido');
    }
});

// ============== APLICAR DADOS DO ADMIN ==============
if (useAdmin) {
    applyConfig();
    renderEventosFromAdmin();
    renderEstabelecimentosFromAdmin();
    renderCategoriasFromAdmin();
    renderBlogFromAdmin();
    renderDepoimentosFromAdmin();
}

// Tenta carregar data.json publicado no GitHub (prioridade para visitantes)
loadRemote();

console.log('%c🎶 Agenda Shows MOC', 'color:#ff3d6e;font-size:24px;font-weight:bold;');
console.log('%cA agenda mais completa de MOC!', 'color:#8a8aa3;font-size:14px;');
