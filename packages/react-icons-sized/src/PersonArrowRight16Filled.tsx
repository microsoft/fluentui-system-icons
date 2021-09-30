import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.33 6.92a5.5 5.5 0 013.3-1.85 2.75 2.75 0 10-3.3 1.85z" fill={primaryFill} /><path d="M5 10.5c0-.9.22-1.75.6-2.5H3.5C2.67 8 2 8.67 2 9.5v.5c0 1.8 1.55 3.65 4.22 3.96A5.48 5.48 0 015 10.5z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L11.29 10H8.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /></svg>;
}

const PersonArrowRight16Filled = wrapIcon(rawSvg({}), 'PersonArrowRight16Filled');
export default PersonArrowRight16Filled;
      