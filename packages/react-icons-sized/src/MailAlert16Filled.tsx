import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10.4a5.48 5.48 0 01-4.35.28l-1.41.76a.5.5 0 01-.48 0L1 8.34V13c0 1.1.9 2 2 2h8a2 2 0 002-2v-2.6zM5.02 5H3a2 2 0 00-2 2v.2l6 3.23.54-.3A5.5 5.5 0 015.02 5zm5.48 5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2-4.2l.35.35a.5.5 0 01-.35.85h-4a.5.5 0 01-.35-.85l.35-.36V4a2 2 0 114 0v1.8zm-2 3.2a1.5 1.5 0 01-1.41-1h2.82c-.2.58-.76 1-1.41 1z" fill={primaryFill} /></svg>;
}

const MailAlert16Filled = wrapIcon(rawSvg({}), 'MailAlert16Filled');
export default MailAlert16Filled;
      