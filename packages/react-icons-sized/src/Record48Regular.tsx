import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 37a13 13 0 100-26 13 13 0 000 26zm0-33a20 20 0 100 40 20 20 0 000-40zM6.5 24a17.5 17.5 0 1135 0 17.5 17.5 0 01-35 0z" fill={primaryFill} /></svg>;
}

const Record48Regular = wrapIcon(rawSvg({}), 'Record48Regular');
export default Record48Regular;
      