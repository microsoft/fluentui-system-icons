import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.32 9h.36l.24-.03H17v3.83c0 1.1-.12 1.51-.33 1.92-.22.4-.54.73-.95.95-.4.21-.81.33-1.92.33H5.2c-1.11 0-1.51-.12-1.92-.33-.4-.22-.73-.54-.95-.95-.2-.38-.31-.76-.33-1.71V7.3l7.28 3.64c.14.07.3.07.44 0l4.94-2.47c.33.2.7.36 1.1.44l.24.04.13.02.2.02zM5 4h8.35l-.05.11-.07.17-.1.3-.05.22-.02.1-.01.1a3.54 3.54 0 00.66 2.6l.14.17L9.5 9.94 2.22 6.3a.5.5 0 00-.18-.05c.06-.45.15-.7.3-.97.21-.4.53-.73.94-.95.38-.2.76-.31 1.71-.33zM16.5 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const MailUnreadFilled = wrapIcon(rawSvg({}), 'MailUnreadFilled');
export default MailUnreadFilled;
      