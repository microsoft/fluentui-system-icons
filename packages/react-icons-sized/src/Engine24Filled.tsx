import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 3c.41 0 .75.34.75.75V5h2V3.75a.75.75 0 011.5 0V5h2.75c.3 0 .58.19.7.47l.8 2.03h1A2.75 2.75 0 0122 10.25v5.5a2.75 2.75 0 01-2.75 2.75h-1l-.8 2.03a.75.75 0 01-.7.47h-7.5c-.2 0-.4-.09-.55-.24L5.74 17.6A2.75 2.75 0 015 15.7V12.5H3.5v3.75a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V11H5V7.75A2.75 2.75 0 017.75 5H9V3.75c0-.41.34-.75.75-.75zm.75 6.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 0011.75 15h6.5a.75.75 0 000-1.5H14V9.75a.75.75 0 00-1.5 0v3.75h-.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" fill={primaryFill} /></svg>;
}

const Engine24Filled = wrapIcon(rawSvg({}), 'Engine24Filled');
export default Engine24Filled;
      