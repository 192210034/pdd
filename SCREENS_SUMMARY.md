# Mentorship Platform - Complete Screen List

## 🎯 Total Screens: 32

### 1. Authentication Flow (5 screens)
- **Splash Screen** - App loading animation
- **Onboarding Slider** - Introduction slides
- **Login Screen** - User authentication
- **Signup Screen** - New user registration
- **OTP Screen** - Verification code entry
- **Forgot Password Screen** - Password recovery

### 2. Achiever Verification Flow (5 screens)
- **Upload Scorecard Screen** - Document upload with preview
- **Verification Form** - Detailed information collection
- **Verification Loading** - AI processing animation
- **Verification Pending Screen** - Awaiting admin approval
- **Verified Badge Screen** - Success confirmation

### 3. Aspirant Journey (5 screens)
- **Aspirant Home** - Browse mentors by exam category
- **Exam Category Page** - Filtered mentor list
- **Achiever Profile** - Detailed mentor information
- **Slot Booking** - Calendar-based time selection
- **Session Summary** - Booking details review

### 4. Booking & Payment Flow (4 screens)
- **Waiting Approval** - Pending achiever confirmation
- **Payment Screen** - Multiple payment options
- **Payment Success** - Confirmation with details
- **Invoice Screen** - Downloadable receipt

### 5. Achiever Flow (3 screens)
- **Incoming Request** - New booking notification
- **Approval Confirmation** - Accept/reject booking
- **Meet Link Generated** - Google Meet link display

### 6. Session Management (3 screens)
- **Session Details** - Upcoming session information with countdown
- **Rating & Review Screen** - Post-session feedback (⭐ NEW)
- **Chat Screen** - Direct messaging between users

### 7. Community & Motivation (1 screen)
- **Motivational Feed (NEW! ⭐)**
  - Social media-style feed with posts from achievers
  - Videos and photos showcasing success stories
  - Interactive engagement: Like, comment, share, save
  - Category filtering (All, Videos, Photos, SSC, Banking, Railways, UPSC)
  - Trending topics section
  - Real-time engagement metrics
  - Search functionality
  - Click achiever to view profile
  - Direct commenting on posts

### 8. Dashboards (3 screens)
- **Aspirant Dashboard** - Student activity hub
- **Achiever Dashboard** - Mentor earnings & sessions
- **Admin Dashboard** - Platform analytics & management (⭐ NEW)

### 9. Utilities (3 screens)
- **Notifications Screen** - Activity updates
- **Screen Navigator** - Development navigation hub (⭐ NEW)

---

## 🎨 Design System

### Colors
- **Primary Blue**: #2B59FF
- **Heading**: #111827
- **Text**: #6B7280
- **Light Background**: #F3F4F6

### UI Characteristics
- Rounded cards with shadows
- Gradient backgrounds
- Clean typography
- Modern, trust-focused design
- Mobile & web responsive

### Tech Stack
- React + TypeScript
- Tailwind CSS v4.0
- shadcn/ui components
- Lucide React icons

---

## 🚀 Recently Added Features

### Rating & Review Screen
- Interactive 5-star rating system
- Predefined tag selection (8 tags)
- Written review textarea (500 char limit)
- Public review notice
- Success confirmation animation

### Admin Dashboard
- **Overview Tab**
  - 6 key metrics cards
  - Top performing achievers
  - Session distribution by exam category
  - Recent activity feed

- **Verifications Tab**
  - Pending verification table
  - Approve/reject actions
  - Document viewer
  - Search and filter functionality
  - Weekly stats (approved/rejected/avg time)

- **Sessions Tab**
  - All sessions table
  - Status badges (completed/ongoing/scheduled)
  - Search and filter
  - Session statistics (today/week/completed/cancelled)

---

## 📱 User Flows

### Aspirant Flow
1. Splash → Navigator → Onboarding → Login/Signup → OTP
2. Aspirant Home → Exam Category → Achiever Profile
3. Slot Booking → Session Summary → Waiting Approval
4. Payment → Payment Success → Invoice
5. Session Details → Join Meeting
6. Rating & Review → Dashboard

### Achiever Flow
1. Splash → Navigator → Upload Scorecard → Verification Form
2. Verification Loading → Verification Pending
3. Verified Badge → Achiever Dashboard
4. Incoming Request → Approval Confirmation
5. Meet Link Generated → Session
6. Achiever Dashboard (earnings tracking)

### Admin Flow
1. Login → Admin Dashboard
2. Overview (platform metrics)
3. Verifications (approve/reject)
4. Sessions (monitor activity)
5. Export reports

---

## 🎯 Platform Features

✅ Verified achiever system with scorecard upload  
✅ AI-powered document verification  
✅ Calendar-based slot booking  
✅ Multiple payment options (UPI, Cards, Wallets)  
✅ Automated Google Meet link generation  
✅ Real-time chat messaging  
✅ Rating and review system  
✅ Comprehensive dashboards  
✅ Admin verification workflow  
✅ Invoice generation  
✅ Push notifications  
✅ Responsive design  

---

## 🔄 Navigation System

The app uses a centralized navigation function that manages:
- Screen transitions
- State management (user role, selected achiever, booking data)
- Data passing between screens
- Navigation history

**Screen Navigator** provides a visual directory of all 31 screens organized by category, making it easy to navigate during development and testing.

---

Built with ❤️ for government exam aspirants