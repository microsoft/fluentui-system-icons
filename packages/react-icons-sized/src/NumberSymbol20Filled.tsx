import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.99 2.88a.75.75 0 00-1.48-.26L6.84 6.5H3.75a.75.75 0 000 1.5h2.83l-.68 4H2.75a.75.75 0 000 1.5h2.89L5 17.12a.75.75 0 101.48.26l.67-3.88h4.48L11 17.12a.75.75 0 101.48.26l.67-3.88h3.1a.75.75 0 000-1.5h-2.84l.69-4h3.14a.75.75 0 100-1.5h-2.88l.62-3.62a.75.75 0 00-1.48-.26l-.67 3.88H8.37l.62-3.62zM8.1 8h4.47l-.68 4H7.42l.69-4z" fill={primaryFill} /></svg>;
}

const NumberSymbol20Filled = wrapIcon(rawSvg({}), 'NumberSymbol20Filled');
export default NumberSymbol20Filled;
      