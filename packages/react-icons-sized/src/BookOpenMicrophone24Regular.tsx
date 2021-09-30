import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 19.14c-.5.53-1.21.86-2 .86H3.75C2.78 20 2 19.22 2 18.25V5.75C2 4.78 2.78 4 3.75 4H10c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h6.25c.97 0 1.75.78 1.75 1.75v8.75a3.53 3.53 0 00-1.5-2.87V5.75a.25.25 0 00-.25-.25H14c-.69 0-1.25.56-1.25 1.25v10.5c0 .3.1.58.28.8a4.49 4.49 0 00.72 1.94 2.74 2.74 0 01-1.75-.85zM3.5 5.75v12.5c0 .14.11.25.25.25H10c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 00-.25.25zm17.01 14.23c.9-.52 1.49-1.4 1.49-2.48a.5.5 0 011 0c0 2-1.75 3.72-4 3.97v1.03a.5.5 0 01-1 0v-1.03A4.77 4.77 0 0115.02 20a3.96 3.96 0 01-.87-1.5c-.1-.32-.15-.66-.15-1a.5.5 0 011 0 2.75 2.75 0 00.72 1.86c.22.25.5.47.8.64a4 4 0 001.98.5 4 4 0 002.01-.52zm-2.01-.48c-.86 0-1.56-.41-2-1-.32-.44-.5-.97-.5-1.5v-2.5a2.5 2.5 0 015 0V17c0 1.25-1 2.5-2.5 2.5z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone24Regular = wrapIcon(rawSvg({}), 'BookOpenMicrophone24Regular');
export default BookOpenMicrophone24Regular;
      