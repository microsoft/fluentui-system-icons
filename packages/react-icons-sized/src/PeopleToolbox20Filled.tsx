import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.46 10.05A2 2 0 0011 10H4a2 2 0 00-2 2v1.5C2 15.55 4.09 17 7.5 17c.53 0 1.03-.04 1.5-.1v-3.4a2.5 2.5 0 012.04-2.46c.07-.36.21-.7.42-.99zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM11 5.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm1 6v.5h-.5c-.83 0-1.5.67-1.5 1.5V15h2v-.5a.5.5 0 011 0v.5h3v-.5a.5.5 0 011 0v.5h2v-1.5c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm1.5-.5h2c.28 0 .5.22.5.5v.5h-3v-.5c0-.28.22-.5.5-.5zm5.5 5h-2v.5a.5.5 0 01-1 0V16h-3v.5a.5.5 0 01-1 0V16h-2v1.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V16z" fill={primaryFill} /></svg>;
}

const PeopleToolbox20Filled = wrapIcon(rawSvg({}), 'PeopleToolbox20Filled');
export default PeopleToolbox20Filled;
      