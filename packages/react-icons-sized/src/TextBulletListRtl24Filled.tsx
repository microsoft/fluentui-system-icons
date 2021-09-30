import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 16.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4 .5H3a1 1 0 00-.12 2H16.5a1 1 0 00.12-2h-.12zm4-6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4 .5H3a1 1 0 00-.12 2H16.5a1 1 0 00.12-2h-.12zm4-6.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4 .5H3a1 1 0 00-.12 2H16.5a1 1 0 00.12-2h-.12z" fill={primaryFill} /></svg>;
}

const TextBulletListRtl24Filled = wrapIcon(rawSvg({}), 'TextBulletListRtl24Filled');
export default TextBulletListRtl24Filled;
      