import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2.04a1.72 1.72 0 00-2.6.2 2.08 2.08 0 00-1.84 3.53l.88.88-.84.83 1.19 1.18.83-.83.88.88a2.09 2.09 0 003.53-1.85l.2-.16c.66-.68.66-1.76 0-2.44l-.53-.51.46-.46a.84.84 0 00-1.19-1.18l-.45.45-.52-.52zm.28 3.74a.5.5 0 01-.7 0l-1.1-1.1a.5.5 0 01.7-.71l1.1 1.1c.2.2.2.51 0 .7zM2.82 7.3a2.09 2.09 0 012.95 0l2.94 2.94a2.09 2.09 0 01-1.85 3.53l-.16.2c-.68.66-1.76.66-2.44 0l-.51-.53-.47.47a.84.84 0 01-1.19-1.18l.47-.47-.52-.52a1.72 1.72 0 01.2-2.6c-.12-.65.08-1.34.58-1.84zm2.6 4.38l-1.1-1.1a.5.5 0 00-.72.7l1.1 1.1a.5.5 0 10.72-.7z" fill={primaryFill} /></svg>;
}

const Dumbbell16Filled = wrapIcon(rawSvg({}), 'Dumbbell16Filled');
export default Dumbbell16Filled;
      