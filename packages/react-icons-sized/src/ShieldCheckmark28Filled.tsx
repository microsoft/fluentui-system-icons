import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.44 2.14a.75.75 0 00-.89.01 16.03 16.03 0 01-4.77 2.31A26.72 26.72 0 013.7 5.5H3.7a.75.75 0 00-.69.75v6.5c0 5.1 3.48 10.87 10.77 13.21.15.05.31.05.46 0l.84-.29a7.5 7.5 0 019.6-11.4c.06-.43.08-.85.08-1.27V6.25c0-.39-.3-.71-.69-.75H24a11.58 11.58 0 01-.88-.12c-.6-.09-1.44-.24-2.4-.48a18.61 18.61 0 01-6.29-2.76zM27 20.5a6.5 6.5 0 10-13 0 6.5 6.5 0 0013 0zm-2.65-2.85c.2.2.2.5 0 .7l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L19 22.29l4.65-4.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ShieldCheckmark28Filled = wrapIcon(rawSvg({}), 'ShieldCheckmark28Filled');
export default ShieldCheckmark28Filled;
      