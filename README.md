This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Stories Hut Direct Publishing (SDP) – Creator Platform

## Overview
**Stories Hut Direct Publishing (SDP)** is a creator-focused publishing platform that enables authors and publishers to create, publish, manage, and promote digital and print books.

This project serves as the single source of truth for all UI screens, user flows, and functional requirements of the SDP platform.

---

## Objectives
- **Comprehensive Documentation**: Provide a complete understanding of all UI screens.
- **Navigation Mapping**: Define clear navigation paths between screens.
- **Workflow Definition**: Document end-to-end creator workflows.
- **Logic & Validation**: Define validation rules and handle edge cases.
- **Implementation Guide**: Specify backend and API requirements for developers.

---

## User Type
- **Creator (Author / Publisher)**: Primary users responsible for content creation and management.
- *Note: End readers do not interact with SDP; they access content via Stories Hut Store applications.*

---

## Modules Covered

| Module | Description |
| :--- | :--- |
| **Auth** | Registration and Login |
| **Home** | Dashboard and Bookshelf |
| **Creator** | eBook creation and publishing |
| **Reports** | Sales, reads, and royalties |
| **Community** | Forums and discussions |
| **Marketing** | Promotions and A+ content |
| **Account** | Identity verification and payments |

---

## Screen Index

### Authentication
- `S-01` Registration
- `S-02` Login Identifier
- `S-03` Login Password/Auth

### Home
- `S-04` Dashboard / Bookshelf
- `S-12` Titles List

### Creator Flow
- `S-05` Create New
- `S-06` eBook Details
- `S-07` Category Modal
- `S-08` Upload Content
- `S-09` Preview & Accessibility
- `S-10` Pricing
- `S-11` Publish Confirmation

### Reports
- `S-13` Reports Dashboard
- `S-14` Orders Report
- `S-15` SENP Read Report
- `S-16` Month-to-Date Report
- `S-17` Royalties Estimator
- `S-18` Prior Royalties

### Community
- `S-19` Forum Home
- `S-20` Topic Listing
- `S-21` Marketing Discussions
- `S-22` Author Page Discussions

### Marketing
- `S-23` Marketing Hub
- `S-24` A+ Content
- `S-25` Price Promotions
- `S-26` Deals and Prime Reading

### Account
- `S-27` Identity Verification
- `S-28` Payments and Bank Setup

---

## End-to-End Creator Flow

1.  **Authentication**: Register (S-01) and Login (S-02, S-03).
2.  **Dashboard Access**: Access Bookshelf (S-04).
3.  **Create New Title**: Select content type (S-05).
4.  **Enter Metadata**: Fill book details (S-06) and select categories (S-07).
5.  **Upload Content**: Upload manuscript/cover (S-08) and add AI/accessibility details (S-09).
6.  **Pricing and Royalties**: Set price, royalties, and territory (S-10).
7.  **Publish**: Confirm and submit for review (S-11).
8.  **Manage Titles**: Monitor status from Bookshelf (S-12).
9.  **Reporting**: Access sales and earnings reports (S-13 to S-18).
10. **Marketing**: Utilize promotion tools (S-23 to S-26).
11. **Community**: Participate in creator forums (S-19 to S-22).
12. **Account Setup**: Complete ID verification (S-27) and bank configuration (S-28).

---

## Core Feature: Create and Publish eBook

### Inputs
- Book metadata (title, author, language, etc.)
- Manuscript file
- Cover image
- Pricing and territory data

### Outputs
- Book submitted for review
- ASIN generated
- Listing created on Stories Hut Store

### Failure Scenarios
- Invalid manuscript format
- Missing mandatory metadata
- Pricing validation failure
- Network or service errors

---

## Technical Specifications

### Backend Services Required
- **Authentication Service**: Registration, Login (OTP/Passkey support).
- **Book Metadata Service**: Storage, categories, and draft handling.
- **File Upload Service**: Asynchronous manuscript and cover uploads.
- **Pricing & Royalty Engine**: Territory-based pricing and currency conversion.
- **Publishing Pipeline**: Validation, review workflow, and ASIN generation.
- **Reporting & Analytics**: Orders, SENP (Pages read), and royalty data.
- **Payment Service**: Bank management and payout processing.

### Global Validation Rules
- Required fields must be completed before proceeding.
- Maximum of **three categories** per book.
- Manuscript upload is **mandatory**.
- Pricing must fall within marketplace limits.
- Identity verification is required before payments.
- Valid date ranges required for all reports.

### Edge Cases
- Network failure during save or publish.
- Large file upload failures.
- Currency conversion mismatches.
- Reporting data delays.
- Promotion eligibility restrictions.
- Identity verification delays.

---

## Notifications and system Messages

| Event | Message |
| :--- | :--- |
| **Save Success** | Changes saved successfully |
| **Publish Success** | Your book is under review |
| **Error** | Something went wrong. Try again |
| **Bank Added** | Bank account added successfully |

---

## Technical Notes for Developers
- **API Alignment**: Implement endpoints corresponding to screens S-01 through S-28.
- **Autosave**: Support draft autosave functionality.
- **Async Processing**: Use asynchronous uploads for manuscript files.
- **Currency**: Ensure consistency in conversion and rounding.
- **Access Control**: Maintain strict Role-Based Access Control (Creator role only).

---

## Contribution Guidelines
Please create issues or pull requests for:
- Missing APIs or validation mismatches.
- UI or logic inconsistencies.
- Performance optimizations.

