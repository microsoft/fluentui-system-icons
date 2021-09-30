import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1 1.4L12.22 7h2.56c.95 0 1.4 1.14.77 1.81l-.25.25a5.5 5.5 0 00-6.22 6.35l-2.21 2.26c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-5.65l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const FlashCheckmarkFilled = wrapIcon(rawSvg({}), 'FlashCheckmarkFilled');
export default FlashCheckmarkFilled;
      