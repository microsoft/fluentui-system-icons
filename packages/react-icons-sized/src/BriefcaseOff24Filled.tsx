import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l3.73 3.73A3.25 3.25 0 003 10.25v6.5C3 18.55 4.46 20 6.25 20h11.5c.36 0 .7-.06 1.02-.16l1.95 1.94a.75.75 0 001.06-1.06L3.28 2.22zM21 16.75c0 .32-.05.64-.14.93L10.18 7h4.32V4.5h-5v1.82L8 4.82V3.75c0-.38.28-.7.65-.74l.1-.01h6.5c.41 0 .75.34.75.75V7h1.75C19.55 7 21 8.46 21 10.25v6.5z" fill={primaryFill} /></svg>;
}

const BriefcaseOff24Filled = wrapIcon(rawSvg({}), 'BriefcaseOff24Filled');
export default BriefcaseOff24Filled;
      