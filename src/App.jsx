import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { messaging, getToken, onMessage } from './firebase-config';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Legal from './components/pages/Legal';
import Pricing from './components/pages/Pricing';
import Contact from './components/pages/Contact';
import Chatbots from './components/pages/Chatbots';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyChatbots from './components/pages/Dashboard/MyChatbots';
import Settings from './components/pages/Dashboard/Settings';
import UsageStats from './components/pages/Dashboard/UsageStats';
import BillInfo from './components/pages/Dashboard/BillInfo';
import Recommendations from './components/pages/Dashboard/Recommendations';
import Support from './components/pages/Dashboard/Support';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import AgriBot from './components/Agribot/AgriBot';
import FinWiz from './components/FinWiz/FinWiz';
import MindMate from './components/MindMate/MindMate';
import SocialSphere from './components/SocialSphere/SocialSphere';
import EduSynth from './components/EduSynth/EduSynth';
import { BizAdvisor } from './components/BizAdvisor/BizAdvisor';
import HealthBot from './components/HealthBot/HealthBot';
import { SmartSales } from './components/SmartSales/SmartSales';
import { FinanceWizard } from './components/FinanceWizard/FinanceWizard';
import { HRAssist } from './components/HRAssist/HRAssist'; 
import { RoboChef } from './components/RoboChef/RoboChef';
import {MusicMinds} from './components/MusicMinds/MusicMinds';
import {LegalEagle} from './components/LegalEagle/LegalEagle';
import { OpsManager } from './components/OpsManager/OpsManager';
import { ConsultantX } from './components/ConsultantX/ConsultantX';
import { BrandMaster } from './components/BrandMaster/BrandMaster';
import {FashionFusion} from './components/FashionFusion/FashionFusion';
import { MarketGuru } from './components/MarketGuru/MarketGuru';
import { StartUp } from './components/StartUp/StartUp';
import { TechGuru } from './components/TechGuru/TechGuru';
import { CodeAssist } from './components/CodeAssist/CodeAssist';
import { AIResearcher } from './components/AIResearcher/AIResearcher';
import { CyberGuardian } from './components/CyberGuardian/CyberGuardian';
import { DataScientist } from './components/DataScientist/DataScientist';
import { NetAdmin } from './components/NetAdmin/NetAdmin';
import { DevOpsPro }from './components/DevOpsPro/DevOpsPro';
import { CloudConsultant } from './components/CloudConsultant/CloudConsultant';
import { BlockChain } from './components/BlockChain/BlockChain';
import { IotExpert } from './components/IotExpert/IotExpert';
import { TechSavvy } from './components/TechSavvy/TechSavvy';
import { SecureShield } from './components/SecureShield/SecureShield';
import { GreenGuard } from './components/GreenGuard/GreenGuard';
import { FutureFit } from './components/FutureFit/FutureFit';
import { GamegenousStrategist } from './components/GamegenousStrategist/GameStrategist';
import {TravelNavigator} from './components/TravelNavigator/TravelNavigator';
import { AIRecruiter } from './components/AIRecruiter/AIRecruiter';
import { CodeCraft } from './components/CodeCraft/CodeCraft';
import TherapyBot from './components/pages/Smartbots/TherapyBot';
import { MoodMate } from './components/MoodMate/MoodMate';
import {StressBuster} from './components/StressBuster/StressBuster';
import MindCoach from './components/pages/Smartbots/MindCoach';
import AnxietyAid from './components/pages/Smartbots/AnxietyAid';
import {SleepSupport} from './components/SleepSupport/SleepSupport';
import {GriefGuide} from './components/GriefGuide/GriefGuide';
import MindfulnessMentor from './components/pages/Smartbots/MindfulnessMentor';
import PTSDHelper from './components/pages/Smartbots/PTSDHelper';
import {AddictionAlly} from './components/AddictionAlly/AddictionAlly';
import StudyBuddy from './components/pages/Smartbots/StudyBuddy';
import QuizMaster from './components/pages/Smartbots/QuizMaster';
import TutorBot from './components/pages/Smartbots/TutorBot';
import LangLearner from './components/pages/Smartbots/LangLearner';
import STEMGuide from './components/pages/Smartbots/STEMGuide';
import HistoryHelper from './components/pages/Smartbots/HistoryHelper';
import MathMentor from './components/pages/Smartbots/MathMentor';
import ScienceSage from './components/pages/Smartbots/ScienceSage';
import ArtAdvisor from './components/pages/Smartbots/ArtAdvisor';
import CareerCounselor from './components/CareerCounselor/CareerCounselor';
import LoveGuru from './components/pages/Smartbots/LoveGuru';
import {MatchMaker} from './components/MatchMaker/MatchMaker';
import {DatePlanner} from './components/DatePlanner/DatePlanner';
import {RelateMate} from './components/RelateMate/RelateMate';
import BreakUpBuddy from './components/pages/Smartbots/BreakUpBuddy';
import FlirtFriend from './components/pages/Smartbots/FlirtFriend';
import {LongDistanceLove} from './components/LongDistanceLove/LongDistanceLove';
import {CompatibilityCoach} from './components/CompatibilityCoach/CompatibilityCoach';
import LoveTracker from './components/pages/Smartbots/LoveTracker';
import {WeddingPlanner} from './components/WeddingPlanner/WeddingPlanner';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from './AuthContext';

// Service Worker Registration and Notification Handling
const setupFirebaseMessaging = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);

        const vapidKey = 'BMZHQTOP-l0jcPdMltQyjB9bjG_mjBviJmg70OAYFCXFVpWRFe6TzWHkxgkLnVosTo__24WaXDFa1tXIYiRCMCU';

        getToken(messaging, { vapidKey })
          .then((token) => {
            if (token) {
              console.log('FCM Token:', token);
            } else {
              console.log('No registration token available.');
            }
          })
          .catch((err) => {
            console.log('Token retrieval failed:', err);
          });
      })
      .catch((err) => {
        console.log('Service Worker registration failed:', err);
      });
  }

  onMessage(messaging, (payload) => {
    console.log('Message received:', payload);
    new Notification(payload.notification.title, {
      body: payload.notification.body,
      icon: payload.notification.icon
    });
  });
};

setupFirebaseMessaging();

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />; 
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/chatbots" element={<Chatbots />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/agribot" element={<AgriBot />} />
      <Route path="/finwiz" element={<FinWiz />} />
      <Route path="/socialsphere" element={<SocialSphere />} />
      <Route path="/mindmate" element={<MindMate />} />
      <Route path="/edusynth" element={<EduSynth />} />
      <Route path="/healthbot" element={<HealthBot />} />
      <Route path="/bizadvisor" element={<BizAdvisor />} />
      <Route path="/fashionfusion" element={<FashionFusion />} />
      <Route path="/salespro" element={<SmartSales />} />
      <Route path="/marketguru" element={<MarketGuru />} />
      <Route path="/financewizard" element={<FinanceWizard />} />
      <Route path="/hrassist" element={<HRAssist />} />
      <Route path="/legaleagle" element={<LegalEagle />} />
      <Route path="/robochef" element={<RoboChef />} />
      <Route path="/musicminds" element={<MusicMinds />} />
      <Route path="/opsmanager" element={<OpsManager />} />
      <Route path="/consultantx" element={<ConsultantX />} />
      <Route path="/brandmaster" element={<BrandMaster />} />
      <Route path="/startupguide" element={<StartUp />} />
      <Route path="/techguru" element={<TechGuru />} />
      <Route path="/secureshield" element={<SecureShield />} />
      <Route path="/greenguard" element={<GreenGuard />} />
      <Route path="/futurefit" element={<FutureFit />} />
      <Route path="/airecruiter" element={<AIRecruiter />} />
      <Route path="/codecraft" element={<CodeCraft />} />
      <Route path="/codeassist" element={<CodeAssist />} />
      <Route path="/airesearcher" element={<AIResearcher />} />
      <Route path="/cyberguardian" element={<CyberGuardian />} />
      <Route path="/datascientist" element={<DataScientist />} />
      <Route path="/netadmin" element={<NetAdmin />} />
      <Route path="/gamegenius" element={<GamegenousStrategist/>}/>
      <Route path="/devopsbuddy" element={<DevOpsPro/>}/>
      <Route path="/cloudconsultant" element={<CloudConsultant/>}/>
      <Route path="/iotexpert" element={<IotExpert/>}/>
      <Route path="/blockchainadvisor" element={<BlockChain/>}/>
      <Route path="/travelnavigator" element={<TravelNavigator/>}/>
      <Route path="/techsavvy" element={<TechSavvy/>}/>
      <Route path="/therapybot" element={<TherapyBot/>}/>
      <Route path="/moodmate" element={<MoodMate/>}/>
      <Route path="/stressbuster" element={<StressBuster/>}/>
      <Route path="/mindcoach" element={<MindCoach/>}/>
      <Route path="/anxietyaid" element={<AnxietyAid/>}/>
      <Route path="/sleepsupport" element={<SleepSupport/>}/>
      <Route path="/griefguide" element={<GriefGuide/>}/>
      <Route path="/mindfulnessmentor" element={<MindfulnessMentor/>}/>
      <Route path="/ptsdhelper" element={<PTSDHelper/>}/>
      <Route path="/addictionally" element={<AddictionAlly/>}/>
      <Route path="/studybuddy" element={<StudyBuddy/>}/>
      <Route path="/quizmaster" element={<QuizMaster/>}/>
      <Route path="/tutorbot" element={<TutorBot/>}/>
      <Route path="/langlearner" element={<LangLearner/>}/>
      <Route path="/stemguide" element={<STEMGuide/>}/>
      <Route path="/historyhelper" element={<HistoryHelper/>}/>
      <Route path="/mathmentor" element={<MathMentor/>}/>
      <Route path="/sciencesage" element={<ScienceSage/>}/>
      <Route path="/artadvisor" element={<ArtAdvisor/>}/>
      <Route path="/careercounselor" element={<CareerCounselor/>}/>
      <Route path="/loveguru" element={<LoveGuru/>}/>
      <Route path="/matchmaker" element={<MatchMaker />} />
      <Route path="/dateplanner" element={<DatePlanner />} />
      <Route path="/relatemate" element={<RelateMate />} />
      <Route path="/flirtfriend" element={<FlirtFriend />} />
      <Route path="/breakupbuddy" element={<BreakUpBuddy />} />
      <Route path="/longdistancelove" element={<LongDistanceLove />} />
      <Route path="/compatibilitycoach" element={<CompatibilityCoach />} />
      <Route path="/lovetracker" element={<LoveTracker />} />
      <Route path="/weddingplanner" element={<WeddingPlanner />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/mychatbots" element={<ProtectedRoute><MyChatbots /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="/usage" element={<ProtectedRoute><UsageStats /></ProtectedRoute>} />
      <Route path="/billinfo" element={<ProtectedRoute><BillInfo /></ProtectedRoute>} />
      <Route path="/recommendations" element={<ProtectedRoute><Recommendations /></ProtectedRoute>} />
      <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
      <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
    </Routes>
  );
};

export default App;
