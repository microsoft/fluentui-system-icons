import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.33 7a1.75 1.75 0 11-1.58-1h4.5a1.75 1.75 0 11-1.58 1H7.33zM5 7.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM10.25 7a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /><path d="M3.5 3C2.67 3 2 3.67 2 4.5V11c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5h-9zM3 4.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V11a.5.5 0 01-.5.5h-9A.5.5 0 013 11V4.5z" fill={primaryFill} /></svg>;
}

const Voicemail16Regular = wrapIcon(rawSvg({}), 'Voicemail16Regular');
export default Voicemail16Regular;
      