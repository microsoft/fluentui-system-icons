import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherRainSnow20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0117 10.24 2.82 2.82 0 0114.13 13h-1.5a.5.5 0 11-.95 0H7.44l-1.5 2.75a.5.5 0 01-.9-.4l.03-.08L6.3 13h-.43A2.82 2.82 0 013 10.24a2.82 2.82 0 012.87-2.77h.06C6.13 5.57 7.53 4 10 4zm1.5 11a.5.5 0 110 1 .5.5 0 010-1zm-2.2-.94c.22.12.31.37.24.59l-.04.08-.56 1.01a.5.5 0 01-.68.2.49.49 0 01-.23-.59l.03-.08.56-1.01a.5.5 0 01.68-.2zm4.2-.06a.5.5 0 110 1 .5.5 0 010-1zM10 5a3.04 3.04 0 00-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0010 5z" fill={primaryFill} /></svg>;
};

export default WeatherRainSnow20Regular;