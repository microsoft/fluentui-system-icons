import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.37 4a2.5 2.5 0 00-2.42 1.86L10.58 41H5.5a1.5 1.5 0 100 3h37a1.5 1.5 0 000-3h-5.08L28.05 5.86A2.5 2.5 0 0025.63 4h-3.26zm-8.68 37l1.86-7H27.5a1.5 1.5 0 100-3H16.35l1.07-4h8.08a1.5 1.5 0 000-3h-7.28l4.53-17h2.5l9.06 34H13.7z" fill={primaryFill} /></svg>;
}

const RoadCone48Regular = wrapIcon(rawSvg({}), 'RoadCone48Regular');
export default RoadCone48Regular;
      