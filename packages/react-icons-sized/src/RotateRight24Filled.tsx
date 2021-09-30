import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 15a.75.75 0 000-1.5H9c-2.49 0-4.5-1.57-4.5-3.5 0-1.87 1.9-3.4 4.28-3.5h7.16l-1.72 1.72a.75.75 0 00.98 1.13l.08-.07 3-3c.3-.3.3-.77 0-1.06l-3-3-.08-.07a.75.75 0 00-.98 1.13L15.94 5H9c-3.31 0-6 2.24-6 5s2.69 5 6 5h.5z" fill={primaryFill} /><path d="M20.5 10.37c.28 0 .5.22.5.5V20a1 1 0 01-1 1H3.86a.5.5 0 01-.25-.93l16.64-9.64a.5.5 0 01.25-.06z" fill={primaryFill} /></svg>;
}

const RotateRight24Filled = wrapIcon(rawSvg({}), 'RotateRight24Filled');
export default RotateRight24Filled;
      