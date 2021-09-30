import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.06a1 1 0 011.64-.77l11 9.06a1 1 0 01-.63 1.77h-5.6c-.43 0-.85.2-1.13.52l-3.52 4.07A1 1 0 015 17.06v-14zm12 9.06L6 3.06v14l3.52-4.07a2.5 2.5 0 011.9-.87H17z" fill={primaryFill} /></svg>;
}

const Cursor20Regular = wrapIcon(rawSvg({}), 'Cursor20Regular');
export default Cursor20Regular;
      