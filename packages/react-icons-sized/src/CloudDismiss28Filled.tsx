import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a6.5 6.5 0 00-6.48 6h-.27a4.75 4.75 0 100 9.5H13a7.5 7.5 0 0112.41-5.67A4.75 4.75 0 0020.75 10h-.27A6.5 6.5 0 0014 4zm13 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-9.15-3.35a.5.5 0 00-.7.7l2.64 2.65-2.64 2.65a.5.5 0 00.7.7l2.65-2.64 2.65 2.64a.5.5 0 00.7-.7l-2.64-2.65 2.64-2.65a.5.5 0 00-.7-.7l-2.65 2.64-2.65-2.64z" fill={primaryFill} /></svg>;
}

const CloudDismiss28Filled = wrapIcon(rawSvg({}), 'CloudDismiss28Filled');
export default CloudDismiss28Filled;
      