import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.6 2.58a1 1 0 011.32-.49A12.89 12.89 0 0126 14.54a1 1 0 01-2-.08c.26-6.28-3.76-9.55-5.92-10.55a1 1 0 01-.49-1.33zm-5.91 2.07a1 1 0 00-1.88 0l-6.75 18a1 1 0 001.88.7l2-5.35h7.62l2 5.35a1 1 0 001.88-.7l-6.75-18zM13.8 16H7.69l3.06-8.15L13.81 16zm4.77-9.81a1 1 0 00-1.16 1.62c.8.57 1.42 1.2 1.86 2 .44.78.72 1.8.72 3.19a1 1 0 002 0c0-1.68-.34-3.04-.97-4.17a8.04 8.04 0 00-2.45-2.64z" fill={primaryFill} /></svg>;
}

const ReadAloud28Filled = wrapIcon(rawSvg({}), 'ReadAloud28Filled');
export default ReadAloud28Filled;
      