import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 8.5a.5.5 0 000 1h6.7c.24-.11.5-.2.75-.28a.5.5 0 00-.45-.72h-7zm10.5.7V9a7 7 0 10-6.8 7c.1.34.23.67.39.98L9 17a8 8 0 117.98-7.41A5.46 5.46 0 0016 9.2zm-6 5.3a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 010 .7L16.1 16.1a.5.5 0 01-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 01-1 0v-.25a2.75 2.75 0 012.75-2.75h1.54l-.9-.9a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const CircleSubtractArrowForward20Regular = wrapIcon(rawSvg({}), 'CircleSubtractArrowForward20Regular');
export default CircleSubtractArrowForward20Regular;
      