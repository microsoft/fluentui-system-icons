import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 3.1c-.49-1-1.92-1-2.41 0L8.43 7.88l-5.27.77a1.35 1.35 0 00-.75 2.3l3.81 3.72-.9 5.25a1.35 1.35 0 001.96 1.42l1.72-.9 3-1.58 4.71 2.48c1 .52 2.15-.32 1.96-1.42l-.9-5.25 3.82-3.72c.8-.78.36-2.14-.75-2.3l-5.27-.77L13.2 3.1zM9 18.74V9.28c.32-.12.59-.35.74-.67L12 4.04l2.26 4.57c.2.4.57.68 1.01.74l5.05.74-3.65 3.56c-.32.3-.46.76-.39 1.2l.86 5.02-4.51-2.37c-.4-.2-.87-.2-1.26 0L9 18.74z" fill={primaryFill} /></svg>;
}

const StarOneQuarter24Filled = wrapIcon(rawSvg({}), 'StarOneQuarter24Filled');
export default StarOneQuarter24Filled;
      