import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm11 11a2 2 0 002-2v-1h-2v3zM6.5 6a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 3a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 3a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /></svg>;
}

const ReceiptFilled = wrapIcon(rawSvg({}), 'ReceiptFilled');
export default ReceiptFilled;
      