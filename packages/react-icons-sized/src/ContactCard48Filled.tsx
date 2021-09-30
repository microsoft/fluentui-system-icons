import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 8A4.25 4.25 0 004 12.25v23.5C4 38.1 5.9 40 8.25 40h31.5C42.1 40 44 38.1 44 35.75v-23.5C44 9.9 42.1 8 39.75 8H8.25zM19 20a3 3 0 11-6 0 3 3 0 016 0zm-8 6.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5s0 4-5 4-5-4-5-4v-.5zm14-6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25zM26.25 26h9.5a1.25 1.25 0 110 2.5h-9.5a1.25 1.25 0 110-2.5z" fill={primaryFill} /></svg>;
}

const ContactCard48Filled = wrapIcon(rawSvg({}), 'ContactCard48Filled');
export default ContactCard48Filled;
      