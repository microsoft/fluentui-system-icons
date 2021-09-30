import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.95 2.5c.78 0 1.5.4 1.91 1.06L20.38 6h2.37C24.55 6 26 7.45 26 9.25v12.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 21.75V9.25C2 7.45 3.46 6 5.25 6h2.57L9.2 3.62c.4-.7 1.14-1.12 1.95-1.12h5.8zM14 9.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 1.5a4 4 0 110 8 4 4 0 010-8z" fill={primaryFill} /></svg>;
}

const Camera28Filled = wrapIcon(rawSvg({}), 'Camera28Filled');
export default Camera28Filled;
      