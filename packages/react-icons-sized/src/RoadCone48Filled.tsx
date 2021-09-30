import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.39 4a2.5 2.5 0 00-2.43 1.91A650.62 650.62 0 0115.19 24H25.5a1.5 1.5 0 010 3H14.36l-1.1 4H27.5a1.5 1.5 0 010 3H12.44c-.65 2.4-1.27 4.74-1.86 7H5.5a1.5 1.5 0 100 3h37a1.5 1.5 0 000-3h-5.08L28.05 5.86A2.5 2.5 0 0025.63 4H22.4z" fill={primaryFill} /></svg>;
}

const RoadCone48Filled = wrapIcon(rawSvg({}), 'RoadCone48Filled');
export default RoadCone48Filled;
      