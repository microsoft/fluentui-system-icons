import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.06 18.7a1.63 1.63 0 002.43-.68l.77-2.33a3.82 3.82 0 012.42-2.42l2.23-.73a1.61 1.61 0 001.07-1.3 1.62 1.62 0 00-1.13-1.78l-2.21-.72a3.82 3.82 0 01-2.42-2.42l-.73-2.24a1.62 1.62 0 00-3.07.02l-.74 2.26a3.82 3.82 0 01-2.36 2.37l-2.24.73a1.63 1.63 0 00.02 3.07l2.22.72a3.85 3.85 0 012.42 2.43l.73 2.23c.1.32.32.6.6.8zm9.74 6.08a1.2 1.2 0 001.4 0c.2-.14.36-.35.44-.6l.37-1.14a1.61 1.61 0 011.02-1.02l1.16-.38a1.21 1.21 0 00.59-1.83 1.23 1.23 0 00-.62-.45L23 18.99A1.6 1.6 0 0122 17.97l-.38-1.16a1.2 1.2 0 00-2.27.01l-.38 1.15a1.6 1.6 0 01-.99 1.02l-1.17.38a1.21 1.21 0 00-.58 1.83c.15.2.36.36.6.44l1.14.37A1.6 1.6 0 0119 23.04l.37 1.16c.09.23.24.44.44.58z" fill={primaryFill} /></svg>;
}

const Sparkle28Filled = wrapIcon(rawSvg({}), 'Sparkle28Filled');
export default Sparkle28Filled;
      