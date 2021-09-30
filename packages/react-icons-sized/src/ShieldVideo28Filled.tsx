import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.44 2.14a.75.75 0 00-.89.01 16.03 16.03 0 01-4.77 2.31A26.72 26.72 0 013.7 5.5H3.7a.75.75 0 00-.69.75v6.5c0 5.1 3.48 10.87 10.77 13.21.15.05.31.05.46 0l.85-.29A3 3 0 0115 25v-5a3 3 0 012.5-2.96V17a4 4 0 017.15-2.47c.07-.52.1-1.03.1-1.53V6.25c0-.39-.3-.71-.69-.75H24a11.58 11.58 0 01-.88-.12c-.6-.09-1.44-.24-2.4-.48a18.61 18.61 0 01-6.29-2.76zM18.5 18v-1a3 3 0 116 0v1h.5a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2v-5c0-1.1.9-2 2-2h.5zm1.5-1v1h3v-1a1.5 1.5 0 00-3 0zm3 5.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill={primaryFill} /></svg>;
}

const ShieldVideo28Filled = wrapIcon(rawSvg({}), 'ShieldVideo28Filled');
export default ShieldVideo28Filled;
      