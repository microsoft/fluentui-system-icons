import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.88 13.59l1.27 1.26a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.4 3.12C2.15 3.52 2 4 2 4.5v7A2.5 2.5 0 004.5 14h7c.5 0 .98-.15 1.38-.41zm-.73-.74c-.2.1-.42.15-.65.15h-7A1.5 1.5 0 013 11.5v-7c0-.23.05-.45.15-.65l9 9zm-3.37-6.2l.57.57a.5.5 0 00.27-.14L13 3.71v3.02a.5.5 0 001 0V2.5a.5.5 0 00-.5-.5H9.27a.5.5 0 000 1h3.02L8.92 6.38a.5.5 0 00-.14.27zm5.2 5.2l-.98-.97V9.27a.5.5 0 011 0v2.23c0 .12 0 .24-.02.35zM4.15 2.02l.97.98h1.61a.5.5 0 000-1H4.5c-.12 0-.24 0-.35.02z" fill={primaryFill} /></svg>;
}

const OpenOff16Regular = wrapIcon(rawSvg({}), 'OpenOff16Regular');
export default OpenOff16Regular;
      