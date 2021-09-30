import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.4 7.54c.28-.28.73-.54 1.37-.54.88 0 1.48.56 1.7 1.23.21.66.08 1.46-.5 2-.23.21-.49.39-.72.54l-.02.02c-.23.15-.44.29-.62.44a1.6 1.6 0 00-.54.77H9a.5.5 0 110 1H6.5a.5.5 0 01-.5-.5c0-.97.44-1.59.96-2.03.23-.2.48-.36.7-.5l.04-.03c.24-.16.43-.3.58-.44a.93.93 0 00.24-.96.75.75 0 00-.75-.54.86.86 0 00-.65.24.82.82 0 00-.15.22.5.5 0 01-.94-.34l.03-.07.07-.14c.05-.1.15-.23.28-.37z" fill={primaryFill} /><path d="M11.5 7c.28 0 .5.22.5.5v2h1v-2a.5.5 0 011 0v5a.5.5 0 01-1 0v-2h-1.5a.5.5 0 01-.5-.5V7.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-9z" fill={primaryFill} /></svg>;
}

const ShiftsDayRegular = wrapIcon(rawSvg({}), 'ShiftsDayRegular');
export default ShiftsDayRegular;
      