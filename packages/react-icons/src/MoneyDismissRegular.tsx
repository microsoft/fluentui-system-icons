import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 9a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2zM3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.52c.03-.34.1-.68.19-1H6v-1a2 2 0 00-2-2H3V8h1a2 2 0 002-2V5h6v1c0 1.1.9 2 2 2h1v1.02c.34.03.68.1 1 .19V5.5c0-.83-.67-1.5-1.5-1.5h-11zM3 5.5c0-.28.22-.5.5-.5H5v1a1 1 0 01-1 1H3V5.5zM13 5h1.5c.28 0 .5.22.5.5V7h-1a1 1 0 01-1-1V5zm-8 8H3.5a.5.5 0 01-.5-.5V11h1a1 1 0 011 1v1zm-.91 2h4.93c.03.34.1.68.19 1H5.5a1.5 1.5 0 01-1.41-1zM18 7.5v2.76a5.5 5.5 0 00-1-.66V6.09c.58.2 1 .76 1 1.41zm1 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.8 0l1.15-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15z" fill={primaryFill} /></svg>;
}

const MoneyDismissRegular = wrapIcon(rawSvg({}), 'MoneyDismissRegular');
export default MoneyDismissRegular;
      