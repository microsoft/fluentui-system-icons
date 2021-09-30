import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8a8.54 8.54 0 004 1.17l.3-.98a7.74 7.74 0 01-3.76-1.04A3.36 3.36 0 014 13a1 1 0 011-1h4.6c.18-.36.4-.7.66-1H5zm14 3.5a4.5 4.5 0 01-6.68 3.94l-1.8.54a.4.4 0 01-.5-.5l.54-1.8A4.5 4.5 0 1119 14.5zM12.5 13a.5.5 0 000 1h4a.5.5 0 000-1h-4zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const PersonChatRegular = wrapIcon(rawSvg({}), 'PersonChatRegular');
export default PersonChatRegular;
      