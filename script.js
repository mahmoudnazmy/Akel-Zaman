// script.js
document.addEventListener('DOMContentLoaded', function () {
  // تحميل السلة من localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // تحديث عدد السلة في الهيدر
  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartButtons = document.querySelectorAll('.cart-count');
    cartButtons.forEach(btn => {
      btn.textContent = `السلة (${count})`;
    });
  }

  // حفظ السلة
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }

  // إضافة منتج
  window.addToCart = function (name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price: parseFloat(price), quantity: 1 });
    }
    saveCart();
    showNotification(`${name} تم إضافته للسلة!`);
    
    // إذا كنا في صفحة السلة، نحدث العرض مباشرة
    if (window.location.pathname.includes('cart.html')) {
      renderCartItems();
    }
  };

  // تعديل الكمية
  window.updateQuantity = function (name, change) {
    const item = cart.find(i => i.name === name);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        cart = cart.filter(i => i.name !== name);
      }
      saveCart();
      if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
      }
    }
  };

  // إزالة من السلة
  window.removeFromCart = function (name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    if (window.location.pathname.includes('cart.html')) {
      renderCartItems();
    }
  };

  // عرض السلة في صفحة cart.html
  window.renderCartItems = function () {
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = '<p class="text-center text-lg">سلتك فارغة!</p>';
      const form = document.getElementById('checkout-form');
      if (form) form.classList.add('hidden');
      return;
    }

    let html = '';
    let total = 0;
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      html += `
        <div class="flex items-center justify-between p-4 border-b border-content-light/20 dark:border-content-dark/20">
          <div>
            <h3 class="font-bold">${item.name}</h3>
            <p class="text-primary font-black">${item.price} جنيه</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="updateQuantity('${item.name}', -1)" class="comic-button h-8 w-8 rounded-lg bg-primary/20 text-primary">-</button>
            <span class="font-bold">${item.quantity}</span>
            <button onclick="updateQuantity('${item.name}', 1)" class="comic-button h-8 w-8 rounded-lg bg-primary/20 text-primary">+</button>
            <button onclick="removeFromCart('${item.name}')" class="mr-4 text-red-500 font-bold">إزالة</button>
          </div>
        </div>
      `;
    });
    html += `<div class="p-4 font-black text-xl text-right">المجموع: ${total.toFixed(2)} جنيه</div>`;
    container.innerHTML = html;
    const form = document.getElementById('checkout-form');
    if (form) form.classList.remove('hidden');
  };

  // إرسال الطلب عبر واتساب
  window.placeOrder = function (event) {
    event.preventDefault();
    if (cart.length === 0) {
      alert('السلة فارغة!');
      return;
    }

    const name = document.getElementById('name')?.value || 'غير معروف';
    const phone = document.getElementById('phone')?.value || 'غير معروف';
    const address = document.getElementById('address')?.value || 'غير معروف';
    const notes = document.getElementById('notes')?.value || 'غير معروف';

    let message = `*طلب جديد من "أكل زمان"*\n\n`;
    message += `الاسم: ${name}\n`;
    message += `الهاتف: ${phone}\n`;
    message += `العنوان: ${address}\n\n`;
    message += `الملاحظات: ${notes}\n\n`;
    message += `*الطلبات:*\n`;
    cart.forEach(item => {
      message += `• ${item.name} × ${item.quantity} = ${item.price * item.quantity} جنيه\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\n*الإجمالي: ${total.toFixed(2)} جنيه*`;

    const whatsappNumber = '201000000000'; // ← غيّر الرقم ده لرقم المطعم الحقيقي
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    // مسح السلة بعد الإرسال
    cart = [];
    saveCart();
    if (window.location.pathname.includes('cart.html')) {
      renderCartItems();
      alert('تم إرسال طلبك! سيتم التواصل معك قريبًا.');
    }
  };

  // إشعار بسيط
  function showNotification(msg) {
    const notif = document.createElement('div');
    notif.className = 'fixed bottom-4 right-4 bg-primary text-content-dark px-4 py-2 rounded-lg font-bold z-50 shadow-lg';
    notif.textContent = msg;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
  }

  // ربط زر "اتمام الطلب"
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', placeOrder);
  }

  // ⭐️ هذا هو التعديل المهم جداً: 
  // تأكد من تحديث السلة عند تحميل أي صفحة
  updateCartCount();

  // إذا كنا في صفحة السلة، نعرض العناصر فوراً
  if (window.location.pathname.includes('cart.html')) {
    renderCartItems();
  }
});