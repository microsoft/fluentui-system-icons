import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 2A.75.75 0 0016 2v1a.75.75 0 001.5 0V2zm4.03.47a.75.75 0 00-1.06 0l-2 2a.75.75 0 001.06 1.06l2-2c.3-.3.3-.77 0-1.06zM8.03 17.03l1.5-1.5a.75.75 0 10-1.06-1.06l-1.5 1.5a.75.75 0 101.06 1.06zM8.25 6v4.69L3.03 15.9c-.88.88-.88 2.3 0 3.18l1.88 1.88c.88.88 2.3.88 3.18 0l5.22-5.22H18c.2 0 .39-.08.53-.22l1.94-1.94c.88-.88.88-2.3 0-3.18l-6.88-6.88a2.25 2.25 0 00-3.18 0L8.47 5.47a.75.75 0 00-.22.53zm3.22-1.4c.3-.3.77-.3 1.06 0l6.88 6.87c.3.3.3.77 0 1.06L18 13.93 10.06 6l1.41-1.4zM9.75 7.8l6.44 6.44H13.3l-3.56-3.56V7.8zM9 12.06L11.94 15l-4.91 4.9c-.3.3-.77.3-1.06 0l-1.88-1.87a.75.75 0 010-1.06L9 12.07zM21 8h1a.75.75 0 000-1.5h-1A.75.75 0 0021 8z" fill={primaryFill} /></svg>;
}

const Flashlight24Regular = wrapIcon(rawSvg({}), 'Flashlight24Regular');
export default Flashlight24Regular;
      