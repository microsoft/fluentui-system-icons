import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.78 2.22c.3.3.3.77 0 1.06l-1.45 1.45a4.04 4.04 0 01-.48 5.12l-.3.3-.3.31c-.42.41-1.08.41-1.5 0L9.55 6.24a1.05 1.05 0 010-1.48l.6-.61a4.05 4.05 0 015.13-.48l1.45-1.45c.3-.3.77-.3 1.06 0z" fill={primaryFill} /><path d="M8.78 8.47c.3.3.3.77 0 1.06L7.51 10.8l1.69 1.7 1.27-1.28a.75.75 0 111.06 1.06l-1.28 1.28c.48.58.45 1.45-.1 2l-.3.3a4.04 4.04 0 01-5.12.47l-1.45 1.45a.75.75 0 01-1.06-1.06l1.45-1.45a4.04 4.04 0 01.48-5.12l.3-.3a1.49 1.49 0 012-.1l1.27-1.28c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const PlugDisconnectedFilled = wrapIcon(rawSvg({}), 'PlugDisconnectedFilled');
export default PlugDisconnectedFilled;
      