import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5V7H7.5A2.5 2.5 0 005 9.5V13h-.5A2.5 2.5 0 012 10.5v-6zM5 5a.5.5 0 000 1h5a.5.5 0 000-1H5zm1.01 4.3l4.5 2.63L15 9.5V9.5c0-.83-.67-1.5-1.5-1.5h-6c-.76 0-1.4.57-1.49 1.3zM15 10.64l-4.26 2.3a.5.5 0 01-.5 0L6 10.44v3.05c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-2.86z" fill={primaryFill} /></svg>;
}

const MailTemplate16Filled = wrapIcon(rawSvg({}), 'MailTemplate16Filled');
export default MailTemplate16Filled;
      