import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3a.75.75 0 000 1.5h1.04l-2.73 6.72a.75.75 0 00-.06.28 3.5 3.5 0 107 0c0-.1-.02-.2-.06-.28L6.21 4.5h5.04v12h-4a2.25 2.25 0 000 4.5h9.5a2.25 2.25 0 000-4.5h-4v-12h5.04l-2.73 6.72a.75.75 0 00-.06.28 3.5 3.5 0 107 0c0-.1-.02-.2-.06-.28L19.21 4.5h1.04a.75.75 0 000-1.5H3.75zM5.5 6.74l1.63 4.01H3.87L5.5 6.74zm11.37 4.01l1.63-4.01 1.63 4.01h-3.26z" fill={primaryFill} /></svg>;
}

const Scales24Filled = wrapIcon(rawSvg({}), 'Scales24Filled');
export default Scales24Filled;
      