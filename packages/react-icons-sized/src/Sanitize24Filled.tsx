import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.62 10.62a3 3 0 010-4.24l3.26-3.26a3 3 0 014.24 0L14.8 6.8l-.13.22A1.75 1.75 0 0012 8.5v4.52a3.78 3.78 0 00-2.2.36 2.9 2.9 0 00-.75.54 1.86 1.86 0 00-.53 1.6l-4.9-4.9zM17 7.75v5.75a.5.5 0 101 0v-5a.75.75 0 011.5 0V14a.5.5 0 101 0V9.75a.75.75 0 011.5 0v7c0 .62-.27 1.39-.56 2.04-.3.68-.68 1.37-.98 1.9a2.64 2.64 0 01-2.3 1.31h-1.14c-.88 0-1.7-.42-2.23-1.13l-1.37-1.9-1.66-1.9-1.9-1.18a.75.75 0 01-.36-.64c0-.24.1-.4.15-.48l.18-.2c.12-.12.27-.21.43-.29.31-.16.74-.28 1.24-.28.53 0 1.07.15 1.5.31V8.5a.75.75 0 011.5 0v5a.5.5 0 101 0V7.75a.75.75 0 011.5 0zM4.25 14c.42 0 .75.34.75.75v.75h.75a.75.75 0 010 1.5H5v.75a.75.75 0 01-1.5 0V17h-.75a.75.75 0 010-1.5h.75v-.75c0-.41.34-.75.75-.75zM9 18.25a.75.75 0 00-1.5 0V19h-.75a.75.75 0 000 1.5h.75v.75a.75.75 0 001.5 0v-.75h.75a.75.75 0 000-1.5H9v-.75z" fill={primaryFill} /></svg>;
}

const Sanitize24Filled = wrapIcon(rawSvg({}), 'Sanitize24Filled');
export default Sanitize24Filled;
      