import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v12.5c0 1.1.9 2 2 2H11.14A1 1 0 0111 19v-1.5H4V5h6a1 1 0 011 1v10a1 1 0 011-1h1V6a1 1 0 011-1h6v7.17a1.75 1.75 0 012 .35V5a2 2 0 00-2-2h-6c-.77 0-1.47.29-2 .76A2.99 2.99 0 0010 3H4z" fill={primaryFill} /><path d="M21.23 13.17c.25.21.59.58.91 1.13.54.9.86 1.96.86 3.2 0 1.24-.32 2.3-.86 3.2-.32.55-.66.92-.91 1.13a.75.75 0 11-.96-1.16c.13-.1.35-.35.59-.74.4-.67.64-1.48.64-2.43 0-.95-.24-1.76-.64-2.43-.24-.39-.46-.64-.59-.74a.75.75 0 11.96-1.16z" fill={primaryFill} /><path d="M19.2 14.65a3.73 3.73 0 011.3 2.85 3.73 3.73 0 01-1.3 2.85.75.75 0 01-.98-1.13l.08-.07a2.24 2.24 0 00.7-1.65 2.24 2.24 0 00-.7-1.65.75.75 0 01.9-1.2z" fill={primaryFill} /><path d="M16.51 14.05c.3.1.49.39.49.7v5.5a.75.75 0 01-1.31.5L14.16 19h-1.41a.75.75 0 01-.75-.75v-1.5c0-.41.34-.75.75-.75h1.41l1.53-1.74c.2-.24.53-.32.82-.21z" fill={primaryFill} /></svg>;
}

const ImmersiveReader24Filled = wrapIcon(rawSvg({}), 'ImmersiveReader24Filled');
export default ImmersiveReader24Filled;
      