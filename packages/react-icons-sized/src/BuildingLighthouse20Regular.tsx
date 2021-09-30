import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2.07a.5.5 0 01.5 0l3.18 1.81A1.13 1.13 0 0112 6v2.2a2 2 0 011.15 1.59l.79 7.11a1 1 0 01-1 1.11H5.06a1 1 0 01-1-1.11l.8-7.11A2 2 0 016 8.18V6a1.13 1.13 0 01-.43-2.1l3.18-1.82zm.25 1L6.07 4.76a.13.13 0 00.06.25h5.74a.13.13 0 00.06-.25L9 3.08zM11.16 9H6.84a1 1 0 00-1 .89l-.2 1.92 6.53-1.74-.02-.18a1 1 0 00-.99-.89zM11 8V6H7v2h4zm-5.7 6.9l7.2-1.92-.22-1.9-6.76 1.8-.23 2.02zm-.13 1.07L5.06 17h7.88l-.33-3.01-7.44 1.98zM14.5 7h2a.5.5 0 000-1h-2a.5.5 0 100 1zm1.35-3.85c.2.2.2.5 0 .7l-1 1a.5.5 0 11-.7-.7l1-1c.2-.2.5-.2.7 0zm0 6a.5.5 0 11-.7.7l-1-1a.5.5 0 01.7-.7l1 1z" fill={primaryFill} /></svg>;
}

const BuildingLighthouse20Regular = wrapIcon(rawSvg({}), 'BuildingLighthouse20Regular');
export default BuildingLighthouse20Regular;
      