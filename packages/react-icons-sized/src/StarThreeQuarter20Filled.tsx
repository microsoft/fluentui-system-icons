import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.9 2.9l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9a1 1 0 011.8 0zM12 7.37v8.06l2.33 1.23-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.68-.43z" fill={primaryFill} /></svg>;
}

const StarThreeQuarter20Filled = wrapIcon(rawSvg({}), 'StarThreeQuarter20Filled');
export default StarThreeQuarter20Filled;
      