const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const PORT = 3000;

const db = new sqlite3.database("/fjellturer.db", (err) => {
    if (err) {
        console.error("Databasen startet feil:", err.message);
    } else {
        console.log("Koblett til databasen!");
    }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get ("/api/turer", (req, res) => {
    const sql = `
    select
    t.id,
    p.brukernavn,
    f.navn AS fjell,
    o.navn AS omrade
    t.tidspunkt_start,
    t.varighet_min,
    t.oppsummering
From tur t
JOIN person p on t.person_id = p.id
JOIN fjell f on t.fjell_id = f.id
JOIN omrade o ON f.omrade_id = o.id
ORDER by t.tidspunkt_start DESC
`;
})


