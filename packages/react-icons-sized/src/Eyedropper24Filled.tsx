import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.03 2.97a3.58 3.58 0 00-5.06 0L14 4.94l-.01-.01a1.75 1.75 0 00-2.48 0l-.58.58c-.69.69-.69 1.8 0 2.48V8l-6.77 6.78c-.42.42-.66 1-.66 1.6v.68L2.22 19.4c-.84 1.53.84 3.2 2.37 2.37l2.35-1.28h.69c.6 0 1.17-.24 1.59-.66L16 13.06l.01.01c.69.69 1.8.69 2.48 0l.58-.58c.69-.69.69-1.8 0-2.48V10l1.96-1.97a3.58 3.58 0 000-5.06zM12 9.07L14.94 12l-6.78 6.78a.75.75 0 01-.53.22h-.88a.75.75 0 00-.36.1l-2.51 1.36a.23.23 0 01-.16.04.26.26 0 01-.14-.08.26.26 0 01-.08-.14c0-.04 0-.09.04-.16l1.37-2.51c.06-.11.09-.23.09-.36v-.88c0-.2.08-.39.22-.53L12 9.06z" fill={primaryFill} /></svg>;
}

const Eyedropper24Filled = wrapIcon(rawSvg({}), 'Eyedropper24Filled');
export default Eyedropper24Filled;
      