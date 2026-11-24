const list = document.getElementById('deals');
async function refresh(){try{const r=await fetch('/api/deals');const deals=await r.json();list.innerHTML=deals.length?deals.map(d=>`<div class="deal"><b>${d.id}</b><br>${d.amount} ${d.asset}<br><small>${d.status}</small></div>`).join(''):'No demo deals yet.';}catch(e){list.textContent='Could not load demo deals.'}}
document.getElementById('dealForm').addEventListener('submit',async e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));const r=await fetch('/api/deals',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});if(r.ok){e.target.reset();refresh()}else alert('Could not create demo deal')});
refresh();
