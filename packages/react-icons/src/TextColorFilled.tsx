import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.46 2.31a.5.5 0 00-.92 0l-3 7.5a.5.5 0 10.92.38L8.54 7.5h2.92l1.08 2.69a.5.5 0 10.92-.38l-3-7.5zM10 3.85l1.06 2.65H8.94L10 3.85zM4.5 12c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11z" fill={primaryFill} /></svg>;
}

const TextColorFilled = wrapIcon(rawSvg({}), 'TextColorFilled');
export default TextColorFilled;
      