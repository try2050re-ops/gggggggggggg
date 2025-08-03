import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { Navigation } from './components/Navigation';
import { ExamSchedule } from './components/ExamSchedule';
import { NewsPage } from './components/NewsPage';
import { DonationSection } from './components/DonationSection';
import { SearchSection } from './components/SearchSection';
import { ResultCard } from './components/ResultCard';
import { StatsSection } from './components/StatsSection';
import { AllResultsSection } from './components/AllResultsSection';
import { Footer } from './components/Footer';
import { FloatingDonationButton } from './components/FloatingDonationButton';
import { Clock, AlertCircle, BookOpen } from 'lucide-react';
import { rankedStudents } from './data/students';
import { calculateStats } from './utils/contestStats';
import { Student } from './types';

function App() {
  const [searchResult, setSearchResult] = useState<Student | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [currentPage, setCurrentPage] = useState<'main' | 'results' | 'schedule' | 'news' | 'donation'>('main');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const stats = calculateStats(rankedStudents);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Stop audio when leaving main page
  useEffect(() => {
    if (currentPage !== 'main' && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [currentPage]);

  const handleSearchResult = (student: Student | null) => {
    setSearchResult(student);
    setSearchAttempted(true);
  };

  const handleNavigation = (page: 'results' | 'schedule' | 'news' | 'donation') => {
    setCurrentPage(page);
  };

  const handleFullNavigation = (page: 'main' | 'results' | 'schedule' | 'news' | 'donation') => {
    setCurrentPage(page);
    
    // Stop audio when navigating away from main page
    if (page !== 'main' && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset search when navigating
    if (page !== 'results') {
      setSearchResult(null);
      setSearchAttempted(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`} dir="rtl">
      {/* Global audio reference for main page */}
      <audio ref={audioRef} style={{ display: 'none' }} />
      
      {/* Floating Donation Button - Show on all pages except main and donation */}
      {currentPage !== 'main' && currentPage !== 'donation' && (
        <FloatingDonationButton onNavigate={handleFullNavigation} isDarkMode={isDarkMode} />
      )}
      
      {/* Dark Mode Toggle - Fixed position */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-4 left-4 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
          isDarkMode 
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
            : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
        } shadow-lg hover:shadow-xl`}
        aria-label="تبديل الوضع الليلي"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 animate-spin-slow" />
        ) : (
          <Moon className="w-6 h-6 animate-pulse" />
        )}
      </button>
      
      {currentPage === 'main' ? (
        <MainPage onNavigate={(page) => handleFullNavigation(page)} isDarkMode={isDarkMode} />
      ) : (
        <>
          <Header isDarkMode={isDarkMode} />
          
          <Navigation currentPage={currentPage} onNavigate={handleFullNavigation} isDarkMode={isDarkMode} />
          
          {currentPage === 'results' && (
            <>
              <SearchSection 
                students={rankedStudents} 
                onResult={handleSearchResult}
                isDarkMode={isDarkMode}
              />
              
              {/* Search Results */}
              {searchAttempted && (
                <section className={`py-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                      <div className={`border-2 rounded-3xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gradient-to-br from-orange-900/20 via-yellow-900/20 to-amber-900/20 border-orange-600/50' 
                          : 'bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 border-orange-200'
                      }`}>
                        {/* Background decorative elements */}
                        <div className={`absolute top-4 right-4 opacity-30 ${isDarkMode ? 'text-orange-400' : 'text-orange-200'}`}>
                          <Clock className="w-16 h-16 animate-spin-slow" />
                        </div>
                        <div className={`absolute bottom-4 left-4 opacity-20 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-200'}`}>
                          <BookOpen className="w-12 h-12 animate-bounce-slow" />
                        </div>
                        
                        <div className="text-center relative z-10">
                          <div className="flex justify-center items-center gap-3 mb-6">
                            <AlertCircle className={`w-12 h-12 animate-pulse ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                            <Clock className={`w-12 h-12 animate-tick ${isDarkMode ? 'text-amber-400' : 'text-amber-500'}`} />
                          </div>
                          
                          <h3 className={`text-3xl md:text-4xl font-bold mb-4 animate-fadeInScale ${isDarkMode ? 'text-orange-200' : 'text-orange-800'}`}>
                            المسابقة لم تبدأ بعد
                          </h3>
                          
                          <div className={`backdrop-blur-sm rounded-2xl p-6 mb-6 border transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800/70 border-orange-600/30' 
                              : 'bg-white/70 border-orange-100'
                          }`}>
                            <p className={`text-lg md:text-xl leading-relaxed mb-4 ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                              نتائج المسابقة ستكون متاحة فور انتهاء التصحيح
                            </p>
                            <p className={`font-semibold ${isDarkMode ? 'text-orange-300' : 'text-orange-600'}`}>
                              ترقبوا بدء المسابقة قريباً إن شاء الله
                            </p>
                          </div>
                          
                          <div className="text-center">
                            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-colors duration-300 ${
                              isDarkMode 
                                ? 'bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-amber-600/50' 
                                : 'bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200'
                            }`}>
                              <Clock className={`w-5 h-5 animate-tick ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                              <span className={`font-semibold ${isDarkMode ? 'text-amber-200' : 'text-amber-800'}`}>ترقبوا بدء المسابقة قريباً إن شاء الله</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
              
              <StatsSection stats={stats} isDarkMode={isDarkMode} />
              <AllResultsSection students={rankedStudents} isDarkMode={isDarkMode} />
            </>
          )}
          
          {currentPage === 'schedule' && (
            <ExamSchedule isDarkMode={isDarkMode} />
          )}
          
          {currentPage === 'news' && (
            <NewsPage isDarkMode={isDarkMode} />
          )}
          
          {currentPage === 'donation' && (
            <DonationSection isDarkMode={isDarkMode} />
          )}
          
          <Footer isDarkMode={isDarkMode} />
        </>
      )}
    </div>
  );
}

export default App;