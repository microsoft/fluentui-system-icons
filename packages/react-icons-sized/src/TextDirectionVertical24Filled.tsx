import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4a1 1 0 00-2 0v13.59l-.3-.3a1 1 0 00-1.4 1.42l2 2a1 1 0 001.4 0l2-2a1 1 0 00-1.4-1.42l-.3.3V4zm9.17-.38a1 1 0 00-1.84 0l-3.75 9a1 1 0 101.84.76l1-2.38h3.66l1 2.38a1 1 0 001.84-.76l-3.75-9zM17.25 9h-2l1-2.4 1 2.4zM16 14a1 1 0 00-1 1v2.59l-.3-.3a1 1 0 00-1.4 1.42l2 2a1 1 0 001.4 0l2-2a1 1 0 00-1.4-1.42l-.3.3V15a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const TextDirectionVertical24Filled = wrapIcon(rawSvg({}), 'TextDirectionVertical24Filled');
export default TextDirectionVertical24Filled;
      