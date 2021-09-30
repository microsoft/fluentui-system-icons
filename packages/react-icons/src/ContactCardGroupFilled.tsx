import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zM12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm.5 2.5h3a.5.5 0 010 1h-3a.5.5 0 010-1zM4 10.75c0-.41.34-.75.75-.75h3a.75.75 0 01.75.75v.81c-.02.16-.1.58-.5.92-.33.29-.86.52-1.75.52C4 13 4 11.5 4 11.5v-.75zM6.25 9a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4.25-1a1 1 0 11-2 0 1 1 0 012 0zm-1.07 3.98a2.26 2.26 0 00.07-.41V10.75c0-.27-.06-.52-.17-.75H10a1 1 0 011 1c0 .83-.67 1.5-1.5 1.5h-.26c.1-.2.16-.37.2-.52z" fill={primaryFill} /></svg>;
}

const ContactCardGroupFilled = wrapIcon(rawSvg({}), 'ContactCardGroupFilled');
export default ContactCardGroupFilled;
      