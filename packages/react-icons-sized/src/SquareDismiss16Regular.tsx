import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h1.76a5.5 5.5 0 01-.66-1H4.5A1.5 1.5 0 013 11.5v-7C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v1.1c.36.18.7.4 1 .66V4.5A2.5 2.5 0 0011.5 2h-7zm6 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 11.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const SquareDismiss16Regular = wrapIcon(rawSvg({}), 'SquareDismiss16Regular');
export default SquareDismiss16Regular;
      