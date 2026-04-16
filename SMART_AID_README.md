# Smart Aid - NGO Resource Allocation System

## 🎯 Overview

Smart Aid is a comprehensive web application designed to help NGOs and donors make data-driven decisions about resource allocation. The platform uses AI-powered analysis to identify critical needs and optimize aid distribution.

## ✨ Features

### 🏠 Landing Page
- Compelling hero section with auto-rotating carousel showcasing humanitarian challenges
- Problem/Solution sections highlighting NGO pain points and Smart Aid's solutions
- "How It Works" 3-step process visualization
- Fully responsive design with smooth animations

### 🔐 Authentication System
- **Login Page**: Email/password authentication with validation
- **Signup Page**: Complete registration with name, email, password confirmation
- **Session Management**: Persistent login using localStorage
- **Protected Routes**: Dashboard requires authentication

### 📊 Dashboard (7 Complete Screens)

#### 1. Dashboard Home
- Summary cards: Total Areas, High Priority Areas, NGOs Available, Reports Processed
- Interactive map visualization with priority hotspots
- Top 5 priority areas with scores and severity indicators
- Real-time data visualization

#### 2. Data Input
- **Excel Upload**: Drag-and-drop file upload for .xlsx, .xls, .csv files
- **WhatsApp Input**: Multi-line text field for pasting WhatsApp messages
- **Manual Form**: Complete data entry with location, issue type, people affected, severity slider
- Form validation and success notifications

#### 3. Analysis & Ranking
- AI-powered ranking of areas by priority score (1-100)
- **Filters**: Issue type, severity level
- **Expandable rows**: Click any area to see detailed AI explanation
- Issue breakdown visualization (water, food, healthcare, etc.)
- Real-time filtering with 6 ranked areas

#### 4. Allocation Planner
- Budget input calculator (₹)
- AI-generated allocation recommendations
- Visual allocation cards with percentages
- **Pie Chart**: Interactive distribution visualization using Recharts
- Summary statistics: budget, areas covered, high priority count

#### 5. NGO Directory
- Searchable directory of 6 verified NGOs
- **NGO Cards**: Name, focus area, location, rating, contact info
- Verification badges
- Star ratings and project counts
- Responsive grid layout

#### 6. Donations & Tracking ⭐ (Most Advanced)
- **Make a Donation Form**: Select NGO, area, amount, support type
- **My Donations List**: 3 sample donations with status badges
- **Live Tracking View**: Click any donation to see:
  - **Progress Timeline**: 4-step visual timeline with icons
  - **Progress Bar**: Visual percentage completion
  - **Impact Summary**: People helped, problem addressed
  - **NGO Updates**: Chronological text updates with dates
- Status tracking: Pending, In Progress, Completed

#### 7. Settings
- **Profile Settings**: Update name, email, organization
- **Appearance**: Dark mode toggle (UI ready)
- **Notifications**: Email and push notification toggles
- **API Configuration**: Secure API key management
- **Danger Zone**: Account deletion option

## 🎨 Design System

### Colors
- **Primary**: Cyan to Blue gradient (#0891b2 to #0284c7)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)
- **Severity Indicators**:
  - Critical: Red
  - High: Orange
  - Medium: Yellow

### Typography
- **Headings**: Outfit (geometric, modern)
- **Body Text**: Inter (clean, readable)
- **Font Weights**: 400, 500, 600, 700, 800

### Components
- Rounded cards with soft shadows
- Gradient buttons and accents
- Smooth Motion (Framer Motion) animations
- Toast notifications using Sonner
- Responsive layouts (mobile-first)

## 🛠 Technology Stack

- **Framework**: React 18.3.1 + TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router 7.13.0
- **Charts**: Recharts 2.15.2
- **Animations**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Toast Notifications**: Sonner
- **Form Handling**: React Hook Form

## 📱 Responsive Design

### Desktop (lg: 1024px+)
- Fixed sidebar navigation (left)
- Full-width content area
- Multi-column grid layouts

### Tablet (md: 768px - 1023px)
- Collapsible sidebar
- 2-column grids
- Adaptive card sizes

### Mobile (< 768px)
- Top hamburger menu
- Bottom navigation bar (4 main tabs)
- Single-column layouts
- Touch-optimized interactions

## 🔒 Authentication Flow

1. **Landing Page** (/) → Visitor sees marketing content
2. **Sign Up** (/signup) → Create account with validation
3. **Login** (/login) → Authenticate with email/password
4. **Protected Routes** → All /dashboard/* routes require auth
5. **Logout** → Clear session and return to landing page

## 📂 Project Structure

```
src/
├── app/
│   ├── App.tsx                     # Main app entry with router
│   ├── routes.tsx                  # Route configuration
│   ├── components/
│   │   ├── DashboardLayout.tsx     # Shared layout with sidebar
│   │   ├── ProtectedRoute.tsx      # Auth guard component
│   │   └── ui/                     # Reusable UI components
│   ├── contexts/
│   │   └── AuthContext.tsx         # Authentication state management
│   └── screens/
│       ├── LandingPage.tsx         # Public landing page
│       ├── Login.tsx               # Login form
│       ├── Signup.tsx              # Registration form
│       ├── Dashboard.tsx           # Main dashboard
│       ├── DataInput.tsx           # Data upload/entry
│       ├── Analysis.tsx            # Ranking & analysis
│       ├── AllocationPlanner.tsx   # Budget allocation
│       ├── NGODirectory.tsx        # NGO listings
│       ├── Donations.tsx           # Donation tracking
│       └── Settings.tsx            # User settings
└── styles/
    ├── fonts.css                   # Google Fonts imports
    ├── theme.css                   # Design tokens & themes
    └── tailwind.css                # Tailwind config
```

## 🚀 Getting Started

### Current State
The application is fully functional with:
- ✅ Complete UI for all 7 screens
- ✅ Mock authentication (ready for backend integration)
- ✅ Sample data for demonstration
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Form validations

### User Flow Demo

1. **First Visit**: 
   - Open the app → See landing page with auto-rotating images
   - Click "Get Started" → Go to signup

2. **Create Account**:
   - Enter name, email, password (min 6 chars)
   - Click "Create Account" → Auto-login and redirect to /dashboard

3. **Explore Dashboard**:
   - View summary cards and priority map
   - Navigate using sidebar (desktop) or bottom nav (mobile)

4. **Input Data**:
   - Go to "Data Input"
   - Upload Excel file OR paste WhatsApp messages OR fill manual form
   - Get success notification

5. **Analyze**:
   - Go to "Analysis & Ranking"
   - Filter by issue type or severity
   - Click any area to expand detailed explanation

6. **Plan Allocation**:
   - Go to "Allocation Planner"
   - Enter budget amount (e.g., 100000)
   - Click "Generate Plan" → See AI allocation + pie chart

7. **Find NGOs**:
   - Go to "NGO Directory"
   - Search by name, focus, or location
   - View verified NGO details

8. **Make Donation**:
   - Go to "Donations & Tracking"
   - Click "Make a Donation"
   - Fill form and submit
   - Click any existing donation to see live tracking timeline

9. **Adjust Settings**:
   - Go to "Settings"
   - Update profile, toggle notifications, save API keys

## 💡 Key Features Highlights

### AI-Powered Analysis
- Priority scoring algorithm (0-100)
- Automatic area ranking
- Severity classification
- Issue-specific recommendations

### Real-Time Tracking
- 4-stage donation timeline
- Visual progress indicators
- Impact metrics (people helped)
- NGO update feed

### Data Integration
- Multiple input methods (Excel, WhatsApp, manual)
- Smart data parsing
- Validation and error handling

### Visualization
- Interactive map with hotspots
- Pie charts for allocation
- Progress bars and timelines
- Issue breakdown tags

## 🔄 Future Enhancements (Backend Integration)

To make this production-ready, consider:

1. **Backend API**: Replace mock auth with real authentication (Supabase recommended)
2. **Database**: Store areas, NGOs, donations, user data
3. **Real AI**: Integrate actual AI models for analysis
4. **File Processing**: Backend Excel/CSV parsing
5. **Image Upload**: Allow NGOs to upload progress photos
6. **Payment Gateway**: Integrate Razorpay/Stripe for donations
7. **Email Notifications**: Send updates to donors
8. **SMS Integration**: WhatsApp Business API for data collection
9. **Google Maps API**: Real interactive maps
10. **Analytics**: Track platform usage and impact

## 📊 Mock Data Summary

- **Areas Analyzed**: 127
- **High Priority Areas**: 23
- **NGOs in Directory**: 6
- **Sample Donations**: 3
- **Ranked Areas**: 6 with detailed explanations
- **Allocation Suggestions**: 5 areas with percentages

## 🎯 Target Users

1. **NGO Administrators**: Analyze needs and plan resource distribution
2. **Donors**: Make informed donations and track impact
3. **Field Workers**: Input data from ground surveys
4. **Government Officials**: Monitor aid distribution
5. **Volunteers**: View priority areas and coordinate efforts

## 📝 Notes

- All authentication is currently mock-based (accepts any credentials)
- Data persists only in browser localStorage
- API keys in settings are not connected to actual services
- Charts use sample data for visualization
- All images are from Unsplash

---

**Built with ❤️ for humanitarian impact**

*Smart Aid - Making every contribution count*
