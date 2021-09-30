import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3H9a2 2 0 10-4 0H2a.5.5 0 000 1h.55l.76 6.78a2.5 2.5 0 002.29 2.21 5.46 5.46 0 01-.43-1.12 1.5 1.5 0 01-.87-1.2L3.56 4h6.88l-.11 1a5.58 5.58 0 011 .06L11.45 4H12a.5.5 0 000-1zM6 3a1 1 0 012 0H6zm9 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zM9.6 7.9c.2.2.2.5 0 .7l-.9.9h1.55A2.75 2.75 0 0113 12.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75H8.71l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7L8.9 7.9c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const DeleteArrowBack16Regular = wrapIcon(rawSvg({}), 'DeleteArrowBack16Regular');
export default DeleteArrowBack16Regular;
      