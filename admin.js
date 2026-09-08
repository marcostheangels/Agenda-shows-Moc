// =========================
// ADMIN - AGENDA SHOWS MOC
// =========================

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const STORAGE_KEY = 'agendaShowsMOC_data';
const AUTH_KEY = 'agendaShowsMOC_auth';

// ============== DADOS PADRÃO ==============
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
        { id: 1, titulo: 'Festival de Forró de MOC anuncia line-up da 3ª edição', cat: 'Cobertura', data: '02 Set 2026', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', resumo: 'Os maiores nomes do forró nacional se apresentam em outubro na Arena MOC. Confira a programação completa e garanta seu ingresso...' },
        { id: 2, titulo: '7 restaurantes de MOC com música ao vivo que você precisa conhecer', cat: 'Gastronomia', data: '28 Ago 2026', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', resumo: 'Uma seleção especial com os melhores restaurantes da cidade que oferecem jantar com show ao vivo...' },
        { id: 3, titulo: 'Roteiro completo: como curtir MOC em um fim de semana', cat: 'Dicas', data: '22 Ago 2026', img: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800&q=80', resumo: 'Montamos um guia definitivo para você aproveitar o melhor da cena cultural e noturna de Montes Claros...' },
        { id: 4, titulo: 'Top 10 botecos imperdíveis no Centro de Montes Claros', cat: 'Bares', data: '15 Ago 2026', img: 'https://images.unsplash.com/photo-1538488749019-edaaee8060dc?w=800&q=80', resumo: 'Selecionamos os bares mais tradicionais e badalados para você tomar uma boa cachaça...' }
    ],
    depoimentos: [
        { id: 1, nome: 'Roberto Carvalho', cargo: 'Proprietário — Villa Forró', estrelas: 5, texto: 'Em 3 meses anunciando no Agenda Shows MOC, nosso movimento cresceu 40%. A plataforma é simples e o suporte é excelente.', cor: 'linear-gradient(135deg,#dc2626,#f59e0b)' },
        { id: 2, nome: 'Marina Ferreira', cargo: 'Sócia — Boteco do Rock', estrelas: 5, texto: 'Investimos no pacote premium e o retorno veio já na primeira semana. Hoje temos fila de espera nos fins de semana!', cor: 'linear-gradient(135deg,#7c3aed,#3b82f6)' },
        { id: 3, nome: 'Carlos Santos', cargo: 'Chef — Sabor da Terra', estrelas: 5, texto: 'A equipe do Agenda Shows MOC me ajudou a estruturar toda a divulgação. Meu restaurante bombou nos jantares musicais!', cor: 'linear-gradient(135deg,#10b981,#059669)' },
        { id: 4, nome: 'Juliana Lopes', cargo: 'Promotora — Lounge Club', estrelas: 5, texto: 'A agenda é o que há de mais completo na cidade. Os clientes chegam perguntando pelo site — isso mostra a credibilidade.', cor: 'linear-gradient(135deg,#ec4899,#8b5cf6)' }
    ]
};

// ============== STORAGE SEGURO (modo anônimo pode bloquear) ==============
const safeGet = k => { try { return localStorage.getItem(k); } catch (e) { console.warn('storage bloqueado (get):', k); return null; } };
const safeSet = (k, v) => { try { localStorage.setItem(k, v); return true; } catch (e) { console.warn('storage bloqueado (set):', k); return false; } };

// ============== ESTADO ==============
let data = loadData();
let nextId = { eventos: 100, estabelecimentos: 100, categorias: 100, blog: 100, depoimentos: 100 };
let _initDone = false;
let _ghLoadPromise = null;

function loadData() {
    const stored = safeGet(STORAGE_KEY);
    if (stored) {
        try { return JSON.parse(stored); } catch(e) {}
    }
    return JSON.parse(JSON.stringify(defaultData));
}

// SEMPRE baixa o data.json do GitHub primeiro - é a fonte da verdade.
// O localStorage é só um cache rápido para o admin trabalhar.
async function loadFromGitHub() {
    try {
        const res = await fetch('data.json?t=' + Date.now(), { cache: 'no-store' });
        if (!res.ok) return false;
        const json = await res.json();
        if (!json || !json.eventos) return false;
        // Se o usuário já tem dados locais (modificou algo), não sobrescreve
        const hasLocal = !!safeGet(STORAGE_KEY);
        if (!hasLocal) {
            data = json;
            safeSet(STORAGE_KEY, JSON.stringify(data));
            console.log('%c✅ data.json carregado do GitHub: ' + json.eventos.length + ' eventos', 'color:#10b981');
            return true;
        }
        return false;
    } catch (e) {
        console.warn('Falha ao carregar data.json do GitHub:', e.message);
        return false;
    }
}

function saveData() {
    try {
        const ok = safeSet(STORAGE_KEY, JSON.stringify(data));
        if (!ok) throw new Error('storage indisponível');
        const cfg = getGHConfig();
        if (cfg.autoPublish && cfg.token) {
            updateGHStatus('Salvando... próximo: publicar no GitHub automaticamente.', 'warn');
            scheduleGitHubSync();
        } else {
            updateGHStatus('Salvo neste navegador. Ative "Auto-publicar" para atualizar o site.', 'warn');
        }
        return true;
    } catch (e) {
        toast('Erro ao salvar: ' + e.message, 4000);
        return false;
    }
}



// ============== GITHUB AUTO-PUBLISH ==============
const GH_KEY = 'agendaShowsMOC_gh';
const getGHConfig = () => {
    try { return Object.assign({ owner: 'marcostheangels', repo: 'Agenda-shows-Moc', branch: 'main', token: '', autoPublish: false }, JSON.parse(safeGet(GH_KEY) || '{}')); }
    catch { return { owner: 'marcostheangels', repo: 'Agenda-shows-Moc', branch: 'main', token: '', autoPublish: false }; }
};
const setGHConfig = cfg => safeSet(GH_KEY, JSON.stringify(cfg));

let ghSyncing = false;
let ghTimer = null;

const b64encode = str => {
    const bytes = new TextEncoder().encode(str);
    const CH = 32768;
    let bin = '';
    for (let i = 0; i < bytes.length; i += CH) {
        bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
    }
    return btoa(bin);
};

function updateGHStatus(msg, type) {
    const el = document.getElementById('ghStatus');
    if (!el) return;
    el.textContent = msg;
    el.style.color = type === 'ok' ? '#10b981' : type === 'err' ? '#ef4444' : type === 'warn' ? '#f59e0b' : '';
}

async function pushToGitHub(message) {
    const cfg = getGHConfig();
    if (!cfg.token) {
        updateGHStatus('Sem token GitHub configurado. Dados salvos apenas neste navegador.', 'warn');
        return false;
    }
    if (ghSyncing) return false;

    const jsonStr = JSON.stringify(data, null, 2);
    const jsonKB = Math.round(jsonStr.length / 1024);
    if (jsonStr.length > 900 * 1024) {
        updateGHStatus(`Arquivo grande demais (~${jsonKB} KB). Remova fotos base64 e use URL externa.`, 'err');
        toast('Arquivo grande demais para publicar. Use URL externa nas fotos.', 5000);
        return false;
    }

    ghSyncing = true;
    updateGHStatus(`Enviando para GitHub (~${jsonKB} KB)...`);
    toast(`Enviando ~${jsonKB} KB para o GitHub...`, 3000);

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 60000);

    try {
        const apiBase = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/data.json`;
        let sha = null;

        const getRes = await fetch(`${apiBase}?ref=${cfg.branch}`, {
            headers: { Authorization: `Bearer ${cfg.token}`, Accept: 'application/vnd.github+json' },
            signal: ctrl.signal
        });

        if (getRes.status === 401) { throw new Error('Token inválido ou expirado.'); }
        if (getRes.status === 404) { /* arquivo novo, sem sha */ }
        else if (getRes.ok) {
            const j = await getRes.json();
            sha = j.sha;
        }

        const body = {
            message: message || 'Atualizacao via painel admin',
            content: b64encode(jsonStr),
            branch: cfg.branch
        };
        if (sha) body.sha = sha;

        const putRes = await fetch(apiBase, {
            method: 'PUT',
            headers: { Authorization: `Bearer ${cfg.token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            signal: ctrl.signal
        });

        if (!putRes.ok) {
            const err = await putRes.json().catch(() => ({}));
            throw new Error(err.message || `HTTP ${putRes.status}`);
        }

        updateGHStatus(`Publicado! Site atualiza em ~1 min. (${jsonKB} KB)`, 'ok');
        toast('Publicado no GitHub! Site atualiza em ~1 min.', 4000);
        return true;
    } catch (err) {
        const msg = err.name === 'AbortError' ? 'Tempo esgotado (60s) - internet lenta.' : err.message;
        updateGHStatus('Erro ao publicar: ' + msg, 'err');
        toast('Erro: ' + msg, 6000);
        return false;
    } finally {
        clearTimeout(timer);
        ghSyncing = false;
    }
}

function scheduleGitHubSync() {
    const cfg = getGHConfig();
    if (!cfg.autoPublish || !cfg.token) return;
    clearTimeout(ghTimer);
    ghTimer = setTimeout(() => pushToGitHub('Atualizacao via painel admin'), 2000);
}

// ============== FOTOS NO REPO ==============
// As fotos devem ser enviadas pelo próprio GitHub (Add file → Upload files, pasta fotos/).
// O painel guarda apenas o caminho (fotos/foto-123.jpg) no data.json.
function getFotoPathSuggestion(prefix = 'foto') {
    return `fotos/${prefix}-${Date.now()}.jpg`;
}

const isImageSrc = src => src && (src.startsWith('data:image') || src.startsWith('http') || src.startsWith('blob:') || src.startsWith('fotos/') || src.startsWith('./fotos/') || src.startsWith('/fotos/') || /\.(jpe?g|png|webp|gif|avif|svg)(\?.*)?$/i.test(src));
const thumbStyle = img => {
    if (!img) return 'background:#22223a';
    if (isImageSrc(img)) return `background-image:url("${img}");background-size:cover;background-position:center`;
    return `background:${img}`;
};
const previewHtml = img => {
    if (!img) return '<div class="up-empty">Clique ou arraste uma imagem aqui</div>';
    if (isImageSrc(img)) return `<img src="${img}" alt="preview">`;
    return `<div class="up-gradient" style="background:${img}"></div><div class="up-empty small">Gradiente atual — clique para trocar por foto</div>`;
};

function getNextId(key) {
    let max = 0;
    for (const item of (data[key] || [])) {
        const n = +item.id || 0;
        if (n > max) max = n;
    }
    return max > 0 ? max + 1 : nextId[key];
}

// ============== TOAST ==============
const toastEl = $('#toast');
const toast = (msg, dur = 2500) => {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toastEl.classList.remove('show'), dur);
};

// ============== LOGIN ==============
$('#loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('btnLoginSubmit').click(); });
$('#btnLoginSubmit').addEventListener('click', () => {
    const u = $('#loginUser').value;
    const p = $('#loginPass').value;
    let stored = {};
    try { stored = JSON.parse(safeGet(AUTH_KEY) || '{}'); } catch {}
    const validU = stored.user || 'markim';
    const validP = stored.pass || 'admin123';
    if (u === validU && p === validP) {
        try { sessionStorage.setItem(AUTH_KEY, '1'); } catch {}
        $('#loginScreen').style.display = 'none';
        $('#adminPanel').style.display = 'grid';
        initAdmin();
    } else {
        $('#loginError').textContent = '❌ Usuário ou senha inválidos';
    }
});

// Auto-login se já autenticado
let _authed = false;
try { _authed = !!sessionStorage.getItem(AUTH_KEY); } catch {}
if (_authed) {
    $('#loginScreen').style.display = 'none';
    $('#adminPanel').style.display = 'grid';
    initAdmin();
}

$('#logoutBtn').addEventListener('click', e => {
    e.preventDefault();
    try { sessionStorage.removeItem(AUTH_KEY); } catch {}
    location.reload();
});

// ============== NAVEGAÇÃO ==============
$$('.side-link[data-section]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const sec = link.dataset.section;
        showSection(sec);
    });
});

function showSection(name) {
    $$('.side-link').forEach(l => l.classList.remove('active'));
    const link = $(`.side-link[data-section="${name}"]`);
    if (link) link.classList.add('active');
    $$('.admin-section').forEach(s => s.classList.remove('active'));
    const sec = $(`#sec-${name}`);
    if (sec) sec.classList.add('active');

    const titles = {
        dashboard: ['Dashboard', 'Visão geral do sistema'],
        eventos: ['Eventos', 'Gerencie todos os eventos da agenda'],
        estabelecimentos: ['Estabelecimentos', 'Bares, restaurantes e casas parceiras'],
        categorias: ['Categorias', 'Organize as categorias do site'],
        blog: ['Blog / Notícias', 'Matérias e conteúdo editorial'],
        depoimentos: ['Depoimentos', 'Avaliações dos clientes'],
        config: ['Configurações', 'Dados gerais do site e contagem regressiva']
    };
    if (titles[name]) {
        $('#sectionTitle').textContent = titles[name][0];
        $('#sectionSub').textContent = titles[name][1];
    }
    if (name === 'dashboard') renderDashboard();
    if (name === 'eventos') renderEventos();
    if (name === 'estabelecimentos') renderEst();
    if (name === 'categorias') renderCat();
    if (name === 'blog') renderBlog();
    if (name === 'depoimentos') renderDep();
    if (name === 'config') renderConfig();
}

// ============== INIT ==============
async function initAdmin() {
    if (_initDone) return;
    _initDone = true;
    showSection('dashboard');
    bindActions();
    populateFilters();
    const loaded = await loadFromGitHub();
    if (loaded) {
        showSection('dashboard');
        toast('Dados carregados do GitHub.', 3000);
    }
}

// ============== DASHBOARD ==============
function renderDashboard() {
    $('#kpiEventos').textContent = data.eventos.length;
    $('#kpiEst').textContent = data.estabelecimentos.length;
    $('#kpiCat').textContent = data.categorias.length;
    $('#kpiBlog').textContent = data.blog.length;

    const upcoming = data.eventos.slice(0, 5);
    const list = $('#dashUpcoming');
    if (upcoming.length === 0) {
        list.innerHTML = '<p class="muted">Nenhum evento cadastrado ainda</p>';
    } else {
        list.innerHTML = upcoming.map(ev => `
            <div class="dash-item">
                <div class="dash-item-img" style="${thumbStyle(ev.img)}"></div>
                <div class="dash-item-info">
                    <h4>${ev.titulo}</h4>
                    <span>${ev.data} • ${ev.local}</span>
                </div>
            </div>
        `).join('');
    }
}

$$('.qa-btn').forEach(b => b.addEventListener('click', () => showSection(b.dataset.go)));

// ============== EVENTOS ==============
function renderEventos() {
    const tbody = $('#tblEventos tbody');
    const search = $('#searchEventos').value.toLowerCase();
    const catFilter = $('#filterEventCat').value;
    const filtered = data.eventos.filter(e =>
        (!search || e.titulo.toLowerCase().includes(search) || e.local.toLowerCase().includes(search)) &&
        (!catFilter || e.cat === catFilter)
    );
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-row">Nenhum evento encontrado</td></tr>';
        return;
    }
    tbody.innerHTML = filtered.map(e => `
        <tr>
            <td><div class="thumb" style="${thumbStyle(e.img)}"></div></td>
            <td><strong>${e.titulo}</strong>${e.tag ? ' <span class="cat-pill">' + e.tag + '</span>' : ''}${e.galeria && e.galeria.length ? ` <span class="cat-pill">📷 +${e.galeria.length}</span>` : ''}</td>
            <td><span class="cat-pill">${e.cat}</span></td>
            <td>${e.data}</td>
            <td>${e.local}</td>
            <td>${e.preco === 0 ? '<span style="color:var(--success)">Grátis</span>' : 'R$ ' + e.preco}</td>
            <td>
                <button class="action-btn" onclick="editEvento(${e.id})">✏️</button>
                <button class="action-btn del" onclick="delEvento(${e.id})">🗑</button>
            </td>
        </tr>
    `).join('');
}

window.editEvento = id => {
    const ev = data.eventos.find(e => e.id === id);
    if (!ev) return;
    openModal('Editar Evento', eventForm(ev));
};

window.delEvento = id => {
    if (confirm('Excluir este evento?')) {
        data.eventos = data.eventos.filter(e => e.id !== id);
        saveData();
        renderEventos();
        toast('🗑 Evento excluído');
    }
};

function eventForm(ev = {}) {
    const imgVal = ev.img || '';
    const urlVal = imgVal && !isImageSrc(imgVal) ? imgVal : '';
    return `
        <form id="formEvento" onsubmit="return false" novalidate>
            <input type="hidden" name="id" value="${ev.id || ''}">
            <div class="form-group">
                <label>Título do evento *</label>
                <input type="text" name="titulo" required value="${(ev.titulo || '').replace(/"/g,'&quot;')}">
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Categoria *</label>
                    <select name="cat" required>
                        ${data.categorias.map(c => `<option ${ev.cat === c.nome ? 'selected' : ''}>${c.nome}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Bairro *</label>
                    <input type="text" name="bairro" required value="${(ev.bairro || '').replace(/"/g,'&quot;')}">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Data (ex: 15 SET) *</label>
                    <input type="text" name="data" required value="${(ev.data || '').replace(/"/g,'&quot;')}">
                </div>
                <div class="form-group">
                    <label>Horário (ex: Sábado, 22h) *</label>
                    <input type="text" name="hora" required value="${(ev.hora || '').replace(/"/g,'&quot;')}">
                </div>
                <div class="form-group">
                    <label>Preço (0 = grátis) *</label>
                    <input type="number" name="preco" required min="0" step="1" inputmode="numeric" value="${ev.preco ?? 0}">
                </div>
            </div>
            <div class="form-group">
                <label>Local completo *</label>
                <input type="text" name="local" required value="${(ev.local || '').replace(/"/g,'&quot;')}">
            </div>
            <div class="form-group">
                <label>Endereço (rua, número, cidade) *</label>
                <input type="text" name="endereco" required placeholder="Av. Principal, 100 - Montes Claros, MG" value="${(ev.endereco || '').replace(/"/g,'&quot;')}">
            </div>
            <div class="form-group">
                <label>Link do ingresso (opcional — deixa o botão 🎟 funcionando no site)</label>
                <input type="url" name="ingresso" placeholder="https://www.sympla.com.br/... ou https://wa.me/55..." value="${(ev.ingresso || '').replace(/"/g,'&quot;')}">
                <small style="color:#888">Se vazio, o botão "Comprar Ingresso" não aparece.</small>
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea name="desc" rows="3">${ev.desc || ''}</textarea>
            </div>

            <div class="image-uploader" data-target="img" data-multi="1">
                <label class="up-label">📸 Foto do Flyer / Evento (capa + extras)</label>
                <input type="file" accept="image/*" class="up-input" multiple>
                <div class="up-actions">
                    ${isImageSrc(imgVal) ? `<img class="up-mini" src="${imgVal.replace(/"/g, '&quot;')}" alt="foto escolhida">` : `<img class="up-mini" alt="foto escolhida" hidden>`}
                    <button type="button" class="btn-secondary up-pick">📁 Escolher foto(s)</button>
                    <button type="button" class="btn-secondary up-clear">🗑 Remover</button>
                    <span class="up-hint">Pode selecionar várias de uma vez — a 1ª vira capa</span>
                </div>
                <input type="hidden" name="imgUpload" class="up-data" value="${isImageSrc(imgVal) ? imgVal : ''}">
                <input type="text" name="img" class="up-url" placeholder="Ou cole caminho fotos/... ou URL da imagem" value="${urlVal.replace(/"/g,'&quot;')}">
                <label class="up-label" style="margin-top:12px">🖼️ Fotos extras (opcional, até 6)</label>
                <div class="up-gallery"></div>
                <input type="hidden" name="galeria" class="up-gallery-data" value="${JSON.stringify(ev.galeria || []).replace(/"/g,'&quot;')}">
            </div>

            <div class="form-group" style="margin-top:16px">
                <label>Tag (HOT / NOVO / VIP / vazio)</label>
                <select name="tag">
                    <option value="" ${!ev.tag ? 'selected' : ''}>Sem tag</option>
                    <option ${ev.tag === 'HOT' ? 'selected' : ''}>HOT</option>
                    <option ${ev.tag === 'NOVO' ? 'selected' : ''}>NOVO</option>
                    <option ${ev.tag === 'VIP' ? 'selected' : ''}>VIP</option>
                </select>
            </div>
            <div class="form-actions">
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancelar</button>
                <button type="button" class="btn-primary" onclick="try{handleEventoSubmit(this.form);}catch(e){console.error(e);}">💾 Salvar Evento</button>
            </div>
        </form>
    `;
}

$('#btnAddEvento').addEventListener('click', () => openModal('Novo Evento', eventForm()));

// ============== IMAGE UPLOADER ==============
const compressImage = (file, maxW = 640, quality = 0.65) => new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onerror = () => rej(new Error('read'));
    reader.onload = e => {
        const img = new Image();
        img.onerror = () => rej(new Error('decode'));
        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                let { width, height } = img;
                const scale = Math.min(1, maxW / Math.max(width, height));
                width = Math.round(width * scale);
                height = Math.round(height * scale);
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, width, height);
                ctx.drawImage(img, 0, 0, width, height);
                let out = canvas.toDataURL('image/jpeg', quality);
                // 2ª passada se ainda ficou pesado (foto de celular costuma estourar o GitHub)
                if (out.length > 450 * 1024 && quality > 0.5) {
                    out = canvas.toDataURL('image/jpeg', 0.5);
                }
                res(out);
            } catch (err) { rej(err); }
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

const bindImageUploader = () => {
    document.querySelectorAll('.image-uploader').forEach(up => {
        if (up.dataset.bound) return;
        up.dataset.bound = '1';
        const mini = up.querySelector('.up-mini');
        const input = up.querySelector('.up-input');
        const urlInput = up.querySelector('.up-url');
        const dataInput = up.querySelector('.up-data');
        const clearBtn = up.querySelector('.up-clear');

        const setPreview = (imgSrc) => {
            if (!mini) return;
            if (imgSrc && isImageSrc(imgSrc)) {
                mini.src = imgSrc;
                mini.hidden = false;
            } else {
                mini.removeAttribute('src');
                mini.hidden = true;
            }
        };

        const galInput = up.querySelector('.up-gallery-data');
        const galBox = up.querySelector('.up-gallery');
        const pickBtn = up.querySelector('.up-pick');
        const allowMulti = up.dataset.multi === '1' || (input && input.multiple);
        const getGal = () => {
            if (!galInput) return [];
            try { const v = JSON.parse(galInput.value || '[]'); return Array.isArray(v) ? v : []; }
            catch { return []; }
        };
        const setGal = arr => { if (galInput) galInput.value = JSON.stringify(arr); renderGal(); };
        const renderGal = () => {
            if (!galBox) return;
            const arr = getGal();
            if (!arr.length) { galBox.innerHTML = '<span class="up-hint">Nenhuma extra — a capa basta.</span>'; return; }
            galBox.innerHTML = arr.map((g, i) => `
                <div class="up-gal-item" data-i="${i}">
                    ${isImageSrc(g) ? `<img src="${String(g).replace(/"/g, '&quot;')}" alt="extra ${i + 1}">` : `<div class="up-gal-grad" style="background:${String(g).replace(/"/g, '&quot;')}"></div>`}
                    <button type="button" class="up-gal-del" data-del="${i}" title="Remover">×</button>
                </div>`).join('');
            galBox.querySelectorAll('.up-gal-del').forEach(b => b.addEventListener('click', () => {
                const a = getGal();
                a.splice(+b.dataset.del, 1);
                setGal(a);
            }));
        };
        renderGal();

        const validFile = file => {
            if (!file) return false;
            if (/heic|heif/i.test(file.type) || /\.hei[cf]$/i.test(file.name || '')) { toast('⚠️ iPhone HEIC não é aceito. Tire print ou converta p/ JPG.', 5000); return false; }
            if (!file.type.startsWith('image/')) { toast('⚠️ Selecione imagem válida (JPG/PNG)', 3000); return false; }
            if (file.size > 8 * 1024 * 1024) { toast(`⚠️ "${file.name}" passa de 8MB. Use menor.`, 4000); return false; }
            return true;
        };

        const handleFiles = async fileList => {
            const files = [...(fileList || [])].filter(validFile);
            if (!files.length) return;
            if (!allowMulti && files.length > 1) { toast('⚠️ Só 1 foto aqui — a primeira será usada.', 3000); }
            if (input) input.disabled = true;
            toast(`⏳ Processando ${files.length} foto(s)...`, 2500);
            try {
                let mainSet = !!(dataInput && dataInput.value.trim()) || !!(urlInput && urlInput.value.trim());
                const gal = getGal();
                for (const file of (allowMulti ? files : files.slice(0, 1))) {
                    const compressed = await compressImage(file, 640, 0.65);
                    const kb = Math.round(compressed.length / 1024);
                    if (!mainSet) {
                        if (dataInput) dataInput.value = compressed;
                        if (urlInput) urlInput.value = '';
                        setPreview(compressed);
                        mainSet = true;
                    } else if (allowMulti) {
                        if (gal.length >= 6) { toast('⚠️ Máximo 6 extras.', 3000); break; }
                        gal.push(compressed);
                    }
                    if (compressed.length > 450 * 1024) {
                        toast(`⚠️ "${file.name}" ficou ~${kb} KB. Funciona, mas use URL externa para melhor performance.`, 5000);
                    }
                }
                if (allowMulti) setGal(gal);
                else renderGal();
                const total = (allowMulti ? getGal().length : 0) + 1;
                toast(`✅ ${allowMulti ? total + ' foto(s) prontas!' : 'Foto pronta!'}`, 4000);
            } catch (err) {
                console.error('compress:', err);
                toast('❌ Travou ao processar. Tente JPG menor ou cole fotos/...', 5000);
            } finally {
                if (input) { input.disabled = false; input.value = ''; }
            }
        };

        if (pickBtn) pickBtn.addEventListener('click', () => input.click());
        if (mini) mini.addEventListener('click', () => input.click());
        input.addEventListener('change', e => { if (e.target.files && e.target.files.length) handleFiles(e.target.files); });

        if (urlInput) urlInput.addEventListener('input', () => {
            if (urlInput.value.trim() && dataInput) dataInput.value = '';
            setPreview(urlInput.value.trim() || (dataInput && dataInput.value.trim()));
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (urlInput) urlInput.value = '';
                if (dataInput) dataInput.value = '';
                input.value = '';
                setPreview('');
                setGal([]);
            });
        }

        // Botão "Sugerir caminho fotos/" — apenas preenche o campo com o caminho padrão.
        // A foto real precisa ser enviada pelo GitHub (drag & drop) em um commit separado.
        const actions = up.querySelector('.up-actions');
        if (actions && !up.querySelector('.up-foto-path')) {
            const pathBtn = document.createElement('button');
            pathBtn.type = 'button';
            pathBtn.className = 'btn-secondary up-foto-path';
            pathBtn.textContent = '📁 Usar caminho fotos/...';
            pathBtn.title = 'Gera o caminho fotos/foto-123.jpg para você subir a foto direto no GitHub depois';
            actions.appendChild(pathBtn);
            pathBtn.addEventListener('click', () => {
                const urlInput2 = up.querySelector('.up-url');
                const dataInput2 = up.querySelector('.up-data');
                if (dataInput2 && dataInput2.value.trim()) {
                    toast('⚠️ Tire o print/upload da foto e cole em "URL" o caminho fotos/...', 5000);
                    return;
                }
                const sugestao = getFotoPathSuggestion('evento');
                if (urlInput2) { urlInput2.value = sugestao; urlInput2.dispatchEvent(new Event('input')); }
                toast(`📁 Caminho sugerido: ${sugestao}. Suba a foto no GitHub depois.`, 5000);
            });
        }
    });
};

const resolveImg = (form, fallback) => {
    const up = form.querySelector('.up-data');
    const url = form.querySelector('.up-url');
    const urlVal = url && url.value.trim();
    // Prioriza caminho/URL (fotos/..., http) sobre base64: base64 pesado congela o salvar
    if (urlVal) {
        // Se parece nome de arquivo sem pasta, adiciona fotos/
        if (!urlVal.includes('/') && !urlVal.startsWith('data:') && !urlVal.startsWith('http') && !urlVal.startsWith('blob:')) {
            return 'fotos/' + urlVal;
        }
        return urlVal;
    }
    if (up && up.value.trim()) return up.value.trim();
    return fallback || 'linear-gradient(135deg,#ff3d6e,#ff8a3d)';
};

document.addEventListener('submit', e => {
    if (e.target && e.target.id === 'formEvento') {
        e.preventDefault();
        handleEventoSubmit(e.target);
    }
});

function handleEventoSubmit(form) {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = '⏳ Salvando...'; }
    toast('⏳ Salvando evento...', 1500);
    try {
        const fd = new FormData(form);
        const obj = Object.fromEntries(fd);
        delete obj.imgUpload;
            const obrigatorios = [['titulo', 'Título'], ['cat', 'Categoria'], ['bairro', 'Bairro'], ['data', 'Data'], ['hora', 'Horário'], ['local', 'Local'], ['endereco', 'Endereço']];
        for (const [campo, rotulo] of obrigatorios) {
            if (!obj[campo] || String(obj[campo]).trim() === '') {
                toast(`⚠️ Falta preencher: ${rotulo}`, 3500);
                const input = form.querySelector(`[name="${campo}"]`);
                if (input) input.focus();
                if (btn) { btn.disabled = false; btn.textContent = '💾 Salvar Evento'; }
                return;
            }
        }
        obj.img = resolveImg(form, obj.img || 'linear-gradient(135deg,#ff3d6e,#ff8a3d)');
        if (obj.img && obj.img.startsWith('data:image') && obj.img.length > 300 * 1024) {
            const kb = Math.round(obj.img.length / 1024);
            toast(`⚠️ Foto com ~${kb} KB. Funciona, mas use URL externa para melhor performance.`, 6000);
            console.warn('save bloqueado: base64 pesado', kb + 'KB');
            if (btn) { btn.disabled = false; btn.textContent = '💾 Salvar Evento'; }
            return;
        }
        if (obj.img && obj.img.length > 900 * 1024) {
            toast('⚠️ Foto muito pesada para salvar/publicar. Remova a foto ou use fotos/...', 4500);
            if (btn) { btn.disabled = false; btn.textContent = '💾 Salvar Evento'; }
            return;
        }
        obj.preco = parseFloat(obj.preco) || 0;
        try { obj.galeria = JSON.parse(obj.galeria || '[]'); } catch { obj.galeria = []; }
        if (!Array.isArray(obj.galeria)) obj.galeria = [];
        obj.galeria = obj.galeria.filter(g => g && isImageSrc(g)).slice(0, 6);
        const pesada = obj.galeria.find(g => String(g).startsWith('data:image') && String(g).length > 300 * 1024);
        if (pesada) {
            toast(`⚠️ Uma extra tem ~${Math.round(String(pesada).length / 1024)} KB. Funciona, mas prefira URL externa.`, 6000);
            if (btn) { btn.disabled = false; btn.textContent = '💾 Salvar Evento'; }
            return;
        }
        let acao = '';
        if (obj.id) {
            const idx = data.eventos.findIndex(x => x.id === +obj.id);
            obj.id = +obj.id;
            if (idx > -1) data.eventos[idx] = obj;
            else data.eventos.push(obj);
            acao = 'atualizado';
        } else {
            obj.id = getNextId('eventos');
            data.eventos.push(obj);
            acao = 'adicionado';
        }
        if (saveData()) {
            const kb = Math.round((safeGet(STORAGE_KEY) || '').length / 1024);
            const nFotos = 1 + (obj.galeria || []).length;
            toast(`✅ Evento ${acao}! ${nFotos} foto(s). Total: ${data.eventos.length} eventos (${kb} KB). 💾 Salvo localmente.`, 5000);
            console.log(`✅ Evento ${acao}:`, obj);
            closeModal();
            renderEventos();
            populateFilters();
        }
        else if (btn) { btn.disabled = false; btn.textContent = '💾 Salvar Evento'; }
    } catch (err) {
        console.error('save evento:', err);
        toast('❌ Erro ao salvar: ' + (err.message || err), 4000);
        if (btn) { btn.disabled = false; btn.textContent = '💾 Salvar Evento'; }
    }
}

$('#searchEventos').addEventListener('input', renderEventos);
$('#filterEventCat').addEventListener('change', renderEventos);

// ============== ESTABELECIMENTOS ==============
function renderEst() {
    const search = $('#searchEst').value.toLowerCase();
    const filtered = data.estabelecimentos.filter(e => !search || e.nome.toLowerCase().includes(search));
    const tbody = $('#tblEst tbody');
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-row">Nenhum estabelecimento</td></tr>';
        return;
    }
    tbody.innerHTML = filtered.map(e => `
        <tr>
            <td><div class="thumb" style="${thumbStyle(e.img)}"></div></td>
            <td><strong>${e.nome}</strong></td>
            <td><span class="cat-pill">${e.cat}</span></td>
            <td>${e.desc}</td>
            <td>
                <button class="action-btn" onclick="editEst(${e.id})">✏️</button>
                <button class="action-btn del" onclick="delEst(${e.id})">🗑</button>
            </td>
        </tr>
    `).join('');
}

window.editEst = id => {
    const e = data.estabelecimentos.find(x => x.id === id);
    if (e) openModal('Editar Estabelecimento', estForm(e));
};
window.delEst = id => {
    if (confirm('Excluir?')) {
        data.estabelecimentos = data.estabelecimentos.filter(x => x.id !== id);
        saveData();
        renderEst();
        toast('🗑 Removido');
    }
};

function estForm(e = {}) {
    const imgVal = e.img || '';
    const urlVal = imgVal && !isImageSrc(imgVal) ? imgVal : '';
    return `
        <form id="formEst" onsubmit="handleGenericSubmit(this); return false;" novalidate>
            <input type="hidden" name="id" value="${e.id || ''}">
            <div class="form-group"><label>Nome *</label><input type="text" name="nome" required value="${(e.nome || '').replace(/"/g,'&quot;')}"></div>
            <div class="form-group"><label>Categoria *</label><input type="text" name="cat" required value="${(e.cat || '').replace(/"/g,'&quot;')}"></div>
            <div class="form-group"><label>Descrição</label><textarea name="desc" rows="2">${e.desc || ''}</textarea></div>

            <div class="image-uploader" data-target="img">
                <label class="up-label">📸 Foto do Estabelecimento / Fachada</label>
                <input type="file" accept="image/*" class="up-input">
                <div class="up-actions">
                    ${isImageSrc(imgVal) ? `<img class="up-mini" src="${imgVal.replace(/"/g, '&quot;')}" alt="foto escolhida">` : `<img class="up-mini" alt="foto escolhida" hidden>`}
                    <button type="button" class="btn-secondary up-pick">📁 Escolher foto</button>
                    <button type="button" class="btn-secondary up-clear">🗑 Remover imagem</button>
                </div>
                <input type="hidden" name="imgUpload" class="up-data" value="${isImageSrc(imgVal) ? imgVal : ''}">
                <input type="text" name="img" class="up-url" placeholder="Ou cole URL / gradiente CSS" value="${urlVal.replace(/"/g,'&quot;')}">
            </div>

            <div class="form-actions">
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancelar</button>
                <button type="button" class="btn-primary" onclick="try{handleGenericSubmit(this.form);}catch(e){console.error(e);}">💾 Salvar</button>
            </div>
        </form>
    `;
}

$('#btnAddEst').addEventListener('click', () => openModal('Novo Estabelecimento', estForm()));
$('#searchEst').addEventListener('input', renderEst);

// ============== CATEGORIAS ==============
function renderCat() {
    const tbody = $('#tblCat tbody');
    if (data.categorias.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-row">Nenhuma categoria</td></tr>';
        return;
    }
    tbody.innerHTML = data.categorias.map(c => {
        const count = data.eventos.filter(e => e.cat === c.nome).length;
        return `
        <tr>
            <td style="font-size:28px">${c.icone}</td>
            <td><strong>${c.nome}</strong></td>
            <td><code>${c.slug}</code></td>
            <td><span style="display:inline-block;width:24px;height:24px;border-radius:6px;background:${c.cor};vertical-align:middle"></span> ${c.cor}</td>
            <td><strong style="color:var(--primary)">${count}</strong></td>
            <td>
                <button class="action-btn" onclick="editCat(${c.id})">✏️</button>
                <button class="action-btn del" onclick="delCat(${c.id})">🗑</button>
            </td>
        </tr>`;
    }).join('');
}

window.editCat = id => {
    const c = data.categorias.find(x => x.id === id);
    if (c) openModal('Editar Categoria', catForm(c));
};
window.delCat = id => {
    if (confirm('Excluir categoria?')) {
        data.categorias = data.categorias.filter(x => x.id !== id);
        saveData();
        renderCat();
        populateFilters();
        toast('🗑 Removida');
    }
};

function catForm(c = {}) {
    return `
        <form id="formCat" onsubmit="handleGenericSubmit(this); return false;" novalidate>
            <input type="hidden" name="id" value="${c.id || ''}">
            <div class="form-row">
                <div class="form-group"><label>Nome *</label><input type="text" name="nome" required value="${c.nome || ''}"></div>
                <div class="form-group"><label>Ícone (emoji)</label><input type="text" name="icone" value="${c.icone || '🎵'}"></div>
            </div>
            <div class="form-row">
                <div class="form-group"><label>Slug (URL)</label><input type="text" name="slug" value="${c.slug || ''}"></div>
                <div class="form-group"><label>Cor</label><input type="color" name="cor" value="${c.cor || '#ff3d6e'}" class="color-input"></div>
            </div>
            <div class="form-actions">
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancelar</button>
                <button type="button" class="btn-primary" onclick="try{handleGenericSubmit(this.form);}catch(e){console.error(e);}">💾 Salvar</button>
            </div>
        </form>
    `;
}

$('#btnAddCat').addEventListener('click', () => openModal('Nova Categoria', catForm()));

// ============== BLOG ==============
function renderBlog() {
    const search = $('#searchBlog').value.toLowerCase();
    const filtered = data.blog.filter(p => !search || p.titulo.toLowerCase().includes(search));
    const tbody = $('#tblBlog tbody');
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-row">Nenhum post</td></tr>';
        return;
    }
    tbody.innerHTML = filtered.map(p => `
        <tr>
            <td><div class="thumb" style="${thumbStyle(p.img)}"></div></td>
            <td><strong>${p.titulo}</strong></td>
            <td><span class="cat-pill">${p.cat}</span></td>
            <td>${p.data}</td>
            <td>
                <button class="action-btn" onclick="editBlog(${p.id})">✏️</button>
                <button class="action-btn del" onclick="delBlog(${p.id})">🗑</button>
            </td>
        </tr>
    `).join('');
}

window.editBlog = id => {
    const p = data.blog.find(x => x.id === id);
    if (p) openModal('Editar Post', blogForm(p));
};
window.delBlog = id => {
    if (confirm('Excluir post?')) {
        data.blog = data.blog.filter(x => x.id !== id);
        saveData();
        renderBlog();
        toast('🗑 Removido');
    }
};

function blogForm(p = {}) {
    const imgVal = p.img || '';
    const urlVal = imgVal && !isImageSrc(imgVal) ? '' : imgVal;
    const isExt = imgVal && isImageSrc(imgVal);
    return `
        <form id="formBlog" onsubmit="handleGenericSubmit(this); return false;" novalidate>
            <input type="hidden" name="id" value="${p.id || ''}">
            <div class="form-group"><label>Título *</label><input type="text" name="titulo" required value="${(p.titulo || '').replace(/"/g,'&quot;')}"></div>
            <div class="form-row">
                <div class="form-group"><label>Categoria</label><input type="text" name="cat" value="${(p.cat || 'Geral').replace(/"/g,'&quot;')}"></div>
                <div class="form-group"><label>Data</label><input type="text" name="data" value="${(p.data || new Date().toLocaleDateString('pt-BR')).replace(/"/g,'&quot;')}"></div>
            </div>
            <div class="image-uploader" data-target="img">
                <label class="up-label">📸 Foto da Matéria</label>
                <input type="file" accept="image/*" class="up-input">
                <div class="up-actions">
                    ${isExt && isImageSrc(imgVal) ? `<img class="up-mini" src="${imgVal.replace(/"/g, '&quot;')}" alt="foto escolhida">` : `<img class="up-mini" alt="foto escolhida" hidden>`}
                    <button type="button" class="btn-secondary up-pick">📁 Escolher foto</button>
                    <button type="button" class="btn-secondary up-clear">🗑 Remover imagem</button>
                </div>
                <input type="hidden" name="imgUpload" class="up-data" value="${isExt ? imgVal.replace(/"/g,'&quot;') : ''}">
                <input type="text" name="img" class="up-url" placeholder="Ou cole URL da imagem" value="${!isExt ? (imgVal||'').replace(/"/g,'&quot;') : ''}">
            </div>
            <div class="form-group" style="margin-top:16px"><label>Resumo</label><textarea name="resumo" rows="4">${p.resumo || ''}</textarea></div>
            <div class="form-actions">
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancelar</button>
                <button type="button" class="btn-primary" onclick="try{handleGenericSubmit(this.form);}catch(e){console.error(e);}">💾 Salvar</button>
            </div>
        </form>
    `;
}

$('#btnAddBlog').addEventListener('click', () => openModal('Novo Post', blogForm()));
$('#searchBlog').addEventListener('input', renderBlog);

// ============== DEPOIMENTOS ==============
function renderDep() {
    const tbody = $('#tblDep tbody');
    if (data.depoimentos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-row">Nenhum depoimento</td></tr>';
        return;
    }
    tbody.innerHTML = data.depoimentos.map(d => `
        <tr>
            <td><div class="thumb" style="background:${d.cor};color:white;display:flex;align-items:center;justify-content:center;font-weight:800">${d.nome.split(' ').map(n => n[0]).join('').slice(0,2)}</div></td>
            <td><strong>${d.nome}</strong></td>
            <td>${d.cargo}</td>
            <td style="color:#f59e0b">${'★'.repeat(d.estrelas)}</td>
            <td style="max-width:300px;font-size:12px">${d.texto}</td>
            <td>
                <button class="action-btn" onclick="editDep(${d.id})">✏️</button>
                <button class="action-btn del" onclick="delDep(${d.id})">🗑</button>
            </td>
        </tr>
    `).join('');
}

window.editDep = id => {
    const d = data.depoimentos.find(x => x.id === id);
    if (d) openModal('Editar Depoimento', depForm(d));
};
window.delDep = id => {
    if (confirm('Excluir?')) {
        data.depoimentos = data.depoimentos.filter(x => x.id !== id);
        saveData();
        renderDep();
        toast('🗑 Removido');
    }
};

function depForm(d = {}) {
    return `
        <form id="formDep" onsubmit="handleGenericSubmit(this); return false;" novalidate>
            <input type="hidden" name="id" value="${d.id || ''}">
            <div class="form-row">
                <div class="form-group"><label>Nome *</label><input type="text" name="nome" required value="${d.nome || ''}"></div>
                <div class="form-group"><label>Cargo</label><input type="text" name="cargo" value="${d.cargo || ''}"></div>
            </div>
            <div class="form-row">
                <div class="form-group"><label>Estrelas (1-5)</label><input type="number" name="estrelas" min="1" max="5" value="${d.estrelas || 5}"></div>
                <div class="form-group"><label>Cor do avatar</label><input type="text" name="cor" value="${d.cor || 'linear-gradient(135deg,#dc2626,#f59e0b)'}"></div>
            </div>
            <div class="form-group"><label>Depoimento *</label><textarea name="texto" rows="4" required>${d.texto || ''}</textarea></div>
            <div class="form-actions">
                <button type="button" class="btn-secondary" onclick="closeModal()">Cancelar</button>
                <button type="button" class="btn-primary" onclick="try{handleGenericSubmit(this.form);}catch(e){console.error(e);}">💾 Salvar</button>
            </div>
        </form>
    `;
}

$('#btnAddDep').addEventListener('click', () => openModal('Novo Depoimento', depForm()));

// ============== CONFIGURAÇÕES ==============
function renderConfig() {
    const form = $('#configForm');
    Object.keys(data.config).forEach(k => {
        if (form[k]) form[k].value = data.config[k] || '';
    });
}

// Listener do botão Salvar Configurações
document.addEventListener('click', e => {
    if (e.target && e.target.id === 'btnSaveConfig') {
        e.preventDefault();
        e.stopPropagation();
        const form = $('#configForm');
        Object.keys(data.config).forEach(k => {
            if (form[k]) data.config[k] = form[k].value;
        });
        saveData();
        toast('✅ Configurações salvas' + (getGHConfig().autoPublish ? ' — publicando...' : ''));
    }
});

// Listener do submit (Enter em qualquer campo do form) - só pra não navegar
$('#configForm').addEventListener('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    return false;
});

$('#btnChangePass').addEventListener('click', () => {
    const u = prompt('Novo usuário:', 'markim');
    if (!u) return;
    const p = prompt('Nova senha:');
    if (!p) return;
    safeSet(AUTH_KEY, JSON.stringify({ user: u, pass: p }));
    toast('🔐 Senha alterada!');
});

// ============== FILTROS ==============
function populateFilters() {
    const sel = $('#filterEventCat');
    if (sel) {
        const current = sel.value;
        sel.innerHTML = '<option value="">Todas categorias</option>' +
            data.categorias.map(c => `<option ${current === c.nome ? 'selected' : ''}>${c.nome}</option>`).join('');
    }
}

document.addEventListener('submit', e => {
    const form = e.target;
    if (!form || !form.id) return;
    if (['formEst','formCat','formBlog','formDep'].includes(form.id)) {
        e.preventDefault();
        handleGenericSubmit(form);
    }
});

function handleGenericSubmit(form) {
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    delete obj.imgUpload;
    if (form.id === 'formEst' || form.id === 'formBlog') {
        obj.img = resolveImg(form, obj.img || '');
    }
    if (form.id === 'formEst') {
        if (obj.id) { obj.id = +obj.id; data.estabelecimentos[data.estabelecimentos.findIndex(x=>x.id===obj.id)] = obj; toast('✅ Atualizado'); }
        else { obj.id = getNextId('estabelecimentos'); data.estabelecimentos.push(obj); toast('✅ Adicionado'); }
        if (saveData()) { closeModal(); renderEst(); }
    }
    if (form.id === 'formCat') {
        if (obj.id) { obj.id = +obj.id; data.categorias[data.categorias.findIndex(x=>x.id===obj.id)] = obj; toast('✅ Atualizada'); }
        else { obj.id = getNextId('categorias'); data.categorias.push(obj); toast('✅ Adicionada'); }
        if (saveData()) { closeModal(); renderCat(); populateFilters(); }
    }
    if (form.id === 'formBlog') {
        if (obj.id) { obj.id = +obj.id; data.blog[data.blog.findIndex(x=>x.id===obj.id)] = obj; toast('✅ Atualizado'); }
        else { obj.id = getNextId('blog'); data.blog.push(obj); toast('✅ Adicionado'); }
        if (saveData()) { closeModal(); renderBlog(); }
    }
    if (form.id === 'formDep') {
        obj.estrelas = parseInt(obj.estrelas) || 5;
        if (obj.id) { obj.id = +obj.id; data.depoimentos[data.depoimentos.findIndex(x=>x.id===obj.id)] = obj; toast('✅ Atualizado'); }
        else { obj.id = getNextId('depoimentos'); data.depoimentos.push(obj); toast('✅ Adicionado'); }
        if (saveData()) { closeModal(); renderDep(); }
    }
}

// ============== MODAL GENÉRICO ==============
function openModal(title, html) {
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = html;
    $('#modal').classList.add('open');
    bindImageUploader();
}

function closeModal() {
    $('#modal').classList.remove('open');
    $('#modalBody').innerHTML = '';
}

$('#modalClose').addEventListener('click', closeModal);
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); return; }
    // Enter dentro do modal: avança para o próximo campo em vez de salvar
    // (evita que o teclado numérico do celular ou um Enter acidental feche a edição)
    if (e.key === 'Enter' && $('#modal').classList.contains('open')) {
        const t = e.target;
        if (!t || !t.form) return;
        if (t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.tagName === 'BUTTON') return;
        if (t.tagName === 'INPUT') {
            e.preventDefault();
            const fields = [...t.form.querySelectorAll('input:not([type="hidden"]):not([type="file"]), select, textarea')].filter(el => !el.disabled);
            const i = fields.indexOf(t);
            if (i > -1 && i < fields.length - 1) fields[i + 1].focus();
            else t.blur();
        }
    }
});

// ============== BACKUP / RESTORE ==============
$('#btnExport').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agenda-shows-moc-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast('📥 Backup exportado');
});

$('#btnImport').addEventListener('click', () => $('#fileImport').click());
$('#fileImport').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        try {
            const imported = JSON.parse(ev.target.result);
            if (confirm('Importar dados? Isto substituirá os atuais.')) {
                data = imported;
                saveData();
                location.reload();
            }
        } catch {
            toast('❌ Arquivo inválido');
        }
    };
    reader.readAsText(file);
});

$('#btnReset').addEventListener('click', () => {
    if (confirm('⚠️ Resetar TUDO? Isto apagará todos os dados.')) {
        if (confirm('Tem certeza? Não há como desfazer.')) {
            try { localStorage.removeItem(STORAGE_KEY); } catch {}
            location.reload();
        }
    }
});

function updateGHStatus(msg) {
    const el = document.getElementById('ghStatus');
    if (el) el.textContent = msg;
}

function bindGitHubUI() {
    const o = document.getElementById('ghOwner');
    const r = document.getElementById('ghRepo');
    const b = document.getElementById('ghBranch');
    const t = document.getElementById('ghToken');
    const ap = document.getElementById('ghAutoPublish');
    const saveBtn = document.getElementById('btnGHSave');
    const testBtn = document.getElementById('btnGHTest');
    const pubBtn = document.getElementById('btnGHPubNow');

    const cfg = getGHConfig();
    if (o) o.value = cfg.owner;
    if (r) r.value = cfg.repo;
    if (b) b.value = cfg.branch;
    if (t) t.value = cfg.token;
    if (ap) ap.checked = !!cfg.autoPublish;

    if (saveBtn) saveBtn.addEventListener('click', () => {
        const newCfg = {
            owner: (o && o.value.trim()) || 'marcostheangels',
            repo: (r && r.value.trim()) || 'Agenda-shows-Moc',
            branch: (b && b.value.trim()) || 'main',
            token: t ? t.value.trim() : '',
            autoPublish: !!(ap && ap.checked)
        };
        setGHConfig(newCfg);
        toast('Configurações GitHub salvas no navegador.', 2500);
        updateGHStatus(newCfg.token ? (newCfg.autoPublish ? 'Pronto! Auto-publicar ativado.' : 'Token salvo. Marque "Auto-publicar" para salvar e publicar em 1 clique.') : 'Token vazio. Apenas local.', newCfg.token ? 'ok' : 'warn');
    });

    if (testBtn) testBtn.addEventListener('click', async () => {
        if (!t || !t.value.trim()) { toast('Cole o token primeiro.', 3000); return; }
        testBtn.disabled = true;
        testBtn.textContent = '⏳ Testando...';
        try {
            const res = await fetch('https://api.github.com/user', {
                headers: { Authorization: 'Bearer ' + t.value.trim(), Accept: 'application/vnd.github+json' }
            });
            if (res.ok) {
                const user = await res.json();
                toast('Token OK! Logado como @' + user.login, 4000);
                updateGHStatus('Token válido para @' + user.login, 'ok');
            } else if (res.status === 401) {
                toast('Token inválido! Gere um novo em github.com/settings/tokens', 5000);
                updateGHStatus('Token inválido (401).', 'err');
            } else {
                toast('Erro ' + res.status, 4000);
            }
        } catch (e) {
            toast('Sem conexão: ' + e.message, 4000);
        } finally {
            testBtn.disabled = false;
            testBtn.textContent = '🔍 Testar Token';
        }
    });

    if (pubBtn) pubBtn.addEventListener('click', () => pushToGitHub('Publicação manual via painel admin'));
}

// ============== BIND ACTIONS ==============
function bindActions() {
    bindGitHubUI();
}

console.log('%c🔐 Painel Admin v8', 'color:#ff3d6e;font-size:20px;font-weight:bold;');
window.__adminOK = true;
try { const _v = document.querySelector('.side-version'); if (_v) _v.textContent = 'Painel v8 · JS OK 🟢'; } catch (e) {}
