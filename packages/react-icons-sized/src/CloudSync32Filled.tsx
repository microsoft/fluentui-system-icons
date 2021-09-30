import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.85 5.74A7.64 7.64 0 0116 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0130 16c0 .46-.04.91-.12 1.34A8.99 8.99 0 0013.5 22H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3zM30 22.5a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0zm-3.75-4.75c.41 0 .75.34.75.75V21c0 .41-.34.75-.75.75h-2.5a.75.75 0 010-1.5h.73a2.99 2.99 0 00-4.37.43.77.77 0 01-.6.32c-.6 0-1.03-.61-.67-1.11a4.5 4.5 0 016.66-.74v-.65c0-.41.34-.75.75-.75zm-6.75 8.1v.4a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-.99a3 3 0 004.62-.18.77.77 0 01.6-.32c.62 0 1.04.61.68 1.11a4.5 4.5 0 01-6.66.74z" fill={primaryFill} /></svg>;
}

const CloudSync32Filled = wrapIcon(rawSvg({}), 'CloudSync32Filled');
export default CloudSync32Filled;
      