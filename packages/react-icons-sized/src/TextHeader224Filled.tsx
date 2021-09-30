import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.4 7.95c.19-.4.8-1.2 2.35-1.2.79 0 1.34.24 1.69.57.34.32.56.8.56 1.43 0 1.83-1.14 2.8-2.73 4.02l-.22.16c-1.44 1.09-3.3 2.5-3.3 5.07a1 1 0 001 1h6.5a1 1 0 100-2h-5.32c.36-.97 1.28-1.68 2.55-2.64C20.01 13.19 22 11.67 22 8.75a3.9 3.9 0 00-1.19-2.88 4.37 4.37 0 00-3.06-1.12c-2.44 0-3.67 1.36-4.14 2.3a1 1 0 101.78.9zM4 6a1 1 0 00-2 0v12a1 1 0 102 0v-5h6v5a1 1 0 102 0V6a1 1 0 10-2 0v5H4V6z" fill={primaryFill} /></svg>;
}

const TextHeader224Filled = wrapIcon(rawSvg({}), 'TextHeader224Filled');
export default TextHeader224Filled;
      