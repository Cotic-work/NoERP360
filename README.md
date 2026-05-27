# NoERP 360

NoERP 360 is a parody ERP web application built with React and Vite. It looks like a professional business platform at first glance, but every module reveals the same uncomfortable truth: the company still runs on memory, instinct, spreadsheets, and habits formed 30 years ago.

## What this project is

NoERP 360 is a satirical take on ERP adoption in companies where users do not want to enter data into the system. Instead, they prefer to work:

- from memory
- by feeling
- by asking the one colleague who knows everything
- by reopening the same Excel file again

The interface is intentionally polished and believable enough for a serious demo, while the content exposes the parody.

## Tech stack

- React
- Vite
- Local mock data only
- No backend
- No external APIs

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

## Production build

Create a production build:

```bash
npm run build
```

## Project structure

```text
NoERP360/
├── logo/
│   └── NoERP360.png
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Notes

- The existing `logo/NoERP360.png` is preserved and used in the application.
- `dist/` and `node_modules/` are ignored for Git.
- The app is intended for local demo use and does not require any service integration.
