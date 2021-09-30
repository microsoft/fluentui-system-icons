import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0V4.5h-3.5v11h1.25a.75.75 0 010 1.5h-4a.75.75 0 010-1.5H9v-11H5.5v.75a.75.75 0 01-1.5 0v-1.5z" fill={primaryFill} /></svg>;
}

const TextTFilled = wrapIcon(rawSvg({}), 'TextTFilled');
export default TextTFilled;
      