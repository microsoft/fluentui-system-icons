import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l3.73 3.73A3.25 3.25 0 003 10.25v6.5C3 18.55 4.46 20 6.25 20h11.5c.36 0 .7-.06 1.02-.16l1.95 1.94a.75.75 0 001.06-1.06L3.28 2.22zM17.44 18.5H6.25c-.97 0-1.75-.78-1.75-1.75v-6.5c0-.97.78-1.75 1.75-1.75h1.19l10 10zm2.06-8.25v6.07l1.36 1.36c.1-.3.14-.6.14-.93v-6.5C21 8.45 19.55 7 17.75 7H16V3.65a.75.75 0 00-.75-.65h-6.6a.75.75 0 00-.65.75v1.07l1.5 1.5V4.5h5V7h-4.32l1.5 1.5h6.07c.97 0 1.75.78 1.75 1.75z" fill={primaryFill} /></svg>;
}

const BriefcaseOff24Regular = wrapIcon(rawSvg({}), 'BriefcaseOff24Regular');
export default BriefcaseOff24Regular;
      