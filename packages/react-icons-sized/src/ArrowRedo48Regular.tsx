import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.15 9.84c4.17-4.6 11.3-4.5 15.85.67l.02.02 8.56 8.96H24.2a1.25 1.25 0 100 2.5h15.55c.69 0 1.25-.56 1.25-1.25V5.27a1.25 1.25 0 10-2.5 0v12.6l-8.64-9.03c-5.44-6.18-14.3-6.48-19.56-.68-5.24 5.78-3.62 13.32.01 17.2h.01l8.98 9.18 8.76 8.84.25.25a1.25 1.25 0 101.77-1.76l-.25-.25-8.74-8.83-8.96-9.15a10.21 10.21 0 01.02-13.8z" fill={primaryFill} /></svg>;
}

const ArrowRedo48Regular = wrapIcon(rawSvg({}), 'ArrowRedo48Regular');
export default ArrowRedo48Regular;
      