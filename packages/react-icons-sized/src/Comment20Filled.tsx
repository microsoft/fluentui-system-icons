import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h10.8C16.84 3 18 4.15 18 5.57v6.7a2.58 2.58 0 01-2.6 2.57h-4.59L6.8 17.8z" fill={primaryFill} /></svg>;
}

const Comment20Filled = wrapIcon(rawSvg({}), 'Comment20Filled');
export default Comment20Filled;
      