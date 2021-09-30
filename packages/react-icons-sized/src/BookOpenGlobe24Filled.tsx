import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h6c.5 0 .96-.12 1.37-.33A6.49 6.49 0 0113 12.8V7a1 1 0 011-1h6v5.5a6.5 6.5 0 012 1.31V6a2 2 0 00-2-2h-6c-.77 0-1.47.29-2 .76A2.99 2.99 0 0010 4H4zm7 3v10a1 1 0 01-1 1H4V6h6a1 1 0 011 1zm5 10c.05-1.41.25-2.67.56-3.58.17-.52.36-.9.55-1.14.2-.25.33-.28.39-.28s.2.03.39.28c.19.24.38.62.55 1.14.3.91.51 2.17.55 3.58h-2.98zm-.39-3.9c.1-.32.23-.62.37-.89A5.5 5.5 0 0012.02 17h2.99c.04-1.5.26-2.87.6-3.9zm3.78 0c-.1-.32-.23-.62-.37-.89A5.5 5.5 0 0122.98 17h-2.99c-.04-1.5-.26-2.87-.6-3.9zm.6 4.9h2.99a5.5 5.5 0 01-3.96 4.79c.14-.27.26-.57.37-.89.34-1.03.56-2.4.6-3.9zm-2.1 4.72c-.2.25-.33.28-.39.28s-.2-.03-.39-.28a3.84 3.84 0 01-.55-1.14c-.3-.91-.51-2.17-.55-3.58h2.98a12.91 12.91 0 01-.55 3.58c-.17.52-.36.9-.55 1.14zM12.02 18a5.5 5.5 0 003.96 4.79 6.13 6.13 0 01-.37-.89c-.34-1.03-.56-2.4-.6-3.9h-2.99z" fill={primaryFill} /></svg>;
}

const BookOpenGlobe24Filled = wrapIcon(rawSvg({}), 'BookOpenGlobe24Filled');
export default BookOpenGlobe24Filled;
      