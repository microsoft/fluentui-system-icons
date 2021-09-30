import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M10.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M6 6a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M3.75 8a.75.75 0 00-.75.75v.75S3 11 5 11s2-1.5 2-1.5v-.75A.75.75 0 006.25 8h-2.5z" fill={primaryFill} /><path d="M8.5 6.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M7.94 9.95V10H8a1 1 0 001-1v-.5a.5.5 0 00-.5-.5h-.67c.11.23.17.48.17.75v.81a1.96 1.96 0 01-.06.4z" fill={primaryFill} /><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zM3.5 4C2.67 4 2 4.67 2 5.5v5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /></svg>;
}

const ContactCardGroup16Regular = wrapIcon(rawSvg({}), 'ContactCardGroup16Regular');
export default ContactCardGroup16Regular;
      