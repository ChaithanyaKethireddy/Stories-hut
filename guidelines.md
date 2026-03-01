# Stories Hut Direct Publishing (SDP)
## Development Guidelines

---

## 1. Project Overview

**Stories Hut Direct Publishing (SDP)** is a creator-focused publishing platform that enables authors and publishers to create, publish, manage, and promote digital books. The platform provides comprehensive tools for content management, distribution, and monetization.

---

## 2. Project Objectives

- Provide complete UI screen documentation (S-01 to S-28)
- Define navigation flow and cross-screen dependencies
- Ensure backend and API alignment with frontend screens
- Maintain strict brand and design consistency
- Implement scalable, production-ready architecture

---

## 3. Recommended Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Reusable component library (Button, Input, Card, Modal, etc.)

### Backend & Database
- **Backend-as-a-Service**: Supabase
- **Database**: PostgreSQL
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage or AWS S3

### Third-Party Integrations
- **Payments**: Razorpay or Stripe
- **Deployment**: Vercel

---

## 4. Development Guidelines

### Architecture & Components
- Follow **component-based architecture**
- Create and maintain reusable components (Button, Input, Card, Modal, etc.)
- Implement proper component composition and props management
- Use TypeScript for type safety

### Data Management
- Implement **autosave** for all draft screens
- Use async/await for file uploads
- Handle errors gracefully with user feedback
- Validate all required fields before submission
- Maintain optimistic UI updates where applicable

### Authentication & Authorization
- Enforce **role-based access control (RBAC)**
- Restrict critical features to Creator role only
- Validate authentication tokens on sensitive operations
- Implement proper session management

### File Handling
- Use asynchronous file upload mechanisms
- Support multiple file formats for manuscripts
- Implement progress tracking for uploads
- Validate file types and sizes on client and server

### Financial Operations
- Maintain **strict currency consistency** (standard: INR)
- Apply consistent rounding rules for all calculations
- Validate payment amounts before processing
- Log all financial transactions

---

## 5. Brand & Design System

### Color Palette
| Usage          | Color Code | Description         | Max Usage |
|----------------|-----------|---------------------|-----------|
| Primary        | #6C2E91   | Royal Story Purple  | 60%       |
| Background     | #F4ECF9   | Soft Lavender       | 25%       |
| Accent         | #F2A66E   | Warm Peach          | 5%        |
| Secondary      | -         | Neutral Gray        | 10%       |

**Color Ratio**: 60/25/10/5 (Primary/Background/Secondary/Accent)

### Typography
| Element      | Font           | Usage                           |
|--------------|----------------|---------------------------------|
| Headings     | Playfair Display | H1, H2, H3, page titles        |
| UI Text      | Poppins        | Buttons, labels, form elements |
| Body Text    | Merriweather   | Book descriptions, long content|

### Design Principles
- Maintain visual hierarchy with consistent typography
- Use white space effectively for readability
- Ensure accessibility (WCAG 2.1 AA minimum)
- Test on multiple devices and screen sizes
- Apply consistent padding and margin standards

---

## 6. Core Screen Flow & Navigation

### Authentication Flow (S-01 to S-03)
- **S-01**: Sign Up / Registration
- **S-02**: Email Verification
- **S-03**: Login

### Dashboard & Main Interface (S-04)
- **S-04**: Creator Dashboard (home, overview, quick actions)

### Content Creation (S-05 to S-11)
- **S-05**: Book Metadata (title, author, description)
- **S-06**: Genre & Category Selection
- **S-07**: Additional Details (language, maturity rating, etc.)
- **S-08**: Manuscript Upload
- **S-09**: Content Preview & Review
- **S-10**: Pricing & Distribution
- **S-11**: Publish Confirmation

### Analytics & Reports (S-13 to S-18)
- **S-13**: Sales Dashboard
- **S-14**: Revenue Analytics
- **S-15**: Reader Demographics
- **S-16**: Download Analytics
- **S-17**: Performance Metrics
- **S-18**: Detailed Reports Export

### Marketing & Community (S-19 to S-26)
- **S-19**: Marketing Tools
- **S-20**: Social Media Integration
- **S-21**: Email Campaigns
- **S-22**: Reader Engagement
- **S-23**: Community Forum
- **S-24**: Author Profile
- **S-25**: Book Promotions
- **S-26**: Affiliate Program

### Account & Payments (S-27 to S-28)
- **S-27**: Account Settings
- **S-28**: Payment Methods & Withdrawal

---

## 7. API & Backend Guidelines

### Authentication Endpoints
- POST `/auth/signup` - Creator registration
- POST `/auth/login` - Authentication
- POST `/auth/logout` - Session termination
- POST `/auth/verify-email` - Email verification

### Content Management Endpoints
- POST `/books` - Create new book
- PUT `/books/{id}` - Update book metadata
- POST `/books/{id}/upload` - Upload manuscript
- GET `/books/{id}` - Retrieve book details
- DELETE `/books/{id}` - Delete book

### Sales & Analytics Endpoints
- GET `/analytics/sales` - Sales data
- GET `/analytics/revenue` - Revenue metrics
- GET `/analytics/readers` - Reader demographics
- GET `/reports/{type}` - Generate reports

### Payment Endpoints
- POST `/payments/initialize` - Initiate payment
- POST `/payments/verify` - Verify payment
- GET `/payments/history` - Payment history
- POST `/withdrawals` - Withdrawal requests

---

## 8. Database Schema Guidelines

### Core Tables
- **users** - Creator information and authentication
- **books** - Book metadata and content
- **manuscripts** - Uploaded manuscript files
- **sales** - Transaction records
- **analytics** - Engagement and performance metrics
- **payments** - Payment history and statements

### Key Constraints
- Implement referential integrity with foreign keys
- Add indexes on frequently queried columns
- Enable row-level security (RLS) with Supabase
- Maintain audit logs for critical operations

---

## 9. File Storage Guidelines

### Manuscript Storage
- Use folder structure: `/manuscripts/{userId}/{bookId}/`
- Support formats: PDF, EPUB, DOCX
- Implement virus scanning before storage
- Generate backups for published manuscripts

### Media Storage
- Use folder structure: `/covers/{userId}/{bookId}/`
- Support formats: JPEG, PNG, WebP
- Compress and optimize images
- Generate thumbnails for previews

---

## 10. Security Checklist

- [ ] Implement HTTPS only
- [ ] Use environment variables for sensitive data
- [ ] Validate and sanitize all user inputs
- [ ] Implement rate limiting on API endpoints
- [ ] Use secure password hashing (bcrypt/Argon2)
- [ ] Enable CSRF protection
- [ ] Implement proper CORS policies
- [ ] Regular security audits
- [ ] Monitor for suspicious activities
- [ ] Keep dependencies updated

---

## 11. Testing Guidelines

### Unit Tests
- Test all utility functions and helpers
- Aim for 80%+ code coverage
- Test edge cases and error scenarios

### Integration Tests
- Test API endpoints with realistic data
- Test database interactions
- Test authentication flows

### E2E Tests
- Test critical user journeys
- Test cross-browser compatibility
- Test on mobile devices

---

## 12. Deployment Guidelines

### Pre-Deployment Checklist
- [ ] Run all tests (unit, integration, E2E)
- [ ] Verify environment variables
- [ ] Test database migrations
- [ ] Optimize build size
- [ ] Review security settings
- [ ] Check performance metrics

### Deployment Process
- Deploy to staging environment first
- Run smoke tests on staging
- Get approval from product/QA
- Deploy to production
- Monitor error logs and performance
- Have rollback plan ready

---

## 13. Documentation Requirements

### Code Documentation
- Add JSDoc comments for complex functions
- Document component props and usage
- Maintain README for each major module
- Document API endpoints with examples

### User Documentation
- Maintain help center articles
- Create video tutorials for key features
- Document FAQs
- Provide contact/support information

---

## 14. Version Control Conventions

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation changes

### Commit Messages
- Use clear, descriptive commit messages
- Reference issue numbers when applicable
- Follow conventional commits format

### Pull Request Process
- Require at least one approval
- All checks must pass (tests, linting)
- Maintain clean commit history
- Delete branch after merge

---

## 15. Performance Guidelines

### Frontend
- Optimize bundle size (aim for <100KB gzip)
- Implement code splitting and lazy loading
- Use Next.js image optimization
- Implement lazy loading for images and components
- Monitor Core Web Vitals

### Backend
- Use database indexes effectively
- Implement caching strategies (Redis)
- Optimize query performance
- Monitor API response times
- Set up alerts for performance degradation

---

## 16. Monitoring & Logging

### Logging
- Log errors with context information
- Implement structured logging
- Keep logs for minimum 30 days
- Separate logs by severity level

### Monitoring
- Monitor API uptime and response times
- Track error rates and types
- Monitor database performance
- Set up alerts for critical issues
- Regular review of metrics

---

## 17. Accessibility Standards

- Follow WCAG 2.1 Level AA guidelines
- Ensure keyboard navigation support
- Provide alt text for all images
- Use semantic HTML
- Test with screen readers
- Maintain sufficient color contrast (4.5:1 for text)

---

## 18. Browser & Device Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)
- Responsive design for: Mobile (320px+), Tablet (768px+), Desktop (1024px+)

---

## 19. Glossary

- **SDP**: Stories Hut Direct Publishing
- **RBAC**: Role-Based Access Control
- **RLS**: Row-Level Security
- **E2E**: End-to-End
- **WCAG**: Web Content Accessibility Guidelines

---

**Document Version**: 1.0
**Last Updated**: March 2026
**Maintained By**: Development Team
