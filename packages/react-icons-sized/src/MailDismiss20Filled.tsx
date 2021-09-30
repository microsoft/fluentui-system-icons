import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 11c1.33 0 2.55-.47 3.5-1.26v4.76a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l2.23-1.31c.63.24 1.3.38 2.02.38zm-10-7h4.7a5.5 5.5 0 002.24 6.07l-1.44.85-7.98-4.7A2.5 2.5 0 014.5 4zm6.82 4.68a4.5 4.5 0 106.36-6.36 4.5 4.5 0 00-6.36 6.36zm4.95-4.95c.2.2.2.51 0 .71L15.2 5.5l1.06 1.06a.5.5 0 01-.7.7L14.5 6.22l-1.06 1.06a.5.5 0 11-.7-.7l1.05-1.07-1.06-1.06a.5.5 0 01.7-.7l1.07 1.05 1.06-1.06c.2-.2.51-.2.7 0z" fill={primaryFill} /></svg>;
}

const MailDismiss20Filled = wrapIcon(rawSvg({}), 'MailDismiss20Filled');
export default MailDismiss20Filled;
      