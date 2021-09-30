import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.38 2a1 1 0 00-.96.74L4.62 17H2.5a.5.5 0 000 1h15a.5.5 0 000-1h-2.12l-3.8-14.26a1 1 0 00-.96-.74H9.38zM5.65 17l.8-3h5.05a.5.5 0 000-1H6.72l.53-2h3.25a.5.5 0 000-1H7.52l1.86-7h1.24l3.73 14h-8.7z" fill={primaryFill} /></svg>;
}

const RoadConeRegular = wrapIcon(rawSvg({}), 'RoadConeRegular');
export default RoadConeRegular;
      