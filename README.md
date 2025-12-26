# 🥙 **Akel Zaman أكل زمان**

<div align="center">

<img src="https://img.shields.io/badge/Food-Delivery-E57A44?style=for-the-badge&logo=deliveroo&logoColor=white" alt="Food Delivery"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>

### **A Vibrant Comic-Style Egyptian Food Delivery Platform** 🥙✨

**Authentic Street Food | Comic Book Design | Complete Ordering System**

</div>

---

## 🌐 **Live Preview**
🔗 **[Visit Akel Zaman](https://mahmoudnazmy.github.io/Akel-Zaman/)**  

---

## 📖 **About The Project**

**Akel Zaman أكل زمان** (Food of the Past) is a dynamic multi-page food ordering website that brings the authentic taste of Egyptian street food to your screen with a playful comic-book aesthetic. Specializing in traditional sandwiches like fūl, falafel, and mashed potatoes, the platform combines nostalgic flavors with modern web technology for a delightful ordering experience.

🎨 **Design Philosophy:** Comic-book UI meets Egyptian street food culture  
🛍️ **Purpose:** Simple, fun, and efficient food ordering with instant WhatsApp integration  
💫 **Vision:** Digitalize the classic Egyptian street food experience with character  

---

## 🔥 **Features**

✅ **Comic-Book UI Design** – Bold borders, exaggerated shadows, and playful animations  
✅ **Multi-Page Architecture** – Dedicated pages for sandwiches, meals, and cart  
✅ **Persistent Shopping Cart** – LocalStorage synchronization across all pages  
✅ **Live Product Search** – Instant filtering across extensive menu items  
✅ **Dark/Light Mode** – Seamless theme switching with custom comic styling  
✅ **RTL Arabic Support** – Full native Arabic interface and typography  
✅ **WhatsApp Order System** – Direct order placement with formatted messages  
✅ **Quantity Management** – Add/remove items with real-time cart updates  
✅ **Mobile-First Responsive** – Optimized for all devices with hamburger menu  
✅ **Performance Optimized** – Fast loading with optimized images and CDN  

---

## 🛠️ **Built With**

<div align="center">

| Technology | Purpose |
|------------|---------|
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/> | Multi-page semantic structure |
| <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/> | Rapid UI development with custom config |
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/> | Cart logic & cross-page communication |
| <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white" alt="Google Fonts"/> | Arabic-optimized typography (Noto Kufi, Space Grotesk) |
| <img src="https://img.shields.io/badge/LocalStorage-FF6F61?style=flat-square&logo=html5&logoColor=white" alt="LocalStorage"/> | Persistent cart data management |

</div>

---

## 📂 **Project Structure**
```
akel-zaman/
│
├── 📄 index.html          # Homepage with hero, features & process
├── 📄 menu.html           # Full sandwich menu with search
├── 📄 meals.html          # Complete meals catalog
├── 📄 cart.html           # Shopping cart & checkout form
├── 📜 script.js           # Core cart functionality (shared)
│
└── 📁 imgs/               # Food product images
    ├── foul.png           # Fūl sandwich
    ├── falafel.png        # Falafel sandwich
    ├── fries.png          # Fries sandwich
    ├── egg.png            # Egg sandwich
    ├── m1-m4.png          # Meal packages
    └── ...                # Additional food images
```

---

## 🚀 **Quick Start**

### **Installation**
```bash
# Clone the repository
git clone https://github.com/mahmoudnazmy/akel-zaman.git

# Navigate to project directory
cd akel-zaman

# Open index.html in browser
# No build process or dependencies required!
```

### **Restaurant Configuration**

**📱 Update Restaurant WhatsApp:**
```javascript
// In script.js (line 136)
const whatsappNumber = '201000000000'; // Replace with restaurant number
```

**🍽️ Customize Menu Items:**
```html
<!-- In menu.html or meals.html -->
<button onclick="addToCart('سندوتش فول', '10')" 
        class="comic-button">
    أضف للسلة
</button>
```

**🎨 Brand Customization:**
```javascript
// In HTML files - Tailwind config
colors: {
    "primary": "#f48c25",       // Main orange brand color
    "background-light": "#f8f7f5",
    "background-dark": "#221910",
}
```

---

## 💡 **Key Functionalities**

### 🛒 **Smart Cart System**
- **Cross-Page Synchronization**: Cart updates instantly across all pages
- **Quantity Controls**: +/- buttons for easy item management
- **Real-time Calculation**: Automatic total price updates
- **Persistent Storage**: Cart survives browser refresh
- **Visual Feedback**: Notification popups on add/remove

### 🔍 **Menu Management**
- **Live Search**: Instant filtering across 16+ sandwich varieties
- **Dual Menu System**: Separate pages for sandwiches and complete meals
- **Detailed Descriptions**: Clear ingredient listings for each item
- **Responsive Grid**: Adapts to all screen sizes

### 📱 **Order Processing**
- **Customer Info Form**: Name, phone, address, and notes
- **Auto-formatted Messages**: Structured WhatsApp order templates
- **Order Summary**: Itemized list with quantities and totals
- **One-Click Ordering**: Direct WhatsApp redirection with pre-filled message

---

## 🎯 **Use Cases**

✅ **Traditional Egyptian Restaurants** – Modernize ordering while keeping authentic feel  
✅ **Food Trucks & Street Vendors** – Professional online presence  
✅ **Catering Services** – Easy meal package ordering  
✅ **University Cafeterias** – Student-friendly interface  
✅ **Cloud Kitchens** – Efficient digital order management  

---

## 🎨 **UI/UX Highlights**

### **Comic Design Elements**
```css
.comic-button {
    border: 2px solid #1c140d;
    box-shadow: 4px 4px 0 #1c140d;
    transition: all 0.2s;
}
.comic-button:active {
    box-shadow: 0 0 0 #1c140d;
    transform: translate(4px, 4px);
}
```

### **Interactive Features**
- **Step-by-Step Guide**: Visual ordering process with icons
- **Hover Animations**: Scale and shadow effects on cards
- **Mobile Navigation**: Hamburger menu with smooth transitions
- **Theme Consistency**: Dark mode preserves comic styling

---

## 📱 **Responsive Design**

| Device Type | Layout | Features |
|-------------|--------|----------|
| **Mobile** | Single column | Hamburger menu, touch-friendly buttons |
| **Tablet** | 2-column grid | Larger tap targets, optimized spacing |
| **Desktop** | 4-column grid | Full navigation, hover effects, detailed views |

---

## 🔧 **Technical Implementation**

### **Cart State Management**
```javascript
// Single source of truth for cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Global functions accessible from all pages
window.addToCart = function(name, price) { ... };
window.updateQuantity = function(name, change) { ... };
window.removeFromCart = function(name) { ... };
```

### **Cross-Page Communication**
- **Shared JavaScript File**: `script.js` loaded on all pages
- **Global Event Handlers**: Cart updates trigger UI refresh
- **DOMContentLoaded**: Initialization ensures consistent state

---

## 🏆 **Why This Project Stands Out**

💡 **Unique Visual Identity** – Comic-book design creates memorable brand experience  
🌍 **Cultural Authenticity** – Celebrates Egyptian street food heritage  
⚡ **No Framework Dependencies** – Lightweight vanilla implementation  
📱 **Platform-Native Ordering** – Leverages WhatsApp's popularity in MENA region  
🎨 **Cohesive Multi-Page Experience** – Consistent UI across entire site  
♿ **Accessibility Considered** – Semantic HTML with clear visual hierarchy  

---

## 📜 **License**

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🌟 **Connect With The Developer**

<div align="center">

### **Mahmoud Nazmy**
**Full-Stack Developer | Creating Digital Experiences with Character**

<a href="https://mahmoudnazmy.github.io/Portfolio/">
  <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio"/>
</a>
<a href="https://github.com/MahmoudNazmy">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://wa.me/+201093463752">
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"/>
</a>

---

### 💼 **Need a Restaurant Website?**

I specialize in creating **vibrant, functional, and conversion-optimized** websites for food businesses.

🍽️ **Menu Management** | 📱 **Online Ordering** | 🎨 **Brand Identity**

**Let's build your digital storefront together!**

<a href="https://wa.me/+201093463752">
  <img src="https://img.shields.io/badge/Contact_On_WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Contact WhatsApp"/>
</a>

</div>

---

## ⭐ **Show Your Support**

If you enjoy this project or find it useful, please give it a star! ⭐

<div align="center">

**Made with ❤️ and 🥙 by Mahmoud Nazmy**

---

**© 2025 Akel Zaman أكل زمان | All Rights Reserved**

*Bringing the taste of Egyptian streets to your doorstep* 🚀

<img src="https://img.shields.io/github/stars/mahmoudnazmy/akel-zaman?style=social" alt="GitHub Stars"/>
<img src="https://img.shields.io/github/forks/mahmoudnazmy/akel-zaman?style=social" alt="GitHub Forks"/>
<img src="https://img.shields.io/github/watchers/mahmoudnazmy/akel-zaman?style=social" alt="GitHub Watchers"/>

</div>
