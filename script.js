/* ===========================
   Datos del plan (IDs únicos)
   =========================== */

const PLAN = [
  { n: 1, items: [
    { id:'aprendizaje-autonomo', name:'Aprendizaje Autónomo', req:[] },
    { id:'calculo-i', name:'Cálculo I', req:[] },
    { id:'geometria-analitica', name:'Geometría Analítica', req:[] },
    { id:'programacion-i', name:'Programación I', req:[] },
    { id:'fundamentos-ii', name:'Fundamentos de Ing. Industrial', req:[] },
    { id:'competencias-comunicativas', name:'Competencias Comunicativas', req:[] },
    { id:'constitucion-democracia', name:'Constitución y Democracia', req:[] },
  ]},
  { n: 2, items: [
    { id:'universidad-contexto', name:'Universidad y Contexto', req:[] },
    { id:'calculo-ii', name:'Cálculo II', req:['calculo-i'] },
    { id:'algebra-lineal', name:'Álgebra Lineal', req:['calculo-i'] },
    { id:'fisica-i', name:'Física I', req:['calculo-i'] },
    { id:'quimica-general', name:'Química General', req:[] },
    { id:'programacion-ii', name:'Programación II', req:['programacion-i'] },
    { id:'dibujo-ingenieria', name:'Dibujo de Ingeniería', req:['geometria-analitica'] },
  ]},
  { n: 3, items: [
    { id:'ingles-i', name:'Inglés I', req:[] },
    { id:'calculo-iii', name:'Cálculo III', req:['calculo-ii','algebra-lineal'] },
    { id:'fisica-ii', name:'Física II', req:['fisica-i'] },
    { id:'materiales-ingenieria', name:'Materiales de Ingeniería', req:['quimica-general','dibujo-ingenieria'] },
    { id:'estadistica-i', name:'Estadística I', req:[] },
    { id:'fundamentos-economia', name:'Fundamentos de Economía', req:[] },
    { id:'electiva-libre-i', name:'Electiva Libre I', req:[] },
  ]},
  { n: 4, items: [
    { id:'ingles-ii', name:'Inglés II', req:['ingles-i'] },
    { id:'fisica-iii', name:'Física III', req:['fisica-ii'] },
    { id:'ecuaciones-dif', name:'Ecuaciones Diferenciales', req:['calculo-iii'] },
    { id:'mecanica-solidos', name:'Mecánica de Sólidos', req:['materiales-ingenieria'] },
    { id:'estadistica-ii', name:'Estadística II', req:['estadistica-i'] },
    { id:'contabilidad-gerencial', name:'Contabilidad Gerencial', req:['fundamentos-economia'] },
    { id:'electiva-libre-ii', name:'Electiva Libre II', req:[] },
  ]},
  { n: 5, items: [
    { id:'ingles-iii', name:'Inglés III', req:['ingles-ii'] },
    { id:'termodinamica', name:'Termodinámica', req:['ecuaciones-dif'] },
    { id:'contabilidad-costos', name:'Contabilidad de Costos', req:['contabilidad-gerencial'] },
    { id:'matematicas-financieras', name:'Matemáticas Financieras', req:['contabilidad-gerencial'] },
    { id:'gestion-ambiental', name:'Gestión Ambiental', req:[] },
    { id:'io-i', name:'Investigación de Operaciones I', req:['estadistica-ii'] },
    { id:'calidad-i', name:'Calidad I', req:['estadistica-ii'] },
  ]},
  { n: 6, items: [
    { id:'ingles-iv', name:'Inglés IV', req:['ingles-iii'] },
    { id:'procesos-manufactura', name:'Procesos de Manufactura', req:['termodinamica','mecanica-solidos'] },
    { id:'organizacion-metodos-i', name:'Organización y Métodos I', req:[] },
    { id:'io-ii', name:'Investigación de Operaciones II', req:['io-i'] },
    { id:'calidad-ii', name:'Calidad II', req:['calidad-i'] },
    { id:'mercados', name:'Mercados', req:['contabilidad-costos','matematicas-financieras'] },
    { id:'administracion', name:'Administración', req:['matematicas-financieras'] },
  ]},
  { n: 7, items: [
    { id:'seguridad-industrial', name:'Seguridad Industrial', req:['procesos-manufactura'] },
    { id:'organizacion-metodos-ii', name:'Organización y Métodos II', req:['organizacion-metodos-i'] },
    { id:'io-iii', name:'Investigación de Operaciones III', req:['io-ii'] },
    { id:'elab-eval-proyectos', name:'Elab. y Eval. de Proyectos', req:['mercados'] },
    { id:'administracion-salarios', name:'Administración de Salarios', req:['administracion'] },
    { id:'electiva-carrera-i', name:'Electiva de Carrera I', req:[] },
  ]},
  { n: 8, items: [
    { id:'mantenimiento-industrial', name:'Mantenimiento Industrial', req:['seguridad-industrial'] },
    { id:'produccion-i', name:'Producción I', req:['organizacion-metodos-ii','io-iii'] },
    { id:'gestion-financiera', name:'Gestión Financiera', req:['elab-eval-proyectos'] },
    { id:'gerencia-talento', name:'Gerencia del Talento Humano', req:['administracion-salarios'] },
    { id:'etica-profesional', name:'Ética profesional', req:[] },
    { id:'electiva-carrera-ii', name:'Electiva de Carrera II', req:[] },
  ]},
  { n: 9, items: [
    { id:'produccion-ii', name:'Producción II', req:['produccion-i'] },
    { id:'logistica-empresarial', name:'Logística Empresarial', req:[] },
    { id:'proyecto-i', name:'Proyecto I', req:[] },
    { id:'empresas', name:'Empresas', req:['gestion-financiera'] },
    { id:'relaciones-industriales', name:'Relaciones Industriales', req:['gerencia-talento'] },
    { id:'electiva-profundizacion-1', name:'Electiva de Profundización', req:[] },
    { id:'electiva-profundizacion-2', name:'Electiva de Profundización', req:[] },
  ]},
  { n: 10, items: [
    { id:'practica-profesional', name:'Práctica Profesional', req:[] },
    { id:'distribucion-plantas', name:'Distribución de Plantas', req:['produccion-ii'] },
    { id:'logica-empresarial', name:'Lógica Empresarial', req:['produccion-ii'] },
    { id:'proyecto-ii', name:'Proyecto II', req:['proyecto-i'] },
  ]},
];

/* ===========================
   Render de columnas y ramos
   =========================== */

const $semesters = document.getElementById('semesters');
const $edges = document.getElementById('edges');

const STATE_KEY = 'pensum_aprobadas';
let aprobadas = new Set(JSON.parse(localStorage.getItem(STATE_KEY) || '[]'));

function render(){
  $semesters.innerHTML = '';
  for(const sem of PLAN){
    const col = document.createElement('div');
    col.className = 'semester';
    col.dataset.semester = sem.n;
    col.innerHTML = `<h2>Semestre ${sem.n}</h2><div class="courses"></div>`;
    const list = col.querySelector('.courses');

    for(const c of sem.items){
      const card = document.createElement('div');
      card.className = 'course';
      card.dataset.id = c.id;
      card.dataset.req = JSON.stringify(c.req);
      card.innerHTML = `
        <div class="check">✔</div>
        <div class="title">${c.name}</div>
        <div class="meta">${c.req.length ? 'Requiere: ' + c.req.map(alias).join(', ') : 'Sin prerrequisitos'}</div>
        <span class="badge">S${sem.n}</span>
      `;
      list.appendChild(card);
    }

    $semesters.appendChild(col);
  }
}

/* Traducción corta de ID -> nombre corto para mostrar en "Requiere" */
function alias(id){
  const all = PLAN.flatMap(s => s.items);
  const x = all.find(i => i.id === id);
  return x ? x.name : id;
}

/* ===========================
   Lógica de estados
   =========================== */

function getCard(id){ return document.querySelector(`.course[data-id="${id}"]`); }
function getReqs(id){
  const el = getCard(id);
  return el ? JSON.parse(el.dataset.req) : [];
}
function isDone(id){ return aprobadas.has(id); }
function canTake(id){
  const reqs = getReqs(id);
  return reqs.every(r => aprobadas.has(r));
}

function updateStates(){
  document.querySelectorAll('.course').forEach(el=>{
    const id = el.dataset.id;
    el.classList.remove('locked','available','done');

    if(isDone(id)){
      el.classList.add('done');
      el.title = 'Aprobado (clic para revertir)';
    }else if(canTake(id)){
      el.classList.add('available');
      el.title = 'Disponible (clic para aprobar)';
    }else{
      el.classList.add('locked');
      const faltan = getReqs(id).filter(r=>!aprobadas.has(r)).map(alias).join(', ');
      el.title = faltan ? `Bloqueado. Faltan: ${faltan}` : 'Bloqueado';
    }
  });

  drawEdges();
  localStorage.setItem(STATE_KEY, JSON.stringify([...aprobadas]));
}

/* Toggle al hacer clic */
function attachHandlers(){
  $semesters.addEventListener('click', ev=>{
    const card = ev.target.closest('.course');
    if(!card) return;
    const id = card.dataset.id;

    if(card.classList.contains('locked')){
      // Aviso rápido
      const faltan = getReqs(id).filter(r=>!aprobadas.has(r)).map(alias).join(', ');
      alert(`Este ramo está bloqueado.\nPrerrequisitos pendientes: ${faltan || '—'}`);
      return;
    }
    if(card.classList.contains('done')){
      aprobadas.delete(id);
    }else{
      aprobadas.add(id);
    }
    // Recalcular todo (por si al desmarcar se caen desbloqueos posteriores)
    cascadeRecalc();
  });

  document.getElementById('btnReset').addEventListener('click', ()=>{
    if(confirm('¿Seguro que quieres borrar todo tu progreso?')){
      aprobadas = new Set();
      cascadeRecalc();
    }
  });

  document.getElementById('btnExport').addEventListener('click', ()=>{
    const data = JSON.stringify([...aprobadas], null, 2);
    const blob = new Blob([data], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'avance_malla.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });

  document.getElementById('fileImport').addEventListener('change', e=>{
    const f = e.target.files?.[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try{
        const arr = JSON.parse(reader.result);
        aprobadas = new Set(Array.isArray(arr) ? arr : []);
        cascadeRecalc();
      }catch(err){
        alert('Archivo inválido');
      }
    };
    reader.readAsText(f);
    e.target.value = '';
  });
}

/* Recalcula estados respetando dependencias */
function cascadeRecalc(){
  // Si quitaste algo, algunos cursos pueden volver a bloquearse.
  // Simplemente recalculamos hasta que no haya cambios.
  let changed = true;
  while(changed){
    changed = false;
    // Si un ramo aprobado ya no cumple sus propios requisitos (raro), lo mantenemos;
    // lo importante es bloquear los dependientes al calcular disponibilidad.
    // Basta con actualizar estados de todos.
    const before = document.body.getAttribute('data-hash') || '';
    updateStates();
    const after = JSON.stringify([...aprobadas]) + Date.now(); // dummy
    if(before !== after){
      document.body.setAttribute('data-hash', after);
      changed = false; // con updateStates basta; evitamos bucles
    }
  }
}

/* ===========================
   Dibujo de aristas (SVG)
   =========================== */

function computeEdges(){
  // Construir lista de aristas {from, to}
  const result = [];
  for(const sem of PLAN){
    for(const c of sem.items){
      for(const r of c.req){
        result.push({from:r, to:c.id});
      }
    }
  }
  return result;
}

const EDGE_LIST = computeEdges();

function drawEdges(){
  // Ajustar el SVG al tamaño del board
  const boardRect = document.getElementById('board').getBoundingClientRect();
  const scrollH = document.getElementById('board').scrollHeight;
  $edges.setAttribute('viewBox', `0 0 ${boardRect.width} ${scrollH}`);
  $edges.setAttribute('width', boardRect.width);
  $edges.setAttribute('height', scrollH);

  // Limpiar
  $edges.innerHTML = '';

  const pathFor = (fromEl, toEl) => {
    const br = document.getElementById('board').getBoundingClientRect();
    const a = fromEl.getBoundingClientRect();
    const b = toEl.getBoundingClientRect();

    // puntos (derecha del origen -> izquierda del destino)
    const x1 = a.right - br.left;
    const y1 = a.top + a.height/2 - br.top;
    const x2 = b.left - br.left;
    const y2 = b.top + b.height/2 - br.top;

    // curva suave
    const dx = Math.max(40, (x2 - x1) * 0.5);
    const c1x = x1 + dx;
    const c1y = y1;
    const c2x = x2 - dx;
    const c2y = y2;
    return `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
  };

  for(const e of EDGE_LIST){
    const fromEl = getCard(e.from);
    const toEl = getCard(e.to);
    if(!fromEl || !toEl) continue;

    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d', pathFor(fromEl,toEl));
    p.setAttribute('class', 'edge ' + (isDone(e.from) ? 'ok' : 'pending'));
    $edges.appendChild(p);
  }
}

/* ===========================
   Init
   =========================== */

function init(){
  render();
  attachHandlers();
  updateStates();
  // Redibujar al cambiar tamaño / posición
  const ro = new ResizeObserver(()=>{ drawEdges(); });
  ro.observe(document.getElementById('semesters'));
  window.addEventListener('resize', drawEdges);
  // Pequeño retraso para asegurar layout listo
  setTimeout(drawEdges, 50);
}

document.addEventListener('DOMContentLoaded', init);
