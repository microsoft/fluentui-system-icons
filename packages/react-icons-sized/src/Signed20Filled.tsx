import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.46 1.9l1 .39c.34.14.74.14 1.09 0l.99-.4c1.21-.47 2.58.1 3.1 1.3l.43.97c.15.35.42.62.77.77l.98.43c1.2.52 1.76 1.89 1.28 3.1l-.39 1a1.5 1.5 0 000 1.09l.4.99a2.42 2.42 0 01-1.3 3.1l-.97.43a1.5 1.5 0 00-.77.77l-.43.98a2.42 2.42 0 01-3.1 1.28l-1-.39a1.5 1.5 0 00-1.09 0l-.99.4a2.42 2.42 0 01-3.1-1.3l-.43-.97a1.5 1.5 0 00-.77-.77l-.98-.43a2.42 2.42 0 01-1.28-3.1l.39-1a1.5 1.5 0 000-1.09l-.4-.99a2.42 2.42 0 011.3-3.1l.97-.43c.35-.15.62-.42.77-.77l.43-.98a2.42 2.42 0 013.1-1.28zm4.17 5.77l-3.65 4.1-1.63-1.62a.5.5 0 00-.7.7l2 2c.2.2.53.2.72-.02l4-4.5a.5.5 0 00-.74-.66z" fill={primaryFill} /></svg>;
}

const Signed20Filled = wrapIcon(rawSvg({}), 'Signed20Filled');
export default Signed20Filled;
      