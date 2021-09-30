import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 12a9 9 0 0113.98-7.5H12a7.5 7.5 0 100 15V18h6.7A9 9 0 013 12z" fill={primaryFill} /><path d="M18.23 5.5H12V7h7.48a9.05 9.05 0 00-1.25-1.5z" fill={primaryFill} /><path d="M12 8h8.06c.24.48.44.98.59 1.5H12V8z" fill={primaryFill} /><path d="M20.88 10.5H12V12h9c0-.51-.04-1.01-.12-1.5z" fill={primaryFill} /><path d="M12 13h8.95a8.96 8.96 0 01-.3 1.5H12V13z" fill={primaryFill} /><path d="M20.3 15.5H12V17h7.48c.32-.47.6-.97.81-1.5z" fill={primaryFill} /></svg>;
}

const Blur24Regular = wrapIcon(rawSvg({}), 'Blur24Regular');
export default Blur24Regular;
      