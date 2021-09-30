import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 6.5A17.5 17.5 0 006.5 24v4h9.25c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-6A5.75 5.75 0 014 38.25V24a20 20 0 1140 0v14.25A5.75 5.75 0 0138.25 44h-6c-.69 0-1.25-.56-1.25-1.25v-13.5c0-.69.56-1.25 1.25-1.25h9.25v-4A17.5 17.5 0 0024 6.5z" fill={primaryFill} /></svg>;
}

const Headphones48Filled = wrapIcon(rawSvg({}), 'Headphones48Filled');
export default Headphones48Filled;
      