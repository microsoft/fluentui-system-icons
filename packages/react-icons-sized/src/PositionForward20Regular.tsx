import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 14v1.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H14v1h1.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 018 15.5V14H7z" fill={primaryFill} /><path d="M2 4.5A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5v6a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 012 10.5v-6zM4.5 3C3.67 3 3 3.67 3 4.5v.65L5.15 3H4.5zm2.06 0L3 6.56v1.59L8.15 3H6.56zM3 10.5c0 .23.05.45.15.65l8-8A1.5 1.5 0 0010.5 3h-.94L3 9.56v.94zM4.5 12h.8L12 5.3v-.8c0-.23-.05-.45-.15-.65l-8 8c.2.1.42.15.65.15zm5.2 0h.8c.83 0 1.5-.67 1.5-1.5v-.8L9.7 12zm-1.4 0L12 8.3V6.7L6.7 12h1.6z" fill={primaryFill} /></svg>;
}

const PositionForward20Regular = wrapIcon(rawSvg({}), 'PositionForward20Regular');
export default PositionForward20Regular;
      