import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.6 5.86a3.78 3.78 0 014.8 0L39.56 16.6c.9.73 1.43 1.85 1.43 3.03V39.1A3.86 3.86 0 0137.17 43h-5.1a3.86 3.86 0 01-3.82-3.89v-9.36c0-.72-.57-1.3-1.27-1.3h-5.96c-.7 0-1.27.58-1.27 1.3v9.36A3.86 3.86 0 0115.93 43h-5.1A3.86 3.86 0 017 39.11V19.63c0-1.18.53-2.3 1.43-3.03L21.61 5.86z" fill={primaryFill} /></svg>;
}

const Home48Filled = wrapIcon(rawSvg({}), 'Home48Filled');
export default Home48Filled;
      