import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.44 3.42a1 1 0 00-1.87-.03l-6 15.5a1 1 0 001.86.72L3.83 16h6.96l1.27 3.58a1 1 0 001.88-.66l-5.5-15.5zM4.6 14l2.86-7.37L10.08 14H4.6zM16 3a1 1 0 011 1v7.62c.59-.4 1.27-.62 2-.62 2.2 0 4 2.07 4 4.63 0 2.55-1.8 4.62-4 4.62-.75 0-1.46-.24-2.06-.66a1 1 0 01-1.94-.34V4a1 1 0 011-1zm3 15.25c.84 0 2-.9 2-2.63S19.84 13 19 13c-.84 0-2 .9-2 2.63s1.16 2.62 2 2.62z" fill={primaryFill} /></svg>;
}

const TextCaseTitle24Filled = wrapIcon(rawSvg({}), 'TextCaseTitle24Filled');
export default TextCaseTitle24Filled;
      