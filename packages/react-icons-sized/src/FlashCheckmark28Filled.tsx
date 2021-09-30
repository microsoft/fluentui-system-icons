import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a.75.75 0 00-.71.52l-4 12.5A.75.75 0 006 16h3.54l-2.27 9.07a.75.75 0 001.28.69l4.46-4.85-.01-.41a7.5 7.5 0 017.28-7.5l2.52-2.74A.75.75 0 0022.25 9H17.1l2.35-5.98a.75.75 0 00-.7-1.02H10zm10.5 25a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm3.85-8.65l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L19 22.29l4.65-4.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const FlashCheckmark28Filled = wrapIcon(rawSvg({}), 'FlashCheckmark28Filled');
export default FlashCheckmark28Filled;
      