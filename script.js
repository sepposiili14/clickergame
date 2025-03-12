let cookieCount = 0;
let bakerCount = 0;
let bakerIncome = 0;
let cookiesPerClick = 1;
let bakerCost = 50;
let upgrade1Cost = 100;
let upgrade2Cost = 200;
let ascendCost = 1000;

// Päivitä keksejä ja leipojat
function updateUI() {
    document.getElementById('cookieCount').textContent = cookieCount;
    document.getElementById('bakerCount').textContent = bakerCount;
    document.getElementById('bakerIncome').textContent = bakerIncome;
}

// Klikkaa keksejä
document.getElementById('clickButton').addEventListener('click', function() {
    cookieCount += cookiesPerClick; // Lisää keksejä per klikattu
    updateUI(); // Päivitä UI
});

// Osta leipoja
document.getElementById('buyBaker').addEventListener('click', function() {
    if (cookieCount >= bakerCost) {
        cookieCount -= bakerCost;
        bakerCount++;
        bakerIncome = bakerCount * 1;  // Leipojan tuotto on 1 keksipala sekunnissa per leipoja
        updateUI();
    }
});

// Lisää päivityksiä
document.getElementById('upgrade1').addEventListener('click', function() {
    if (cookieCount >= upgrade1Cost) {
        cookieCount -= upgrade1Cost;
        bakerIncome += 2;  // Parantaa leipojan tuottoa
        upgrade1Cost *= 1.5;  // Päivitys tulee kalliimmaksi joka kerta
        updateUI();
    }
});

document.getElementById('upgrade2').addEventListener('click', function() {
    if (cookieCount >= upgrade2Cost) {
        cookieCount -= upgrade2Cost;
        cookiesPerClick += 1;  // Lisää keksien arvoa per klikkaus
        upgrade2Cost *= 1.5;  // Päivitys tulee kalliimmaksi
        updateUI();
    }
});

// Ascend
document.getElementById('ascendButton').addEventListener('click', function() {
    if (cookieCount >= ascendCost) {
        cookieCount = 0;  // Nollaa keksit
        bakerCount = 0;
        bakerIncome = 0;
        cookiesPerClick = 1;
        bakerCost = 50;
        ascendCost *= 2;  // Ascend tulee kalliimmaksi
        updateUI();
    }
});

// Päivitä leipojan tuotot joka sekunti
setInterval(function() {
    cookieCount += bakerIncome;
    updateUI();
}, 1000);