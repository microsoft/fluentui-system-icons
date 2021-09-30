import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 8h2.5c.4 0 .62.43.43.75l-.05.07L5.07 11H6.5a.5.5 0 01.09 1H4a.5.5 0 01-.43-.75l.05-.07L5.43 9H4a.5.5 0 01-.09-1H6.5 4zm5-5h3.5c.38 0 .6.4.45.71l-.04.08L9.96 8h2.54a.5.5 0 01.09 1H9a.5.5 0 01-.45-.71l.04-.08L11.54 4H9a.5.5 0 01-.09-1h3.59H9z" fill={primaryFill} /></svg>;
}

const Snooze16Regular = wrapIcon(rawSvg({}), 'Snooze16Regular');
export default Snooze16Regular;
      