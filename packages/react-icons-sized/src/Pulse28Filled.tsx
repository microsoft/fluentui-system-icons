import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.04 3a1 1 0 01.94.78l3.7 16.5 3.87-11.6a1 1 0 011.88-.05L22.18 13H25a1 1 0 110 2h-3.5a1 1 0 01-.93-.63l-.98-2.46-4.14 12.4a1 1 0 01-1.93-.1L9.86 7.95l-1.9 6.35A1 1 0 017 15H3a1 1 0 110-2h3.26l2.78-9.29a1 1 0 011-.7z" fill={primaryFill} /></svg>;
}

const Pulse28Filled = wrapIcon(rawSvg({}), 'Pulse28Filled');
export default Pulse28Filled;
      