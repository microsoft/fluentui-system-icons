import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 18c.38 0 .7.29.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75zm8-6c.38 0 .7.29.74.65l.01.1v7.5a.75.75 0 01-1.5.1v-7.6c0-.41.34-.75.75-.75zm4-3c.38 0 .7.29.74.65l.01.1v10.5a.75.75 0 01-1.5.1V9.76c0-.41.34-.75.75-.75zm4 10.5a.75.75 0 110 1.5.75.75 0 010-1.5zm-12-4.5c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75zm11.98-9c.38 0 .7.28.74.65l.01.1.02 10.88c0 .42-.32.76-.73.76a.74.74 0 01-.74-.64l-.01-.1L19 6.76c0-.41.32-.75.73-.76z" fill={primaryFill} /></svg>;
}

const CellularDataCellularUnavailable24Regular = wrapIcon(rawSvg({}), 'CellularDataCellularUnavailable24Regular');
export default CellularDataCellularUnavailable24Regular;
      