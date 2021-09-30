import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.38 15.33l-9-3.75a1 1 0 10-.76 1.84l2.38 1v3.66l-2.38 1a1 1 0 00.76 1.84l9-3.75a1 1 0 000-1.84zM15 15.25l2.4 1-2.4 1v-2zM8 20a1 1 0 11-2 0V6.41l-.3.3a1 1 0 01-1.4-1.42l2-2a1 1 0 011.4 0l2 2a1 1 0 01-1.4 1.42L8 6.4V20zm8-9a1 1 0 01-1-1V6.41l-.3.3a1 1 0 11-1.4-1.42l2-2a1 1 0 011.4 0l2 2a1 1 0 01-1.4 1.42l-.3-.3V10a1 1 0 01-1 1z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate90Rtl24Filled = wrapIcon(rawSvg({}), 'TextDirectionRotate90Rtl24Filled');
export default TextDirectionRotate90Rtl24Filled;
      