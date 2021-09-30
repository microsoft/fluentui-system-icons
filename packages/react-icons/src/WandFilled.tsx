import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2.5a.5.5 0 00-1 0V3h-.5a.5.5 0 000 1h.5v.5a.5.5 0 001 0V4h.5a.5.5 0 000-1H17v-.5z" fill={primaryFill} /><path d="M7 5.5a.5.5 0 01-.5.5H6v.5a.5.5 0 01-1 0V6h-.5a.5.5 0 010-1H5v-.5a.5.5 0 011 0V5h.5c.28 0 .5.22.5.5z" fill={primaryFill} /><path d="M16 14.5a.5.5 0 01-.5.5H15v.5a.5.5 0 01-1 0V15h-.5a.5.5 0 010-1h.5v-.5a.5.5 0 011 0v.5h.5c.28 0 .5.22.5.5z" fill={primaryFill} /><path d="M13.43 6.57a1.91 1.91 0 00-2.7 0l-.48.47 2.7 2.71.48-.48c.75-.74.75-1.96 0-2.7z" fill={primaryFill} /><path d="M12.25 10.46l-2.7-2.71-6.99 6.98a1.91 1.91 0 102.7 2.7l6.99-6.97z" fill={primaryFill} /></svg>;
}

const WandFilled = wrapIcon(rawSvg({}), 'WandFilled');
export default WandFilled;
      