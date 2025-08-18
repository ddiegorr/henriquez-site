# Henriquez — Coming Soon

Questa cartella contiene il mini-sito statico "Coming Soon" per **henriquez.it**.

## Come pubblicare su GitHub Pages
1. Crea un repository pubblico (es. `henriquez-site`) e carica tutti i file di questa cartella.
2. Nel repository apri **Settings → Pages**.
3. `Build and deployment`: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. In **Custom domain** scrivi `www.henriquez.it`. Salva e attiva **Enforce HTTPS** quando disponibile.

## DNS (già configurati in IONOS)
- `CNAME` per `www` → `<tuo-username>.github.io`
- opzionale: 4 record `A` per il dominio nudo `henriquez.it` (185.199.108.153/109.153/110.153/111.153)
- Questi record non interferiscono con i record MX della posta (Zoho).

## Modificare contenuti
- Sostituisci `assets/logo-henriquez.svg` se vuoi aggiornare il logo.
- Modifica i testi in `index.html` e gli stili in `styles.css`.
