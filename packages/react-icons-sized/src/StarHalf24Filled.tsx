import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2.35c-.48 0-.96.25-1.21.75L8.43 7.88l-5.27.77a1.35 1.35 0 00-.75 2.3l3.81 3.72-.9 5.25a1.35 1.35 0 001.96 1.42L12 18.86l4.71 2.48c1 .52 2.15-.32 1.96-1.42l-.9-5.25 3.82-3.72c.8-.78.36-2.14-.75-2.3l-5.27-.77L13.2 3.1c-.25-.5-.73-.75-1.21-.75zm0 15V4.04l2.26 4.56c.2.4.57.68 1.01.74l5.05.74-3.65 3.56c-.32.3-.46.76-.39 1.2l.86 5.02-4.51-2.37c-.2-.1-.41-.16-.63-.16z" fill={primaryFill} /></svg>;
}

const StarHalf24Filled = wrapIcon(rawSvg({}), 'StarHalf24Filled');
export default StarHalf24Filled;
      