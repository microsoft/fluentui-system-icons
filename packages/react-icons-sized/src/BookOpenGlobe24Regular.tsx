import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.75c0-.14.11-.25.25-.25H10c.69 0 1.25.56 1.25 1.25v8.96c.29-1 .8-1.9 1.5-2.65V6.75c0-.69.56-1.25 1.25-1.25h6.25c.14 0 .25.11.25.25v5.98c.55.29 1.06.65 1.5 1.08V5.75C22 4.78 21.22 4 20.25 4H14c-.79 0-1.5.33-2 .86A2.74 2.74 0 0010 4H3.75C2.78 4 2 4.78 2 5.75v12.5c0 .97.78 1.75 1.75 1.75H10c.5 0 .96-.13 1.36-.36a6.47 6.47 0 01-.34-1.66c-.23.31-.6.52-1.02.52H3.75a.25.25 0 01-.25-.25V5.75zM16 17c.05-1.41.25-2.67.56-3.58.17-.52.36-.9.55-1.14.2-.25.33-.28.39-.28s.2.03.39.28c.19.24.38.62.55 1.14.3.91.51 2.17.55 3.58h-2.98zm-.39-3.9c.1-.32.23-.62.37-.89A5.5 5.5 0 0012.02 17h2.99c.04-1.5.26-2.87.6-3.9zm3.78 0c-.1-.32-.23-.62-.37-.89A5.5 5.5 0 0122.98 17h-2.99c-.04-1.5-.26-2.87-.6-3.9zm.6 4.9h2.99a5.5 5.5 0 01-3.96 4.79c.14-.27.26-.57.37-.89.34-1.03.56-2.4.6-3.9zm-2.1 4.72c-.2.25-.33.28-.39.28s-.2-.03-.39-.28a3.84 3.84 0 01-.55-1.14c-.3-.91-.51-2.17-.55-3.58h2.98a12.91 12.91 0 01-.55 3.58c-.17.52-.36.9-.55 1.14zM12.02 18a5.5 5.5 0 003.96 4.79 6.13 6.13 0 01-.37-.89c-.34-1.03-.56-2.4-.6-3.9h-2.99z" fill={primaryFill} /></svg>;
}

const BookOpenGlobe24Regular = wrapIcon(rawSvg({}), 'BookOpenGlobe24Regular');
export default BookOpenGlobe24Regular;
      