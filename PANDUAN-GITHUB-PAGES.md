# Publikasi gratis lewat GitHub Pages

1. Buat akun di github.com, lalu klik **New repository**. Beri nama `fatharony-portfolio` (atau `USERNAME.github.io` untuk alamat utama), pilih **Public**.
2. Di VS Code buka folder portfolio, lalu jalankan di terminal:
   ```
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin https://github.com/USERNAME/fatharony-portfolio.git
   git push -u origin main
   ```
3. Di GitHub: **Settings > Pages > Build and deployment**, pilih Source **Deploy from a branch**, Branch **main** dan folder **/ (root)**, lalu **Save**.
4. Tunggu 1-2 menit. Alamatnya: `https://USERNAME.github.io/fatharony-portfolio/`
5. Setiap kali mengubah file, jalankan `git add .`, `git commit -m "update"`, `git push`.

Ganti `USERNAME` dengan nama pengguna GitHub Anda. Setelah online, tambahkan alamatnya ke LinkedIn.
