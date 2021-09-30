import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 4C20.99 4 22 5 22 6.25v11.5C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4h15.5zm-10 8.5h-3.5c-.38 0-.7.28-.74.65l-.01.1v.6c.17 1.11 1.1 1.65 2.5 1.65 1.33 0 2.24-.49 2.46-1.5l.03-.15.01-.1v-.5c0-.38-.28-.7-.65-.74l-.1-.01zm8 .5h-4.6a.75.75 0 000 1.49H17.85a.75.75 0 000-1.49h-.1zM8 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9.75 1h-4.6a.75.75 0 000 1.5H17.85a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
}

const ContactCard24Filled = wrapIcon(rawSvg({}), 'ContactCard24Filled');
export default ContactCard24Filled;
      