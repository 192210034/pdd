import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingSlider } from './components/OnboardingSlider';
import { LoginScreen } from './components/LoginScreen';
import { SignupScreen } from './components/SignupScreen';
import { OTPScreen } from './components/OTPScreen';
import { ForgotPasswordScreen } from './components/ForgotPasswordScreen';
import { UploadScorecardScreen } from './components/UploadScorecardScreen';
import { VerificationForm } from './components/VerificationForm';
import { VerificationPendingScreen } from './components/VerificationPendingScreen';
import { VerifiedBadgeScreen } from './components/VerifiedBadgeScreen';
import { AspirantHome } from './components/AspirantHome';
import { ExamCategoryPage } from './components/ExamCategoryPage';
import { AchieverProfile } from './components/AchieverProfile';
import { SlotBooking } from './components/SlotBooking';
import { SessionSummary } from './components/SessionSummary';
import { WaitingApproval } from './components/WaitingApproval';
import { IncomingRequest } from './components/IncomingRequest';
import { ApprovalConfirmation } from './components/ApprovalConfirmation';
import { MeetLinkGenerated } from './components/MeetLinkGenerated';
import { PaymentScreen } from './components/PaymentScreen';
import { PaymentSuccess } from './components/PaymentSuccess';
import { InvoiceScreen } from './components/InvoiceScreen';
import { AspirantDashboard } from './components/AspirantDashboard';
import { AchieverDashboard } from './components/AchieverDashboard';
import { ChatScreen } from './components/ChatScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { SessionDetails } from './components/SessionDetails';
import { RatingReviewScreen } from './components/RatingReviewScreen';
import { AdminDashboard } from './components/AdminDashboard';
import { VerificationLoading } from './components/VerificationLoading';
import { ScreenNavigator } from './components/ScreenNavigator';
import { MotivationalFeed } from './components/MotivationalFeed';
import { SessionCheckInRequired } from './components/SessionCheckInRequired';
import { OTPCheckIn } from './components/OTPCheckIn';
import { CheckInStatus } from './components/CheckInStatus';
import { JoinSession } from './components/JoinSession';
import { AttendanceRecorded } from './components/AttendanceRecorded';
import { SessionCompleteVerify } from './components/SessionCompleteVerify';
import { ReportNoShow } from './components/ReportNoShow';
import { AutomaticDecision } from './components/AutomaticDecision';
import { AdminAttendanceView } from './components/AdminAttendanceView';
import { AchieverOnboardingFlow } from './components/achiever-onboarding/AchieverOnboardingFlow';
import { StateJobsExplorer } from './components/jobs-explorer/StateJobsExplorer';
import { JobsDocumentation } from './components/jobs-explorer/JobsDocumentation';
import { IndianGovernmentJobsExplorer } from './components/jobs-explorer/IndianGovernmentJobsExplorer';
import { IndianJobsDocumentation } from './components/jobs-explorer/IndianJobsDocumentation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [showSplash, setShowSplash] = useState(true);
  const [userRole, setUserRole] = useState<'aspirant' | 'achiever' | null>(null);
  const [selectedAchiever, setSelectedAchiever] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setCurrentScreen('onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (screen: string, data?: any) => {
    setCurrentScreen(screen);
    if (data) {
      if (data.achiever) setSelectedAchiever(data.achiever);
      if (data.category) setSelectedCategory(data.category);
      if (data.booking) setBookingData(data.booking);
      if (data.role) setUserRole(data.role);
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {currentScreen === 'navigator' && <ScreenNavigator onNavigate={navigate} />}
      {currentScreen === 'onboarding' && <OnboardingSlider onComplete={() => navigate('login')} />}
      {currentScreen === 'login' && <LoginScreen onNavigate={navigate} />}
      {currentScreen === 'signup' && <SignupScreen onNavigate={navigate} />}
      {currentScreen === 'otp' && <OTPScreen onNavigate={navigate} userRole={userRole} />}
      {currentScreen === 'forgot-password' && <ForgotPasswordScreen onNavigate={navigate} />}
      {currentScreen === 'upload-scorecard' && <UploadScorecardScreen onNavigate={navigate} />}
      {currentScreen === 'verification-form' && <VerificationForm onNavigate={navigate} />}
      {currentScreen === 'verification-loading' && <VerificationLoading onNavigate={navigate} />}
      {currentScreen === 'verification-pending' && <VerificationPendingScreen onNavigate={navigate} />}
      {currentScreen === 'verified-badge' && <VerifiedBadgeScreen onNavigate={navigate} />}
      {currentScreen === 'aspirant-home' && <AspirantHome onNavigate={navigate} />}
      {currentScreen === 'exam-category' && <ExamCategoryPage category={selectedCategory} onNavigate={navigate} />}
      {currentScreen === 'achiever-profile' && <AchieverProfile achiever={selectedAchiever} onNavigate={navigate} />}
      {currentScreen === 'slot-booking' && <SlotBooking achiever={selectedAchiever} onNavigate={navigate} />}
      {currentScreen === 'session-summary' && <SessionSummary bookingData={bookingData} onNavigate={navigate} />}
      {currentScreen === 'waiting-approval' && <WaitingApproval onNavigate={navigate} />}
      {currentScreen === 'incoming-request' && <IncomingRequest onNavigate={navigate} />}
      {currentScreen === 'approval-confirmation' && <ApprovalConfirmation onNavigate={navigate} />}
      {currentScreen === 'meet-link-generated' && <MeetLinkGenerated onNavigate={navigate} />}
      {currentScreen === 'payment' && <PaymentScreen bookingData={bookingData} onNavigate={navigate} />}
      {currentScreen === 'payment-success' && <PaymentSuccess onNavigate={navigate} />}
      {currentScreen === 'invoice' && <InvoiceScreen onNavigate={navigate} />}
      {currentScreen === 'aspirant-dashboard' && <AspirantDashboard onNavigate={navigate} />}
      {currentScreen === 'achiever-dashboard' && <AchieverDashboard onNavigate={navigate} />}
      {currentScreen === 'chat' && <ChatScreen onNavigate={navigate} />}
      {currentScreen === 'notifications' && <NotificationsScreen onNavigate={navigate} />}
      {currentScreen === 'session-details' && <SessionDetails onNavigate={navigate} />}
      {currentScreen === 'rating-review' && <RatingReviewScreen onNavigate={navigate} />}
      {currentScreen === 'admin-dashboard' && <AdminDashboard onNavigate={navigate} />}
      {currentScreen === 'motivational-feed' && <MotivationalFeed onNavigate={navigate} />}
      {currentScreen === 'session-check-in-required' && <SessionCheckInRequired onNavigate={navigate} />}
      {currentScreen === 'otp-check-in' && <OTPCheckIn onNavigate={navigate} />}
      {currentScreen === 'check-in-status' && <CheckInStatus onNavigate={navigate} />}
      {currentScreen === 'join-session' && <JoinSession onNavigate={navigate} />}
      {currentScreen === 'attendance-recorded' && <AttendanceRecorded onNavigate={navigate} />}
      {currentScreen === 'session-complete-verify' && <SessionCompleteVerify onNavigate={navigate} />}
      {currentScreen === 'report-no-show' && <ReportNoShow onNavigate={navigate} />}
      {currentScreen === 'automatic-decision' && <AutomaticDecision onNavigate={navigate} />}
      {currentScreen === 'admin-attendance-view' && <AdminAttendanceView onNavigate={navigate} />}
      {currentScreen === 'achiever-onboarding' && <AchieverOnboardingFlow />}
      {currentScreen === 'state-jobs-explorer' && <StateJobsExplorer onNavigate={navigate} />}
      {currentScreen === 'jobs-documentation' && <JobsDocumentation onNavigate={navigate} />}
      {currentScreen === 'indian-govt-jobs' && <IndianGovernmentJobsExplorer onNavigate={navigate} />}
      {currentScreen === 'indian-jobs-docs' && <IndianJobsDocumentation onNavigate={navigate} />}
    </div>
  );
}