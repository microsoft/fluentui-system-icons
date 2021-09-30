import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 6c.06 0-.06 0 0 0h4.65l-2.27-2.27a.75.75 0 111.06-1.06l3.35 3.35c.17.18.24.42.21.64a.75.75 0 01-.21.45l-3.25 3.24a.75.75 0 11-1.06-1.06l1.8-1.79H9a3.5 3.5 0 100 7h4.25a.75.75 0 010 1.5H9A5 5 0 019 6z" fill={primaryFill} /></svg>;
}

const ArrowHookUpRightFilled = wrapIcon(rawSvg({}), 'ArrowHookUpRightFilled');
export default ArrowHookUpRightFilled;
      