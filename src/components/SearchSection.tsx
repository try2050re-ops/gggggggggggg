import React, { useState } from 'react';
import { Search, User, Hash, Clock, AlertCircle, Calendar, BookOpen } from 'lucide-react';
import { Student } from '../types';

interface SearchSectionProps {
  students: Student[];
  onResult: (student: Student | null) => void;
  isDarkMode?: boolean;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ students, onResult, isDarkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState<'name' | 'id'>('name');
  const [contestStarted] = useState(false); // المسابقة لم تبدأ بعد

  const handleSearch = () => {
    if (!contestStarted) {
      onResult(null);
      return;
    }
    
    if (!searchTerm.trim()) {
      onResult(null);
      return;
    }

    const student = students.find(s => {
      if (searchType === 'name') {
        return s.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
      } else {
        return s.id.toString() === searchTerm.trim();
      }
    });

    onResult(student || null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className={`py-12 shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            البحث عن النتيجة
          </h2>
          
          <div className={`p-6 rounded-2xl shadow-md transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-700 to-gray-600' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <div className={`flex rounded-lg overflow-hidden border-2 focus-within:border-blue-500 transition-colors ${
                  isDarkMode ? 'border-gray-600' : 'border-gray-200'
                }`}>
                  <div className={`px-4 py-3 flex items-center ${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                    {searchType === 'name' ? 
                      <User className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} /> : 
                      <Hash className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} />
                    }
                  </div>
                  <input
                    type={searchType === 'id' ? 'number' : 'text'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={searchType === 'name' ? 'ادخل اسم الطالب...' : 'ادخل رقم الطالب...'}
                    className={`flex-1 px-4 py-3 text-right focus:outline-none transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-100 disabled:bg-gray-600 disabled:text-gray-400' 
                        : 'bg-white text-gray-900 disabled:bg-gray-100'
                    } disabled:cursor-not-allowed`}
                    disabled={!contestStarted}
                    dir="rtl"
                  />
                </div>
              </div>
              
              <button
                onClick={handleSearch}
                className={`px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold transform hover:scale-105 ${
                  contestStarted 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/25' 
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
                disabled={!contestStarted}
              >
                <Search className="w-5 h-5" />
                بحث
              </button>
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSearchType('name')}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  searchType === 'name' && contestStarted
                    ? 'bg-blue-600 text-white' 
                    : contestStarted
                    ? isDarkMode
                      ? 'bg-gray-700 text-blue-400 hover:bg-gray-600'
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!contestStarted}
              >
                البحث بالاسم
              </button>
              <button
                onClick={() => setSearchType('id')}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  searchType === 'id' && contestStarted
                    ? 'bg-blue-600 text-white' 
                    : contestStarted
                    ? isDarkMode
                      ? 'bg-gray-700 text-blue-400 hover:bg-gray-600'
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!contestStarted}
              >
                البحث برقم الطالب
              </button>
            </div>
            
            {!contestStarted && (
              <div className={`mt-6 border-2 rounded-xl p-4 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border-orange-600/50' 
                  : 'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-200'
              }`}>
                <div className={`flex items-center justify-center gap-2 ${isDarkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                  <Clock className="w-5 h-5 animate-tick" />
                  <span className="font-semibold">ترقبوا بدء المسابقة قريباً إن شاء الله</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};