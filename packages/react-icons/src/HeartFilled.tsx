import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.39 4.29a4.3 4.3 0 00-6.13-.02 4.4 4.4 0 00.02 6.2l6.27 6.33c.26.27.69.27.95 0l6.24-6.3a4.4 4.4 0 00-.02-6.19 4.3 4.3 0 00-6.13-.01l-.6.6-.6-.61z" fill={primaryFill} /></svg>;
}

const HeartFilled = wrapIcon(rawSvg({}), 'HeartFilled');
export default HeartFilled;
      