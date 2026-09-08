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
        whatsapp: '(38) 99855-8528',
        email: 'agendashowsmoc@gmail.com',
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
        { id: 2, titulo: 'Rock Night — Bandas Locais', cat: 'Barzinho', bairro: 'Independência', preco: 0, data: '17 SET', hora: 'Terça, 21h', local: 'Boteco do Rock - Av. Independência', desc: 'Noite de rock com bandas autorais e clássicos inesquecíveis. Chopp em dobro e petiscos especiais.', img: 'linear-gradient(135deg,#7c3aed,#3b82f6)', tag: '' },
        { id: 3, titulo: 'Sertanejo & Vinho — Jantar Musical', cat: 'Restaurante', bairro: 'Centro', preco: 89, data: '20 SET', hora: 'Sexta, 20h', local: 'Restaurante Sabor da Terra', desc: 'Jantar harmonizado com pratos da culinária regional e show de sertanejo ao vivo. Reservas limitadas.', img: 'linear-gradient(135deg,#10b981,#059669)', tag: 'NOVO' },
        { id: 4, titulo: 'Pagode do MOC — Grupo Revelação Cover', cat: 'Show ao Vivo', bairro: 'Todos os Santos', preco: 40, data: '22 SET', hora: 'Domingo, 20h', local: 'Arena MOC - Bairro Todos os Santos', desc: 'O melhor pagode da região com a banda cover mais requisitada do momento. Open de chopp até meia-noite.', img: 'linear-gradient(135deg,#f59e0b,#ef4444)', tag: '' },
        { id: 5, titulo: 'Festa Universitária — DJ Marcos', cat: 'Festa', bairro: 'Centro', preco: 25, data: '27 SET', hora: 'Sábado, 23h', local: 'Lounge Club - Avenida MOC', desc: 'A balada mais badalada da cidade com DJ Marcos e convidados. Open de vodka para o primeiro lote.', img: 'linear-gradient(135deg,#ec4899,#8b5cf6)', tag: '' },
        { id: 6, titulo: 'Samba de Roda — Noite Especial', cat: 'Show ao Vivo', bairro: 'Centro', preco: 35, data: '29 SET', hora: 'Domingo, 21h', local: 'Casa do Samba - Centro Histórico', desc: 'Roda de samba com clássicos que marcaram época. Participação especial do mestre Cavaco.', img: 'linear-gradient(135deg,#0ea5e9,#1e40af)', tag: 'VIP' }
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
        { id: 1, titulo: 'Festival de Forró de MOC anuncia line-up da 3ª edição', cat: 'Cobertura', data: '02 Set 2026', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', resumo: 'Os maiores nomes do forró nacional se apresentam em outubro na Arena MOC. Confira a programação completa e garanta seu ingresso...' }
    ],
    depoimentos: [
        { id: 1, nome: 'Roberto Carvalho', cargo: 'Proprietário — Villa Forró', estrelas: 5, texto: 'Em 3 meses anunciando no Agenda Shows MOC, nosso movimento cresceu 40%. A plataforma é simples e o suporte é excelente.', cor: 'linear-gradient(135deg,#dc2626,#f59e0b)' },
        { id: 2, nome: 'Marina Ferreira', cargo: 'Sócia — Boteco do Rock', estrelas: 5, texto: 'Investimos no pacote premium e o retorno veio já na primeira semana. Hoje temos fila de espera nos fins de semana!', cor: 'linear-gradient(135deg,#7c3aed,#3b82f6)' },
        { id: 3, nome: 'Carlos Santos', cargo: 'Chef — Sabor da Terra', estrelas: 5, texto: 'A equipe do Agenda Shows MOC me ajudou a estruturar toda a divulgação. Meu restaurante bombou nos jantares musicais!', cor: 'linear-gradient(135deg,#10b981,#059669)' },
        { id: 4, nome: 'Juliana Lopes', cargo: 'Promotora — Lounge Club', estrelas: 5, texto: 'A agenda é o que há de mais completo na cidade. Os clientes chegam perguntando pelo site — isso mostra a credibilidade.', cor: 'linear-gradient(135deg,#ec4899,#8b5cf6)' }
    ]
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
        return `background-image:linear-gradient(135deg,rgba(0,0,0,0.25),rgba(0,0,0,0.45)),url('${src}');background-size:cover;background-position:center;background-color:#222`;
    }
    return `background:${img}`;
};

function loadLocal() {
    // Desabilitado - sempre buscamos do GitHub (fonte da verdade)
    return null;
}

let adminData = null;
let useAdmin = false;

async function loadRemote() {
    try {
        // Tenta múltiplas vezes para evitar cache
        for (let attempt = 0; attempt < 2; attempt++) {
            const res = await fetch('data.json?t=' + Date.now() + Math.random(), { cache: 'no-store', headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
            if (!res.ok) { if (attempt === 0) continue; return false; }
            const json = await res.json();
            if (!json || !json.eventos) return false;
            adminData = json;
            useAdmin = true;
            try { localStorage.setItem('agendaShowsMOC_data', JSON.stringify(json)); } catch(e) {}
            applyConfig();
            renderEventosFromAdmin();
            renderEstabelecimentosFromAdmin();
            renderCategoriasFromAdmin();
            renderBlogFromAdmin();
            renderDepoimentosFromAdmin();
            renderCalendar();
            updateCountdown();
            buildSeoStructuredData(json.eventos);
            const total = json.eventos.length;
            console.log('%c✅ data.json carregado: ' + total + ' eventos', 'color:#10b981;font-weight:bold');
            return true;
        }
        return false;
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
        const num = cfg.whatsapp.replace(/\D/g, '');
        document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
            a.href = `https://wa.me/55${num}`;
        });
        document.querySelectorAll('[data-cfg="whatsapp"]').forEach(el => {
            const hasEmoji = el.textContent.includes('📱');
            el.textContent = hasEmoji ? '📱 ' + cfg.whatsapp : cfg.whatsapp;
        });
    }
    if (cfg.email) {
        const m = document.querySelector('a[href^="mailto:"]');
        if (m) m.href = 'mailto:' + cfg.email;
        document.querySelectorAll('[data-cfg="email"]').forEach(el => {
            const hasEmoji = el.textContent.includes('✉');
            el.textContent = hasEmoji ? '✉ ' + cfg.email : cfg.email;
        });
    }
    if (cfg.instagramUrl) {
        document.querySelectorAll('[data-social="instagram"]').forEach(a => {
            a.href = cfg.instagramUrl;
        });
    }
    if (cfg.facebookUrl) {
        document.querySelectorAll('[data-social="facebook"]').forEach(a => {
            a.href = cfg.facebookUrl;
        });
    }
    if (cfg.youtubeUrl) {
        document.querySelectorAll('[data-social="youtube"]').forEach(a => {
            a.href = cfg.youtubeUrl;
        });
    }

    // Contadores do hero
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

    // Countdown
    if (cfg.countdownTitulo) {
        const t = document.querySelector('.cd-title');
        if (t) t.textContent = cfg.countdownTitulo;
    }
    if (cfg.countdownLocal) {
        const i = document.querySelector('.cd-info');
        if (i) i.textContent = '📍 ' + cfg.countdownLocal;
    }

    // CTA
    if (cfg.pacotePreco) {
        const els = document.querySelectorAll('.cta-list li:last-child');
        els.forEach(el => { if (el.textContent.includes('R$')) el.textContent = '✓ Pacotes a partir de ' + cfg.pacotePreco + '/mês'; });
    }
    if (cfg.anuncieTexto) {
        const els = document.querySelectorAll('a[href="#contato"].btn');
        els.forEach(el => el.textContent = cfg.anuncieTexto);
    }
    // CTA Emojis
    if (cfg.cta1Emoji) {
        const el = document.querySelector('.cta-card.c1 .cta-emoji');
        if (el) el.textContent = cfg.cta1Emoji;
    }
    if (cfg.cta2Emoji) {
        const el = document.querySelector('.cta-card.c2 .cta-emoji');
        if (el) el.textContent = cfg.cta2Emoji;
    }
    if (cfg.cta3Emoji) {
        const el = document.querySelector('.cta-card.c3 .cta-emoji');
        if (el) el.textContent = cfg.cta3Emoji;
    }

    // Aplicação genérica de todos [data-cfg] (exceto os especiais já tratados)
    const handled = new Set(['whatsapp','email','instagram']);
    document.querySelectorAll('[data-cfg]').forEach(el => {
        const key = el.dataset.cfg;
        if (!key || handled.has(key) || cfg[key] == null) return;
        const val = String(cfg[key]);
        if (key === 'heroTitulo') {
            el.innerHTML = val.replace(/\*([^*]+)\*/g, '<span>$1</span>');
        } else if (key === 'ctaList') {
            const list = document.getElementById('ctaList');
            if (list) list.innerHTML = val.split('\n').map(s => `<li>${s}</li>`).join('');
        } else {
            el.textContent = val;
        }
    });

    // SEO meta tags
    if (cfg.seoTitulo) document.title = cfg.seoTitulo;
    if (cfg.seoDesc) {
        const m = document.querySelector('meta[name="description"]');
        if (m) m.setAttribute('content', cfg.seoDesc);
    }
    if (cfg.seoKeywords) {
        const m = document.querySelector('meta[name="keywords"]');
        if (m) m.setAttribute('content', cfg.seoKeywords);
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
        <article class="event-card" data-id="${ev.id}" data-cat="${ev.cat}" data-bairro="${ev.bairro}" data-preco="${ev.preco}" data-titulo="${ev.titulo.replace(/"/g,'&quot;')}" data-local="${ev.local.replace(/"/g,'&quot;')}" data-endereco="${(ev.endereco || '').replace(/"/g,'&quot;')}" data-data="${ev.data}" data-hora="${ev.hora}" data-desc="${(ev.desc || '').replace(/"/g,'&quot;')}" data-galeria="${JSON.stringify(ev.galeria || []).replace(/"/g,'&quot;')}" data-tag="${(ev.tag || '').replace(/"/g,'&quot;')}" data-ingresso="${(ev.ingresso || '').replace(/"/g,'&quot;')}">
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
                <span class="event-views" data-views-id="${ev.id}">👁 ···</span>
            </div>
        </article>
    `}).join('');
    if (count) count.textContent = `Mostrando ${adminData.eventos.length} eventos`;

    bindEventActions();
    updateFilters();
    if (typeof initEventViews === 'function') initEventViews();
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

// Capas-tema por categoria (usadas quando a categoria ainda não tem foto de evento)
const CAT_COVER = {
    forro: 'fotos/forro-coronel-edson-marques.jpeg',
    'casa-de-forro': 'fotos/forro-coronel-edson-marques.jpeg',
    bar: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80',
    barzinho: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80',
    restaurante: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80',
    show: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=80',
    'show-ao-vivo': 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=80',
    sertanejo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
    pagode: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80',
    rock: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80',
    festa: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80'
};

function renderCategoriasFromAdmin() {
    if (!adminData || !adminData.categorias.length) return false;
    const grid = document.querySelector('.cat-grid');
    if (!grid) return false;
    grid.innerHTML = adminData.categorias.map(c => {
        const count = adminData.eventos.filter(e => e.cat === c.nome).length;
        const catClass = 'cat-' + (c.slug || c.nome.toLowerCase().replace(/\s+/g, '-'));
        // 1) foto de um evento/estabelecimento da categoria; 2) senão, capa-tema
        const firstEvent = adminData.eventos.find(e => e.cat === c.nome && e.img && isImgSrc(e.img));
        const firstEst = !firstEvent ? adminData.estabelecimentos.find(e => e.cat === c.nome && e.img && isImgSrc(e.img)) : null;
        const img = firstEvent
            ? resolveImgSrc(firstEvent.img)
            : firstEst
            ? resolveImgSrc(firstEst.img)
            : (CAT_COVER[c.slug] || CAT_COVER[normalizarCat(c.nome)] || '');
        const catBg = img
            ? `background-image:linear-gradient(135deg,${c.cor}88,${c.cor}44),url('${img}');background-size:cover;background-position:center;`
            : `background:${c.cor}44;background-size:cover;background-position:center;`;
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
        const imgSrc = isImgSrc(p.img) ? resolveImgSrc(p.img) : '';
        const data = {
            t: (p.titulo || '').replace(/"/g, '&quot;'),
            d: (p.data || '').replace(/"/g, '&quot;'),
            c: (p.cat || '').replace(/"/g, '&quot;'),
            r: (p.resumo || '').replace(/"/g, '&quot;'),
            i: imgSrc
        };
        return `
        <article class="blog-card ${isDestaque ? 'blog-destaque' : ''}" tabindex="0" data-btitle="${data.t}" data-bdate="${data.d}" data-bcat="${data.c}" data-bresumo="${data.r}" data-bimg="${data.i}">
            <div class="blog-img" style="${isImgSrc(p.img) ? `background-image:linear-gradient(135deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(&quot;${imgSrc}&quot;);background-size:cover;background-position:center;background-color:#222` : `background:${p.img || 'linear-gradient(135deg,#ff3d6e,#7c3aed)'}`}">
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

    // Bairros dinâmicos
    const bairroSel = $('#filterBairro');
    if (bairroSel && adminData.eventos) {
        const currentBairro = bairroSel.value;
        const bairros = [...new Set(adminData.eventos.map(e => e.bairro).filter(Boolean))].sort();
        bairroSel.innerHTML = '<option value="">Todos os bairros</option>' +
            bairros.map(b => `<option ${currentBairro === b ? 'selected' : ''}>${b}</option>`).join('');
    }
}

function setModalPhoto(src) {
    const m = $('#modalImg');
    m.classList.add('has-photo');
    m.removeAttribute('style');
    m.innerHTML = `<img class="modal-img-photo" src="${src}" alt="Flyer do evento" loading="lazy">`;
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
        setModalPhoto(img.src);
        img.style.outline = '2px solid #ff3d6e';
        setTimeout(() => img.style.outline = '', 800);
    }));
}

function bindEventActions() {
    // Usar delegação de eventos para evitar duplicatas
    document.removeEventListener('click', handleEventClick);
    document.addEventListener('click', handleEventClick);

    // Favoritos
    $$('.fav-card').forEach(btn => {
        btn.removeEventListener('click', handleFavClick);
        btn.addEventListener('click', handleFavClick);
    });
}

function handleFavClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const id = +e.currentTarget.dataset.fav;
    toggleFav(id);
    showToast(favorites.includes(id) ? '❤️ Adicionado aos favoritos' : '💔 Removido');
}

function handleEventClick(e) {
    const openBtn = e.target.closest('.open-modal');
    if (!openBtn) return;
    e.preventDefault();
    const id = +openBtn.dataset.id;
    const card = document.querySelector(`.event-card[data-id="${id}"]`);
    if (!card) return;

    // Conta 1 visualização deste evento (1× por aba)
    countEventView(id, card);

    $('#modalTitle').textContent = card.dataset.titulo;
    $('#modalCat').textContent = card.dataset.cat;
    $('#modalCat').style.cssText = 'display:inline-block;background:rgba(255,61,110,0.12);color:#ff3d6e;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:1px;';
    $('#modalData').textContent = '📅 ' + card.dataset.data;
    $('#modalHora').textContent = '⏰ ' + card.dataset.hora;
    $('#modalLocal').textContent = '📍 ' + card.dataset.local;
    if (card.dataset.endereco) {
        const endEl = $('#modalEndereco');
        if (endEl) { endEl.textContent = '🏠 ' + card.dataset.endereco; endEl.style.display = 'block'; }
    } else {
        const endEl = $('#modalEndereco');
        if (endEl) { endEl.textContent = ''; endEl.style.display = 'none'; }
    }
    $('#modalPreco').textContent = '💰 ' + (card.dataset.preco === '0' ? 'Entrada Franca' : 'R$ ' + card.dataset.preco);
    $('#modalDesc').textContent = card.dataset.desc;

    // Imagem / flyer do modal
    const evImgStyle = card.querySelector('.event-img').getAttribute('style') || '';
    const mi = $('#modalImg');
    mi.classList.remove('has-photo');
    const srcMatch = evImgStyle.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
    if (srcMatch && srcMatch[1]) {
        // Evento com foto/flyer: mostra a imagem inteira
        setModalPhoto(srcMatch[1]);
    } else {
        // Evento sem foto: mantém o fundo (gradiente) decorativo
        mi.innerHTML = '';
        mi.setAttribute('style', evImgStyle);
    }
    renderModalGallery(card);

    const mScroll = modal.querySelector('.modal');
    if (mScroll) mScroll.scrollTop = 0;

    // Link único / compartilhável deste evento
    const eventUrl = shareBaseUrl() + '#evento-' + id;
    const url = encodeURIComponent(eventUrl);
    const text = encodeURIComponent(`🎶 ${card.dataset.titulo}\n📅 ${card.dataset.data}\n📍 ${card.dataset.local}\nConfira em: `);
    $('#shareWpp').href = `https://wa.me/?text=${text}${url}`;
    $('#shareFb').href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    $('#shareTw').href = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    $('#shareCp').onclick = ev => { ev.preventDefault(); navigator.clipboard.writeText(eventUrl); showToast('🔗 Link copiado!'); };

    $('#modalMap').href = `https://www.google.com/maps/search/${encodeURIComponent((card.dataset.endereco || card.dataset.local) + ' Montes Claros')}`;

    // Botão de ingresso (opcional, por evento)
    const ingresso = (card.dataset.ingresso || '').trim();
    const ticket = $('#modalTicket');
    if (ticket) {
        if (ingresso) {
            ticket.style.display = '';
            ticket.href = ingresso;
            ticket.target = '_blank';
            ticket.rel = 'noopener';
        } else {
            ticket.style.display = 'none';
        }
    }

    const favBtn2 = $('#modalFav');
    favBtn2.textContent = favorites.includes(id) ? '❤️ Favoritado' : '🤍 Favoritar';
    favBtn2.onclick = () => {
        toggleFav(id);
        favBtn2.textContent = favorites.includes(id) ? '❤️ Favoritado' : '🤍 Favoritar';
        showToast(favorites.includes(id) ? '❤️ Adicionado!' : '💔 Removido!');
    };

    // URL única no histórico (sem recarregar a página)
    try { history.replaceState(null, '', eventUrl); } catch (err) {}

    openDialog(modal, openBtn);
}

// ============== MENU MOBILE ==============
const menuToggle = $('#menuToggle');
const nav = $('#nav');
const setMenuAria = () => { if (menuToggle) menuToggle.setAttribute('aria-expanded', String(nav.classList.contains('open'))); };
if (menuToggle) menuToggle.addEventListener('click', () => { nav.classList.toggle('open'); setMenuAria(); });
$$('.nav a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); setMenuAria(); }));
document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !e.target.closest('.nav') && !e.target.closest('.menu-toggle')) {
        nav.classList.remove('open'); setMenuAria();
    }
});

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

// ============== ACESSIBILIDADE / DIÁLOGOS ==============
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
let currentDialog = null;

const focusables = root => Array.from((root || document).querySelectorAll(FOCUSABLE))
    .filter(el => el.offsetParent !== null || el === document.activeElement);

function openDialog(box, trigger) {
    if (!box) return;
    currentDialog = box;
    box._trigger = trigger || document.activeElement;
    box.classList.add('open');
    const fs = focusables(box);
    const toFocus = fs[0] || box;
    setTimeout(() => { try { toFocus.focus({ preventScroll: true }); } catch (e) { toFocus.focus && toFocus.focus(); } }, 30);
    document.body.style.overflow = 'hidden';
}
function closeDialog(box) {
    if (!box) return;
    box.classList.remove('open');
    if (currentDialog === box) currentDialog = null;
    const trig = box._trigger;
    if (trig && trig.focus) { try { trig.focus({ preventScroll: true }); } catch (e) { trig.focus(); } }
    if (!document.querySelector('.modal-overlay.open')) document.body.style.overflow = '';
}

// ============== MODAL DE EVENTO ==============
const modal = $('#eventModal');
const modalClose = $('#modalClose');

function clearEventHash() {
    try { history.replaceState(null, '', window.location.href.split('#')[0]); } catch (err) {}
}
function shareBaseUrl() { return window.location.href.split('#')[0]; }
function openEventById(id) {
    const card = document.querySelector(`.event-card[data-id="${id}"]`);
    if (!card) return false;
    card.style.display = '';
    const btn = card.querySelector('.open-modal');
    if (!btn) return false;
    btn.click();
    return true;
}
function handleHash() {
    const m = (window.location.hash || '').match(/^#evento-(\d+)$/);
    if (m) openEventById(+m[1]);
}
window.addEventListener('hashchange', handleHash);

function closeEventModal() { closeDialog(modal); clearEventHash(); }
modalClose.addEventListener('click', closeEventModal);
modal.addEventListener('click', e => { if (e.target === modal) closeEventModal(); });

// Escape fecha qualquer diálogo; Tab fica preso dentro do diálogo aberto
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const ab = document.querySelector('.modal-overlay.open');
        if (ab) {
            if (ab.id === 'eventModal') closeEventModal();
            else closeDialog(ab);
        }
        favPanel.classList.remove('open');
        return;
    }
    if (e.key === 'Tab' && currentDialog) {
        const fs = focusables(currentDialog);
        if (!fs.length) return;
        const first = fs[0], last = fs[fs.length - 1];
        const act = document.activeElement;
        if (e.shiftKey && (act === first || !currentDialog.contains(act))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (act === last || !currentDialog.contains(act))) { e.preventDefault(); first.focus(); }
    }
});

// ============== MODAL ANUNCIE (abre WhatsApp) ==============
const anuncieModal = $('#anuncieModal');
function getWhatsNum() {
    const raw = (adminData && adminData.config && adminData.config.whatsapp) || '(38) 998558528';
    return '55' + raw.replace(/\D/g, '');
}
document.addEventListener('click', e => {
    const ab = e.target.closest('.open-anuncie');
    if (ab) { e.preventDefault(); openDialog(anuncieModal, ab); return; }
    const cb = e.target.closest('#anuncieClose');
    if (cb) { closeDialog(anuncieModal); return; }
});
if (anuncieModal) anuncieModal.addEventListener('click', e => { if (e.target === anuncieModal) closeDialog(anuncieModal); });

const anuncieForm = $('#formAnuncie');
if (anuncieForm) anuncieForm.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(anuncieForm);
    const nome = (fd.get('nome') || '').trim();
    const contato = (fd.get('contato') || '').trim();
    const tipo = (fd.get('tipo') || '').trim();
    const msg = (fd.get('mensagem') || '').trim();
    if (!nome || !contato) { showToast('⚠️ Preencha seu nome e WhatsApp/e-mail para continuar'); return; }
    const texto = `Olá! Gostaria de anunciar no Agenda Shows MOC.\n\n` +
        `👤 Nome: ${nome}\n` +
        `📞 Contato: ${contato}\n` +
        `🏷️ Tipo de negócio: ${tipo || 'Não informado'}\n` +
        `📝 Mensagem: ${msg || '-'}`;
    const url = `https://wa.me/${getWhatsNum()}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener');
    closeDialog(anuncieModal);
    showToast('✅ Abrindo WhatsApp para enviar sua solicitação');
});

// Rodapé: ano automático
const copyYearEl = $('#copyYear');
if (copyYearEl) copyYearEl.textContent = new Date().getFullYear();

// =========================
// CONTADOR DE VISITAS (Abacus)
// =========================
// Conta 1 visita por aba aberta (hit) e lê o total sem incrementar (hit?noIncrease=1).
// Valores fixados por aba até o usuário fechar/recarregar — sem spam a cada troca de seção.
const VISIT_HIT_URL = 'https://abacus.jasoncameron.dev/hit/agendashowsmoc/visitas';
const VISIT_READ_URL = 'https://abacus.jasoncameron.dev/get/agendashowsmoc/visitas';

(function () {
    const digitsEl = $('#visitCount');
    if (!digitsEl) return;

    const fmt = n => Number(n).toLocaleString('pt-BR');

    function show(n) {
        digitsEl.classList.remove('loading');
        digitsEl.textContent = fmt(n);
        // Atualiza também o contador do topo (hero)
        const heroEl = $('#heroVisitCount');
        if (heroEl) heroEl.textContent = fmt(n);
    }

    function load() {
        fetch(VISIT_READ_URL)
            .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
            .then(d => show(d.value))
            .catch(() => {
                digitsEl.classList.remove('loading');
                digitsEl.textContent = '—';
            });
    }

    fetch(VISIT_HIT_URL)
        .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(d => show(d.value))
        .catch(load);
})();

// =========================
// VISUALIZAÇÕES POR EVENTO (Abacus)
// =========================
// 1 hit por abertura do modal (detalhes), 1× por aba para não inflar o número.
// Nome do contador: evento-<id>
const eventViewSessions = new Set();

function countEventView(id, card) {
    if (!id || eventViewSessions.has(id)) return;
    eventViewSessions.add(id);
    const badge = card.querySelector('.event-views');
    fetch(`https://abacus.jasoncameron.dev/hit/agendashowsmoc/evento-${id}`)
        .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(d => {
            if (badge) badge.textContent = '👁 ' + Number(d.value).toLocaleString('pt-BR');
            // Atualiza os demais cards do mesmo evento (filtros re-renderizam)
            document.querySelectorAll(`.event-views[data-views-id="${id}"]`).forEach(b => {
                if (b !== badge) b.textContent = '👁 ' + Number(d.value).toLocaleString('pt-BR');
            });
        })
        .catch(() => { if (badge) badge.textContent = ''; });
}

// Preenche os badges dos cards (cria no estático se faltar) e lê o total sem incrementar.
// É função (não IIFE) porque a grade é re-renderizada quando o data.json do admin carrega.
function initEventViews() {
    // Garante o badge em todos os cards (inclusive os estáticos do HTML)
    document.querySelectorAll('.event-card').forEach(card => {
        if (card.querySelector('.event-views')) return;
        const info = card.querySelector('.event-info');
        if (!info || !card.dataset.id) return;
        const b = document.createElement('span');
        b.className = 'event-views';
        b.dataset.viewsId = card.dataset.id;
        b.textContent = '👁 ···';
        info.appendChild(b);
    });

    document.querySelectorAll('.event-views[data-views-id]').forEach(badge => {
        const id = badge.dataset.viewsId;
        fetch(`https://abacus.jasoncameron.dev/get/agendashowsmoc/evento-${id}`)
            .then(r => r.ok ? r.json() : (r.status === 404 ? { value: 0 } : Promise.reject(new Error('HTTP ' + r.status))))
            .then(d => { badge.textContent = '👁 ' + Number(d.value).toLocaleString('pt-BR'); })
            .catch(() => { badge.textContent = ''; });
    });
}
initEventViews();

// ============== LEITURA DO BLOG ==============
const blogModal = $('#blogModal');
function openBlogPost(card) {
    if (!card) return;
    $('#blogModalCat').textContent = card.dataset.bcat || 'Blog';
    $('#blogModalTitle').textContent = card.dataset.btitle || '';
    $('#blogModalDate').textContent = '📅 ' + (card.dataset.bdate || '');
    $('#blogModalBody').textContent = card.dataset.bresumo || 'Conteúdo em breve.';
    const imgBox = $('#blogModalImg');
    if (card.dataset.bimg) {
        imgBox.style.backgroundImage = `linear-gradient(135deg,rgba(0,0,0,0.2),rgba(0,0,0,0.4)),url('${card.dataset.bimg}')`;
        imgBox.style.backgroundSize = 'cover';
        imgBox.style.backgroundPosition = 'center';
    } else {
        imgBox.style.backgroundImage = 'linear-gradient(135deg,#ff3d6e,#7c3aed)';
    }
    const wpp = $('#blogModalWpp');
    if (wpp) {
        const txt = encodeURIComponent(`📰 ${card.dataset.btitle || 'Matéria Agenda Shows MOC'}\nConfira em: ${shareBaseUrl()}`);
        wpp.href = `https://wa.me/${getWhatsNum()}?text=${txt}`;
    }
    openDialog(blogModal, card);
}
document.addEventListener('click', e => {
    const bc = e.target.closest('.blog-card');
    if (bc && bc.dataset.btitle) { e.preventDefault(); openBlogPost(bc); return; }
    const bcl = e.target.closest('#blogModalClose');
    if (bcl) { closeDialog(blogModal); return; }
});
if (blogModal) blogModal.addEventListener('click', e => { if (e.target === blogModal) closeDialog(blogModal); });

// ============== BUSCA E FILTROS ==============
const searchInput = $('#searchInput');
const filterCat = $('#filterCat');
const filterBairro = $('#filterBairro');
const filterPreco = $('#filterPreco');
const searchBtn = $('#searchBtn');
const eventGrid = $('#eventGrid');
const eventsCount = $('#eventsCount');

// ============== FILTROS POR DATA / TIPO ==============
const MONTH_MAP = { JAN: 0, FEV: 1, MAR: 2, ABR: 3, MAI: 4, JUN: 5, JUL: 6, AGO: 7, SET: 8, OUT: 9, NOV: 10, DEZ: 11 };
let activeTab = 'Todos';

const parseCardDate = card => {
    const s = (card.dataset.data || '').trim();
    const m = s.match(/(\d{1,2})\s+([A-Z]{3})/);
    if (!m) return null;
    const mo = MONTH_MAP[m[2]];
    if (mo === undefined) return null;
    return new Date(new Date().getFullYear(), mo, parseInt(m[1], 10));
};

// Aba (Hoje / Amanhã / Fim de semana / Gratuitos / VIP)
const tabOk = card => {
    const t = activeTab;
    if (t === 'Todos') return true;
    const preco = +card.dataset.preco;
    if (t === 'Gratuitos') return preco === 0;
    if (t === 'VIP') {
        const tg = (card.dataset.tag || '').toUpperCase();
        return tg === 'VIP' || preco >= 100;
    }
    const now = new Date();
    if (t === 'Hoje' || t === 'Amanha') {
        const target = new Date(now);
        if (t === 'Amanha') target.setDate(target.getDate() + 1);
        const d = parseCardDate(card);
        return !!d && d.getDate() === target.getDate() && d.getMonth() === target.getMonth();
    }
    if (t === 'Fim de Semana') {
        const hora = (card.dataset.hora || '').toLowerCase();
        if (/s[aá]bado|domingo/.test(hora)) return true;
        const d = parseCardDate(card);
        return !!d && (d.getDay() === 6 || d.getDay() === 0);
    }
    return true;
};

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

        const show = matchQ && matchCat && matchBairro && matchPreco && tabOk(card);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
    });

    eventsCount.textContent = visible === 0
        ? '❌ Nenhum evento encontrado com estes filtros'
        : `Mostrando ${visible} evento${visible > 1 ? 's' : ''}`;

    const empty = $('#eventsEmpty');
    if (empty) {
        const temFiltro = q || cat || bairro || preco || activeTab !== 'Todos';
        empty.style.display = (visible === 0 && temFiltro) ? 'block' : 'none';
    }
};

const resetFiltersAndShowAll = () => {
    activeTab = 'Todos';
    searchInput.value = '';
    filterCat.value = '';
    filterBairro.value = '';
    filterPreco.value = '';
    $$('.cat-tab').forEach(t => t.classList.toggle('active', t.textContent.trim() === 'Todos'));
    applyFilters();
};

const setTab = tabName => {
    activeTab = tabName;
    $$('.cat-tab').forEach(t => t.classList.toggle('active', t.textContent.trim() === tabName));
    applyFilters();
};

const scrollToEvents = () => { const el = $('#eventos'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

const setCategoryFilter = name => {
    activeTab = 'Todos';
    $$('.cat-tab').forEach(t => t.classList.toggle('active', t.textContent.trim() === 'Todos'));
    filterCat.value = name || '';
    applyFilters();
    scrollToEvents();
};

[searchInput, filterCat, filterBairro, filterPreco].forEach(el => el.addEventListener('input', applyFilters));
searchBtn.addEventListener('click', e => { e.preventDefault(); applyFilters(); scrollToEvents(); });
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') applyFilters(); });

// Ações por delegação (botões/cards re-renderizados continuam funcionando)
document.addEventListener('click', e => {
    const act = e.target.closest('[data-action]');
    if (act) {
        e.preventDefault();
        const a = act.dataset.action;
        if (a === 'verTodos') { resetFiltersAndShowAll(); scrollToEvents(); }
        else if (a === 'todasMaterias') { const el = $('#blog'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
        else if (a === 'todasCategorias') { const el = $('#categorias'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
        return;
    }
    const catCard = e.target.closest('.cat-card');
    if (catCard) {
        e.preventDefault();
        const nome = (catCard.querySelector('h3') || {}).textContent || '';
        setCategoryFilter(nome.trim());
        return;
    }
    const estCard = e.target.closest('.est-card');
    if (estCard) {
        e.preventDefault();
        const estCat = (estCard.querySelector('.est-cat') || {}).textContent || '';
        const match = (adminData ? adminData.eventos : [])
            .map(ev => ev.cat)
            .find(ec => ec && estCat && categoriaCombina(ec, estCat));
        if (match) setCategoryFilter(match);
        else showToast('🔍 Confira os eventos abaixo');
        return;
    }
});

// ============== CALENDÁRIO ==============
const calGrid = $('#calGrid');
const calMonth = $('#calMonth');

let calDate = new Date();
calDate.setDate(1);

const parseData = (dataStr, year) => {
    if (!dataStr) return null;
    const m = dataStr.match(/(\d+)\s+([A-Z]{3})/);
    if (!m) return null;
    const meses = { JAN: 0, FEV: 1, MAR: 2, ABR: 3, MAI: 4, JUN: 5, JUL: 6, AGO: 7, SET: 8, OUT: 9, NOV: 10, DEZ: 11 };
    const dia = parseInt(m[1]);
    const mes = meses[m[2]];
    if (mes === undefined) return null;
    return new Date(year, mes, dia);
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
            const dt = parseData(ev.data, year);
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
        const dt = parseData(ev.data, year);
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
            <button class="day-event-btn" data-id="${ev.id}">Ver Detalhes →</button>
        </div>
    `).join('');

    // Click no botao "Ver Detalhes"
    $$('.day-event-btn', body).forEach(btn => btn.addEventListener('click', e => {
        e.stopPropagation();
        const id = +btn.dataset.id;
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

// ============== TABS DE CATEGORIA (filtro por data/tipo) ==============
$$('.cat-tab').forEach(tab => tab.addEventListener('click', e => {
    e.preventDefault();
    setTab(tab.textContent.trim());
    scrollToEvents();
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

// ============== SEO: Dados Estruturados de Eventos (JSON-LD) ==============
function buildSeoStructuredData(eventos) {
    try {
        const base = window.location.origin + window.location.pathname;
        const items = (eventos || []).map(ev => {
            const obj = {
                '@type': 'Event',
                'name': ev.titulo,
                'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
                'eventStatus': 'https://schema.org/EventScheduled',
                'location': {
                    '@type': 'Place',
                    'name': ev.local,
                    'address': ev.endereco || ev.bairro || 'Montes Claros, MG'
                },
                'url': base + '#evento-' + ev.id
            };
            if (ev.data) {
                const dt = parseData(ev.data, new Date().getFullYear());
                if (dt) {
                    const hm = (ev.hora || '').match(/(\d{1,2})\s*h/i);
                    dt.setHours(hm ? parseInt(hm[1], 10) % 24 : 20, 0, 0, 0);
                    obj.startDate = dt.toISOString();
                } else {
                    obj.startDate = ev.data;
                }
            }
            if (isImgSrc(ev.img)) obj.image = resolveImgSrc(ev.img);
            if (ev.preco !== undefined && ev.preco !== null) {
                obj.offers = {
                    '@type': 'Offer',
                    'price': ev.preco === 0 ? '0' : String(ev.preco),
                    'priceCurrency': 'BRL',
                    'availability': 'https://schema.org/InStock',
                    'url': base + '#evento-' + ev.id
                };
            }
            return obj;
        });
        let el = document.getElementById('eventsJsonLd');
        if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.id = 'eventsJsonLd'; document.head.appendChild(el); }
        el.textContent = JSON.stringify(items);
    } catch (err) {
        console.warn('SEO json-ld:', err);
    }
}

// ============== APLICAR DADOS DO ADMIN ==============
// SEMPRE busca do GitHub (fonte da verdade) - ignora localStorage
adminData = null;
useAdmin = false;
loadRemote().finally(handleHash);

console.log('%c🎶 Agenda Shows MOC', 'color:#ff3d6e;font-size:24px;font-weight:bold;');
console.log('%cA agenda mais completa de MOC!', 'color:#8a8aa3;font-size:14px;');
