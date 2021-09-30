import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 15a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2z" fill={primaryFill} /><path d="M12 4h8a1 1 0 011 1v4h3a4 4 0 014 4v10a4 4 0 01-4 4H8a4 4 0 01-4-4V13a4 4 0 014-4h3V5a1 1 0 011-1zm7 5V6h-6v3h6zM8 11a2 2 0 00-2 2v10c0 1.1.9 2 2 2h16a2 2 0 002-2V13a2 2 0 00-2-2H8z" fill={primaryFill} /></svg>;
}

const BriefcaseMedical32Regular = wrapIcon(rawSvg({}), 'BriefcaseMedical32Regular');
export default BriefcaseMedical32Regular;
      