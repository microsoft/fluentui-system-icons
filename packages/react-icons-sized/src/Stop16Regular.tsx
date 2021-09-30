import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 3c.28 0 .5.22.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-9c0-.28.22-.5.5-.5h9zm-9-1C2.67 2 2 2.67 2 3.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /></svg>;
}

const Stop16Regular = wrapIcon(rawSvg({}), 'Stop16Regular');
export default Stop16Regular;
      