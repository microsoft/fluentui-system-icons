import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6a4 4 0 01-7.33 2.22l-1.66.84a3.49 3.49 0 01.82 3.5l2.7 1.4a2.5 2.5 0 11-.44.89l-2.7-1.38A3.5 3.5 0 117.1 8.39l2.13-1.06A4 4 0 1117 6z" fill={primaryFill} /></svg>;
}

const MoleculeFilled = wrapIcon(rawSvg({}), 'MoleculeFilled');
export default MoleculeFilled;
      