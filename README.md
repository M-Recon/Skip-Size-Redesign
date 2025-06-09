Skip Size Selector App
This React app allows users to view and select different skip sizes for hire, applying filters like price, size, and features such as "allowed on road" or "allows heavy waste." Users can see skip details and proceed through a step-by-step booking process.

📦 Features
✅ Filter skips by:

Price range

Skip size

Allowed on road

Allows heavy waste

✅ View skip details, including:

Price before VAT

VAT amount

Total price

Hire period

Road allowance

Heavy waste acceptance

✅ Interactive step-by-step progress bar (7 steps):

📍 Postcode

🏠 Address

🗑️ Waste Type

🚛 Select Skip

📝 Permit Check

📅 Choose Date

💳 Payment

✅ Fully responsive and accessible with alt text and ARIA labels

🗂️ Project Structure
src/
│
├── components/
│   ├── SkipSizePage.js        # Main skip size selection page
│   ├── SkipCard.js            # Card component showing skip details
│   ├── SkipDetailsModal.js    # Modal for viewing skip details
│   ├── SkipSelector.js        # Optional skip selector component
│   └── FilterBar.js           # Component for applying filters
│
├── styles.css                 # Styling for the app
│
└── App.js                     # Main app entry
🛠️ Installation & Running Locally
Clone the repository:


git clone https://github.com/yourusername/skip-selector-app.git
cd skip-selector-app

Install dependencies:

npm install
Start the development server:

npm start
Open http://localhost:3000 in your browser.

🔍 Components Overview
SkipSizePage.js
Manages skip data fetching and filtering

Renders:

Progress bar with steps

FilterBar for filtering skips

SkipCard list

SkipDetailsModal when a skip is selected

SkipCard.js
Displays a skip’s:

Size

Image

Hire period

Price (with VAT)

Features (allowed on road, heavy waste)

SkipDetailsModal.js
Displays detailed skip information in a modal:

Price breakdown

Features

Disclaimer

Proceed button

SkipSelector.js
Standalone skip selector (for reuse in other contexts if needed)

🌐 API
Fetch skips from:

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
The skip object includes:

id, size, price_before_vat, vat, hire_period_days, allowed_on_road, allows_heavy_waste

🖼️ Skip Images
Skip images are mapped based on their size using:

js
Copy
Edit
skipSizeToImageMap = {
  '4': 'https://.../4-yarder-skip.jpg',
  '6': 'https://.../6-yarder-skip.jpg',
  ...
}
💻 Styling
All CSS is imported from styles.css

Includes:

.skip-card

.modal-overlay, .modal-content

.topbar-progress (stepper)

.btn, .cancel, .continue

.green-tick, .red-cross

.tag
