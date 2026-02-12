# Essential Drip Apparel - Clean HTML/CSS/JS Website

A modern, professional e-commerce website built with pure HTML, CSS, and JavaScript. No frameworks or build tools required!

## 📁 Folder Structure

```
essential-drip-website/
├── index.html              # Homepage
├── shop.html               # Shop page (all products)
├── new-in.html             # New arrivals page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout page
├── about.html              # About page
├── contact.html            # Contact page
├── order-success.html      # Order confirmation
├── css/
│   └── style.css           # All styles
├── js/
│   ├── products.js         # Product data and functions
│   ├── cart.js             # Shopping cart functionality
│   └── main.js             # Main JavaScript (cursor, navigation)
└── README.md               # This file
```

## 🚀 Quick Start

1. **Open the website**:
   - Simply double-click `index.html` or
   - Right-click → Open with → Your browser

2. **No installation needed**:
   - No Node.js required
   - No npm install
   - No build process
   - Just open and run!

## ✨ Features

### Core Features
- ✅ **Custom Dripping Logo** - Animated SVG logo with liquid effects
- ✅ **16 Products** - T-shirts, Shoes, Cargo Pants, and Jeans
- ✅ **Shopping Cart** - Full cart with localStorage persistence
- ✅ **Category Filtering** - Filter products by category
- ✅ **Size Selection** - Choose sizes for each product
- ✅ **WhatsApp Integration** - Floating chat button (+263 781527753)
- ✅ **Nike Swoosh Cursor** - Custom animated cursor
- ✅ **Fully Responsive** - Works on all devices
- ✅ **Clean Design** - Light blue and white theme with navy accents

### Pages
- **Homepage** - Hero section, features, new arrivals, categories
- **Shop** - All products with category filter
- **New In** - Latest arrivals showcase
- **Cart** - Shopping cart with quantity controls
- **Checkout** - Complete checkout form
- **About** - Brand information
- **Contact** - Contact form and details
- **Order Success** - Confirmation page

## 🎨 Customization

### Change Colors
Edit `css/style.css` and modify the CSS variables:
```css
:root {
    --primary-light: #87CEEB;  /* Light blue */
    --primary: #4A90E2;         /* Blue */
    --accent: #1E40AF;          /* Navy blue */
}
```

### Add Products
Edit `js/products.js` and add to the products array:
```javascript
{
    id: '17',
    name: 'Your Product Name',
    description: 'Product description',
    price: 49.99,
    image: 'https://your-image-url.jpg',
    category: 'tshirts', // or 'shoes', 'cargo-pants', 'jeans'
    sizes: ['S', 'M', 'L', 'XL'],
    isNewIn: true
}
```

### Change WhatsApp Number
Edit the WhatsApp button in each HTML file:
```html
<a href="https://wa.me/YOUR_NUMBER?text=YOUR_MESSAGE" 
   class="whatsapp-btn">💬</a>
```

### Update Contact Info
Edit `contact.html` to change:
- Phone number
- Email address
- Business address
- Business hours

## 📱 Features Breakdown

### Shopping Cart
- Add items with size selection
- Update quantities
- Remove items
- Persistent storage (survives page refresh)
- Real-time total calculation

### Product Display
- Grid layout
- Hover effects
- "NEW" badges for new arrivals
- Size selection buttons
- Add to cart functionality

### Navigation
- Sticky header
- Active page highlighting
- Mobile-responsive menu
- Cart item counter

### Animations
- Dripping logo animation
- Nike swoosh cursor follower
- Smooth hover effects
- Slide-in notifications

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Drag and drop the folder to netlify.com/drop
2. Your site is instantly live!

### Option 3: Any Web Host
1. Upload all files via FTP
2. Ensure `index.html` is in the root directory
3. Done!

## 📝 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks
- **LocalStorage API** - Cart persistence
- **SVG** - Animated logo

### No Dependencies
- No jQuery
- No Bootstrap
- No React/Vue/Angular
- No build tools
- No package managers

## 💡 Tips

### Adding Local Images
1. Create an `images/` folder
2. Add your images there
3. Reference them as: `image: './images/your-image.jpg'`

### Testing Locally
- Use a local server for best results:
  ```bash
  # Python 3
  python -m http.server 8000
  
  # PHP
  php -S localhost:8000
  ```
- Then visit `http://localhost:8000`

### Mobile Testing
- Use browser DevTools (F12)
- Click the mobile device icon
- Test different screen sizes

## 📞 Support

For questions or support:
- **WhatsApp**: +263 781527753
- **Email**: info@essentialdrip.com

## 📄 License

This project is created for Essential Drip Apparel.

---

**Built with ❤️ for Essential Drip Apparel**

*No frameworks. No complexity. Just clean, working code.*
