/* VARIABLES THEME */
:root {
  --bg: #0f172a;
  --text: white;
  --card: #1e293b;
  --primary: #38bdf8;
}

/* MODE CLAIR */
.light {
  --bg: #f8fafc;
  --text: #0f172a;
  --card: white;
  --primary: #0ea5e9;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: 0.3s;
}

/* NAV */
nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  background: var(--card);
  position: sticky;
  top: 0;
}

.toggle-btn {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

/* HERO */
.hero {
  text-align: center;
  padding: 80px 20px;
}

.profile img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid var(--primary);
}

/* BUTTON */
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 18px;
  background: var(--primary);
  color: black;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: var(--card);
  padding: 20px;
  border-radius: 12px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

/* WHATSAPP BUTTON */
.whatsapp {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 18px;
  background: #25D366;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
  background: var(--card);
}

/* ANIMATION */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fade 1s forwards;
}

@keyframes fade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
