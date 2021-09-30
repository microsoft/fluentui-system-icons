import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 2.5c.21 0 .4.13.47.33l3.5 9.5a.5.5 0 01-.94.34L13.05 10h-4.1l-.98 2.67a.5.5 0 01-.94-.34l3.5-9.5A.5.5 0 0111 2.5zm0 1.95L9.32 9h3.36L11 4.45zM6 8.7v3.81a.5.5 0 01-.43.49H5.5a.5.5 0 01-.5-.43v-.14c-.66.38-1.27.57-1.83.57A2.09 2.09 0 011 10.83c0-1.15.8-2 2.1-2.16a5.02 5.02 0 011.9.14c0-.74-.37-1.1-1.2-1.14-.63-.04-1.08.05-1.35.24a.5.5 0 01-.57-.82c.44-.3 1.03-.44 1.79-.43h.19c1.3.07 2.08.83 2.14 2.04zM4.8 9.82a4.04 4.04 0 00-1.57-.13c-.82.1-1.23.53-1.23 1.17 0 .73.47 1.16 1.17 1.16a3.2 3.2 0 001.66-.64l.17-.11v-1.4l-.2-.05z" fill={primaryFill} /></svg>;
}

const TextChangeCase16Regular = wrapIcon(rawSvg({}), 'TextChangeCase16Regular');
export default TextChangeCase16Regular;
      