import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h4a2 2 0 012 2h.5c.83 0 1.5.67 1.5 1.5v1a2.5 2.5 0 01-2.12 2.47 4 4 0 01-3.38 3V12H10a2 2 0 012 2v.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V14c0-1.1.9-2 2-2h1.5v-1.03a4 4 0 01-3.38-3A2.5 2.5 0 012 5.5v-1C2 3.67 2.67 3 3.5 3H4zm7 0a1 1 0 00-1-1H6a1 1 0 00-1 1v4a3 3 0 006 .07V3zm1 3.91c.58-.2 1-.76 1-1.41v-1a.5.5 0 00-.5-.5H12v2.91zM4 4h-.5a.5.5 0 00-.5.5v1c0 .65.42 1.2 1 1.41V4zm1 10h6a1 1 0 00-1-1H6a1 1 0 00-1 1z" fill={primaryFill} /></svg>;
}

const Trophy16Regular = wrapIcon(rawSvg({}), 'Trophy16Regular');
export default Trophy16Regular;
      