// Kalkulyator uchun JavaScript kodi

let display = document.getElementById('display');
let currentInput = '';
let shouldResetDisplay = false;

// Displeyga raqam yoki operator qo'shish
function appendToDisplay(value) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    
    // Agar displej bo'sh yoki "0" bo'lsa va raqam kiritilayotgan bo'lsa
    if (display.value === '' || display.value === '0') {
        if (!isNaN(value) || value === '.') {
            display.value = value === '.' ? '0.' : value;
            return;
        }
    }
    
    // Ketma-ket operatorlarni oldini olish
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];
    
    if (operators.includes(lastChar) && operators.includes(value)) {
        // Oxirgi operatorni yangi operator bilan almashtirish
        display.value = display.value.slice(0, -1) + value;
        return;
    }
    
    // Nuqta tekshiruvi - bir raqamda faqat bitta nuqta bo'lishi mumkin
    if (value === '.') {
        const parts = display.value.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) {
            return; // Agar oxirgi raqamda nuqta mavjud bo'lsa, yangi nuqta qo'shmaslik
        }
    }
    
    display.value += value;
}

// Displerni tozalash
function clearDisplay() {
    display.value = '';
    currentInput = '';
    shouldResetDisplay = false;
}

// Oxirgi belgilarni o'chirish
function deleteLast() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

// Hisoblash funksiyasi
function calculate() {
    try {
        if (display.value === '') {
            return;
        }
        
        // Xavfsizlik uchun faqat ruxsat etilgan belgilarni tekshirish
        const allowedChars = /^[0-9+\-*/.() ]+$/;
        if (!allowedChars.test(display.value)) {
            throw new Error('Noto\'g\'ri belgilar');
        }
        
        // Ko'paytirish belgisini almashtirish
        let expression = display.value.replace(/×/g, '*');
        
        // Bo'lishda nolga bo'lishni tekshirish
        if (expression.includes('/0')) {
            throw new Error('Nolga bo\'lish mumkin emas');
        }
        
        // Hisoblash
        let result = eval(expression);
        
        // Natijani tekshirish
        if (!isFinite(result)) {
            throw new Error('Noto\'g\'ri natija');
        }
        
        // Natijani formatlash
        if (result % 1 === 0) {
            // Butun son
            display.value = result.toString();
        } else {
            // O'nlik son - 10 ta raqamgacha
            display.value = parseFloat(result.toFixed(10)).toString();
        }
        
        shouldResetDisplay = true;
        
    } catch (error) {
        display.value = 'Xatolik';
        shouldResetDisplay = true;
        
        // Xatolikni konsolga yozish
        console.error('Kalkulyator xatoligi:', error.message);
        
        // 2 soniyadan keyin displerni tozalash
        setTimeout(() => {
            if (display.value === 'Xatolik') {
                clearDisplay();
            }
        }, 2000);
    }
}

// Klaviatura qo'llab-quvvatlash
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Raqamlar va operatorlar
    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    } else if ('+-*/'.includes(key)) {
        if (key === '*') {
            appendToDisplay('*');
        } else {
            appendToDisplay(key);
        }
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
});

// Displej ustiga bosish orqali matnni tanlash
display.addEventListener('focus', function() {
    this.select();
});

// Sahifa yuklanganda fokuslash
window.addEventListener('load', function() {
    display.focus();
});

// Sichqoncha g'ildiragi yordamida raqamlarni o'zgartirish
display.addEventListener('wheel', function(event) {
    event.preventDefault();
    
    const currentValue = parseFloat(this.value) || 0;
    const step = event.shiftKey ? 10 : 1;
    
    if (event.deltaY < 0) {
        // Yuqoriga aylantirish - qo'shish
        this.value = (currentValue + step).toString();
    } else {
        // Pastga aylantirish - ayirish
        this.value = (currentValue - step).toString();
    }
});

// Matematik konstanta va funksiyalar qo'shish
const mathFunctions = {
    pi: () => Math.PI,
    e: () => Math.E,
    sqrt: (x) => Math.sqrt(x),
    sin: (x) => Math.sin(x * Math.PI / 180), // Darajalar
    cos: (x) => Math.cos(x * Math.PI / 180),
    tan: (x) => Math.tan(x * Math.PI / 180),
    log: (x) => Math.log10(x),
    ln: (x) => Math.log(x)
};

// Xatoliklar uchun yaxshiroq xabarlar
function showError(message) {
    display.value = message;
    shouldResetDisplay = true;
    
    setTimeout(() => {
        if (display.value === message) {
            clearDisplay();
        }
    }, 3000);
}