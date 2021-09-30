import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V8.5h-15v9.25c0 .97.78 1.75 1.75 1.75h5.06c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75V7h15v-.75c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-6.65-2.15a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7l-.64-.65h2.04c1.24 0 2.25 1 2.25 2.25v.25a.5.5 0 001 0v-.25c0-1.8-1.46-3.25-3.25-3.25h-2.04l.64-.65z" fill={primaryFill} /></svg>;
}

const CalendarReply24Regular = wrapIcon(rawSvg({}), 'CalendarReply24Regular');
export default CalendarReply24Regular;
      