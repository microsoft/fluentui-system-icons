import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.48 11h-1.96l.98-2.32.98 2.32z" fill={primaryFill} /><path d="M3 5.75A2.75 2.75 0 015.75 3h16.5A2.75 2.75 0 0125 5.75v8.79A7.47 7.47 0 0014.45 16H7.23a.75.75 0 000 1.5h6.35a7.47 7.47 0 00.87 7.5h-8.7A2.75 2.75 0 013 22.25V5.75zm9.2.7a.75.75 0 00-1.39 0l-2.75 6.51a.75.75 0 101.38.58l.44-1.04h3.24l.44 1.04a.75.75 0 001.38-.58l-2.75-6.5zm-5.72 14.3c0 .42.33.75.75.75h4.52a.75.75 0 000-1.5H7.23a.75.75 0 00-.75.75zm12.02-14a.75.75 0 00-1.5 0V8h-1.25a.75.75 0 000 1.5H17v1.25a.75.75 0 001.5 0V9.5h1.25a.75.75 0 000-1.5H18.5V6.75z" fill={primaryFill} /><path d="M26.95 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20h-3.5a.5.5 0 000 1h3.5v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1h-3.5v-3.5z" fill={primaryFill} /></svg>;
}

const QuizNew28Filled = wrapIcon(rawSvg({}), 'QuizNew28Filled');
export default QuizNew28Filled;
      