import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.67 21h-7.34a1.75 1.75 0 11-2.32-2.33v-3.68H5.33c-.26.56-.8.95-1.44 1l-.14.01A1.75 1.75 0 013 12.67V5.33A1.75 1.75 0 115.33 3h7.34A1.75 1.75 0 1115 5.33V9h3.67c.26-.55.8-.94 1.44-1h.14a1.75 1.75 0 01.75 3.33v7.34A1.75 1.75 0 1118.67 21h-7.34 7.34zm0-10.5H15v2.16c.56.27.95.8 1 1.44v.14a1.75 1.75 0 01-3.33.76h-2.15v3.67c.36.17.65.47.82.83h7.34c.17-.36.47-.66.83-.83v-7.34a1.76 1.76 0 01-.75-.67l-.08-.16zm-5.18 0h-2.16c-.17.36-.46.66-.82.83v2.16h2.15c.18-.36.47-.65.84-.83V10.5zm-.82-6H5.33c-.17.36-.47.66-.83.83v7.34c.36.17.66.46.83.83H9v-2.17c-.56-.26-.95-.8-1-1.44L8 9.75A1.75 1.75 0 0111.33 9h2.16V5.33a1.76 1.76 0 01-.74-.68l-.08-.15z" fill={primaryFill} /></svg>;
}

const Pair24Regular = wrapIcon(rawSvg({}), 'Pair24Regular');
export default Pair24Regular;
      