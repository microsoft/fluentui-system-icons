import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 20a3 3 0 11-6 0 3 3 0 016 0zm-8 6.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5s0 4-5 4-5-4-5-4v-.5zm14-6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM26.25 26a1.25 1.25 0 100 2.5h9.5a1.25 1.25 0 100-2.5h-9.5zM4 12.25C4 9.9 5.9 8 8.25 8h31.5C42.1 8 44 9.9 44 12.25v23.5C44 38.1 42.1 40 39.75 40H8.25A4.25 4.25 0 014 35.75v-23.5zm4.25-1.75c-.97 0-1.75.78-1.75 1.75v23.5c0 .97.78 1.75 1.75 1.75h31.5c.97 0 1.75-.78 1.75-1.75v-23.5c0-.97-.78-1.75-1.75-1.75H8.25z" fill={primaryFill} /></svg>;
}

const ContactCard48Regular = wrapIcon(rawSvg({}), 'ContactCard48Regular');
export default ContactCard48Regular;
      