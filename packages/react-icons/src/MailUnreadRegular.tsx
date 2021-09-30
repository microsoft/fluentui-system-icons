import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.34 4c-.15.31-.25.65-.3 1H5.02c-.72 0-1 .07-1.27.22-.23.12-.41.3-.53.53-.13.23-.19.46-.21.94L9.5 9.94l4.34-2.17c.23.28.51.52.82.7l-4.94 2.48a.5.5 0 01-.36.03l-.08-.03L3 7.8v5.17c0 .72.07 1 .22 1.27.12.23.3.41.53.53.25.14.5.2 1.1.22H14.15c.59-.02.84-.08 1.09-.22.23-.12.41-.3.53-.53.14-.25.2-.5.22-1.1V8.97a3.53 3.53 0 001 0v3.84c0 1.1-.12 1.51-.33 1.92-.22.4-.54.73-.95.95-.4.21-.81.33-1.92.33H5.2c-1.11 0-1.51-.12-1.92-.33-.4-.22-.73-.54-.95-.95-.2-.38-.31-.76-.33-1.71V7.2c0-1.12.12-1.52.33-1.93.22-.4.54-.73.95-.95.38-.2.76-.31 1.71-.33h8.35zm3.16-1a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const MailUnreadRegular = wrapIcon(rawSvg({}), 'MailUnreadRegular');
export default MailUnreadRegular;
      