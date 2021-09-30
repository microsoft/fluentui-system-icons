import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22a.75.75 0 01.97-.07l.09.07 10.5 10.5.07.08a.75.75 0 01-1.05 1.05l-.08-.07-1.87-1.87c-.19.04-.37.07-.56.08L10 12H7.56l.72.72c.26.27.29.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07-2-2a.75.75 0 01-.08-.98l.08-.08 2-2a.75.75 0 01.26-.17L4.76 5.83a2.5 2.5 0 00-.97 3.34l.1.18c.07.11.11.24.11.38a.75.75 0 01-1.39.4 4 4 0 011.06-5.39L2.23 3.28l-.08-.08a.75.75 0 01.08-.98zm10.53 3.3c.26 0 .48.12.62.32l.04.06a3.98 3.98 0 01-.36 4.69l-1.07-1.07a2.49 2.49 0 00.13-2.86.75.75 0 01.64-1.14zm-4.4 4.17l-.07.09-.72.72h1.88l-1-.99a.74.74 0 01-.09.18zm-.63-7.47a.75.75 0 01.98-.07l.08.07 2 2 .08.08c.2.26.2.62 0 .89l-.08.09L9.26 6.8 8.2 5.74l.24-.24h-.48L6.46 4h1.98l-.72-.72-.07-.09a.75.75 0 01.07-.97z" fill={primaryFill} /></svg>;
}

const ArrowRepeatAllOff16Filled = wrapIcon(rawSvg({}), 'ArrowRepeatAllOff16Filled');
export default ArrowRepeatAllOff16Filled;
      