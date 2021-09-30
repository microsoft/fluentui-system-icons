import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M41.5 5.25a1.25 1.25 0 10-2.5 0v37.5a1.25 1.25 0 102.5 0V5.25zM32.25 26c2.35 0 4.25 1.9 4.25 4.25v5.5c0 2.35-1.9 4.25-4.25 4.25h-15A4.25 4.25 0 0113 35.75v-5.5C13 27.9 14.9 26 17.25 26h15zM34 30.25c0-.97-.78-1.75-1.75-1.75h-15c-.97 0-1.75.78-1.75 1.75v5.5c0 .97.78 1.75 1.75 1.75h15c.97 0 1.75-.78 1.75-1.75v-5.5zm2.5-18v5.5c0 2.35-1.9 4.25-4.25 4.25H10a4.25 4.25 0 01-4.25-4.25v-5.5C5.75 9.9 7.65 8 10 8h22.25c2.35 0 4.25 1.9 4.25 4.25zm-2.5 5.5v-5.5c0-.97-.78-1.75-1.75-1.75H10c-.97 0-1.75.78-1.75 1.75v5.5c0 .97.78 1.75 1.75 1.75h22.25c.97 0 1.75-.78 1.75-1.75z" fill={primaryFill} /></svg>;
}

const AlignRight48Regular = wrapIcon(rawSvg({}), 'AlignRight48Regular');
export default AlignRight48Regular;
      