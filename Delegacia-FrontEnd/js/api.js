const API_BASE = "http://localhost:3000";

// ======== AGENTES ========
async function getAgentes() {
  const res = await fetch(`${API_BASE}/agentes`);
  return res.json();
}

async function getAgenteById(id) {
  const res = await fetch(`${API_BASE}/agentes/${id}`);
  return res.json();
}

async function createAgente(agente) {
  const res = await fetch(`${API_BASE}/agentes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(agente)
  });
  return res.json();
}

async function updateAgente(id, agente) {
  const res = await fetch(`${API_BASE}/agentes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(agente)
  });
  return res.json();
}

async function deleteAgente(id) {
  return fetch(`${API_BASE}/agentes/${id}`, { method: "DELETE" });
}

// ======== CASOS ========
async function getCasos() {
  const res = await fetch(`${API_BASE}/casos`);
  return res.json();
}

async function createCaso(caso) {
  const res = await fetch(`${API_BASE}/casos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(caso)
  });
  return res.json();
}
