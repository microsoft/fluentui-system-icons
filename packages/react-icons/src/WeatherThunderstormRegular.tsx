import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.13 14.17l1.77-2a.5.5 0 01.8.6l-.06.07L10.62 14h1.88c.4 0 .62.42.44.75l-.05.06-2.44 3a.5.5 0 01-.84-.54l.05-.08 1.8-2.19H9.5a.5.5 0 01-.42-.76l.05-.07 1.77-2-1.77 2zM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 12.24 2.82 2.82 0 0115.13 15h-1.26a1.07 1.07 0 00.01-1h1.3c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0011 7a3.04 3.04 0 00-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h1.3a1.07 1.07 0 000 1H6.88A2.82 2.82 0 014 12.24a2.82 2.82 0 012.87-2.77h.06C7.13 7.57 8.53 6 11 6zM8.4 3c1.45 0 2.72.83 3.34 2.04a6.05 6.05 0 00-1.28-.02 2.65 2.65 0 00-4.7 1.2l-.04.22a1 1 0 01-.99.82h-.26c-.81 0-1.47.67-1.47 1.5 0 .57.31 1.06.78 1.31-.22.28-.4.58-.52.9a2.62 2.62 0 011.2-4.85h.22A3.77 3.77 0 018.39 3z" fill={primaryFill} /></svg>;
}

const WeatherThunderstormRegular = wrapIcon(rawSvg({}), 'WeatherThunderstormRegular');
export default WeatherThunderstormRegular;
      