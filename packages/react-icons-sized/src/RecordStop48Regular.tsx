import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 15a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V17a2 2 0 00-2-2H17zm27 9a20 20 0 11-40 0 20 20 0 0140 0zm-2.5 0a17.5 17.5 0 10-35 0 17.5 17.5 0 0035 0z" fill={primaryFill} /></svg>;
}

const RecordStop48Regular = wrapIcon(rawSvg({}), 'RecordStop48Regular');
export default RecordStop48Regular;
      