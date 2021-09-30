import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.85 7.15a.5.5 0 10-.7.7L9.29 10l-2.14 2.15a.5.5 0 00.7.7L10 10.71l2.15 2.14a.5.5 0 00.7-.7L10.71 10l2.14-2.15a.5.5 0 00-.7-.7L10 9.29 7.85 7.15z" fill={primaryFill} /><path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42zM4 5.43a15.97 15.97 0 005.6-2.08l.4-.25.4.25A15.97 15.97 0 0016 5.43V9.5c0 3.4-1.97 5.86-6 7.46-4.03-1.6-6-4.07-6-7.46V5.43z" fill={primaryFill} /></svg>;
}

const ShieldDismiss20Regular = wrapIcon(rawSvg({}), 'ShieldDismiss20Regular');
export default ShieldDismiss20Regular;
      