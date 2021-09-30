import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9.25c0-.69.56-1.25 1.25-1.25h25.5c.69 0 1.25.56 1.25 1.25V14a1.25 1.25 0 11-2.5 0v-3.5H25.25v27h3.5a1.25 1.25 0 110 2.5h-9.5a1.25 1.25 0 110-2.5h3.5v-27H12.5V14a1.25 1.25 0 11-2.5 0V9.25z" fill={primaryFill} /></svg>;
}

const TextT48Regular = wrapIcon(rawSvg({}), 'TextT48Regular');
export default TextT48Regular;
      