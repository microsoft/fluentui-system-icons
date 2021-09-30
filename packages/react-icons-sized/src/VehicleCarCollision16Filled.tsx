import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.93 3a2 2 0 00-1.8 1.1l-1.5 3-1.06.43A2.5 2.5 0 007 9.85v.65c0 .83.67 1.5 1.5 1.5h.77a2 2 0 003.46 0h1.77a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-3.7l1.23-2.45a1 1 0 01.9-.55h1.57a.5.5 0 100-1h-1.57zM10 11a1 1 0 112 0 1 1 0 01-2 0zM8.15 5.15a.5.5 0 11.7.7l-1 1a.5.5 0 11-.7-.7l1-1zM1 7.5c0-.28.22-.5.5-.5h2.36l-.47-1.86A1.5 1.5 0 001.94 4H1.5a.5.5 0 010-1h.44a2.5 2.5 0 012.42 1.9l.59 2.34A2 2 0 016 9v1.5a1.5 1.5 0 01-1.26 1.48 2 2 0 01-3.52-.06.5.5 0 01-.22-.42v-4zM3 10a1 1 0 100 2 1 1 0 000-2zm4-5.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" fill={primaryFill} /></svg>;
}

const VehicleCarCollision16Filled = wrapIcon(rawSvg({}), 'VehicleCarCollision16Filled');
export default VehicleCarCollision16Filled;
      