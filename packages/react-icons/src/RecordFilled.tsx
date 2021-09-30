import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 4.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill={primaryFill} /></svg>;
}

const RecordFilled = wrapIcon(rawSvg({}), 'RecordFilled');
export default RecordFilled;
      