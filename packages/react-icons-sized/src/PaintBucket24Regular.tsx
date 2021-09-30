import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2.25a.75.75 0 00-1.5 0V3.5c-.3.1-.6.28-.84.53l-6.88 6.88c-.88.88-.88 2.3 0 3.18l4.88 4.88c.88.88 2.3.88 3.18 0l6.88-6.88c.88-.88.88-2.3 0-3.18l-4.88-4.88A2.24 2.24 0 0012 3.5V2.25zm-8.16 9.72l6.66-6.66v1.44a.75.75 0 001.5 0V5.31l4.66 4.66c.3.3.3.77 0 1.06l-.97.97H3.8l.03-.03zm.47 1.53h9.88l-4.41 4.4c-.3.3-.77.3-1.06 0l-4.4-4.4z" fill={primaryFill} /><path d="M19.52 13.6a.87.87 0 00-1.54 0l-2 3.77a3.15 3.15 0 105.55 0l-2-3.77zm-2.23 4.47l1.46-2.73 1.46 2.73a1.65 1.65 0 11-2.92 0z" fill={primaryFill} /></svg>;
}

const PaintBucket24Regular = wrapIcon(rawSvg({}), 'PaintBucket24Regular');
export default PaintBucket24Regular;
      