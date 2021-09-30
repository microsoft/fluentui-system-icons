import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.24 1.56a.5.5 0 00-.48 0L1.8 4.78a1.5 1.5 0 00-.57.54L8 8.93l6.78-3.61a1.5 1.5 0 00-.57-.54L8.24 1.56z" fill={primaryFill} /><path d="M15 6.33L8.24 9.94a.5.5 0 01-.48 0L1 6.34V12c0 1.1.9 2 2 2h10a2 2 0 002-2V6.33z" fill={primaryFill} /></svg>;
}

const MailRead16Filled = wrapIcon(rawSvg({}), 'MailRead16Filled');
export default MailRead16Filled;
      