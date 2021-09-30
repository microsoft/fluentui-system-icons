import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.42 4.13a5.98 5.98 0 00.74 8.48.75.75 0 00.96-1.15 4.49 4.49 0 01-.64-6.27l6.33 6.33c-.62.5-1.38.83-2.21.94l.43-.43a.75.75 0 10-1.06-1.06l-1.75 1.75a.75.75 0 000 1.06l1.75 1.75a.75.75 0 001.06-1.06l-.5-.5a5.97 5.97 0 003.34-1.39l2.28 2.27a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l2.27 2.28zm3.55-.16a.75.75 0 00-.2.67l.59.6c.23.04.49-.03.67-.21l1.75-1.75c.3-.3.3-.77 0-1.06L8.03.47a.75.75 0 00-1.06 1.06l.5.5c-.92.07-1.77.36-2.52.8l1.11 1.1c.42-.19.87-.33 1.34-.39l-.43.43zm5.1 5.97l1.1 1.1a5.97 5.97 0 00-1.33-7.65.75.75 0 10-.96 1.15 4.49 4.49 0 011.18 5.4z" fill={primaryFill} /></svg>;
}

const ArrowSyncOff16Filled = wrapIcon(rawSvg({}), 'ArrowSyncOff16Filled');
export default ArrowSyncOff16Filled;
      