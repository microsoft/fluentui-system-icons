import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h10.5C17.55 2 19 3.46 19 5.25v4.76l-.25-.01H17.5V5.25c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H6v.25c0 .43.07.85.19 1.25h-.94A3.25 3.25 0 012 16.75V5.25zM6.75 5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM8 8.25c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 018 8.25zm-1 6C7 12.45 8.46 11 10.25 11h8.5c1.8 0 3.25 1.46 3.25 3.25v4.5c0 1.8-1.46 3.25-3.25 3.25h-8.5A3.25 3.25 0 017 18.75v-4.5zm3.25-1.75c-.5 0-.96.21-1.28.55l5.53 3.56 5.53-3.56a1.75 1.75 0 00-1.28-.55h-8.5zM8.5 18.75c0 .97.78 1.75 1.75 1.75h8.5c.97 0 1.75-.78 1.75-1.75v-4.22l-5.6 3.6a.75.75 0 01-.8 0l-5.6-3.6v4.22z" fill={primaryFill} /></svg>;
}

const MailTemplate24Regular = wrapIcon(rawSvg({}), 'MailTemplate24Regular');
export default MailTemplate24Regular;
      