import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06L6.94 8h-.19A3.75 3.75 0 003 11.75v8.5A3.75 3.75 0 006.75 24h14.5c.5 0 .98-.1 1.41-.28l2.06 2.06a.75.75 0 101.06-1.06L3.28 2.22zm18.15 20.27l-.18.01H6.75c-1.24 0-2.25-1-2.25-2.25v-8.5c0-1.24 1-2.25 2.25-2.25h1.69l13 13zm2.07-2.24v.07l1.26 1.26c.15-.42.24-.86.24-1.33v-8.5A3.75 3.75 0 0021.25 8H19V3.75a.75.75 0 00-.75-.75h-8.5a.75.75 0 00-.75.75v2.07l1.5 1.5V4.5h7V8h-6.32l1.5 1.5h8.57c1.24 0 2.25 1 2.25 2.25v8.5z" fill={primaryFill} /></svg>;
}

const BriefcaseOff28Regular = wrapIcon(rawSvg({}), 'BriefcaseOff28Regular');
export default BriefcaseOff28Regular;
      