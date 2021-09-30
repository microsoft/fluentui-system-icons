import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-5.48 2a6.47 6.47 0 00.6 7.79c-.8.14-1.68.21-2.62.21-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 012 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77zm4.7.59l-.07.06-2.52 2.51-.04.05-.03.06-.03.08-.01.04-.02.09v.09l.03.08.03.08.02.04.05.07 2.52 2.51a.5.5 0 00.77-.63l-.06-.07L15.7 18h4.79a.5.5 0 00.5-.41v-.09a.5.5 0 00-.41-.5h-4.88l1.65-1.65a.5.5 0 00.06-.63l-.06-.07a.5.5 0 00-.64-.06zM10 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
}

const PersonArrowLeft24Filled = wrapIcon(rawSvg({}), 'PersonArrowLeft24Filled');
export default PersonArrowLeft24Filled;
      