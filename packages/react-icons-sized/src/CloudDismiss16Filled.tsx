import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.93 3.37A3.82 3.82 0 018 2c.85 0 1.84.28 2.63.93a3.68 3.68 0 011.3 2.26A5.5 5.5 0 005.1 11.5H4.5c-1.35 0-2.26-.41-2.81-1.05A2.95 2.95 0 011 8.5c0-1.18.97-2.77 3.03-2.98.08-.72.37-1.5.9-2.15zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 10-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const CloudDismiss16Filled = wrapIcon(rawSvg({}), 'CloudDismiss16Filled');
export default CloudDismiss16Filled;
      