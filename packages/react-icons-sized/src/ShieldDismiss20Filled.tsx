import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.28 2.08c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0117 5v4.5c0 3.9-2.3 6.73-6.82 8.47a.5.5 0 01-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 01.43-.5 15.05 15.05 0 006.3-2.42.5.5 0 01.55 0zM8.03 6.97a.75.75 0 00-1.06 1.06L8.94 10l-1.97 1.97a.75.75 0 101.06 1.06L10 11.06l1.97 1.97a.75.75 0 101.06-1.06L11.06 10l1.97-1.97a.75.75 0 00-1.06-1.06L10 8.94 8.03 6.97z" fill={primaryFill} /></svg>;
}

const ShieldDismiss20Filled = wrapIcon(rawSvg({}), 'ShieldDismiss20Filled');
export default ShieldDismiss20Filled;
      