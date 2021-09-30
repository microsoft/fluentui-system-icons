import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2.5a.5.5 0 10-1 0V3H4.75A2.75 2.75 0 002 5.75v6.5A2.75 2.75 0 004.75 15h1.82l-1.49 2.23a.5.5 0 00.84.55L7.77 15H10c.04-.36.17-.7.37-1H4.75C3.78 14 3 13.22 3 12.25v-6.5C3 4.78 3.78 4 4.75 4h10.5c.97 0 1.75.78 1.75 1.75v3.01A3 3 0 0118 11V5.75A2.75 2.75 0 0015.25 3H10.5v-.5zM15 9a2 2 0 100 4 2 2 0 000-4zm-4 6.25c0-.7.56-1.25 1.25-1.25h5.5c.69 0 1.25.56 1.25 1.25v.09a3.82 3.82 0 01-.01.32c0 .08-.03.2-.06.34a3 3 0 01-.46 1.04c-.54.78-1.59 1.46-3.47 1.46-1.89 0-2.93-.68-3.47-1.46a3 3 0 01-.53-1.49v-.3zM5.5 6a.5.5 0 000 1h3a.5.5 0 000-1h-3zM5 11.5c0-.27.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm.5-3a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
}

const ChartPersonRegular = wrapIcon(rawSvg({}), 'ChartPersonRegular');
export default ChartPersonRegular;
      