import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.2 4.13l1.5-1.52a1 1 0 011.41 0L25.3 3.8a1 1 0 010 1.4l-1.5 1.53-2.6-2.6zM20.13 5.2l-4.2 4.25-.19-.2a3.2 3.2 0 00-5.13.84l-.5 1.02a.92.92 0 01-1 .49l-.1-.02a5.6 5.6 0 00-5.58 2.13 7.22 7.22 0 00.68 9.44l.73.73a7.22 7.22 0 009.44.68 5.6 5.6 0 002.13-5.59l-.02-.08a.92.92 0 01.5-1l1.01-.51a3.2 3.2 0 00.84-5.13l-.2-.2 4.19-4.25-2.6-2.6zm-9.55 12.21a2 2 0 112.82-2.82 2 2 0 01-2.82 2.82z" fill={primaryFill} /></svg>;
}

const Guitar28Filled = wrapIcon(rawSvg({}), 'Guitar28Filled');
export default Guitar28Filled;
      