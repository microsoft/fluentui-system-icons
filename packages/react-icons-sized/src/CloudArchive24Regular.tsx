import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 9.75a5.75 5.75 0 0111.32 0h.09A4 4 0 0121.1 12h-1.81a2.5 2.5 0 00-1.79-.75h-.76a.75.75 0 01-.75-.71 4.25 4.25 0 00-8.48 0 .75.75 0 01-.75.71H6a2.5 2.5 0 000 5h5.44a2 2 0 00.56.48v1.02H6a4 4 0 010-8h.09zM12 14a1 1 0 011-1h9a1 1 0 011 1v1a1 1 0 01-1 1h-9a1 1 0 01-1-1v-1zm10 3h-9v4c0 1.1.9 2 2 2h5a2 2 0 002-2v-4zm-6 1h3a.5.5 0 010 1h-3a.5.5 0 110-1z" fill={primaryFill} /></svg>;
}

const CloudArchive24Regular = wrapIcon(rawSvg({}), 'CloudArchive24Regular');
export default CloudArchive24Regular;
      