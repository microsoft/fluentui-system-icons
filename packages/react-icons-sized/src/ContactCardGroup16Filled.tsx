import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h9a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0012.5 3h-9zM10 6.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm.5 2.5h2a.5.5 0 010 1h-2a.5.5 0 010-1zM6 6a1 1 0 11-2 0 1 1 0 012 0zM3.75 8h2.5c.41 0 .75.34.75.75v.75S7 11 5 11 3 9.5 3 9.5v-.75c0-.41.34-.75.75-.75zM8.5 6.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.56 3.7A2.4 2.4 0 008 9.56v-.81c0-.27-.06-.52-.17-.75h.67c.28 0 .5.22.5.5V9a1 1 0 01-1 1h-.07l.01-.05z" fill={primaryFill} /></svg>;
}

const ContactCardGroup16Filled = wrapIcon(rawSvg({}), 'ContactCardGroup16Filled');
export default ContactCardGroup16Filled;
      