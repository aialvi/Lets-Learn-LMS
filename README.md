# Let's Learn - Learning Management System

A modern, full-stack learning management system built with Next.js, NestJS, and Prisma. This platform enables users to create, manage, and consume educational content through an intuitive web interface.

## 🚀 Features

### For Students
- **Course Discovery**: Browse and search through available courses
- **Video Learning**: Watch video lessons with progress tracking
- **Progress Tracking**: Monitor your learning progress across courses
- **Dashboard**: Personal dashboard showing enrolled courses and statistics
- **User Profile**: Manage your personal information and learning history

### For Instructors/Authors
- **Course Creation**: Create and manage educational courses
- **Lesson Management**: Add video lessons with descriptions and ordering
- **Content Organization**: Structure courses with multiple lessons
- **Student Analytics**: View enrollment statistics for your courses

### For Administrators
- **User Management**: Create, update, and delete user accounts
- **Course Management**: Full CRUD operations for courses
- **Lesson Management**: Complete lesson lifecycle management
- **Analytics Dashboard**: View system-wide statistics and metrics
- **Role-based Access**: Control access based on user roles (student, instructor, admin)

### Technical Features
- **Authentication**: JWT-based authentication with NextAuth.js
- **Video Progress**: Track watch time and completion status
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Updates**: Dynamic content updates and progress tracking
- **API Documentation**: Swagger/OpenAPI documentation for the REST API
- **Database Migrations**: Prisma-based database management

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Authentication**: NextAuth.js
- **State Management**: React hooks and context
- **HTTP Client**: Axios

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: SQLite (with Prisma ORM)
- **Authentication**: JWT with Passport.js
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Class-validator and class-transformer

### Database
- **ORM**: Prisma
- **Database**: SQLite (development)
- **Migrations**: Prisma Migrate

## 📁 Project Structure

```
lets-learn/
├── backend/                 # NestJS backend application
│   ├── src/
│   │   ├── admin/          # Admin management module
│   │   ├── auth/           # Authentication module
│   │   ├── courses/        # Course management module
│   │   ├── enrollments/    # Enrollment management module
│   │   ├── lessons/        # Lesson management module
│   │   ├── progress/       # Progress tracking module
│   │   ├── users/          # User management module
│   │   └── prisma/         # Prisma service
│   ├── prisma/             # Database schema and migrations
│   └── package.json
├── frontend/               # Next.js frontend application
│   ├── app/                # App router pages
│   │   ├── admin/          # Admin panel pages
│   │   ├── auth/           # Authentication pages
│   │   ├── courses/        # Course pages
│   │   ├── dashboard/      # User dashboard
│   │   └── profile/        # User profile
│   ├── components/         # Reusable UI components
│   │   ├── admin/          # Admin-specific components
│   │   ├── auth/           # Authentication components
│   │   ├── courses/        # Course-related components
│   │   ├── home/           # Homepage components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # Base UI components
│   ├── lib/                # Utility functions and API client
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lets-learn
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up the database**
   ```bash
   cd ../backend
   npx prisma generate
   npx prisma migrate deploy
   ```

5. **Environment Variables**
   
   Create `.env` files in both backend and frontend directories:
   
   **Backend (.env):**
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET=your-jwt-secret-here
   ```
   
   **Frontend (.env.local):**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret-here
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run start:dev
   ```
   The backend will run on http://localhost:3001

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on http://localhost:3000

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Documentation: http://localhost:3001/api

## 📊 Database Schema

The application uses the following main entities:

- **User**: Stores user information and authentication data
- **Course**: Contains course information and metadata
- **Lesson**: Individual lessons within courses
- **Enrollment**: Links users to courses they're enrolled in
- **VideoProgress**: Tracks video watch progress for each user and lesson

## 🔐 Authentication & Authorization

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Three user roles supported:
  - `student`: Default role for learners
  - `instructor`: Can create and manage courses
  - `admin`: Full system access
- **Protected Routes**: API endpoints and frontend pages are protected based on user roles

## 🎯 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Courses
- `GET /courses` - Get all courses
- `GET /courses/:id` - Get course by ID
- `POST /courses` - Create new course (auth required)
- `PUT /courses/:id` - Update course (auth required)
- `DELETE /courses/:id` - Delete course (auth required)

### Lessons
- `GET /lessons` - Get lessons (filtered by course)
- `POST /lessons` - Create new lesson (auth required)
- `PUT /lessons/:id` - Update lesson (auth required)
- `DELETE /lessons/:id` - Delete lesson (auth required)

### Enrollments
- `POST /enrollments` - Enroll in course (auth required)
- `GET /enrollments/my-courses` - Get user's enrolled courses (auth required)
- `PUT /enrollments/progress` - Update course progress (auth required)

### Admin
- `GET /admin/dashboard` - Get admin dashboard stats (admin only)
- `GET /admin/users` - Get all users (admin only)
- `POST /admin/users` - Create user (admin only)
- `GET /admin/courses` - Get all courses (admin only)
- `GET /admin/lessons` - Get all lessons (admin only)

## 🎨 UI Components

The frontend uses a comprehensive design system built with:
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful, customizable icons
- **Responsive Design**: Mobile-first approach

## 📱 Pages Overview

### Public Pages
- **Home**: Landing page with featured courses
- **Courses**: Browse all available courses
- **Auth**: Sign in and sign up pages

### Protected Pages
- **Dashboard**: Personal learning dashboard
- **Profile**: User profile management
- **Course Detail**: Individual course page with lessons
- **Video Player**: Video lesson player with progress tracking

### Admin Pages
- **Admin Dashboard**: System overview and statistics
- **User Management**: CRUD operations for users
- **Course Management**: CRUD operations for courses
- **Lesson Management**: CRUD operations for lessons

## 🔧 Development

### Backend Scripts
```bash
npm run start:dev    # Start development server
npm run build        # Build for production
npm run start:prod   # Start production server
npm run test         # Run tests
npm run lint         # Run ESLint
```

### Frontend Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Database Operations
```bash
npx prisma generate  # Generate Prisma client
npx prisma migrate dev  # Create and apply migration
npx prisma studio    # Open Prisma Studio
```

## 🚢 Deployment

### Backend Deployment
1. Build the application: `npm run build`
2. Set production environment variables
3. Deploy to your preferred hosting service
4. Run database migrations: `npx prisma migrate deploy`

### Frontend Deployment
1. Build the application: `npm run build`
2. Set production environment variables
3. Deploy to Vercel, Netlify, or your preferred hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [NestJS](https://nestjs.com/) for the powerful Node.js framework
- [Prisma](https://prisma.io/) for the excellent ORM
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://radix-ui.com/) for the accessible UI components

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.