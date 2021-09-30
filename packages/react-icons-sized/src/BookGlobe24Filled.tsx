import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zm6.55 1.87a4.75 4.75 0 00-2.9 3.88h2.1c.05-1.25.24-2.4.55-3.28l.25-.6zm3.34-.12c.12.22.22.46.3.72.32.88.51 2.03.55 3.28h2.36a4.75 4.75 0 00-3.2-4zm-.65 4a9.84 9.84 0 00-.46-2.79c-.14-.4-.3-.68-.43-.84a.68.68 0 00-.1-.1.68.68 0 00-.1.1c-.14.16-.29.44-.43.84-.25.7-.42 1.68-.46 2.79h1.98zm-1.95 1.5c.07.9.22 1.7.43 2.29.14.4.3.68.43.84l.1.1a.68.68 0 00.1-.1c.14-.16.29-.44.43-.84.2-.6.37-1.39.43-2.29H11.3zm-1.5 0H7.72a4.76 4.76 0 002.83 3.4c-.1-.2-.18-.4-.26-.62-.26-.76-.45-1.73-.52-2.78zm4.1 3.51a4.76 4.76 0 003.13-3.51h-2.3a10.82 10.82 0 01-.52 2.78c-.1.26-.2.5-.32.73z" fill={primaryFill} /></svg>;
}

const BookGlobe24Filled = wrapIcon(rawSvg({}), 'BookGlobe24Filled');
export default BookGlobe24Filled;
      