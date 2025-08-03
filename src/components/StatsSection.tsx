import React from 'react';
import { Users, Trophy, TrendingUp, Target } from 'lucide-react';
import { ContestStats } from '../types';

interface StatsSectionProps {
  stats: ContestStats;
  isDarkMode?: boolean;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats, isDarkMode = false }) => {
  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-700' 
        : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          إحصائيات المسابقة
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
            isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'
          }`}>
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>-</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>إجمالي المشاركين</p>
          </div>

          <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
            isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'
          }`}>
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-green-600" />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>-</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>أعلى درجة</p>
          </div>

          <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
            isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'
          }`}>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>-</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>المتوسط العام</p>
          </div>

          <div className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
            isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white'
          }`}>
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{stats.categories.length}</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>عدد الفئات</p>
          </div>
        </div>

        <div className={`mt-12 p-8 rounded-2xl shadow-lg transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-700' : 'bg-white'
        }`}>
          <h3 className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>الفئات المشاركة</h3>
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 hover:from-blue-800/40 hover:to-purple-800/40' 
                : 'bg-gradient-to-r from-blue-100 to-purple-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>ثلاثة أجزاء</p>
            </div>
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 hover:from-green-800/40 hover:to-blue-800/40' 
                : 'bg-gradient-to-r from-green-100 to-blue-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>خمسة أجزاء</p>
            </div>
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 hover:from-purple-800/40 hover:to-pink-800/40' 
                : 'bg-gradient-to-r from-purple-100 to-pink-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>ثمانية أجزاء</p>
            </div>
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-orange-900/30 to-yellow-900/30 hover:from-orange-800/40 hover:to-yellow-800/40' 
                : 'bg-gradient-to-r from-orange-100 to-yellow-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>عشرة أجزاء</p>
            </div>
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-pink-900/30 to-red-900/30 hover:from-pink-800/40 hover:to-red-800/40' 
                : 'bg-gradient-to-r from-pink-100 to-red-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>خمسة عشر جزءا</p>
            </div>
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-indigo-900/30 to-purple-900/30 hover:from-indigo-800/40 hover:to-purple-800/40' 
                : 'bg-gradient-to-r from-indigo-100 to-purple-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>عشرون جزءا</p>
            </div>
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-yellow-900/30 to-orange-900/30 hover:from-yellow-800/40 hover:to-orange-800/40' 
                : 'bg-gradient-to-r from-yellow-100 to-orange-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>خمسة وعشرون جزءا</p>
            </div>
            <div className={`p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-red-900/30 to-pink-900/30 hover:from-red-800/40 hover:to-pink-800/40' 
                : 'bg-gradient-to-r from-red-100 to-pink-100'
            }`}>
              <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>ثلاثون جزءا</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};