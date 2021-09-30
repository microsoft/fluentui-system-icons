import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 5a.75.75 0 01.11 1.5H7a3.5 3.5 0 00-.2 7h2.45a.75.75 0 01.11 1.5H7a5 5 0 01-.25-10h2.5zM17 5a5 5 0 014.43 7.32 6.5 6.5 0 00-1.3-.76A3.5 3.5 0 0017.2 6.5L17 6.5h-2.25a.75.75 0 01-.11-1.5H17zM7 9.25h10a.75.75 0 01.1 1.5H7a.75.75 0 01-.1-1.5H7zm16 8.25a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const LinkDismiss24Regular = wrapIcon(rawSvg({}), 'LinkDismiss24Regular');
export default LinkDismiss24Regular;
      