import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.4 7.95c.19-.4.8-1.2 2.35-1.2.79 0 1.34.24 1.69.57.34.32.56.8.56 1.43 0 .58-.14.95-.32 1.21a1.9 1.9 0 01-.77.64c-.7.34-1.56.4-2.13.4a1 1 0 100 2c.57 0 1.44.06 2.13.4.33.16.6.37.77.64.18.26.32.63.32 1.21 0 .95-.8 2-2.25 2-1.64 0-2.16-.7-2.32-1.12a1 1 0 00-1.86.74c.5 1.25 1.82 2.38 4.18 2.38a4.1 4.1 0 003.6-6.33 3.7 3.7 0 00-.9-.92c.33-.24.64-.54.9-.92.42-.63.65-1.4.65-2.33a3.9 3.9 0 00-1.19-2.88 4.37 4.37 0 00-3.06-1.12c-2.44 0-3.67 1.36-4.14 2.3a1 1 0 101.78.9zM4 6a1 1 0 00-2 0v12a1 1 0 102 0v-5h6v5a1 1 0 102 0V6a1 1 0 10-2 0v5H4V6z" fill={primaryFill} /></svg>;
}

const TextHeader324Filled = wrapIcon(rawSvg({}), 'TextHeader324Filled');
export default TextHeader324Filled;
      