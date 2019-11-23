import React from 'react';
import Social from './social';
import { FormattedMessage, injectIntl } from 'react-intl';
import { MdKeyboardArrowUp } from "react-icons/md"


const Footer = () => {
  return (
    <footer className="px-10 py-20 text-center border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900">
      <h3 className="text-xl font-bold dark:text-secondary_dark">Antonin Nhek</h3>
      <div className="flex justify-center py-5 mb-4">
        <Social value="text-primary hover:text-gray-800 dark:text-white dark:hover:text-secondary_dark link"/>
      </div>
      <p className="text-base text-gray-700 dark:text-gray-200"><FormattedMessage id="footer_info" /> Antonin Nhek © {new Date().getFullYear()} <br/>
      {` `}
      Powered by <a className="text-primary dark:text-white dark:hover:text-secondary_dark" href="https://reactjs.org/" title="ReactJS">React</a>, <a className="text-primary dark:text-white dark:hover:text-secondary_dark" href="https://www.gatsbyjs.org">Gatsby</a> & <a className="text-primary dark:text-white dark:hover:text-secondary_dark" href="https://tailwindcss.com">Tailwind CSS</a></p>
      <div className="flex justify-center mt-8">
        <a href="#top" className="text-primary hover:text-tertiary dark:text-white dark:hover:text-secondary_dark">Back to Top <MdKeyboardArrowUp className="inline text-xl"/></a>
      </div>
    </footer>
  );
}
 
export default injectIntl(Footer);