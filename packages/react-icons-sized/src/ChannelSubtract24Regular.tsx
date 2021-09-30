import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.07A3.25 3.25 0 0017.75 3H6.07c-1.3.08-2.4.9-2.85 2.06a2.26 2.26 0 011.59.2c.31-.46.84-.76 1.44-.76h11.64c.9.08 1.61.83 1.61 1.75v5.06c.53.18 1.04.42 1.5.71V6.07zM12.02 21c-.3-.46-.53-.97-.7-1.5H6.1c-.9-.08-1.61-.83-1.61-1.75V9.37a2.25 2.25 0 01-1.5 0v8.56A3.25 3.25 0 006.26 21h5.77zm-.29-6.5c.29-.55.65-1.05 1.08-1.5H8.75l-.1.01a.75.75 0 00.1 1.5h2.98zM16 10.25a.75.75 0 00-.75-.75h-6.6a.75.75 0 00.1 1.5h6.5l.1-.01a.75.75 0 00.65-.74zm-11-3a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm3 6a.5.5 0 000-1h-6a.5.5 0 000 1h6z" fill={primaryFill} /></svg>;
}

const ChannelSubtract24Regular = wrapIcon(rawSvg({}), 'ChannelSubtract24Regular');
export default ChannelSubtract24Regular;
      