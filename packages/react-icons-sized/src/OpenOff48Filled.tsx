import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.13 40.9A6.47 6.47 0 0135.5 42h-23A6.5 6.5 0 016 35.5v-23c0-1.34.4-2.6 1.1-3.63L4.38 6.13a1.25 1.25 0 111.76-1.76l37.5 37.5a1.25 1.25 0 01-1.76 1.76l-2.74-2.74zm-2.2-2.2L9.3 11.07c-.2.44-.3.92-.3 1.43v23a3.5 3.5 0 003.5 3.5h23c.5 0 1-.1 1.43-.3zm4.98-2.1L39 33.7v-6.2a1.5 1.5 0 113 0v8c0 .38-.03.74-.1 1.1zM11.4 6.1L14.3 9h6.2a1.5 1.5 0 000-3h-8c-.38 0-.74.03-1.1.1zm30.05.24c.34.27.55.7.55 1.16v12a1.5 1.5 0 01-3 0v-8.38l-9.44 9.44a1.5 1.5 0 11-2.12-2.12L36.88 9H28.5a1.5 1.5 0 010-3h11.98a1.5 1.5 0 01.97.34z" fill={primaryFill} /></svg>;
}

const OpenOff48Filled = wrapIcon(rawSvg({}), 'OpenOff48Filled');
export default OpenOff48Filled;
      