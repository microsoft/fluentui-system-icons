import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.54 2.12a4.1 4.1 0 00-2.99.32 2.87 2.87 0 00-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 009 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 001.96-2.22c.2-.5.15-1.06-.12-1.53l-.8-1.44a2.5 2.5 0 00-3.44-.94l-.44.26c-.35.2-.7.15-.9-.05a6.83 6.83 0 01-1.5-2.58c-.08-.25.04-.56.36-.77l.8-.5a2.5 2.5 0 00.82-3.36l-.9-1.56c-.25-.46-.69-.79-1.2-.91zm11.31.03c.2.2.2.5 0 .7L15.21 5.5l2.64 2.65a.5.5 0 01-.7.7L14.5 6.21l-2.65 2.64a.5.5 0 01-.7-.7l2.64-2.65-2.64-2.65a.5.5 0 01.7-.7l2.65 2.64 2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CallDismiss20Filled = wrapIcon(rawSvg({}), 'CallDismiss20Filled');
export default CallDismiss20Filled;
      