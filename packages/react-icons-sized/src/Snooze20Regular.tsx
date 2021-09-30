import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 4a.5.5 0 000 1h4.03l-4.44 6.2a.5.5 0 00.41.8h5a.5.5 0 000-1h-4.03l4.44-6.2a.5.5 0 00-.41-.8h-5zm-6 6a.5.5 0 000 1h2.96l-3.35 4.19a.5.5 0 00.39.81h4a.5.5 0 000-1H5.54l3.35-4.19A.5.5 0 008.5 10h-4z" fill={primaryFill} /></svg>;
}

const Snooze20Regular = wrapIcon(rawSvg({}), 'Snooze20Regular');
export default Snooze20Regular;
      