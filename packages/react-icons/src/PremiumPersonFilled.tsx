import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.84 3.14a.75.75 0 01.66-.39h9c.27 0 .53.15.66.39l2.75 5c.15.27.11.6-.08.84l-.32.38A3.01 3.01 0 0015 8a3 3 0 00-2.61 4.48l-.21.54A2.5 2.5 0 0010 15.5a4.84 4.84 0 00.42 1.93l.16.3a.75.75 0 01-1.16 0L2.17 8.98a.75.75 0 01-.08-.84l2.75-5zm1.1 1.11L4.16 7.5H6.3l1.13-3.25h-1.5zm2.13 9.5L6.14 9h-2l3.93 4.75zM7.77 9l2.22 5.48L12.15 9H7.76zm1.26-4.75L7.9 7.5h4.28l-1.2-3.25H9.04zm3.55 0l1.2 3.25h2.06l-1.78-3.25h-1.48zm-.42 9.79A1.5 1.5 0 0011 15.5a3.83 3.83 0 00.32 1.5c.21.44.52.81.9 1.11.73.6 1.73.89 2.78.89 1.05 0 2.05-.29 2.79-.89.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-5c-.12 0-.23.01-.34.04zm4.67-3.85A2 2 0 0115 13a2 2 0 111.83-2.81z" fill={primaryFill} /></svg>;
}

const PremiumPersonFilled = wrapIcon(rawSvg({}), 'PremiumPersonFilled');
export default PremiumPersonFilled;
      