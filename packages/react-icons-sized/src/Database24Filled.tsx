import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4zm6.33.17c.59-.3 1.17-.67 1.67-1.12V18c0 2.2-3.58 4-8 4s-8-1.8-8-4V9.05c.5.45 1.08.83 1.67 1.12 1.7.85 3.94 1.33 6.33 1.33 2.4 0 4.63-.48 6.33-1.33z" fill={primaryFill} /></svg>;
}

const Database24Filled = wrapIcon(rawSvg({}), 'Database24Filled');
export default Database24Filled;
      