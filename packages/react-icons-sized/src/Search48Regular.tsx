import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 6a14 14 0 108.98 24.74l10.89 10.9a1.25 1.25 0 001.76-1.77l-10.89-10.9A14 14 0 0020 6zM8.5 20a11.5 11.5 0 1123 0 11.5 11.5 0 01-23 0z" fill={primaryFill} /></svg>;
}

const Search48Regular = wrapIcon(rawSvg({}), 'Search48Regular');
export default Search48Regular;
      