// ===== STORAGE =====
function getUsers() { return JSON.parse(localStorage.getItem('lrc_users')) || {}; }
function saveUsers(u) { localStorage.setItem('lrc_users', JSON.stringify(u)); }

function getData() { return JSON.parse(localStorage.getItem('lrc_data')) || {}; }
function saveData(d) { localStorage.setItem('lrc_data', JSON.stringify(d)); }

let currentUser = null;

// ===== PLANS =====
const PLANS = [
    { id:1, name:'Starter', invest:500, daily:100, days:30 },
    { id:2, name:'Basic', invest:1000, daily:200, days:30 },
    { id:3, name:'Silver', invest:5000, daily:500, days:30 },
    { id:4, name:'Gold', invest:10000, daily:1000, days:30 },
    { id:5, name:'Platinum', invest:20000, daily:2500, days:30 },
    { id:6, name:'Diamond', invest:50000, daily:5000, days:30 }
];

// ===== TOAST =====
function showToast(msg) {
    let t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
}

// ===== LOGIN CHECK =====
function checkAuth() {
    let saved = localStorage.getItem('lrc_current');
    if (saved && getUsers()[saved]) {
        currentUser = saved;
        return true;
    }
    return false;
}

function requireAuth() {
    if (!checkAuth()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function logout() {
    localStorage.removeItem('lrc_current');
    window.location.href = 'login.html';
}
