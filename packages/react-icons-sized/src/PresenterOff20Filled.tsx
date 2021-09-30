import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.15 7.85c-.1.2-.15.42-.15.65V9h1.3l1 1H3.5a.5.5 0 00-.36.86l3.7 3.56c.1.1.16.23.16.36v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 01.15-.36l.29-.27 3.7 3.7a.5.5 0 00.71-.7l-10-10-5-5a.5.5 0 10-.7.7l5 5z" fill={primaryFill} /><path d="M16.86 10.86l-1.98 1.9L12.12 10h4.39a.5.5 0 01.35.86z" fill={primaryFill} /><path d="M13 9h-1.88l-2-2h2.38c.83 0 1.5.67 1.5 1.5V9z" fill={primaryFill} /><path d="M10 6a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const PresenterOff20Filled = wrapIcon(rawSvg({}), 'PresenterOff20Filled');
export default PresenterOff20Filled;
      