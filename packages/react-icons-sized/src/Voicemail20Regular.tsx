import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.73 9A2 2 0 117 8h6a2 2 0 11-1.73 1H8.73zM6 10a1 1 0 102 0 1 1 0 00-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V6z" fill={primaryFill} /></svg>;
}

const Voicemail20Regular = wrapIcon(rawSvg({}), 'Voicemail20Regular');
export default Voicemail20Regular;
      