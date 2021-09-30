import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v.75h-1V5.5c0-.83-.67-1.5-1.5-1.5h-9C2.67 4 2 4.67 2 5.5v5c0 .83.67 1.5 1.5 1.5h3.53a3.45 3.45 0 00.03 1H3.5A2.5 2.5 0 011 10.5v-5zM11.5 10a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 008 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 0015 12.38c0-.72-.6-1.3-1.33-1.3H9.33z" fill={primaryFill} /></svg>;
}

const ShareScreenPerson16Regular = wrapIcon(rawSvg({}), 'ShareScreenPerson16Regular');
export default ShareScreenPerson16Regular;
      