import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 4a2 2 0 01-2.65 1.88l-1.28 1.95A3 3 0 0113 9.99l1.17.2a2 2 0 11-.16.99l-1.17-.2a3 3 0 01-1.43 1.67l.45 1.36L12 14a2 2 0 11-1.1.32l-.44-1.36A3.02 3.02 0 017.6 11.8l-1.64.78A2 2 0 014 15a2 2 0 111.5-3.32l1.64-.79A3 3 0 017.77 8l-.93-1.17a2 2 0 11.77-.63l.95 1.18a2.99 2.99 0 012.68-.1l1.28-1.94A2 2 0 1116 4z" fill={primaryFill} /></svg>;
}

const IotFilled = wrapIcon(rawSvg({}), 'IotFilled');
export default IotFilled;
      