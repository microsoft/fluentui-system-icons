import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.35 15.85a.5.5 0 01-.7 0L6.16 10.4a.55.55 0 010-.78l5.49-5.47a.5.5 0 01.7.71L7.2 10l5.16 5.15c.2.2.2.5 0 .7z" fill={primaryFill} /></svg>;
}

const ChevronLeftRegular = wrapIcon(rawSvg({}), 'ChevronLeftRegular');
export default ChevronLeftRegular;
      