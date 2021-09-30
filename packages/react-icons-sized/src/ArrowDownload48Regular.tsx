import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 39.5h23.5a1.25 1.25 0 01.13 2.5H12.25a1.25 1.25 0 01-.13-2.5h23.63-23.5zM23.62 6h.13c.65 0 1.18.5 1.24 1.12l.01.13v24.29l5.65-5.65a1.25 1.25 0 111.76 1.77l-7.77 7.78c-.5.49-1.28.49-1.77 0l-7.78-7.78a1.25 1.25 0 011.77-1.77l5.64 5.65V7.25c0-.65.5-1.18 1.12-1.24l.13-.01h-.13z" fill={primaryFill} /></svg>;
}

const ArrowDownload48Regular = wrapIcon(rawSvg({}), 'ArrowDownload48Regular');
export default ArrowDownload48Regular;
      