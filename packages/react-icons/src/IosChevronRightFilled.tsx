import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.22 6.03a.75.75 0 011.06-1.06l4.5 4.5c.3.3.3.77 0 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06L16.19 10l-3.97-3.97z" fill={primaryFill} /></svg>;
}

const IosChevronRightFilled = wrapIcon(rawSvg({}), 'IosChevronRightFilled');
export default IosChevronRightFilled;
      