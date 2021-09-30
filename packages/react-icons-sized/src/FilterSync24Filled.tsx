import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 7.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zM20.5 4c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h1a2.5 2.5 0 00-4.03.04.5.5 0 01-.8-.59 3.5 3.5 0 015.33-.4V4.5c0-.28.22-.5.5-.5zM15 9.95v.55a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-1a2.5 2.5 0 003.91.11.5.5 0 11.77.65 3.5 3.5 0 01-5.18.19zM8 13h6.03c-.8-.51-1.5-1.2-2-2H7.87A1 1 0 008 13zM5 6h6.17a6.52 6.52 0 00-.15 2H5a1 1 0 01-.12-2H5zm4.88 10H14a1 1 0 01.12 2H10a1 1 0 01-.12-2z" fill={primaryFill} /></svg>;
}

const FilterSync24Filled = wrapIcon(rawSvg({}), 'FilterSync24Filled');
export default FilterSync24Filled;
      