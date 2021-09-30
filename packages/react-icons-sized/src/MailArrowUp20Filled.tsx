import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.15-2.35A.5.5 0 0014.5 3a.5.5 0 00-.35.15l-2 2a.5.5 0 00.7.7L14 4.71V7.5a.5.5 0 101 0V4.7l1.15 1.15a.5.5 0 10.7-.7l-2-2zM14.5 11c1.33 0 2.55-.47 3.5-1.26v4.76a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l2.23-1.31c.63.24 1.3.38 2.02.38zm-10-7h4.7a5.5 5.5 0 002.24 6.07l-1.44.85-7.98-4.7A2.5 2.5 0 014.5 4z" fill={primaryFill} /></svg>;
}

const MailArrowUp20Filled = wrapIcon(rawSvg({}), 'MailArrowUp20Filled');
export default MailArrowUp20Filled;
      