import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.16 10.24A.75.75 0 007 9.58l.03-.12c.03-.1.1-.25.2-.4.18-.24.55-.56 1.39-.56.77 0 1.28.24 1.57.56.28.3.45.8.32 1.56-.07.43-.28.68-.64.9-.3.19-.63.32-1.04.48l-.54.21c-.62.26-1.34.61-1.9 1.26a4.1 4.1 0 00-.89 2.78.75.75 0 00.75.75h5a.75.75 0 000-1.5H7.06c.1-.5.27-.82.47-1.06.32-.36.76-.6 1.33-.84l.4-.16c.45-.17.98-.38 1.4-.65.63-.39 1.17-.97 1.33-1.91.19-1.1-.03-2.1-.69-2.83A3.52 3.52 0 008.62 7c-1.32 0-2.14.55-2.6 1.18a2.88 2.88 0 00-.51 1.21v.02s-.05.39 0 0c-.05.41.24.79.65.83zm8.12 1.98a.75.75 0 00-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 101.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 101.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 00-1.06-1.06l-1.22 1.22-1.22-1.22z" fill={primaryFill} /></svg>;
}

const Multiplier2X24Regular = wrapIcon(rawSvg({}), 'Multiplier2X24Regular');
export default Multiplier2X24Regular;
      