import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 8A6.25 6.25 0 004 14.25v19.5C4 37.2 6.8 40 10.25 40h27.5C41.2 40 44 37.2 44 33.75v-19.5C44 10.8 41.2 8 37.75 8h-27.5zM18 20a3 3 0 11-6 0 3 3 0 016 0zm4.5 3a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm6.5-1.75c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 110 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25zm1.25 4.25h6.5a1.25 1.25 0 110 2.5h-6.5a1.25 1.25 0 110-2.5zM10 26.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V28s0 3.5-5 3.5-5-3.5-5-3.5v-1.5zM23 30h-1.47a5.47 5.47 0 00.47-1.94V28 26.5c0-.54-.12-1.05-.34-1.5h2.84c.83 0 1.5.67 1.5 1.5v.5a3 3 0 01-3 3z" fill={primaryFill} /></svg>;
}

const ContactCardGroup48Filled = wrapIcon(rawSvg({}), 'ContactCardGroup48Filled');
export default ContactCardGroup48Filled;
      