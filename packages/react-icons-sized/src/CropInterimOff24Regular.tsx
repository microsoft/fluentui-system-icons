import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.06 1.06a2.49 2.49 0 001.26 3.47l-.82 5.31A2.5 2.5 0 106.5 17h7a2.5 2.5 0 003.16.72l1.8 1.8a4.98 4.98 0 01-5.95-.02h.84a.75.75 0 00-.1-1.5h-2.6a.75.75 0 00-.65.75v2.6c.05.37.37.65.75.65h.1a.75.75 0 00.65-.75v-.63a6.48 6.48 0 008.04-.02l1.18 1.18a.75.75 0 001.06-1.06L3.28 2.22zm10 12.13c-.17.34-.28.73-.28 1.15H7v-.19a2.5 2.5 0 00-1.76-2.2l.8-5.16c.22-.05.43-.13.62-.23l6.63 6.63zm-8.78.15a1 1 0 01.16.01l.08.02.13.04.1.05a1 1 0 01.52.76l.01.12v.12a1 1 0 01-1 .88h-.12a1 1 0 010-2h.12z" fill={primaryFill} /><path d="M7.18 4l1.5 1.5h3.3l.01.17a2.5 2.5 0 001.97 2.28l.52 3.35 1.8 1.8-.82-5.3A2.5 2.5 0 1012.5 4h-5.3zm6.58 2.2a1 1 0 01.61-1.69h.27l.08.02.15.05.1.06v-.01a1 1 0 01.3 1.5l-.08.08-.1.1-.1.06-.09.04-.12.05-.17.04h-.25l-.08-.02-.09-.02-.1-.04-.1-.05-.08-.05-.12-.1-.03-.02z" fill={primaryFill} /><path d="M20.25 17.07l1.16 1.16a6.5 6.5 0 00-4.74-9.12l.25 1.6a5 5 0 013.33 6.36z" fill={primaryFill} /></svg>;
}

const CropInterimOff24Regular = wrapIcon(rawSvg({}), 'CropInterimOff24Regular');
export default CropInterimOff24Regular;
      