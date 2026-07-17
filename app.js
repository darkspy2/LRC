// ===== STORAGE =====
function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('lrc_users')) || {};
    } catch(e) {
        return {};
    }
}
function saveUsers(u) {
    localStorage.setItem('lrc_users', JSON.stringify(u));
}
function getData() {
    try {
        return JSON.parse(localStorage.getItem('lrc_data')) || {};
    } catch(e) {
        return {};
    }
}
function saveData(d) {
    localStorage.setItem('lrc_data', JSON.stringify(d));
}

let currentUser = null;

// ===== 10 PLANS =====
const PLANS = [
    { id:1, name:'Starter', invest:500, daily:100, days:30 },
    { id:2, name:'Basic', invest:1000, daily:200, days:30 },
    { id:3, name:'Silver', invest:2000, daily:400, days:30 },
    { id:4, name:'Gold', invest:5000, daily:1000, days:30 },
    { id:5, name:'Platinum', invest:10000, daily:2000, days:30 },
    { id:6, name:'Diamond', invest:20000, daily:4000, days:30 },
    { id:7, name:'Elite', invest:30000, daily:6000, days:30 },
    { id:8, name:'Royal', invest:50000, daily:10000, days:30 },
    { id:9, name:'Emperor', invest:100000, daily:20000, days:30 },
    { id:10, name:'Legend', invest:200000, daily:40000, days:30 }
];

// ===== PASSWORD VALIDATION (STRONG) =====
function validatePassword(pass) {
    if (pass.length < 8) return 'Minimum 8 characters';
    if (!/[A-Z]/.test(pass)) return 'At least one uppercase letter';
    if (!/[a-z]/.test(pass)) return 'At least one lowercase letter';
    if (!/[0-9]/.test(pass)) return 'At least one number';
    if (!/[!@#$%^&*]/.test(pass)) return 'At least one special character (!@#$%^&*)';
    return null;
}

// ===== TOAST =====
function showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
        alert(msg);
        return;
    }
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(function() {
        t.style.display = 'none';
    }, 3000);
}

// ===== AUTH =====
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

var C = 'Rs ';
