import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.98 2c-.56 0-1.05.38-1.2.92L8.67 14.25h6.58a.75.75 0 010 1.5h-7l-.68 2.5h8.68a.75.75 0 010 1.5H7.16l-1.3 4.75H3.08a.75.75 0 000 1.5h21.84a.75.75 0 100-1.5h-2.78L16.22 2.92a1.25 1.25 0 00-1.2-.92h-2.04z" fill={primaryFill} /></svg>;
}

const RoadCone28Filled = wrapIcon(rawSvg({}), 'RoadCone28Filled');
export default RoadCone28Filled;
      