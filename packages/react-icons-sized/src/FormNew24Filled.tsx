import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 10a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /><path d="M7.5 16.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v6.27a6.46 6.46 0 00-3.04-1 .75.75 0 00-.7-1.02h-5.01a.75.75 0 000 1.5h2.74a6.5 6.5 0 00-2.97 9.5H5.75A2.75 2.75 0 013 18.25V5.75zm3 5a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM8.25 14a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-1.5-6.5h10.5a.75.75 0 000-1.5H6.75a.75.75 0 000 1.5z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 3a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18v2.5z" fill={primaryFill} /></svg>;
}

const FormNew24Filled = wrapIcon(rawSvg({}), 'FormNew24Filled');
export default FormNew24Filled;
      