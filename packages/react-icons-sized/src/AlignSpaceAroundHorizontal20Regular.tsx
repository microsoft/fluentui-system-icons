import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2zM5 6v8a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1H6a1 1 0 00-1 1zm8-2a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2h-1zm-1 2a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z" fill={primaryFill} /></svg>;
}

const AlignSpaceAroundHorizontal20Regular = wrapIcon(rawSvg({}), 'AlignSpaceAroundHorizontal20Regular');
export default AlignSpaceAroundHorizontal20Regular;
      