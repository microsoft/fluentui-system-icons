import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 11a2 2 0 11-4 0 2 2 0 014 0zm1.5 3.81v.54c0 1.09-1.49 1.9-3.5 1.9s-3.5-.81-3.5-1.9v-.54c0-.45.36-.81.8-.81h5.4c.44 0 .8.36.8.81zM7.75 2.5A3.25 3.25 0 004.5 5.75v16.5c0 1.8 1.46 3.25 3.25 3.25h15a.75.75 0 000-1.5h-15c-.88 0-1.61-.65-1.73-1.5h16.73c.41 0 .75-.34.75-.75v-16c0-1.8-1.45-3.25-3.25-3.25H7.75zM22 5.75V21H6V5.75C6 4.78 6.78 4 7.75 4h12.5c.97 0 1.75.78 1.75 1.75z" fill={primaryFill} /></svg>;
}

const BookContacts28Regular = wrapIcon(rawSvg({}), 'BookContacts28Regular');
export default BookContacts28Regular;
      