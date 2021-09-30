import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 14.5v-4.1c.36-.18.7-.4 1-.66v4.76a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4h4.7c-.08.32-.15.66-.18 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12 1.44-.85c.33.22.68.4 1.04.55l-2.23 1.31a.5.5 0 01-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5zm-7-9a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 010 .7L16.1 7.1a.5.5 0 01-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 01-1 0v-.25a2.75 2.75 0 012.75-2.75h1.54l-.9-.9a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const MailArrowForward20Regular = wrapIcon(rawSvg({}), 'MailArrowForward20Regular');
export default MailArrowForward20Regular;
      