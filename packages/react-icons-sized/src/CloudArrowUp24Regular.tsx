import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 7.75a5.75 5.75 0 0111.32 0h.09a4 4 0 013.96 4.55c-.45-.53-1-1-1.6-1.36a2.5 2.5 0 00-2.36-1.69h-.76a.75.75 0 01-.75-.71 4.25 4.25 0 00-8.48 0 .75.75 0 01-.75.71H6a2.5 2.5 0 000 5h4.4c-.18.48-.3.98-.36 1.5H6a4 4 0 010-8h.09zM22 16.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-6-1.8v4.8a.5.5 0 001 0v-4.8l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 00.7.7L16 14.71z" fill={primaryFill} /></svg>;
}

const CloudArrowUp24Regular = wrapIcon(rawSvg({}), 'CloudArrowUp24Regular');
export default CloudArrowUp24Regular;
      