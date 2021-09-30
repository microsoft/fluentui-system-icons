import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10.4a5.48 5.48 0 01-4.35.28l-1.41.76a.5.5 0 01-.48 0L1 8.34V13c0 1.1.9 2 2 2h8a2 2 0 002-2v-2.6zM5.02 5H3a2 2 0 00-2 2v.2l6 3.23.54-.3A5.5 5.5 0 015.02 5zm5.48 5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM8.15 5.85a.5.5 0 11.7-.7L10 6.29V3.5a.5.5 0 011 0v2.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.35.15.5.5 0 01-.35-.14l-2-2z" fill={primaryFill} /></svg>;
}

const MailArrowDown16Filled = wrapIcon(rawSvg({}), 'MailArrowDown16Filled');
export default MailArrowDown16Filled;
      