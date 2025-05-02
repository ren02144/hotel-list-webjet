# Hotel Listing Application

This project is a **React-based hotel listing application** displaying a list of hotels in Melbourne. Users can filter hotels by name and star rating. The page is fully responsive across desktop, tablet, and mobile devices, adapting its layout for different screen sizes.

The application emphasizes clean UI, responsive design, semantic HTML, reusable components, and clear code structure.

---

## 🚀 Features

- Filter hotels by name (search input with "Go" and clear button)
- Filter hotels by star rating (multi-select checkboxes, includes half-star ratings)
- Responsive layout with breakpoints at **992px** (tablet) and **768px** (mobile)
- Collapsible filter panel sections
- Modal filter panel on tablet/mobile
- Floating "Filters" button on smaller screens
- Hotel cards showing image, name, star rating, room type, price
- Mobile-specific layout adjustments
- Simple rating display using custom SVG diamond icons (supports half-stars)
- Small commits in Git repository demonstrating incremental progress

---

## 🖼️ Screenshots

[Include screenshots or designs if available]

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone [repository-url]
   cd hotel-list-webjet

2. **Install dependencies:**

   ```bash
   npm install

3. **Run the development server:**

   ```bash   
   npm start

4. **Run the tests:**  

   ```bash
   npm test

5. **Build the production bundle:**

   ```bash
   npm run build

---

## 🛠️ Main Dependencies

- **React 19.x**: UI framework
- **React DOM 19.x**
- **React Scripts 5.x**: Create React App setup
- **Jest & React Testing Library**: Unit testing
- No additional UI frameworks (e.g., Bootstrap/Material-UI) were used
- Styling uses plain CSS

---
## 🏗️ Project Structure
    src/
    ├── components/
    │   ├── Header.jsx
    │   ├── FilterPanel.jsx
    │   ├── HotelCard.jsx
    │   ├── AdBanner.jsx
    │   └── Rating.jsx
    ├── data/
    │   └── hotels.js
    ├── App.jsx
    ├── App.css
    └── index.js

---

## 🧩 Component Overview

### **App**

- Main application component
- Manages filter state
- Renders header, filter panel, hotel list, ad banner
- Controls filter modal and responsive behavior

### **Header**

- Displays Webjet logo
- Uses `<header>` semantic tag

### **FilterPanel**

- Contains **Hotel Name** and **Quality Rating** filters
- Collapsible sections
- Emits callbacks for name and rating changes
- Mobile modal version with "Reset" and "Done" buttons

### **HotelCard**

- Displays individual hotel information:
  - Image
  - Name
  - Rating (using **diamond SVG** icons)
  - Room type
  - Price
- Adds a green arrow button beside price in mobile view

### **Rating**

- Renders star rating as custom **yellow diamond SVGs**
- Supports full and half stars
- Dynamically maps rating value to icon count

### **AdBanner**

- Displays a static ad image on desktop view
- Hidden on tablet/mobile

---

## 📱 Responsive Design

✅ Fully responsive with breakpoints at **992px** and **768px**:

| Viewport   | Layout Behavior |
|------------|----------------|
| ≥992px      | 3-column layout (filter panel, hotel list, ad banner) |
| 768–991px   | 2-column layout (filter panel hidden, ad banner hidden, floating filter button enabled) |
| <768px      | Single-column layout (hotel cards stacked vertically, filter modal triggered by floating button) |

Responsive adjustments include:

- Floating "Filters" button visible on smaller screens
- HotelCard switches from horizontal to vertical layout under 768px
- Price section moves below hotel details on mobile
- Collapsible sections in filter panel
- Filter modal automatically opens/closes depending on window resize

---

## ✨ Development Assumptions & Decisions

- Hotel data is **hard-coded in frontend** for demonstration purposes (no backend API)
- Filtering by name **requires clicking "Go"** rather than real-time input
- **Half-star ratings are floored** for filtering (e.g., 4.5 matches filter `4★`)
- Used **React functional components + hooks** throughout
- No Redux or global state libraries (local component state suffices)
- Chose **plain CSS** for styling rather than CSS frameworks
- CSS classes use **kebab-case descriptive names**
- Breakpoints align with common device widths
- Git history follows **small commits** to show incremental progress
- Accessibility (a11y) considered via `alt` tags and semantic HTML (additional ARIA could be added in future)

---

## ✅ Project Requirement Checklist

| Requirement                                                       | Status  |
|-------------------------------------------------------------------|---------|
| Fully responsive layout (992px & 768px breakpoints)               | ✅ Met   |
| Valid & semantic HTML markup                                       | ✅ Met (with minor improvements possible for `<aside>`, `<ul>`) |
| Consistent component sizes, colors, spacing                       | ✅ Met   |
| Reusable components                                               | ✅ Met (improvable for more generic props) |
| GitHub repo with small commits showing progress                    | ✅ Met   |
| README explaining assumptions & libraries/frameworks               | ✅ Provided |

---

## 🧪 Testing

Unit tests are included using **Jest & React Testing Library**.  
To run all tests:

```bash
npm test
