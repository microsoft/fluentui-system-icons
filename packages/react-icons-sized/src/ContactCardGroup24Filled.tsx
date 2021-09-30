import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 16.75v-9.5a3.25 3.25 0 013.07-3.24L5.25 4h13.5zm-9.5 8.5h-3.5c-.38 0-.7.28-.74.65l-.01.1v.58c0 1.27.97 1.92 2.5 1.92 1.47 0 2.42-.6 2.5-1.76v-.74c0-.38-.28-.7-.65-.74l-.1-.01zm3 0h-1.42c.09.18.15.38.17.59v1c-.03.33-.1.63-.21.9l.34.01c1.05 0 1.79-.4 1.86-1.27l.01-.15v-.33c0-.38-.28-.7-.65-.74l-.1-.01h-1.42 1.42zm6 0h-3.1a.75.75 0 000 1.5h3.2a.75.75 0 000-1.5h-.1zM7.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3.87.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6.88.5h-3.1a.75.75 0 000 1.5h3.2a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
}

const ContactCardGroup24Filled = wrapIcon(rawSvg({}), 'ContactCardGroup24Filled');
export default ContactCardGroup24Filled;
      