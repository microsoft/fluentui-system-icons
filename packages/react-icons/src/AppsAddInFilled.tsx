import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 2.5c.41 0 .75.34.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M4.75 3C3.78 3 3 3.78 3 4.75v10.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-4.5C17 9.78 16.22 9 15.25 9h-4a.25.25 0 01-.25-.25v-4C11 3.78 10.22 3 9.25 3h-4.5zM4.5 4.75c0-.14.11-.25.25-.25h4.5c.14 0 .25.11.25.25v4c0 .08 0 .17.02.25H4.5V4.75zm5 5.75v5H4.75a.25.25 0 01-.25-.25V10.5h5zm1.5 5v-5.02l.25.02h4c.14 0 .25.11.25.25v4.5c0 .14-.11.25-.25.25H11z" fill={primaryFill} /></svg>;
}

const AppsAddInFilled = wrapIcon(rawSvg({}), 'AppsAddInFilled');
export default AppsAddInFilled;
      