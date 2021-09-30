import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 9A7 7 0 119 9a7 7 0 0114 0zM4 21.5A3.5 3.5 0 017.5 18h11.83a6.71 6.71 0 00-.83 3.24V26c0 1.35.41 2.6 1.11 3.64-1.14.23-2.36.36-3.61.36-3.2 0-6.14-.82-8.32-2.2C5.52 26.41 4 24.4 4 22v-.5zM25.24 18A3.24 3.24 0 0022 21.24V22a5 5 0 11-2 4v-4.76a5.24 5.24 0 018.95-3.7l.26.25a1 1 0 01-1.42 1.42l-.25-.26c-.61-.6-1.44-.95-2.3-.95zM25 29a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /></svg>;
}

const Person632Filled = wrapIcon(rawSvg({}), 'Person632Filled');
export default Person632Filled;
      