import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 3h7.55l.12.02.1.02.1.03.08.04.07.04.06.04.06.05.07.06.1.1.06.12.06.11.03.1.02.07v.05L21 4v7.5a1 1 0 01-2 .12V6.41L6.4 19h5.1a1 1 0 01.98.88l.01.12a1 1 0 01-.88 1H3.94l-.1-.01-.07-.02-.08-.02-.07-.02-.09-.05-.09-.05-.09-.07.03.03a1 1 0 01-.16-.17l-.06-.07-.03-.06-.04-.07-.03-.08-.03-.08-.02-.1v-.07L3 20v-7.5a1 1 0 012-.12v5.21L17.58 5H12.5a1 1 0 01-1-.88V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const ArrowMaximize24Filled = wrapIcon(rawSvg({}), 'ArrowMaximize24Filled');
export default ArrowMaximize24Filled;
      