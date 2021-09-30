import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.77 3.48a4.08 4.08 0 00.05 5.11.6.6 0 00.93-.76 2.89 2.89 0 01-.12-3.5l4.04 4.04c-.35.25-.75.42-1.18.49l.18-.19a.6.6 0 10-.84-.84L4.58 9.08a.6.6 0 000 .84l1.25 1.25a.6.6 0 10.84-.84l-.24-.25c.78-.08 1.5-.39 2.1-.85l1.62 1.62a.5.5 0 00.7-.7l-9-9a.5.5 0 10-.7.7l1.62 1.63zm6.05 3.21l.94.95a4.09 4.09 0 00-.79-4.46.6.6 0 00-.87.82 2.89 2.89 0 01.72 2.7zM4.36 2.24l1.87 1.87 1.2-1.19a.6.6 0 000-.84L6.16.83a.6.6 0 00-.84.84l.24.25c-.42.05-.83.16-1.2.32z" fill={primaryFill} /></svg>;
}

const ArrowSyncOff12Filled = wrapIcon(rawSvg({}), 'ArrowSyncOff12Filled');
export default ArrowSyncOff12Filled;
      