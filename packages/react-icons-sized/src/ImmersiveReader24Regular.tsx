import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.13 19.5H3.75c-.97 0-1.75-.78-1.75-1.75v-13C2 3.78 2.78 3 3.75 3h6c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h6c.97 0 1.75.78 1.75 1.75v7.42a1.75 1.75 0 00-1.5 0V4.75a.25.25 0 00-.25-.25h-6c-.69 0-1.25.56-1.25 1.25V15H12a1 1 0 00-1 1V5.75c0-.69-.56-1.25-1.25-1.25h-6a.25.25 0 00-.25.25v13c0 .14.11.25.25.25H11v1a1 1 0 00.13.5z" fill={primaryFill} /><path d="M21.23 13.17c.25.21.59.58.91 1.13.54.9.86 1.96.86 3.2 0 1.24-.32 2.3-.86 3.2-.32.55-.66.92-.91 1.13a.75.75 0 11-.96-1.16c.13-.1.35-.35.59-.74.4-.67.64-1.48.64-2.43 0-.95-.24-1.76-.64-2.43-.24-.39-.46-.64-.59-.74a.75.75 0 11.96-1.16z" fill={primaryFill} /><path d="M19.2 14.65a3.73 3.73 0 011.3 2.85 3.73 3.73 0 01-1.3 2.85.75.75 0 01-.98-1.13l.08-.07a2.24 2.24 0 00.7-1.65 2.24 2.24 0 00-.7-1.65.75.75 0 01.9-1.2z" fill={primaryFill} /><path d="M16.51 14.05c.3.1.49.39.49.7v5.5a.75.75 0 01-1.31.5L14.16 19h-1.41a.75.75 0 01-.75-.75v-1.5c0-.41.34-.75.75-.75h1.41l1.53-1.74c.2-.24.53-.32.82-.21z" fill={primaryFill} /></svg>;
}

const ImmersiveReader24Regular = wrapIcon(rawSvg({}), 'ImmersiveReader24Regular');
export default ImmersiveReader24Regular;
      