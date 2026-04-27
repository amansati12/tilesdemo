# LUMINOS — Premium Stone & Tile Website
## Complete Project Documentation

---

## 📁 Project Structure

```
luxury-tiles/
│
├── index.html                  ← Home Page (Hero Slider + Collections + Products)
├── about.html                  ← About Us (Brand Story + Team + Vision)
├── products.html               ← All Products / Collections Overview
├── category.html               ← Product Category Page (Floor Tiles example)
├── product-detail.html         ← Product Detail Page (Zoom + Specs + Related)
├── projects.html               ← Projects / Installations Portfolio
├── gallery.html                ← Gallery (Masonry + Lightbox + Instagram Strip)
├── blog.html                   ← Blog / Design Journal (with Sidebar)
├── testimonials.html           ← Testimonials / Clients + Star Ratings
├── contact.html                ← Contact Us (Form + Map + FAQ)
│
├── css/
│   └── style.css               ← Complete Custom CSS (1800+ lines)
│
├── js/
│   └── main.js                 ← All JavaScript functionality
│
├── images/                     ← (Add local images here)
│   └── (placeholder folder)
│
└── assets/
    └── (Add fonts, icons, etc.)
```

---

## 🚀 How to Run

1. **No build tools needed** — Pure HTML5, CSS3, JavaScript + Bootstrap 5
2. Open `index.html` in any modern browser
3. All pages link to each other via relative paths
4. CDN links used for Bootstrap 5, Font Awesome 6, and Google Fonts

---

## 📄 Pages Overview

| Page | File | Key Features |
|------|------|-------------|
| Home | `index.html` | Hero slider, stats, collections grid, products with filter, before/after, process, testimonials, blog preview |
| About | `about.html` | Brand story, team, vision, stats counter, certifications |
| Collections | `products.html` | Category cards, full product grid, filter tabs |
| Category | `category.html` | Sidebar filters (material/size/finish/colour/price), product grid, pagination |
| Product Detail | `product-detail.html` | Zoom image gallery, size selector, specs table, accordion, related products |
| Projects | `projects.html` | Featured project hero, project grid with filter |
| Gallery | `gallery.html` | Featured grid, masonry gallery, lightbox, Instagram strip |
| Blog | `blog.html` | Featured post, blog grid, sidebar (search/categories/popular/tags) |
| Testimonials | `testimonials.html` | Rating overview, review cards, trusted brands |
| Contact | `contact.html` | Inquiry form, Google Maps embed, showroom hours, FAQ accordion |

---

## ⚙️ Features Implemented

### Navigation
- Sticky transparent-to-frosted glass navbar on scroll
- Mega dropdown for Collections
- Mobile hamburger menu with slide-in panel + overlay
- Active link highlighting

### Hero & Animations
- Full-screen 3-slide hero with crossfade transition
- Ken Burns zoom effect on hero images
- Scroll reveal animations (fade-up, fade-left, fade-right, zoom-in)
- Stagger delay system for grid items
- CSS shimmer effect on gold text
- Before/after room visualization drag slider
- Number counter animation on scroll

### Products
- Filter tabs (All / Floor / Wall / Bathroom / Outdoor / Marble / Ceramic)
- Tile swatch colour selector
- Image hover zoom + overlay action buttons
- Product badge system (New / Featured / Sale)
- Size chip display
- Product thumbnail gallery with image swap (detail page)
- Size selector and finish selector
- Accordion for specs / installation / care

### Gallery
- Masonry CSS columns layout
- Lightbox with keyboard support (ESC to close)
- Featured grid with span layout
- Instagram strip row

### Blog
- Featured full-width post card
- 2-column grid layout
- Sidebar: search, categories, popular posts, tags, CTA box
- Pagination

### Contact
- Multi-field inquiry form with validation
- Success animation on submit
- Google Maps iframe embed
- Showroom hours table
- FAQ accordion (vanilla JS)
- Quick contact strip (phone / email / WhatsApp)

### Global
- Preloader with animated bar
- WhatsApp floating button (pulsing animation)
- Scroll-to-top button (appears after 400px scroll)
- Newsletter subscription form
- Responsive footer with 4-column grid
- All pages fully mobile responsive

---

## 🎨 Design System

### Colour Palette
```css
--white:        #FFFFFF
--off-white:    #F9F6F1
--cream:        #F2EDE4
--beige:        #E8E0D0
--warm-sand:    #D6CCBA
--light-grey:   #C4BFB6
--mid-grey:     #8E8880
--charcoal:     #3C3830
--dark-brown:   #251F18
--near-black:   #130F0A
--gold:         #C4973C
--gold-light:   #D9B46C
--gold-pale:    #EDD9A0
--gold-dark:    #96720A
```

### Typography
- **Display / Headings:** Playfair Display (serif) — elegant, timeless
- **Sub-headings / Quotes:** Cormorant Garamond — refined, italic-friendly
- **Body / UI:** Montserrat — clean, professional, highly legible

### Spacing & Layout
- Max container width: 1400px
- Section padding: 120px top/bottom (desktop), scales to 56px on mobile
- 28px product grid gap
- 20px gallery gap

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| XL Desktop | 1400px+ | Full layout, max container |
| Desktop | 1200px | Collections grid 2-col |
| Tablet | 992px | Mobile nav, 2-col products |
| Mobile | 768px | 1-col products, stacked layout |
| Small Mobile | 480px | Compact hero, reduced padding |

---

## 🔧 JavaScript Modules (main.js)

1. `initPreloader()` — Fade-out on window load
2. `initNavbar()` — Scroll-based transparent → frosted glass
3. `initMobileNav()` — Hamburger + slide panel
4. `initHeroSlider()` — Auto-rotating with dot controls, pause on hover
5. `initScrollReveal()` — IntersectionObserver animations
6. `initProductFilters()` — Filter tabs with fade transition
7. `initTestimonialSlider()` — Auto + manual slider
8. `initProductGallery()` — Thumbnail swap with fade
9. `initSizeSelector()` — Toggle selected state
10. `initSwatchSelector()` — Colour swatch + optional image swap
11. `initLightbox()` — Gallery lightbox with keyboard support
12. `initScrollTop()` — Show/hide + smooth scroll
13. `initCounters()` — CountUp animation on scroll
14. `initBeforeAfter()` — Drag handle comparison slider
15. `initForms()` — Validation + success feedback
16. `initNewsletter()` — Subscribe confirmation
17. `initActiveNav()` — Current page link highlight
18. `initSmoothScroll()` — Anchor link smooth scroll
19. `initParallax()` — Subtle hero image parallax

---

## 📦 Dependencies (CDN — No npm needed)

```html
<!-- Bootstrap 5.3.2 CSS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css

<!-- Font Awesome 6.5.0 -->
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css

<!-- Google Fonts: Playfair Display, Cormorant Garamond, Montserrat -->
https://fonts.googleapis.com/...

<!-- Bootstrap 5.3.2 JS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js
```

---

## 🖼️ Images

All images use **Unsplash CDN** (`images.unsplash.com`) with:
- `?w=` parameter for optimal width
- `?q=` parameter for quality (75–85 for performance)
- `loading="lazy"` on all non-hero images

To use local images: replace Unsplash URLs with paths like `images/hero-1.jpg`

---

## 🔍 SEO

- Semantic HTML5 tags (`<nav>`, `<section>`, `<article>`, `<footer>`)
- Unique `<title>` and `<meta name="description">` on every page
- `alt` attributes on all images
- Breadcrumb navigation on all inner pages
- Heading hierarchy (H1 → H2 → H3 → H4)

---

## 🏃 Performance Tips

1. Replace Unsplash CDN images with locally optimised WebP files
2. Add `rel="preload"` for above-the-fold hero images
3. Consider lazy-loading Bootstrap JS (defer attribute)
4. Add service worker for PWA / offline support
5. Minify `style.css` and `main.js` for production

---

## 📝 Customisation Guide

### Change Brand Name
Search & replace `LUMINOS` / `LUMIN<span>OS</span>` with your brand name across all HTML files.

### Change Contact Details
Update phone, email, address in:
- All `footer` sections
- `contact.html` — contact info items + map embed
- WhatsApp button `href` — change `919876543210` to your number

### Update Google Maps
In `contact.html`, replace the `<iframe src="...">` Google Maps embed URL with your actual showroom coordinates.

### Add Real Products
Replace placeholder Unsplash images with your actual product photography. Update `product-card-name`, specs, sizes, and category tags.

---

*Built with ❤️ for LUMINOS Premium Stone & Tile*
*Pure HTML5 · CSS3 · Bootstrap 5 · Vanilla JavaScript*
