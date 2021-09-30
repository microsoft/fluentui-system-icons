import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 1.5a.5.5 0 10-1 0v1a.5.5 0 001 0v-1zm2.85-.35a.5.5 0 00-.7 0l-1 1a.5.5 0 10.7.7l1-1a.5.5 0 000-.7zm-8 8.7a.5.5 0 10-.7-.7l-1 1a.5.5 0 00.7.7l1-1zm1.71-8a1.5 1.5 0 00-2.12 0l-1.3 1.3A.5.5 0 005 3.5v3.8l-3.65 3.64a1.5 1.5 0 000 2.12l1.59 1.59a1.5 1.5 0 002.12 0L8.71 11h3.79a.5.5 0 00.35-.15l1.3-1.29a1.5 1.5 0 000-2.12L8.56 1.85zm-1.41.71c.2-.2.5-.2.7 0l5.59 5.59c.2.2.2.5 0 .7l-.94.94L6.2 3.5l.95-.94zM6 4.71L11.3 10H8.5a.5.5 0 00-.35.15l-3.8 3.79a.5.5 0 01-.7 0l-1.59-1.59a.5.5 0 010-.7l3.8-3.8A.5.5 0 006 7.5V4.7zm7.5.29h1a.5.5 0 100-1h-1a.5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const Flashlight16Regular = wrapIcon(rawSvg({}), 'Flashlight16Regular');
export default Flashlight16Regular;
      