import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 011-1h7a1 1 0 011 1v11h-3.02c-.03.34-.1.68-.19 1H15a3 3 0 003-3v-2h-3V4a2 2 0 00-2-2H6zm9 13v-3h2v1a2 2 0 01-2 2zM7.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM7 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm3 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5z" fill={primaryFill} /></svg>;
}

const ReceiptAddRegular = wrapIcon(rawSvg({}), 'ReceiptAddRegular');
export default ReceiptAddRegular;
      