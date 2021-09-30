import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4a1 1 0 00-1 1v4H8a4 4 0 00-4 4v10a4 4 0 004 4h16a4 4 0 004-4V13a4 4 0 00-4-4h-3V5a1 1 0 00-1-1h-8zm7 5h-6V6h6v3zm-2 6v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 112 0z" fill={primaryFill} /></svg>;
}

const BriefcaseMedical32Filled = wrapIcon(rawSvg({}), 'BriefcaseMedical32Filled');
export default BriefcaseMedical32Filled;
      