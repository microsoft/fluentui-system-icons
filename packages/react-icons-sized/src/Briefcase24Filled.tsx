import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 3c.41 0 .75.34.75.75V7h1.75C19.55 7 21 8.46 21 10.25v6.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 16.75v-6.5C3 8.45 4.46 7 6.25 7H8V3.75c0-.38.28-.7.65-.74l.1-.01h6.5zm-.75 1.5h-5V7h5V4.5z" fill={primaryFill} /></svg>;
}

const Briefcase24Filled = wrapIcon(rawSvg({}), 'Briefcase24Filled');
export default Briefcase24Filled;
      