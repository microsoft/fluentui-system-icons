import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.8 10h4.7a.75.75 0 01.1 1.49H4.8c-.68 0-1.2.46-1.27 1v.12l-.03 4.78c0 .56.49 1.04 1.14 1.1H19.23c.67 0 1.2-.44 1.26-1l.01-.1.02-4.78c0-.56-.49-1.05-1.14-1.1l-.13-.01h-4.7a.75.75 0 01-.1-1.5h4.8a2.7 2.7 0 012.77 2.44v.17L22 17.39c0 1.4-1.16 2.52-2.6 2.6H4.77a2.7 2.7 0 01-2.76-2.44L2 17.38l.02-4.77c0-1.4 1.16-2.52 2.6-2.6l.17-.01h4.7-4.7zm7.65-6.85l.08.07 3.93 3.92a.75.75 0 01-.98 1.14l-.09-.07-2.65-2.66v9.7a.75.75 0 01-1.5 0V5.57L8.61 8.2a.75.75 0 01-.98.07l-.09-.07a.75.75 0 01-.07-.98l.07-.09 3.93-3.92a.75.75 0 01.98-.07z" fill={primaryFill} /></svg>;
}

const Dock24Regular = wrapIcon(rawSvg({}), 'Dock24Regular');
export default Dock24Regular;
      