import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 11h4.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6-4.5zm1.47-5.78a.75.75 0 01.98-.07l.08.07 3.5 3.5a.75.75 0 01-.98 1.13l-.08-.07-3.5-3.5a.75.75 0 010-1.06zM11.75 3c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const New16Filled = wrapIcon(rawSvg({}), 'New16Filled');
export default New16Filled;
      