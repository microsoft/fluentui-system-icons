import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.14 7.97c.2.2.51.2.7 0l2.56-2.55a2 2 0 10-2.83-2.83l-.07.08-.08-.08a2 2 0 00-2.83 2.83l2.55 2.55zM12.3 4.71a1 1 0 111.42-1.41l.79.78.5-.5.28-.28a1 1 0 011.43 0 1 1 0 010 1.4L14.5 6.92l-2.2-2.2zM2 5.51a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM5.5 3c-.5 0-.98.15-1.38.4L7.6 6.89A2.5 2.5 0 005.5 3zM3 5.5a2.5 2.5 0 003.88 2.08L3.4 4.12C3.15 4.52 3 5 3 5.5zm9.34 7.74A2.5 2.5 0 0116.5 13h-1a.5.5 0 100 1h2a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.55a3.49 3.49 0 00-5.53.7.5.5 0 00.87.5zm-.34 3.7v.55a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 110 1h-1a2.5 2.5 0 004.17-.25.5.5 0 01.86.5 3.5 3.5 0 01-5.53.7zM5.5 11c.28 0 .5.23.5.5V14h2.5a.5.5 0 110 1H6v2.5a.5.5 0 01-1 0V15H2.5a.5.5 0 110-1H5v-2.5c0-.27.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Symbols20Regular = wrapIcon(rawSvg({}), 'Symbols20Regular');
export default Symbols20Regular;
      