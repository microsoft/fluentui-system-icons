import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3.5c1.8 0 3.25 1.46 3.25 3.25v10.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 17.25V6.75C2 4.95 3.46 3.5 5.25 3.5h13.5zm0 1.5H5.25c-.97 0-1.75.78-1.75 1.75v10.5c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75V6.75c0-.97-.78-1.75-1.75-1.75zM8.38 9c.31 0 .57.22.62.53v4.84a.63.63 0 01-1.24.1v-1.83H6.26v1.75a.62.62 0 01-1.24.09V9.64a.63.63 0 011.24-.1v1.85h1.48V9.62c0-.35.28-.63.63-.63zm8.82.02a1.8 1.8 0 011.02 3.29l.74 1.83a.62.62 0 01-1.11.56l-.05-.1-.8-1.98h-.74v1.76c0 .75-1.03.82-1.22.2l-.02-.1-.01-.1V9.64c0-.31.22-.57.53-.62H17.2zM11.38 9c1.39 0 2.53 1.08 2.62 2.46v.9c0 1.4-1.09 2.54-2.46 2.62h-.92a.63.63 0 01-.61-.52l-.01-.1V9.63c0-.31.23-.57.53-.62h.85zm0 1.25h-.13v3.49h.13c.71 0 1.3-.55 1.36-1.24l.01-.14v-.74c0-.71-.54-1.3-1.24-1.37h-.13zm4.87 0v1.11h.95a.55.55 0 00.1-1.1h-1.05z" fill={primaryFill} /></svg>;
}

const Hdr24Regular = wrapIcon(rawSvg({}), 'Hdr24Regular');
export default Hdr24Regular;
      