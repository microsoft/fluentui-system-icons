import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.42 5L14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 012.6 0l5.76 2.3c.13.06.25.13.36.21zM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 00-.36.21L10 7.96zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.36.12.37-1.48.07-.24V8.84L2.04 5.85zM18 6.17v2.95a2.87 2.87 0 00-2.9.71l-4.6 4.6v-5.6l7.46-2.99c.03.1.04.22.04.33zm-7.02 9.2l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const BoxEdit20Filled = wrapIcon(rawSvg({}), 'BoxEdit20Filled');
export default BoxEdit20Filled;
      