import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.48 21h.27c1.22 0 1.86.5 2.65 1.7l.4.61c.3.46.5.65.74.75.43.18.79.09 2.1-.55l.4-.2a9.8 9.8 0 012.03-.79.75.75 0 11.36 1.46 7 7 0 00-1.27.47l-1.15.55c-1.57.74-2.1.83-3.05.44-.62-.25-.98-.63-1.5-1.42l-.2-.3c-.6-.95-.9-1.22-1.51-1.22h-.16c-.43.03-.71.23-2.58 1.61-1.74 1.3-3.07 1.92-4.76 1.92-2.06 0-4-.38-5.82-1.14l2.88-.67c.95.2 1.93.3 2.94.3 1.29 0 2.36-.5 3.87-1.61l1.16-.86c1.27-.92 1.55-1.03 2.2-1.05zm6.3-17.78a4.29 4.29 0 010 6.06l-1.04 1.04c1.15 1.4 1.11 2.89.04 3.96l-3 3a.75.75 0 01-1.06-1.06l3-3c.48-.49.54-1.09-.04-1.84l-10.6 10.6c-.3.3-.67.5-1.08.6l-6.08 1.4a.75.75 0 01-.9-.9L3.42 17c.1-.41.3-.79.6-1.08l12.7-12.7a4.29 4.29 0 016.06 0z" fill={primaryFill} /></svg>;
}

const Signature28Filled = wrapIcon(rawSvg({}), 'Signature28Filled');
export default Signature28Filled;
      