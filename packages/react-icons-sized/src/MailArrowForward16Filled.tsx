import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10.4a5.48 5.48 0 01-4.35.28l-1.41.76a.5.5 0 01-.48 0L1 8.34V13c0 1.1.9 2 2 2h8a2 2 0 002-2v-2.6zM5.02 5H3a2 2 0 00-2 2v.2l6 3.23.54-.3A5.5 5.5 0 015.02 5zm.98.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 010 .7L12.1 7.1a.5.5 0 01-.7-.7l.9-.9h-1.55C9.78 5.5 9 6.28 9 7.25v.25a.5.5 0 01-1 0v-.25a2.75 2.75 0 012.75-2.75h1.54l-.9-.9a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const MailArrowForward16Filled = wrapIcon(rawSvg({}), 'MailArrowForward16Filled');
export default MailArrowForward16Filled;
      