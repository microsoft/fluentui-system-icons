import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-6-1.8v4.8a.5.5 0 001 0V4.7l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 00.7.7L16 4.71zm-6 1.8c0-.17 0-.33.02-.5H3.75C2.78 6 2 6.78 2 7.75v12.5C2 21.2 2.78 22 3.75 22h16.5c.96 0 1.75-.78 1.75-1.75V9.97c-.4.64-.91 1.2-1.5 1.66v8.62c0 .14-.12.25-.25.25h-7.5v-8.7c-.58-.4-1.09-.9-1.5-1.47V20.5h-7.5a.25.25 0 01-.25-.25V7.75c0-.14.11-.25.25-.25h6.33a6.55 6.55 0 01-.08-1zm6.99 11.75a.75.75 0 00-.75-.75h-1.6a.75.75 0 00.1 1.5h1.6a.75.75 0 00.65-.75zm-7 0a.75.75 0 00-.75-.75h-1.6a.75.75 0 00.1 1.5h1.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const DualScreenArrowUp24Regular = wrapIcon(rawSvg({}), 'DualScreenArrowUp24Regular');
export default DualScreenArrowUp24Regular;
      