import React from 'react';
import assets from '../assets/assets';

const DigitalSolutions = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-500 dark:text-white/75 mb-2">How can we help?</h1>
          <p className="text-lg text-gray-500 dark:text-white/75 max-w-2xl mx-auto">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 p-6 rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg transition-all">
            <div className="flex-shrink-0">
              <img src={assets.ads_icon} alt="Advertising" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-500 dark:text-white/75 mb-2">Advertising</h3>
              <p className="text-gray-500 dark:text-white/75">We turn bold ideas into powerful digital solutions that connect, engage...</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg transition-all">
            <div className="flex-shrink-0">
              <img src={assets.marketing_icon} alt="Content marketing" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-500 dark:text-white/75 mb-2">Content marketing</h3>
              <p className="text-gray-500 dark:text-white/75">We turn bold ideas into powerful digital solutions that connect, engage and...</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg transition-all">
            <div className="flex-shrink-0">
              <img src={assets.content_icon} alt="Content writing" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-500 dark:text-white/75">Content writing</h3>
              <p className="text-gray-500 dark:text-white/75">We turn bold ideas into powerful digital solutions that connect...</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg transition-all">
            <div className="flex-shrink-0">
              <img src={assets.social_icon} alt="Social media" className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-500 dark:text-white/75">Social media</h3>
              <p className="text-gray-500 dark:text-white/75">We turn bold ideas into powerful digital solutions that connect, engage...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSolutions;