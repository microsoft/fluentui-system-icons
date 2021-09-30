import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.65 5.85a.5.5 0 01.7-.7l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 01-.7-.7L16.79 10l-4.14-4.15z" fill={primaryFill} /></svg>;
}

const IosChevronRight20Regular = wrapIcon(rawSvg({}), 'IosChevronRight20Regular');
export default IosChevronRight20Regular;
      