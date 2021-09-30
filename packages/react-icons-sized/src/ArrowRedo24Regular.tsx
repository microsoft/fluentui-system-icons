import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 2c-.38 0-.7.28-.74.65l-.01.1v5.69l-4.57-4.56a6.41 6.41 0 00-8.88-.18l-.19.18a6.4 6.4 0 000 9.06l8.85 8.84a.75.75 0 001.06-1.06l-8.85-8.84a4.9 4.9 0 016.77-7.1l.18.16 4.57 4.56h-5.69c-.38 0-.7.28-.74.65l-.01.1c0 .38.28.7.65.74l.1.01h7.5c.38 0 .7-.28.74-.65l.01-.1v-7.5a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowRedo24Regular = wrapIcon(rawSvg({}), 'ArrowRedo24Regular');
export default ArrowRedo24Regular;
      