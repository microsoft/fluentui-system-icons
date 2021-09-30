import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 10a11 11 0 00-10.96 10h-.29a7.75 7.75 0 000 15.5h22.5a7.75 7.75 0 000-15.5h-.3A11 11 0 0024 10z" fill={primaryFill} /></svg>;
}

const Cloud48Filled = wrapIcon(rawSvg({}), 'Cloud48Filled');
export default Cloud48Filled;
      