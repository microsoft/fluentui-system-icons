import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.55 4a.5.5 0 01.45.5v11a.5.5 0 01-1 0V6.73a8.58 8.58 0 01-2.22 2.19.5.5 0 11-.56-.84 6.76 6.76 0 002.83-3.8.5.5 0 01.5-.28z" fill={primaryFill} /><path d="M2.5 4c.28 0 .5.22.5.5V9h6V4.5a.5.5 0 111 0v11a.5.5 0 01-1 0V10H3v5.5a.5.5 0 01-1 0v-11c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const TextHeader120Regular = wrapIcon(rawSvg({}), 'TextHeader120Regular');
export default TextHeader120Regular;
      