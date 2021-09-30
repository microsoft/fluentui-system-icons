import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h6c.77 0 1.47-.29 2-.76.47.42 1.08.7 1.75.75A4.73 4.73 0 0113 17.5c0-.1 0-.19.03-.28A1 1 0 0113 17V7a1 1 0 011-1h6v5.33a3.53 3.53 0 012 3.17V6a2 2 0 00-2-2h-6c-.77 0-1.47.29-2 .76A2.99 2.99 0 0010 4H4zm7 3v10a1 1 0 01-1 1H4V6h6a1 1 0 011 1zm11 10.5c0 1.01-.52 1.85-1.34 2.39-.6.39-1.34.61-2.16.61a4 4 0 01-1.98-.5c-.3-.17-.58-.4-.8-.64A2.8 2.8 0 0115 17.5a.5.5 0 00-1 0 3.43 3.43 0 00.28 1.35c.17.42.42.8.74 1.15A4.77 4.77 0 0018 21.47v1.03a.5.5 0 001 0v-1.03c2.25-.25 4-1.97 4-3.97a.5.5 0 00-1 0zm-5.5 1A2.58 2.58 0 0116 17v-2.5a2.5 2.5 0 015 0V17c0 1.25-1 2.5-2.5 2.5-.86 0-1.56-.41-2-1z" fill={primaryFill} /></svg>;
}

const BookOpenMicrophone24Filled = wrapIcon(rawSvg({}), 'BookOpenMicrophone24Filled');
export default BookOpenMicrophone24Filled;
      