import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 16a3 3 0 013 3l-.01 1.5c.2 3.67-2.62 5.5-7.87 5.5C6.89 26 4 24.2 4 20.55V19a3 3 0 013-3h10zm8 0a3 3 0 013 3v1.05c.17 3.3-2.33 4.95-6.9 4.95-.62 0-1.2-.03-1.74-.1A5.24 5.24 0 0021 20.88l-.01-.43V19c0-1.2-.52-2.27-1.35-3h5.35zM12 4a5 5 0 110 10 5 5 0 010-10zm10 2a4 4 0 110 8 4 4 0 010-8z" fill={primaryFill} /></svg>;
}

const People32Filled = wrapIcon(rawSvg({}), 'People32Filled');
export default People32Filled;
      