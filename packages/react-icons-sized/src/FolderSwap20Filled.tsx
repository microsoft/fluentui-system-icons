import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.56 4.5h4.94a2.5 2.5 0 012.48 2.17l.01.17L18 7v6.88l-1.44-1.44A1.5 1.5 0 0014.08 14h-1.16a1.5 1.5 0 00-2.48-1.56l-2 2a1.5 1.5 0 000 2.13l.44.43H4.5A2.5 2.5 0 012 14.66V7.5H7.22c.3-.04.6-.16.83-.36l.1-.1 2.41-2.54z" fill={primaryFill} /><path d="M7.17 3c.27 0 .53.07.76.21l.14.09 1.31.99-1.95 2.05-.06.06a.5.5 0 01-.22.1H2v-1A2.5 2.5 0 014.34 3h2.83z" fill={primaryFill} /><path d="M11.86 13.86a.5.5 0 00-.71-.7l-2 1.99a.5.5 0 000 .7l2 2a.5.5 0 10.7-.7L10.72 16h5.58l-1.14 1.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 10-.7.7L16.29 15h-5.58l1.15-1.14z" fill={primaryFill} /></svg>;
}

const FolderSwap20Filled = wrapIcon(rawSvg({}), 'FolderSwap20Filled');
export default FolderSwap20Filled;
      