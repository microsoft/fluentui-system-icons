import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8.09l.01-.03.04-.12c.04-.11.1-.25.2-.39.2-.26.56-.55 1.26-.55.64 0 1.04.2 1.26.5.24.3.36.76.25 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41l-.43.18c-.5.21-1.05.5-1.47 1a3.27 3.27 0 00-.69 2.19.5.5 0 00.5.5h4a.5.5 0 000-1H6.04c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.48-.31.89-.76 1.01-1.49.14-.84.02-1.62-.44-2.2C9.1 6.29 8.37 6 7.5 6a2.44 2.44 0 00-2.48 1.88v.03h-.01c0 .03-.04.27 0 0A.5.5 0 006 8.1zm5.86 2.06a.5.5 0 10-.7.7L12.3 12l-1.15 1.15a.5.5 0 00.7.7L13 12.71l1.15 1.14a.5.5 0 10.7-.7L13.71 12l1.14-1.15a.5.5 0 00-.7-.7L13 11.29l-1.14-1.14z" fill={primaryFill} /></svg>;
}

const Multiplier2X20Regular = wrapIcon(rawSvg({}), 'Multiplier2X20Regular');
export default Multiplier2X20Regular;
      