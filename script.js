// Mining Variables
let mining = false;
let trxMined = 0;
let miner = null;

// Start Mining Functionality
document.getElementById("startMining").addEventListener("click", () => {
  const address = document.getElementById("tronAddress").value;
  const mode = document.getElementById("miningMode").value;

  if (!address) {
    alert("Please enter your Tron address!");
    return;
  }

  // Simulate mining status
  mining = true;
  document.getElementById("statusText").innerText = "Mining...";
  document.getElementById("startMining").disabled = true;
  document.getElementById("stopMining").disabled = false;

  // Start fake mining simulation
  const miningInterval = setInterval(() => {
    if (!mining) {
      clearInterval(miningInterval);
      return;
    }

    trxMined += Math.random() * 0.01; // Fake progress
    document.getElementById("trxMined").innerText = trxMined.toFixed(4);
  }, 1000);
});

// Stop Mining Functionality
document.getElementById("stopMining").addEventListener("click", () => {
  mining = false;
  document.getElementById("statusText").innerText = "Stopped";
  document.getElementById("startMining").disabled = false;
  document.getElementById("stopMining").disabled = true;
});
