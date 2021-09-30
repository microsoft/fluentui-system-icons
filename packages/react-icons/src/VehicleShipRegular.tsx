import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2.04a.5.5 0 00-.5.5V5H4.5a.5.5 0 00-.5.5v4.06l-1.63.46a.5.5 0 00-.32.7l1.8 3.82c.22-.26.52-.44.86-.51l-1.5-3.2 6.25-1.75a2 2 0 011.07 0l6.26 1.74-1.54 3.2c.34.06.65.23.88.48l1.82-3.78a.5.5 0 00-.32-.7L16 9.56V5.5a.5.5 0 00-.5-.5H13V2.54a.5.5 0 00-.5-.5h-5zM12 5H8V3.04h4V5zm3 1v3.28l-4.2-1.16a3 3 0 00-1.6 0L5 9.28V6h10z" fill={primaryFill} /><path d="M15.49 15.39v-.01a.5.5 0 00-.96-.06v.02a1.62 1.62 0 01-.12.24c-.08.17-.22.39-.4.6-.35.44-.85.82-1.51.82s-1.16-.38-1.52-.82a3.64 3.64 0 01-.51-.85.5.5 0 00-.94 0 1.75 1.75 0 01-.12.25 3.6 3.6 0 01-.4.6c-.35.45-.85.82-1.51.82s-1.16-.38-1.52-.82a3.62 3.62 0 01-.5-.84l-.01-.02a.5.5 0 00-.96.06 1.35 1.35 0 01-.08.24c-.07.16-.17.37-.33.58-.3.4-.8.8-1.6.8a.5.5 0 000 1 2.9 2.9 0 002.54-1.4l.17.22C5.66 17.38 6.4 18 7.5 18s1.84-.63 2.3-1.19l.2-.27.2.28A2.96 2.96 0 0012.5 18a2.95 2.95 0 002.46-1.4l.14.2c.44.6 1.2 1.21 2.4 1.2a.5.5 0 100-1c-.8.01-1.3-.38-1.6-.79a2.72 2.72 0 01-.4-.77l-.01-.05z" fill={primaryFill} /></svg>;
}

const VehicleShipRegular = wrapIcon(rawSvg({}), 'VehicleShipRegular');
export default VehicleShipRegular;
      