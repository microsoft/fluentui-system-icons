import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.04 16a11 11 0 0121.92 0h.29a7.75 7.75 0 017.7 8.63 13.08 13.08 0 00-2.68-2.4 5.25 5.25 0 00-5.02-3.73h-1.5c-.69 0-1.25-.56-1.25-1.25V17a8.5 8.5 0 00-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 100 10.5h7.88c-.26.8-.45 1.64-.54 2.5h-7.34a7.75 7.75 0 010-15.5h.3zM44 33a11 11 0 11-22 0 11 11 0 0122 0zm-5.3-4.3a1 1 0 00-1.4-1.4L33 31.58l-4.3-4.3a1 1 0 00-1.4 1.42L31.58 33l-4.3 4.3a1 1 0 001.42 1.4L33 34.42l4.3 4.3a1 1 0 001.4-1.42L34.42 33l4.3-4.3z" fill={primaryFill} /></svg>;
}

const CloudDismiss48Regular = wrapIcon(rawSvg({}), 'CloudDismiss48Regular');
export default CloudDismiss48Regular;
      