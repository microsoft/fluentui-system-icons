import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5a1 1 0 01.12 2H7a3 3 0 00-.18 6H9a1 1 0 01.12 2H7a5 5 0 01-.22-10H9zm8 0a5 5 0 014.43 7.32 6.48 6.48 0 00-1.76-.95A3 3 0 0017.17 7H15a1 1 0 01-.12-2H17zM7 9h10a1 1 0 01.12 2H7a1 1 0 01-.12-2H7zm16 8.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const LinkDismiss24Filled = wrapIcon(rawSvg({}), 'LinkDismiss24Filled');
export default LinkDismiss24Filled;
      