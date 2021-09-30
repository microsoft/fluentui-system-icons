import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.27 4.18a4.3 4.3 0 00-6 .1 4.4 4.4 0 000 6.18l6.28 6.34c.26.27.69.27.95 0l6.24-6.3a4.4 4.4 0 00-.02-6.19 4.3 4.3 0 00-6.13-.01l-.59.59-1.34 2.06 3 2.53a.5.5 0 01.03.73l-2 2a.5.5 0 11-.71-.7l1.62-1.62-2.92-2.46a.5.5 0 01-.1-.66l1.7-2.6z" fill={primaryFill} /></svg>;
}

const HeartBrokenFilled = wrapIcon(rawSvg({}), 'HeartBrokenFilled');
export default HeartBrokenFilled;
      