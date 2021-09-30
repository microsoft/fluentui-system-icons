import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a4 4 0 013 6.65v4.6c0 .57-.6.92-1.09.67l-.09-.06L18 20.6l-1.82 1.27a.75.75 0 01-1.17-.5v-.11l-.01-4.6A4 4 0 0118 10zm1.5 7.71a4 4 0 01-3 0v2.1l1.07-.75a.75.75 0 01.76-.06l.1.06 1.07.75v-2.1zm-.25-14.7A2.75 2.75 0 0122 5.58V11c-.4-.54-.91-1-1.5-1.33V5.75c0-.64-.5-1.18-1.12-1.24H4.75c-.65 0-1.18.49-1.24 1.12l-.01.12v9.5c0 .65.5 1.18 1.12 1.25h9.05l.13.2.13.2.07.1v1H4.75a2.75 2.75 0 01-2.74-2.58L2 15.25v-9.5a2.75 2.75 0 012.58-2.74h14.67zM18 11.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-6.75 1a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6zm6-5.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h10.6z" fill={primaryFill} /></svg>;
}

const Certificate24Regular = wrapIcon(rawSvg({}), 'Certificate24Regular');
export default Certificate24Regular;
      