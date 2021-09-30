import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 15a.75.75 0 010-1.5h.5c2.49 0 4.5-1.57 4.5-3.5 0-1.87-1.9-3.4-4.28-3.5H8.06l1.72 1.72a.75.75 0 01-.98 1.13l-.08-.07-3-3a.75.75 0 010-1.06l3-3 .08-.07a.75.75 0 01.98 1.13L8.06 5H15c3.31 0 6 2.24 6 5s-2.69 5-6 5h-.5z" fill={primaryFill} /><path d="M3.5 10.37a.5.5 0 00-.5.5V20a1 1 0 001 1h16.14a.5.5 0 00.25-.93L3.75 10.43a.5.5 0 00-.25-.06z" fill={primaryFill} /></svg>;
}

const RotateLeft24Filled = wrapIcon(rawSvg({}), 'RotateLeft24Filled');
export default RotateLeft24Filled;
      