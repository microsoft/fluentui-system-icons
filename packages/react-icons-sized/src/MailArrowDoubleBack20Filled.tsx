import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 11c1.33 0 2.55-.47 3.5-1.26v4.76a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l2.23-1.31c.63.24 1.3.38 2.02.38zm-10-7h4.7a5.5 5.5 0 002.24 6.07l-1.44.85-7.98-4.7A2.5 2.5 0 014.5 4zm10 6a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1.15-6.35c.2.2.2.5 0 .7L12.21 5.5l1.14 1.15a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5c.2-.2.5-.2.7 0zm2.5.7l-.64.65H17a1 1 0 011 1v.5a.5.5 0 01-1 0V6h-1.8l.65.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const MailArrowDoubleBack20Filled = wrapIcon(rawSvg({}), 'MailArrowDoubleBack20Filled');
export default MailArrowDoubleBack20Filled;
      