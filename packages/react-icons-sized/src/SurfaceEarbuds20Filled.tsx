import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.55 14.03a5.75 5.75 0 002.9 4.24l-1.4.57a2 2 0 01-2.37-.66l-.27-.37a2 2 0 01.06-2.44l1.08-1.34zm5.7-5.53a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zM5.75 1c.2 0 .39.01.58.03l.28.05-.14.04A3.72 3.72 0 004.54 6.6a3.65 3.65 0 005.75.56A4.75 4.75 0 115.75 1zm5.37.46l.09.1.09.12.44.65a1.5 1.5 0 01-.03 1.72l-.09.12-1.88 2.18a2.65 2.65 0 01-4.26-.18 2.72 2.72 0 011.43-4.1l2.62-.97a1.5 1.5 0 011.59.36zm-1.14.68a.5.5 0 00-.2.61l.03.08.26.43.06.07a.5.5 0 00.84-.5l-.04-.09-.26-.43-.05-.07a.5.5 0 00-.64-.1z" fill={primaryFill} /></svg>;
}

const SurfaceEarbuds20Filled = wrapIcon(rawSvg({}), 'SurfaceEarbuds20Filled');
export default SurfaceEarbuds20Filled;
      