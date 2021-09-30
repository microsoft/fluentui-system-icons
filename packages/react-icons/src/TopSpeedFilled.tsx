import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.03 10.82C3.3 7.45 6.11 5 10 5c.99 0 1.91.16 2.75.45a1.5 1.5 0 00-.17.21l-.44.65A7.28 7.28 0 0010.5 6V8.5a.5.5 0 01-1 0V6.02a7.05 7.05 0 00-5.3 2.9.5.5 0 01.1.05l1.5 1.13a.5.5 0 01-.6.8L3.7 9.77a.5.5 0 01-.05-.04c-.26.46-.49.94-.68 1.45a.5.5 0 11-.94-.36zm13.2-3.8l.04-.13a9.5 9.5 0 012.7 3.93.5.5 0 11-.94.36c-.19-.51-.42-1-.68-1.45a.5.5 0 01-.05.04l-1.5 1.13a.5.5 0 01-.6-.8l1.5-1.13a.5.5 0 01.1-.06c-.27-.36-.57-.7-.89-1l.32-.9zm-1.2-.95a.5.5 0 01.24.61l-2.64 7.53c-.12.36-.3.69-.54.98-1.1 1.36-3.24.17-2.69-1.47.1-.3.24-.57.41-.83l4.57-6.66a.5.5 0 01.64-.16z" fill={primaryFill} /></svg>;
}

const TopSpeedFilled = wrapIcon(rawSvg({}), 'TopSpeedFilled');
export default TopSpeedFilled;
      