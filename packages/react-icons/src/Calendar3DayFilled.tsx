import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm-8 3a.5.5 0 00-.5.41v7.18a.5.5 0 001 0V6.41A.5.5 0 006.5 6zM10 6a.5.5 0 00-.5.41v7.18a.5.5 0 001 0V6.41A.5.5 0 0010 6zm3.5 0a.5.5 0 00-.5.41v7.18a.5.5 0 001 0V6.41a.5.5 0 00-.5-.41z" fill={primaryFill} /></svg>;
}

const Calendar3DayFilled = wrapIcon(rawSvg({}), 'Calendar3DayFilled');
export default Calendar3DayFilled;
      