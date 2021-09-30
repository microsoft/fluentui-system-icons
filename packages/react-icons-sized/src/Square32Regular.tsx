import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7.5A4.5 4.5 0 017.5 3h17A4.5 4.5 0 0129 7.5v17a4.5 4.5 0 01-4.5 4.5h-17A4.5 4.5 0 013 24.5v-17zM7.5 5A2.5 2.5 0 005 7.5v17A2.5 2.5 0 007.5 27h17a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0024.5 5h-17z" fill={primaryFill} /></svg>;
}

const Square32Regular = wrapIcon(rawSvg({}), 'Square32Regular');
export default Square32Regular;
      