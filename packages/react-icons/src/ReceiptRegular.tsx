import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm11 8v3a2 2 0 002-2v-1h-2zm-1 3V5a1 1 0 00-1-1H5a1 1 0 00-1 1v9c0 1.1.9 2 2 2h7zM6 6.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const ReceiptRegular = wrapIcon(rawSvg({}), 'ReceiptRegular');
export default ReceiptRegular;
      