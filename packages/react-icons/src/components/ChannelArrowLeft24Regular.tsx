import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelArrowLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-13-2.63v8.38c0 .92.7 1.67 1.6 1.74l.15.01h5.06c.18.53.42 1.04.71 1.5H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V9.37a2.25 2.25 0 001.5 0zm12.22 5.22l-.07.06-2.52 2.51-.04.05-.04.08-.02.06-.02.08v.11l.01.09.03.08.03.06.05.07 2.52 2.51a.5.5 0 00.77-.63l-.06-.07L15.7 18h4.79a.5.5 0 00.5-.41v-.09a.5.5 0 00-.41-.5h-4.88l1.65-1.65a.5.5 0 00.05-.63l-.05-.07a.5.5 0 00-.64-.06zM12.8 13c-.43.45-.8.95-1.08 1.5H8.75a.75.75 0 01-.1-1.49H12.8zm4.94-10A3.25 3.25 0 0121 6.07V12.02c-.46-.3-.97-.53-1.5-.7V6.24c0-.92-.7-1.67-1.6-1.74l-.15-.01H6.25c-.6 0-1.13.3-1.44.76a2.23 2.23 0 00-1.59-.2 3.25 3.25 0 012.85-2.05L6.25 3h11.5zm-2.5 6.5a.75.75 0 01.1 1.49h-6.6a.75.75 0 01-.1-1.49h6.6zM3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
};

export default ChannelArrowLeft24Regular;