import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v5.25l1-.5V4a1 1 0 011-1h7a1 1 0 011 1v11h-3.5v1H15a3 3 0 003-3v-2h-3V4a2 2 0 00-2-2H6zm9 13v-3h2v1a2 2 0 01-2 2zM7.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM7 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm-5.5 8.38v-3.76a1 1 0 01.55-.9l3-1.5a1 1 0 01.9 0l3 1.5a1 1 0 01.55.9v3.76a1 1 0 01-.55.9l-3 1.5a1 1 0 01-.9 0l-3-1.5a1 1 0 01-.55-.9zm1.04-3.57a.5.5 0 00.27.65L5 13.9v2.61a.5.5 0 001 0v-2.61l2.2-.93a.5.5 0 00-.4-.92L5.5 13l-2.3-.97a.5.5 0 00-.66.27z" fill={primaryFill} /></svg>;
}

const ReceiptCube20Regular = wrapIcon(rawSvg({}), 'ReceiptCube20Regular');
export default ReceiptCube20Regular;
      