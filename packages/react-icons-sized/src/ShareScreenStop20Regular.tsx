import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.15 7.15c.2-.2.5-.2.7 0L10 9.29l2.15-2.14a.5.5 0 01.7.7L10.71 10l2.14 2.15a.5.5 0 01-.7.7L10 10.71l-2.15 2.14a.5.5 0 01-.7-.7L9.29 10 7.15 7.85a.5.5 0 010-.7z" fill={primaryFill} /><path d="M2 6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5v-7zM4.5 5C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11z" fill={primaryFill} /></svg>;
}

const ShareScreenStop20Regular = wrapIcon(rawSvg({}), 'ShareScreenStop20Regular');
export default ShareScreenStop20Regular;
      