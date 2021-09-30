import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8a2 2 0 100-4 2 2 0 000 4zm-.5-5.97V.5a.5.5 0 011 0v1.53A4 4 0 019.97 5.5h1.53a.5.5 0 010 1H9.97A4 4 0 016.5 9.97a.5.5 0 010 .03v1.5a.5.5 0 01-1 0V10a.5.5 0 010-.03A4 4 0 012.03 6.5a.5.5 0 01-.03 0H.5a.5.5 0 010-1H2a.5.5 0 01.03 0A4 4 0 015.5 2.03zM3 6a3 3 0 106 0 3 3 0 00-6 0z" fill={primaryFill} /></svg>;
}

const MyLocation12Regular = wrapIcon(rawSvg({}), 'MyLocation12Regular');
export default MyLocation12Regular;
      