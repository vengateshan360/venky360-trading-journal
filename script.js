// Save Trade
function saveTrade() {
  const trade = {
    date: document.getElementById("date").value,
    pair: document.getElementById("pair").value,
    direction: document.getElementById("direction").value,
    entry: document.getElementById("entry").value,
    sl: document.getElementById("sl").value,
    tp: document.getElementById("tp").value,
    lot: document.getElementById("lot").value,
    notes: document.getElementById("notes").value
  };

  let trades = JSON.parse(localStorage.getItem("trades")) || [];
  trades.push(trade);
  localStorage.setItem("trades", JSON.stringify(trades));

  alert("Trade Saved Successfully!");
  window.location.href = "journal.html";
}

// Load Journal
function loadTrades() {
  let trades = JSON.parse(localStorage.getItem("trades")) || [];
  let table = document.getElementById("tradeTable");

  if (!table) return;

  table.innerHTML = "";

  trades.forEach((trade, index) => {
    table.innerHTML += `
      <tr>
        <td>${trade.date}</td>
        <td>${trade.pair}</td>
        <td>${trade.direction}</td>
        <td>${trade.entry}</td>
        <td>${trade.sl}</td>
        <td>${trade.tp}</td>
        <td>${trade.lot}</td>
        <td>${trade.notes}</td>
        <td><button onclick="deleteTrade(${index})">Delete</button></td>
      </tr>
    `;
  });
}

// Delete One Trade
function deleteTrade(index) {
  let trades = JSON.parse(localStorage.getItem("trades")) || [];
  trades.splice(index, 1);
  localStorage.setItem("trades", JSON.stringify(trades));
  loadTrades();
}

// Clear All Trades
function clearAllTrades() {
  if (confirm("Delete All Trades?")) {
    localStorage.removeItem("trades");
    loadTrades();
  }
}

// Home
function goHome() {
  window.location.href = "index.html";
}

// Auto Load
window.onload = loadTrades;
