import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M4 11.7c0-.53.42-.95.95-.95h3.1c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 01-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8z" fill={primaryFill} /><path d="M11.5 8a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M11.5 11a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M2 5.75C2 4.78 2.78 4 3.75 4h12.5c.97 0 1.75.78 1.75 1.75v8.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 16 2 15.22 2 14.25v-8.5zM3.75 5a.75.75 0 00-.75.75v8.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-8.5a.75.75 0 00-.75-.75H3.75z" fill={primaryFill} /></svg>;
}

const ContactCardRegular = wrapIcon(rawSvg({}), 'ContactCardRegular');
export default ContactCardRegular;
      