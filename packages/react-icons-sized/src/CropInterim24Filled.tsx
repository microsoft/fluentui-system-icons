import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.67 9.1a6.5 6.5 0 11-5.17 11.52v.63c0 .38-.29.7-.65.74l-.1.01a.75.75 0 01-.75-.65v-2.6c0-.38.28-.7.64-.74h2.61a.75.75 0 01.1 1.48l-.1.01h-.74a4.98 4.98 0 008-4 5 5 0 00-3.6-4.8l-.24-1.6zM14.5 3a2.5 2.5 0 01.97 4.8l.82 5.32A2.5 2.5 0 1113.5 17H6.5a2.5 2.5 0 11-2.78-3.88l.82-5.3A2.5 2.5 0 117.5 4h4.99c.46-.6 1.18-1 2-1zm-2.5 2.5H8c0 1.2-.84 2.2-1.96 2.45l-.8 5.16A2.5 2.5 0 017 15.31l.01.19h6a2.5 2.5 0 011.76-2.39l-.8-5.16A2.5 2.5 0 0112 5.67V5.5z" fill={primaryFill} /></svg>;
}

const CropInterim24Filled = wrapIcon(rawSvg({}), 'CropInterim24Filled');
export default CropInterim24Filled;
      