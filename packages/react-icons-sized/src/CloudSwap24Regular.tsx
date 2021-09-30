import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 9A5.75 5.75 0 0117.4 9h.09a4 4 0 013.9 4.92l-1.41-1.4a1.57 1.57 0 00-.05-.05 2.5 2.5 0 00-2.44-1.97h-.76a.75.75 0 01-.75-.71 4.25 4.25 0 00-8.48 0 .75.75 0 01-.75.71H6a2.5 2.5 0 000 5h3.17a1.75 1.75 0 000 1.5H6a4 4 0 010-8h.09zm7.69 5.28a.75.75 0 10-1.06-1.06l-2.5 2.5c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 101.06-1.06L12.56 17h6.88l-1.22 1.22a.75.75 0 101.06 1.06l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 10-1.06 1.06l1.22 1.22h-6.88l1.22-1.22z" fill={primaryFill} /></svg>;
}

const CloudSwap24Regular = wrapIcon(rawSvg({}), 'CloudSwap24Regular');
export default CloudSwap24Regular;
      