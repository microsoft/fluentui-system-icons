import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.86 2.16a.5.5 0 00-.72 0l-4 4.25a.5.5 0 00.72.68L8 3.76V15a3 3 0 003 3h4.5a.5.5 0 000-1H11a2 2 0 01-2-2V3.76l3.14 3.33a.5.5 0 00.72-.68l-4-4.25z" fill={primaryFill} /></svg>;
}

const ArrowEnterUpRegular = wrapIcon(rawSvg({}), 'ArrowEnterUpRegular');
export default ArrowEnterUpRegular;
      