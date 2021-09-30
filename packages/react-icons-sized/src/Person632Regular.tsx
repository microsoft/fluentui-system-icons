import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 16a7 7 0 100-14 7 7 0 000 14zm0-2a5 5 0 110-10 5 5 0 010 10zm-8.5 6c-.83 0-1.5.67-1.5 1.5v.5c0 1.47.94 2.95 2.76 4.1 1.8 1.16 4.36 1.9 7.24 1.9.95 0 1.87-.08 2.74-.23.2.67.49 1.3.87 1.87-1.14.23-2.36.36-3.61.36-3.2 0-6.14-.82-8.32-2.2C5.52 26.41 4 24.4 4 22v-.5A3.5 3.5 0 017.5 18h11.83a6.7 6.7 0 00-.72 2H7.5zm17.74-2A3.24 3.24 0 0022 21.24V22a5 5 0 11-2 4v-4.76a5.24 5.24 0 018.95-3.7l.26.25a1 1 0 01-1.42 1.42l-.25-.26c-.61-.6-1.44-.95-2.3-.95zM25 29a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /></svg>;
}

const Person632Regular = wrapIcon(rawSvg({}), 'Person632Regular');
export default Person632Regular;
      