import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.38 8.67l-9 3.75a1 1 0 11-.76-1.84l2.38-1V5.92l-2.38-1a1 1 0 01.76-1.84l9 3.75a1 1 0 010 1.84zM15 8.75l2.4-1-2.4-1v2zM8 4a1 1 0 00-2 0v13.59l-.3-.3a1 1 0 00-1.4 1.42l2 2a1 1 0 001.4 0l2-2a1 1 0 00-1.4-1.42l-.3.3V4zm8 9a1 1 0 00-1 1v3.59l-.3-.3a1 1 0 00-1.4 1.42l2 2a1 1 0 001.4 0l2-2a1 1 0 00-1.4-1.42l-.3.3V14a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate90Right24Filled = wrapIcon(rawSvg({}), 'TextDirectionRotate90Right24Filled');
export default TextDirectionRotate90Right24Filled;
      