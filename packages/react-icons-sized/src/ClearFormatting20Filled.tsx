import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.47 3c-.38 0-.7.28-.75.65l-.13 1a.75.75 0 101.49.2l.04-.35H7.9l-1.57 9h-.58a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-.4l1.57-9h2.69l-.02.16a.75.75 0 101.48.2l.14-1.01a.75.75 0 00-.75-.85h-8.5zM2.75 15.5a.75.75 0 000 1.5H9.6a5.46 5.46 0 01-.5-1.5H2.74zm16.25-1a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const ClearFormatting20Filled = wrapIcon(rawSvg({}), 'ClearFormatting20Filled');
export default ClearFormatting20Filled;
      