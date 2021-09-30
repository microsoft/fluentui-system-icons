import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 8.5a.5.5 0 000 1h6.7c.24-.11.5-.2.75-.28a.5.5 0 00-.45-.72h-7zm10.5.7V9a7 7 0 10-6.8 7c.1.34.23.67.39.98L9 17a8 8 0 117.98-7.41A5.46 5.46 0 0016 9.2zm3 5.3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.4-2.6a.5.5 0 00-.7 0l-1.75 1.75a.5.5 0 000 .7l1.75 1.75a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75h-1.54l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const SubtractCircleArrowBackRegular = wrapIcon(rawSvg({}), 'SubtractCircleArrowBackRegular');
export default SubtractCircleArrowBackRegular;
      