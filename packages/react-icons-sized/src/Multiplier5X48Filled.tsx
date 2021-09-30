import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.52 15.29A1.5 1.5 0 0116 14h9a1.5 1.5 0 010 3h-7.7l-.55 3.83 3.13-.28a6.99 6.99 0 11.63 13.95h-.56c-2.15 0-4.19-.9-5.62-2.5l-.44-.5a1.5 1.5 0 112.22-2l.45.5c.86.95 2.1 1.5 3.39 1.5h.56a3.99 3.99 0 10-.36-7.96l-5.01.45a1.5 1.5 0 01-1.62-1.7l1-7zm14.92 9.15a1.5 1.5 0 012.12 0L34 26.88l2.44-2.44a1.5 1.5 0 012.12 2.12L36.12 29l2.44 2.44a1.5 1.5 0 01-2.12 2.12L34 31.12l-2.44 2.44a1.5 1.5 0 01-2.12-2.12L31.88 29l-2.44-2.44a1.5 1.5 0 010-2.12zM10.25 34a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const Multiplier5X48Filled = wrapIcon(rawSvg({}), 'Multiplier5X48Filled');
export default Multiplier5X48Filled;
      