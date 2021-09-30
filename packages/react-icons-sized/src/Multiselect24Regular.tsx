import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 4.78a.75.75 0 00-1.06-1.06L3.75 5.69l-.47-.47a.75.75 0 00-1.06 1.06l1 1c.3.3.77.3 1.06 0l2.5-2.5zm2.97 13.23h11.5a.75.75 0 01.1 1.49H9.75a.75.75 0 01-.1-1.49h.1zm0-6.51h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h.1zm0-6.5h11.5a.75.75 0 01.1 1.5H9.75a.75.75 0 01-.1-1.5h.1zM6.78 16.72c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 111.06-1.06l.47.47 1.97-1.97c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const Multiselect24Regular = wrapIcon(rawSvg({}), 'Multiselect24Regular');
export default Multiselect24Regular;
      