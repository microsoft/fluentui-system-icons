import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 3a5 5 0 015 4.78V19a3 3 0 01-6 .18V9a1 1 0 012-.12V19a1 1 0 002 .12V8a3 3 0 00-6-.18V17a1 1 0 01-2 .12V8a5 5 0 015-5zm8 14h2a1 1 0 01.12 2H15a1 1 0 01-.12-2H17h-2zm0-4h5.5a1 1 0 01.12 2H15a1 1 0 01-.12-2h5.62H15zm0-4h5.5a1 1 0 01.12 2H15a1 1 0 01-.12-2h5.62H15zm0-4h5.5a1 1 0 01.12 2H15a1 1 0 01-.12-2h5.62H15z" fill={primaryFill} /></svg>;
}

const AttachText24Filled = wrapIcon(rawSvg({}), 'AttachText24Filled');
export default AttachText24Filled;
      