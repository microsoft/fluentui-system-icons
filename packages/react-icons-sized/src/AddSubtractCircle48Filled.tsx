import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27.25 29.5a1.25 1.25 0 100 2.5h7.5a1.25 1.25 0 000-2.5h-7.5zM24 44a20 20 0 100-40 20 20 0 000 40zm0-2.5c-4.38 0-8.39-1.61-11.46-4.27l24.69-24.69A17.5 17.5 0 0124 41.5zM12.25 17.25c0-.69.56-1.25 1.25-1.25h3v-2.75a1.25 1.25 0 012.5 0V16h2.75a1.25 1.25 0 110 2.5H19v2.75a1.25 1.25 0 11-2.5 0V18.5h-3c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const AddSubtractCircle48Filled = wrapIcon(rawSvg({}), 'AddSubtractCircle48Filled');
export default AddSubtractCircle48Filled;
      