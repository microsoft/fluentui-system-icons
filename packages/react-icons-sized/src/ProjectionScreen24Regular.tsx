import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3A1.5 1.5 0 003 5.91v7.34A3.75 3.75 0 006.75 17h4.5v2.5h-3.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-3.5V17h4.5A3.75 3.75 0 0021 13.25V5.91A1.5 1.5 0 0020.5 3h-17zm1 3h15v7.25c0 1.24-1 2.25-2.25 2.25H6.75c-1.24 0-2.25-1-2.25-2.25V6z" fill={primaryFill} /></svg>;
}

const ProjectionScreen24Regular = wrapIcon(rawSvg({}), 'ProjectionScreen24Regular');
export default ProjectionScreen24Regular;
      