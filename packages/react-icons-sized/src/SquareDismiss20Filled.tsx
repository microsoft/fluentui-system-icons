import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.6A5.5 5.5 0 0117 9.6V6a3 3 0 00-3-3H6zm8.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const SquareDismiss20Filled = wrapIcon(rawSvg({}), 'SquareDismiss20Filled');
export default SquareDismiss20Filled;
      