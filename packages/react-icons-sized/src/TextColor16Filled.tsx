import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1c.2 0 .38.12.46.3l3 7a.5.5 0 01-.92.4L9.81 7H6.2l-.73 1.7a.5.5 0 11-.92-.4l3-7A.5.5 0 018 1zM6.62 6h2.76L8 2.77 6.62 6zM2 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 012 13.5v-2z" fill={primaryFill} /></svg>;
}

const TextColor16Filled = wrapIcon(rawSvg({}), 'TextColor16Filled');
export default TextColor16Filled;
      