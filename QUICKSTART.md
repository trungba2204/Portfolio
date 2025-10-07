# 🚀 Quick Start Guide

## Chạy ngay trong 3 bước:

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm start
```

### 3. Mở trình duyệt
Truy cập: `http://localhost:4200`

---

## 🎯 Tùy chỉnh nhanh

### Đổi thông tin cá nhân
Mở file: `src/app/data/profile.data.ts`

```typescript
export const personalInfo: PersonalInfo = {
  fullName: 'TÊN CỦA BẠN',
  position: 'VỊ TRÍ CỦA BẠN',
  email: 'email@cua-ban.com',
  phone: '0123456789',
  // ... đổi thông tin khác
};
```

### Thay đổi màu sắc
Mở file: `src/styles.scss`

```scss
:root {
  --brand-yellow: #FDC435;  /* Đổi màu chính */
  --bg-gray: #F9FAFF;       /* Đổi màu nền */
  // ...
}
```

### Thêm ảnh của bạn
1. Thêm ảnh vào thư mục: `src/assets/images/`
2. Cập nhật đường dẫn trong `profile.data.ts`:
```typescript
image: 'assets/images/ten-anh.jpg'
```

---

## 📦 Build cho Production

```bash
npm run build
```

File output: `dist/portfolio-app/`

---

## 🆘 Gặp vấn đề?

### Lỗi khi install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 4200 đã được sử dụng
```bash
ng serve --port 4300
```

### Clear cache
```bash
npm cache clean --force
rm -rf .angular
```

---

## 📖 Đọc thêm

Xem file `PORTFOLIO_GUIDE.md` để biết chi tiết về:
- Cấu trúc dự án
- Tùy chỉnh nâng cao
- Deploy lên hosting
- Troubleshooting

---

**Happy coding! 🎉**

