# Portfolio Website - Nguyễn Minh Quân

Website Portfolio cá nhân được xây dựng bằng **Angular 17** dựa trên thiết kế Figma.

## 🎨 Thiết kế

Thiết kế dựa trên Figma template: [Personal Portfolio Website Template](https://www.figma.com/design/bbPEwaPpNDbd0fc24Bs3ic/Personal-Portfolio-Website-Template--Community-)

### Màu sắc chính
- **Brand Yellow**: `#FDC435`
- **Background Gray**: `#F9FAFF`
- **Text High Emphasis**: `#25282B`
- **Text Medium Emphasis**: `#828282`

### Font chữ
- **Playfair Display** - Tiêu đề
- **Nunito** - Nội dung chính
- **Raleway** - Navigation
- **Comfortaa** - Logo
- **Roboto** - Buttons

## 📁 Cấu trúc dự án

```
src/
├── app/
│   ├── components/          # Các components
│   │   ├── header/         # Header với navigation
│   │   ├── hero/           # Hero section (giới thiệu)
│   │   ├── about/          # Về tôi
│   │   ├── skills/         # Kỹ năng
│   │   ├── projects/       # Dự án & Kinh nghiệm
│   │   ├── contact/        # Form liên hệ
│   │   └── footer/         # Footer với social links
│   ├── data/               # Dữ liệu cứng
│   │   └── profile.data.ts # Thông tin CV
│   ├── models/             # TypeScript interfaces
│   └── services/           # Services (nếu cần)
├── assets/
│   └── images/             # Hình ảnh
└── styles.scss             # Global styles
```

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy development server:**
```bash
npm start
# hoặc
ng serve
```

3. **Mở trình duyệt:**
Truy cập `http://localhost:4200`

### Build cho Production

```bash
npm run build
# hoặc
ng build --configuration production
```

File build sẽ nằm trong thư mục `dist/`

## 📝 Tùy chỉnh nội dung

### 1. Thông tin cá nhân

Chỉnh sửa file `src/app/data/profile.data.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  fullName: 'Nguyễn Minh Quân',
  position: 'Software Engineer',
  birthDate: '15/09/2004',
  address: 'Trần Khát Chân, Hà Nội',
  email: 'quannguyen092004@gmail.com',
  phone: '0369698617',
  facebook: 'https://www.facebook.com/phi.quan.7792/',
  bio: '...'
};
```

### 2. Kỹ năng

Thêm/sửa kỹ năng trong `skills` array:

```typescript
export const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['Java', 'JavaScript', 'TypeScript']
  },
  // ...
];
```

### 3. Dự án

Thêm/sửa dự án trong `projects` array:

```typescript
export const projects: Project[] = [
  {
    name: 'Tên dự án',
    description: 'Mô tả dự án',
    image: 'đường dẫn ảnh',
    link: 'link website (optional)'
  },
  // ...
];
```

### 4. Kinh nghiệm làm việc

Thêm/sửa kinh nghiệm trong `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    company: 'Tên công ty',
    position: 'Vị trí',
    period: 'Thời gian',
    description: 'Mô tả công việc',
    website: 'link (optional)'
  },
  // ...
];
```

## 🖼️ Thêm hình ảnh

### Cách 1: Sử dụng hình ảnh local
1. Thêm ảnh vào `src/assets/images/`
2. Cập nhật đường dẫn trong `profile.data.ts`:
```typescript
image: 'assets/images/tên-file.jpg'
```

### Cách 2: Sử dụng URL trực tiếp
```typescript
image: 'https://example.com/image.jpg'
```

**Lưu ý**: Hiện tại đang sử dụng ảnh placeholder từ Unsplash. Bạn nên thay thế bằng ảnh thật.

## 🎨 Tùy chỉnh giao diện

### Màu sắc

Chỉnh sửa CSS variables trong `src/styles.scss`:

```scss
:root {
  --brand-yellow: #FDC435;
  --bg-gray: #F9FAFF;
  --font-high-emphasis: #25282B;
  // ...
}
```

### Fonts

Thay đổi Google Fonts import trong `src/styles.scss`:

```scss
@import url('https://fonts.googleapis.com/css2?family=...');
```

## 📱 Responsive Design

Website được thiết kế responsive cho:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## ✨ Tính năng

- ✅ Single Page Application (SPA)
- ✅ Smooth scrolling navigation
- ✅ Responsive design
- ✅ CSS animations
- ✅ Contact form
- ✅ Social media links
- ✅ SEO friendly
- ✅ Fast loading

## 🛠️ Công nghệ sử dụng

- **Angular 17** - Framework
- **TypeScript** - Language
- **SCSS** - Styling
- **Standalone Components** - Angular architecture
- **Google Fonts** - Typography

## 📦 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop folder dist/ vào Netlify
```

### GitHub Pages
```bash
ng build --configuration production --base-href=/repository-name/
# Push folder dist/ lên GitHub Pages
```

## 🐛 Troubleshooting

### Lỗi khi chạy `ng serve`
```bash
rm -rf node_modules package-lock.json
npm install
```

### Lỗi build
```bash
ng build --configuration production --verbose
```

## 📄 License

MIT License - Free to use

## 👤 Tác giả

**Nguyễn Minh Quân**
- Email: quannguyen092004@gmail.com
- Facebook: [phi.quan.7792](https://www.facebook.com/phi.quan.7792/)
- Phone: 0369698617

---

**Lưu ý**: Đây là website Portfolio cá nhân. Vui lòng thay đổi toàn bộ thông tin trong `src/app/data/profile.data.ts` theo thông tin của bạn.

