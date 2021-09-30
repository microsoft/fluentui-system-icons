import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.56 10.27l4.59 4.58a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l4.58 4.59-.08.15-2.8.94a.5.5 0 00-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 00.82-.2l.94-2.8.15-.08zm-.74-.74l-.06.03a.5.5 0 00-.23.28l-.75 2.23-3.85-3.85 2.23-.75a.5.5 0 00.28-.23l.03-.06 2.35 2.35zm3.9-2.09l-2.06 1.1.74.74 1.79-.96a1.5 1.5 0 00.35-2.38l-3.48-3.5a1.5 1.5 0 00-2.39.36l-.95 1.8.73.73 1.1-2.06a.5.5 0 01.8-.12l3.49 3.5a.5.5 0 01-.12.8z" fill={primaryFill} /></svg>;
}

const PinOff16Regular = wrapIcon(rawSvg({}), 'PinOff16Regular');
export default PinOff16Regular;
      