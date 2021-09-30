import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 9.11l8.65 4.55c.22.12.48.12.7 0l7.2-3.79a3.5 3.5 0 001.45.1v6.78a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75V9.11zM16.34 5a3.49 3.49 0 00.69 3.98L11 12.15 2.1 7.47A3.25 3.25 0 015.06 5L5.25 5h11.09zm3.16-1a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const MailUnread24Filled = wrapIcon(rawSvg({}), 'MailUnread24Filled');
export default MailUnread24Filled;
      