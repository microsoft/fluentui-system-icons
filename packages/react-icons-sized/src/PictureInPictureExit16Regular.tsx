import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7a1 1 0 001-1V3a1 1 0 00-1-1H2a1 1 0 00-1 1v3a1 1 0 001 1h5zm2-2h3.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 013 11.5V8H2v3.5A2.5 2.5 0 004.5 14h8a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0012.5 4H9v1zm2 4.3v-.8a.5.5 0 011 0v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.8L8.64 8.35a.5.5 0 11.7-.7L11 9.29z" fill={primaryFill} /></svg>;
}

const PictureInPictureExit16Regular = wrapIcon(rawSvg({}), 'PictureInPictureExit16Regular');
export default PictureInPictureExit16Regular;
      