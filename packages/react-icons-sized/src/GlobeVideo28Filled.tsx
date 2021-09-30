import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 24a2 2 0 002 2h5a2 2 0 002-2v-1l2.4 1.8A1 1 0 0026 24v-7a1 1 0 00-1.6-.8L22 18v-1a2 2 0 00-2-2h-5a2 2 0 00-2 2v7zM2.33 19.5a12.03 12.03 0 007.6 6.1c-1.06-1.42-1.9-3.55-2.41-6.1H2.33zm9.37 5.85l.12.11c-.2-.44-.32-.94-.32-1.46v-4.5H9.05c.28 1.3.64 2.46 1.08 3.44a7.62 7.62 0 001.57 2.41zM11.5 18H8.78a27.78 27.78 0 01-.17-6.5h8.78c.06.65.1 1.32.1 2H15a3.5 3.5 0 00-3.5 3.5v1zm5.72-8H8.78c.28-1.91.75-3.6 1.35-4.94a7.62 7.62 0 011.57-2.41c.52-.5.96-.65 1.3-.65.34 0 .78.15 1.3.65.53.5 1.08 1.3 1.57 2.41.6 1.34 1.07 3.03 1.35 4.94zm-9.95 0c.44-3.21 1.4-5.91 2.66-7.6A12.03 12.03 0 001.68 10h5.59zm11.46 0c-.44-3.21-1.4-5.91-2.66-7.6a12.03 12.03 0 018.25 7.6h-5.59zm.27 3.5c-.02-.68-.05-1.35-.1-2h5.84a12.05 12.05 0 01.25 3c-.5 0-1.03.15-1.49.5l-.43.32A3.5 3.5 0 0020 13.5h-1zM7 14c0-.85.04-1.69.1-2.5H1.26a12.05 12.05 0 00.42 6.5h5.59C7.09 16.74 7 15.4 7 14z" fill={primaryFill} /></svg>;
}

const GlobeVideo28Filled = wrapIcon(rawSvg({}), 'GlobeVideo28Filled');
export default GlobeVideo28Filled;
      