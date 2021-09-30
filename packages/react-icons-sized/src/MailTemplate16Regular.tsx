import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v6A2.5 2.5 0 004.5 13H5v-1h-.5A1.5 1.5 0 013 10.5v-6C3 3.67 3.67 3 4.5 3h6c.83 0 1.5.67 1.5 1.5V7h1V4.5A2.5 2.5 0 0010.5 2h-6zm0 3.5c0-.28.22-.5.5-.5h5a.5.5 0 110 1H5a.5.5 0 01-.5-.5zm1.51 3.8l4.5 2.63L15 9.5V9.5c0-.83-.67-1.5-1.5-1.5h-6c-.76 0-1.4.57-1.49 1.3zM15 10.64l-4.26 2.3a.5.5 0 01-.5 0L6 10.44v3.05c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-2.86z" fill={primaryFill} /></svg>;
}

const MailTemplate16Regular = wrapIcon(rawSvg({}), 'MailTemplate16Regular');
export default MailTemplate16Regular;
      