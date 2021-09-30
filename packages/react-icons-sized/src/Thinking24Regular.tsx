import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 18a2 2 0 110 4 2 2 0 010-4zm0 1.5a.5.5 0 100 1 .5.5 0 000-1zM9.5 15a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.5a1 1 0 100 2 1 1 0 000-2zM11.82 2a5.41 5.41 0 015.33 4.47h.09a3.76 3.76 0 110 7.53H6.4a3.76 3.76 0 110-7.53h.08A5.41 5.41 0 0111.82 2zm0 1.5a3.93 3.93 0 00-3.91 3.73.7.7 0 01-.7.65h-.7a2.31 2.31 0 100 4.62h10.63a2.31 2.31 0 100-4.62h-.7a.7.7 0 01-.69-.65 3.93 3.93 0 00-3.92-3.73z" fill={primaryFill} /></svg>;
}

const Thinking24Regular = wrapIcon(rawSvg({}), 'Thinking24Regular');
export default Thinking24Regular;
      