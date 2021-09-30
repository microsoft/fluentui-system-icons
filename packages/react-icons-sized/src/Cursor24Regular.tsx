import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3.48A1.5 1.5 0 017.92 2.3L21.44 12.8a1.5 1.5 0 01-.93 2.69h-6.85c-.5 0-.98.23-1.3.62l-4.18 5.3a1.5 1.5 0 01-2.68-.93v-17zM20.51 14L7 3.48V20.5l4.2-5.3c.59-.75 1.5-1.2 2.46-1.2h6.85z" fill={primaryFill} /></svg>;
}

const Cursor24Regular = wrapIcon(rawSvg({}), 'Cursor24Regular');
export default Cursor24Regular;
      