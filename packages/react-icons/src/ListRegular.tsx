import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 15a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H12.5zm5-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-.98l.1-.01H17.5zm-4-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5z" fill={primaryFill} /></svg>;
}

const ListRegular = wrapIcon(rawSvg({}), 'ListRegular');
export default ListRegular;
      