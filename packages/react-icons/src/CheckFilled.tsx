import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.88 5H4a2 2 0 00-2 2v6c0 1.1.9 2 2 2h12a2 2 0 002-2V7.12l-4.44 4.44a1.5 1.5 0 01-2.12-2.12L15.88 5zM4 8.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5H9a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5zm13.85-5.65a.5.5 0 00-.7-.7l-5 5a.5.5 0 00.7.7l5-5z" fill={primaryFill} /></svg>;
}

const CheckFilled = wrapIcon(rawSvg({}), 'CheckFilled');
export default CheckFilled;
      