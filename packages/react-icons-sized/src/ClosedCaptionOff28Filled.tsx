import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l1.53 1.53A4.24 4.24 0 002 8.25v11.5C2 22.1 3.9 24 6.25 24h15.5c.36 0 .72-.05 1.06-.13l1.9 1.91a.75.75 0 001.07-1.06L3.28 2.22zm6.86 8.99c-.2.01-.42.06-.62.12-.4.15-.77.4-1.04.8S8 13.11 8 14c0 .88.2 1.48.48 1.88.27.4.63.64 1.04.79.42.14.89.17 1.31.1.43-.06.77-.2.95-.36a.75.75 0 11.94 1.18c-.44.35-1.05.58-1.67.67-.63.1-1.34.06-2.01-.18a3.53 3.53 0 01-1.8-1.36c-.48-.7-.74-1.6-.74-2.72s.26-2.02.73-2.72A3.52 3.52 0 018.9 9.96l1.24 1.25zM7.18 4l8.13 8.12a3.53 3.53 0 012.23-2.2 4.32 4.32 0 012.01-.18c.62.1 1.23.32 1.67.67a.75.75 0 11-.94 1.18c-.18-.15-.52-.3-.95-.36a2.82 2.82 0 00-1.3.1c-.42.15-.78.4-1.05.8-.2.29-.37.69-.44 1.23l3.3 3.29c.18-.07.34-.15.44-.24a.75.75 0 11.94 1.18l-.27.18 4.34 4.34c.45-.68.71-1.49.71-2.36V8.25C26 5.9 24.1 4 21.75 4H7.18z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff28Filled = wrapIcon(rawSvg({}), 'ClosedCaptionOff28Filled');
export default ClosedCaptionOff28Filled;
      