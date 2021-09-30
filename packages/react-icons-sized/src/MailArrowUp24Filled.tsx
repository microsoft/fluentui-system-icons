import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-6-1.8v4.8a.5.5 0 001 0V4.7l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 00.7.7L17 4.71zm.5 8.3c1.75 0 3.33-.69 4.5-1.81v5.56a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75V8.61l9.65 5.05c.22.12.48.12.7 0l2.41-1.26c.84.38 1.76.6 2.74.6zM5.25 4h6.25a6.48 6.48 0 001.8 7.47l-1.3.68-9.98-5.23a3.25 3.25 0 013.04-2.91L5.25 4z" fill={primaryFill} /></svg>;
}

const MailArrowUp24Filled = wrapIcon(rawSvg({}), 'MailArrowUp24Filled');
export default MailArrowUp24Filled;
      