# GSU Math Community Platform - GitHub Pages Deployment

## 🚀 Deployment Adımları

### 1. GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluşturun
2. Repository adı: `gsumath` (veya istediğiniz isim)
3. Public olarak ayarlayın

### 2. Local Repository'yi GitHub'a Push Etme

Terminal'de şu komutları çalıştırın:

```powershell
cd C:\Users\fozeldev\Desktop\gsumath

# Git repository başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: GSU Math Community Platform"

# GitHub repository'nizi ekleyin (YOUR_USERNAME yerine kendi kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR_USERNAME/gsumath.git

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub'a push et
git push -u origin main
```

### 3. GitHub Pages Ayarlarını Yapma

1. GitHub repository'nizde **Settings** > **Pages** bölümüne gidin
2. **Source** kısmında: **GitHub Actions** seçin
3. Otomatik olarak `.github/workflows/deploy.yml` dosyası algılanacak

### 4. Deployment'ı Başlatma

- Kod GitHub'a push edildiğinde otomatik olarak build ve deploy işlemi başlar
- **Actions** sekmesinden deployment sürecini izleyebilirsiniz
- 2-3 dakika içinde siteniz yayınlanacak

### 5. Sitenize Erişim

Site şu adreste yayınlanacak:
```
https://YOUR_USERNAME.github.io/gsumath/
```

## 📝 Notlar

- **Statik Export**: Next.js projeniz statik HTML/CSS/JS dosyalarına dönüştürülüyor
- **Otomatik Deployment**: Her `main` branch'e push'ta otomatik yeniden deploy olur
- **Custom Domain**: GitHub Pages ayarlarından özel domain ekleyebilirsiniz

## 🔧 Manuel Build Test (Opsiyonel)

Local'de test etmek için:

```powershell
npm run build
```

Bu komut `out/` klasörüne statik dosyaları oluşturur.

## ⚠️ Önemli

- `basePath` ayarını repository adınıza göre güncelleyin (eğer subdomain kullanacaksanız)
- Public repository olmalı (veya GitHub Pro hesabı gerekli)
- GitHub Actions'ın repository için aktif olduğundan emin olun

## 🎨 Sonraki Adımlar

1. Gerçek içerikleri ekleyin (etkinlikler, takım üyeleri)
2. Görselleri `public/images/` klasörüne yükleyin
3. Site bilgilerini `src/lib/constants.ts` dosyasında güncelleyin
