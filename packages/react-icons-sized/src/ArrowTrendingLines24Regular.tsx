import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 2h4.55l.1.01.1.03.06.03c.08.03.16.08.22.15l.04.04.04.06.06.09.04.09.02.06.01.07.01.1v4.52a.75.75 0 01-1.5.1V4.56L14.06 11a.75.75 0 01-.98.07L13 11 9.97 8.09l-5.69 5.69a.75.75 0 01-1.13-.98l.07-.08L9.44 6.5a.75.75 0 01.98-.07l.08.07 3.03 2.9 5.9-5.9h-2.68a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01zm-13 15c.41 0 .75.34.75.75v3.5a.75.75 0 01-1.5 0v-3.5c0-.41.34-.75.75-.75zm5.75-3.25a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zM13.75 15c.41 0 .75.34.75.75v5.5a.75.75 0 01-1.5 0v-5.5c0-.41.34-.75.75-.75zm5.75-4.25a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0v-10.5z" fill={primaryFill} /></svg>;
}

const ArrowTrendingLines24Regular = wrapIcon(rawSvg({}), 'ArrowTrendingLines24Regular');
export default ArrowTrendingLines24Regular;
      