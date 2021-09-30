import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 29a1 1 0 110-2h24a1 1 0 110 2H4zm1-7.5A3.5 3.5 0 008.5 25h3a3.5 3.5 0 003.5-3.5v-15A3.5 3.5 0 0011.5 3h-3A3.5 3.5 0 005 6.5v15zM8.5 23A1.5 1.5 0 017 21.5v-15C7 5.67 7.67 5 8.5 5h3c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-3zm8.5-1.5a3.5 3.5 0 003.5 3.5h3a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0023.5 9h-3a3.5 3.5 0 00-3.5 3.5v9zm3.5 1.5a1.5 1.5 0 01-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-3z" fill={primaryFill} /></svg>;
}

const AlignBottom32Regular = wrapIcon(rawSvg({}), 'AlignBottom32Regular');
export default AlignBottom32Regular;
      