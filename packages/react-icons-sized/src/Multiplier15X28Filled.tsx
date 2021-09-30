import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 9a1 1 0 00-1.86-.52v.01a3.45 3.45 0 01-.17.25 8.13 8.13 0 01-2.49 2.4 1 1 0 001.03 1.72A9.18 9.18 0 005 11.73V19a1 1 0 102 0V9zm4.5-.12a1 1 0 011-.88h5a1 1 0 110 2h-4.11l-.25 2.1 1.44-.17a4.17 4.17 0 11.5 8.32h-.37c-1.2 0-2.35-.48-3.2-1.33l-.72-.71a1 1 0 111.42-1.42l.71.72c.48.47 1.12.74 1.8.74h.36a2.17 2.17 0 10-.26-4.33l-2.7.32a1 1 0 01-1.11-1.1l.5-4.26zm10.2 5.41a1 1 0 00-1.4 1.42L21.58 17l-1.3 1.3a1 1 0 001.42 1.4L23 18.42l1.3 1.3a1 1 0 001.4-1.42L24.42 17l1.3-1.3a1 1 0 00-1.42-1.4L23 15.58l-1.3-1.3zM8.76 20a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const Multiplier15X28Filled = wrapIcon(rawSvg({}), 'Multiplier15X28Filled');
export default Multiplier15X28Filled;
      