import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.11 3.35A1.5 1.5 0 0118 4.8v10.31c0 1.03-1 1.75-1.97 1.43l-4.76-1.59A3.25 3.25 0 015 13.75v-.89l-1.97-.66A1.5 1.5 0 012 10.78V8.27c0-.68.46-1.28 1.11-1.45l13-3.47zM6 13.2v.56a2.25 2.25 0 004.32.88L6 13.2z" fill={primaryFill} /></svg>;
}

const MegaphoneFilled = wrapIcon(rawSvg({}), 'MegaphoneFilled');
export default MegaphoneFilled;
      