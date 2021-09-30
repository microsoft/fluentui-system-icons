import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 8.5v9.25C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H8.5v5.5H3zM8.5 10v4h-4v-4h4zm1.5 4v-4h4v4h-4zm5.5 0v-4h4v4h-4zM10 15.5h4v4h-4v-4zm5.5 0h4v2.25c0 .97-.78 1.75-1.75 1.75H15.5v-4zm0-11h2.25c.97 0 1.75.78 1.75 1.75V8.5h-4v-4zm-1.5 4h-4v-4h4v4zm-5.5 7v4H6.25c-.97 0-1.75-.78-1.75-1.75V15.5h4z" fill={primaryFill} /></svg>;
}

const PuzzleCube24Regular = wrapIcon(rawSvg({}), 'PuzzleCube24Regular');
export default PuzzleCube24Regular;
      