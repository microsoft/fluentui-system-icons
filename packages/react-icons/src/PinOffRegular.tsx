import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L6.9 7.6 4.02 8.75a1 1 0 00-.34 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 001.64-.34l1.15-2.88 4.75 4.75a.5.5 0 00.7-.7l-15-15zm8.78 10.18l-1.31 3.28-5.93-5.93 3.28-1.3 3.96 3.95zm1.33-1.62l-.08.04.74.75 3.24-1.62a2 2 0 00.52-3.2l-4.05-4.06a2 2 0 00-3.2.52L8.5 6.38l.75.74.04-.08 1.73-3.45a1 1 0 011.6-.26l4.05 4.05a1 1 0 01-.26 1.6l-3.45 1.73z" fill={primaryFill} /></svg>;
}

const PinOffRegular = wrapIcon(rawSvg({}), 'PinOffRegular');
export default PinOffRegular;
      