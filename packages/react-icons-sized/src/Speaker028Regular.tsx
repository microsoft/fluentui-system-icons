import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 4.81c0-1.09-1.3-1.66-2.1-.9L9.45 8.52c-.33.3-.75.48-1.2.48H5.25A3.25 3.25 0 002 12.26v3.49C2 17.55 3.46 19 5.25 19h3.01c.45 0 .87.17 1.2.47l4.94 4.63c.8.74 2.1.18 2.1-.92V4.81zm-6.02 4.82L15 5.39v17.22l-4.52-4.23c-.6-.57-1.4-.88-2.22-.88H5.25c-.97 0-1.75-.79-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74h3.01c.83 0 1.62-.32 2.22-.88z" fill={primaryFill} /></svg>;
}

const Speaker028Regular = wrapIcon(rawSvg({}), 'Speaker028Regular');
export default Speaker028Regular;
      