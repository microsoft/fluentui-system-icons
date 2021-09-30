import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.52 9L10 7.73 9.48 9h1.04z" fill={primaryFill} /><path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h6.27a6.47 6.47 0 01-.52-6H5.75a.75.75 0 010-1.5h6.63A6.49 6.49 0 0121 12.02V5.75A2.75 2.75 0 0018.25 3H5.75zm3.5 15.5h-3.5a.75.75 0 010-1.5h3.5a.75.75 0 010 1.5zm1.44-13.04l2.25 5.5a.75.75 0 01-1.39.57l-.42-1.03H8.87l-.43 1.03a.75.75 0 01-1.38-.56l2.25-5.5a.75.75 0 011.38 0zm5.81.29V7h1.25a.75.75 0 010 1.5H16.5v1.25a.75.75 0 01-1.5 0V8.5h-1.25a.75.75 0 010-1.5H15V5.75a.75.75 0 011.5 0z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
}

const QuizNew24Filled = wrapIcon(rawSvg({}), 'QuizNew24Filled');
export default QuizNew24Filled;
      