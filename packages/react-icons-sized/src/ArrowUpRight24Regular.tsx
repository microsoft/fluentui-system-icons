import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 3h7.55l.1.02.1.02.06.03c.08.03.15.08.22.15l.04.04.06.08.04.07.04.09.02.06.01.07v.1l.01 7.52a.75.75 0 01-1.5.1v-5.8L4.28 20.79a.75.75 0 01-.98.08l-.08-.08a.75.75 0 01-.07-.97l.07-.09L18.44 4.5h-5.7a.75.75 0 01-.73-.65l-.01-.1c0-.38.28-.7.65-.74h.1z" fill={primaryFill} /></svg>;
}

const ArrowUpRight24Regular = wrapIcon(rawSvg({}), 'ArrowUpRight24Regular');
export default ArrowUpRight24Regular;
      