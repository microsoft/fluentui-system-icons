import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonArrowLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-5.48 2c-.3.46-.53.97-.7 1.5H4.24a.75.75 0 00-.75.75v.9c0 .66.29 1.29.79 1.71C5.54 19.94 7.44 20.5 10 20.5c.6 0 1.16-.03 1.69-.09.25.5.56.96.93 1.38-.8.14-1.68.21-2.62.21-2.89 0-5.13-.66-6.7-2A3.75 3.75 0 012 17.16v-.91C2 15.01 3.01 14 4.25 14h7.77zm4.7.59l-.07.06-2.52 2.51-.04.05-.03.06-.03.08-.01.04-.02.09v.09l.03.08.03.08.02.04.05.07 2.52 2.51a.5.5 0 00.77-.63l-.06-.07L15.7 18h4.79a.5.5 0 00.5-.41v-.09a.5.5 0 00-.41-.5h-4.88l1.65-1.65a.5.5 0 00.06-.63l-.06-.07a.5.5 0 00-.64-.06zM10 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /></svg>;
};

export default PersonArrowLeft24Regular;