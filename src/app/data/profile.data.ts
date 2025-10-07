export interface PersonalInfo {
  fullName: string;
  position: string;
  birthDate: string;
  address: string;
  email: string;
  phone: string;
  facebook: string;
  bio: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  website?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Certificate {
  name: string;
  year: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
}

export const personalInfo: PersonalInfo = {
  fullName: 'Nguyễn Minh Quân',
  position: 'Software Engineer',
  birthDate: '15/09/2004',
  address: 'Trần Khát Chân, Hà Nội',
  email: 'quannguyen092004@gmail.com',
  phone: '0369698617',
  facebook: 'https://www.facebook.com/phi.quan.7792/',
  bio: 'Có 1 năm kinh nghiệm làm việc và 1 năm thực tập tại FPT Software, tham gia phát triển phần mềm bằng Java cùng kinh nghiệm xây dựng giao diện với Angular. Mục tiêu là tiếp tục phát triển kỹ năng full-stack, học hỏi thêm về bảo trì, triển khai và tối ưu hệ thống.'
};

export const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['Java', 'JavaScript']
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Spring Data JPA', 'Angular']
  },
  {
    category: 'Database',
    items: ['MySQL']
  },
  {
    category: 'Dev Tools',
    items: ['Git', 'Docker']
  },
  {
    category: 'Kỹ năng chuyên môn',
    items: [
      'Backend bằng Spring Boot (RESTful API, JPA, Security)',
      'Frontend bằng Angular (UI/UX, gọi API, responsive)',
      'Triển khai server bằng Docker',
      'AI Agent: biết cách sinh mã nguồn và prompt AI'
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: 'FPT Software',
    position: 'Software Engineer',
    period: '03/07/2023 - nay',
    description: 'Tham gia phát triển full-stack với Angular và Spring Boot, xây dựng REST API, tối ưu code, UI/UX responsive, tích hợp bảo mật và hiệu năng.'
  },
  {
    company: 'Campus Booking',
    position: 'Full-stack Developer',
    period: '2024 - 2025',
    description: 'Phát triển module quản lý mã giảm giá, thêm-sửa-xóa-tra cứu, và xuất file Excel.'
  },
  {
    company: 'BA Issue',
    position: 'Full-stack Developer',
    period: '2024 - 2025',
    description: 'Xây dựng giao diện, API cho tính năng Rating, kết nối frontend-backend.'
  },
  {
    company: 'FJA Academy',
    position: 'Full-stack Developer',
    period: '2024 - 2025',
    description: 'Phát triển UI/UX, service, model; build, deploy và tối ưu hệ thống.',
    website: 'https://fjpacademy.com/'
  },
  {
    company: 'Sáng kiến',
    position: 'Frontend Developer',
    period: '2024 - 2025',
    description: 'Xây dựng giao diện responsive, navbar, footer, phân quyền người dùng.'
  }
];

export const education: Education[] = [
  {
    school: 'APTECH FPT',
    degree: 'Software Engineer',
    period: '2022 - 2024',
    description: 'Dự án tốt nghiệp: Hệ thống quản lý xe ô tô bằng C#, Java Spring Boot và Angular.'
  }
];

export const certificates: Certificate[] = [
  {
    name: 'FPT APTECH Certification',
    year: '2024'
  }
];

export const hobbies: string[] = [
  'Đá bóng',
  'Thể thao',
  'Học công nghệ mới'
];

export const projects: Project[] = [
  {
    name: 'FJA Academy',
    description: 'Nền tảng học tập trực tuyến với các tính năng quản lý khóa học, học viên và giáo viên. Sử dụng Angular cho frontend và Spring Boot cho backend.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    link: 'https://fjpacademy.com/'
  },
  {
    name: 'Campus Booking',
    description: 'Hệ thống quản lý đặt phòng campus với tính năng quản lý mã giảm giá, báo cáo và xuất dữ liệu Excel. Tích hợp thanh toán và notification.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
  },
  {
    name: 'BA Issue Tracking',
    description: 'Ứng dụng theo dõi và quản lý issue với hệ thống rating, comment và phân quyền người dùng. Giao diện responsive và thân thiện.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    name: 'Hệ thống quản lý xe ô tô',
    description: 'Dự án tốt nghiệp với tính năng quản lý thông tin xe, lịch sử bảo dưỡng, khách hàng. Xây dựng bằng C#, Java Spring Boot và Angular.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
  }
];

