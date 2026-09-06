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

// ============== ESTADO ==============
let data = loadData();
let nextId = { eventos: 100, estabelecimentos: 100, categorias: 100, blog: 100, depoimentos: 100 };

function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try { return JSON.parse(stored); } catch(e) {}
    }
    return JSON.parse(JSON.stringify(defaultData));
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getNextId(key) {
    const ids = data[key].map(i => i.id);
    return ids.length ? Math.max(...ids) + 1 : nextId[key];
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
$('#loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const u = $('#loginUser').value;
    const p = $('#loginPass').value;
    const stored = JSON.parse(localStorage.getItem(AUTH_KEY) || '{}');
    const validU = stored.user || 'admin';
    const validP = stored.pass || 'admin123';
    if (u === validU && p === validP) {
        sessionStorage.setItem(AUTH_KEY, '1');
        $('#loginScreen').style.display = 'none';
        $('#adminPanel').style.display = 'grid';
        initAdmin();
    } else {
        $('#loginError').textContent = '❌ Usuário ou senha inválidos';
    }
});

// Auto-login se já autenticado
if (sessionStorage.getItem(AUTH_KEY)) {
    $('#loginScreen').style.display = 'none';
    $('#adminPanel').style.display = 'grid';
    setTimeout(initAdmin, 50);
}

$('#logoutBtn').addEventListener('click', e => {
    e.preventDefault();
    sessionStorage.removeItem(AUTH_KEY);
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
function initAdmin() {
    showSection('dashboard');
    bindActions();
    populateFilters();
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
                <div class="dash-item-img" style="background:${ev.img}"></div>
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
            <td><div class="thumb" style="background:${e.img}"></div></td>
            <td><strong>${e.titulo}</strong>${e.tag ? ' <span class="cat-pill">' + e.tag + '</span>' : ''}</td>
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
    return `
        <form id="formEvento">
            <input type="hidden" name="id" value="${ev.id || ''}">
            <div class="form-group">
                <label>Título do evento *</label>
                <input type="text" name="titulo" required value="${ev.titulo || ''}">
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
                    <input type="text" name="bairro" required value="${ev.bairro || ''}">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Data (ex: 15 SET) *</label>
                    <input type="text" name="data" required value="${ev.data || ''}">
                </div>
                <div class="form-group">
                    <label>Horário (ex: Sábado, 22h) *</label>
                    <input type="text" name="hora" required value="${ev.hora || ''}">
                </div>
                <div class="form-group">
                    <label>Preço (0 = grátis) *</label>
                    <input type="number" name="preco" required value="${ev.preco ?? 0}">
                </div>
            </div>
            <div class="form-group">
                <label>Local completo *</label>
                <input type="text" name="local" required value="${ev.local || ''}">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea name="desc" rows="3">${ev.desc || ''}</textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Cor de fundo (gradiente CSS)</label>
                    <input type="text" name="img" value="${ev.img || 'linear-gradient(135deg,#ff3d6e,#ff8a3d)'}" placeholder="linear-gradient(135deg,#ff3d6e,#ff8a3d)">
                </div>
                <div class="form-group">
                    <label>Tag (HOT / NOVO / VIP / vazio)</label>
                    <select name="tag">
                        <option value="" ${!ev.tag ? 'selected' : ''}>Sem tag</option>
                        <option ${ev.tag === 'HOT' ? 'selected' : ''}>HOT</option>
                        <option ${ev.tag === 'NOVO' ? 'selected' : ''}>NOVO</option>
                        <option ${ev.tag === 'VIP' ? 'selected' : ''}>VIP</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn-primary">💾 Salvar Evento</button>
        </form>
    `;
}

$('#btnAddEvento').addEventListener('click', () => openModal('Novo Evento', eventForm()));

$(document).on('submit', '#formEvento', function(e) {
    e.preventDefault();
    const fd = new FormData(this);
    const obj = Object.fromEntries(fd);
    obj.preco = parseFloat(obj.preco) || 0;
    if (obj.id) {
        const idx = data.eventos.findIndex(x => x.id === +obj.id);
        obj.id = +obj.id;
        data.eventos[idx] = obj;
        toast('✅ Evento atualizado');
    } else {
        obj.id = getNextId('eventos');
        data.eventos.push(obj);
        toast('✅ Evento adicionado');
    }
    saveData();
    closeModal();
    renderEventos();
});

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
            <td><div class="thumb" style="background:${e.img}"></div></td>
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
    return `
        <form id="formEst">
            <input type="hidden" name="id" value="${e.id || ''}">
            <div class="form-group"><label>Nome *</label><input type="text" name="nome" required value="${e.nome || ''}"></div>
            <div class="form-group"><label>Categoria *</label><input type="text" name="cat" required value="${e.cat || ''}"></div>
            <div class="form-group"><label>Descrição</label><textarea name="desc" rows="2">${e.desc || ''}</textarea></div>
            <div class="form-group"><label>Cor de fundo (gradiente)</label><input type="text" name="img" value="${e.img || 'linear-gradient(135deg,#dc2626,#7c2d12)'}"></div>
            <button type="submit" class="btn-primary">💾 Salvar</button>
        </form>
    `;
}

$('#btnAddEst').addEventListener('click', () => openModal('Novo Estabelecimento', estForm()));
$(document).on('submit', '#formEst', function(e) {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(this));
    if (obj.id) {
        const idx = data.estabelecimentos.findIndex(x => x.id === +obj.id);
        obj.id = +obj.id;
        data.estabelecimentos[idx] = obj;
        toast('✅ Atualizado');
    } else {
        obj.id = getNextId('estabelecimentos');
        data.estabelecimentos.push(obj);
        toast('✅ Adicionado');
    }
    saveData();
    closeModal();
    renderEst();
});
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
        <form id="formCat">
            <input type="hidden" name="id" value="${c.id || ''}">
            <div class="form-row">
                <div class="form-group"><label>Nome *</label><input type="text" name="nome" required value="${c.nome || ''}"></div>
                <div class="form-group"><label>Ícone (emoji)</label><input type="text" name="icone" value="${c.icone || '🎵'}"></div>
            </div>
            <div class="form-row">
                <div class="form-group"><label>Slug (URL)</label><input type="text" name="slug" value="${c.slug || ''}"></div>
                <div class="form-group"><label>Cor</label><input type="color" name="cor" value="${c.cor || '#ff3d6e'}" class="color-input"></div>
            </div>
            <button type="submit" class="btn-primary">💾 Salvar</button>
        </form>
    `;
}

$('#btnAddCat').addEventListener('click', () => openModal('Nova Categoria', catForm()));
$(document).on('submit', '#formCat', function(e) {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(this));
    if (obj.id) {
        const idx = data.categorias.findIndex(x => x.id === +obj.id);
        obj.id = +obj.id;
        data.categorias[idx] = obj;
        toast('✅ Atualizada');
    } else {
        obj.id = getNextId('categorias');
        data.categorias.push(obj);
        toast('✅ Adicionada');
    }
    saveData();
    closeModal();
    renderCat();
    populateFilters();
});

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
            <td><div class="thumb" style="background-image:url(${p.img})"></div></td>
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
    return `
        <form id="formBlog">
            <input type="hidden" name="id" value="${p.id || ''}">
            <div class="form-group"><label>Título *</label><input type="text" name="titulo" required value="${p.titulo || ''}"></div>
            <div class="form-row">
                <div class="form-group"><label>Categoria</label><input type="text" name="cat" value="${p.cat || 'Geral'}"></div>
                <div class="form-group"><label>Data</label><input type="text" name="data" value="${p.data || new Date().toLocaleDateString('pt-BR')}"></div>
            </div>
            <div class="form-group"><label>URL da Imagem</label><input type="text" name="img" value="${p.img || ''}"></div>
            <div class="form-group"><label>Resumo</label><textarea name="resumo" rows="4">${p.resumo || ''}</textarea></div>
            <button type="submit" class="btn-primary">💾 Salvar</button>
        </form>
    `;
}

$('#btnAddBlog').addEventListener('click', () => openModal('Novo Post', blogForm()));
$(document).on('submit', '#formBlog', function(e) {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(this));
    if (obj.id) {
        const idx = data.blog.findIndex(x => x.id === +obj.id);
        obj.id = +obj.id;
        data.blog[idx] = obj;
        toast('✅ Atualizado');
    } else {
        obj.id = getNextId('blog');
        data.blog.push(obj);
        toast('✅ Adicionado');
    }
    saveData();
    closeModal();
    renderBlog();
});
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
        <form id="formDep">
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
            <button type="submit" class="btn-primary">💾 Salvar</button>
        </form>
    `;
}

$('#btnAddDep').addEventListener('click', () => openModal('Novo Depoimento', depForm()));
$(document).on('submit', '#formDep', function(e) {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(this));
    obj.estrelas = parseInt(obj.estrelas) || 5;
    if (obj.id) {
        const idx = data.depoimentos.findIndex(x => x.id === +obj.id);
        obj.id = +obj.id;
        data.depoimentos[idx] = obj;
        toast('✅ Atualizado');
    } else {
        obj.id = getNextId('depoimentos');
        data.depoimentos.push(obj);
        toast('✅ Adicionado');
    }
    saveData();
    closeModal();
    renderDep();
});

// ============== CONFIGURAÇÕES ==============
function renderConfig() {
    const form = $('#configForm');
    Object.keys(data.config).forEach(k => {
        if (form[k]) form[k].value = data.config[k] || '';
    });
}

$('#configForm').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    Object.keys(data.config).forEach(k => {
        data.config[k] = form[k].value;
    });
    saveData();
    toast('✅ Configurações salvas');
});

$('#btnChangePass').addEventListener('click', () => {
    const u = prompt('Novo usuário:', 'admin');
    if (!u) return;
    const p = prompt('Nova senha:');
    if (!p) return;
    localStorage.setItem(AUTH_KEY, JSON.stringify({ user: u, pass: p }));
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

// ============== MODAL GENÉRICO ==============
function openModal(title, html) {
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = html;
    $('#modal').classList.add('open');
}

function closeModal() {
    $('#modal').classList.remove('open');
    $('#modalBody').innerHTML = '';
}

$('#modalClose').addEventListener('click', closeModal);
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

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
            localStorage.removeItem(STORAGE_KEY);
            location.reload();
        }
    }
});

// ============== BIND ACTIONS ==============
function bindActions() {
    // já feito acima
}

console.log('%c🔐 Painel Admin', 'color:#ff3d6e;font-size:20px;font-weight:bold;');
