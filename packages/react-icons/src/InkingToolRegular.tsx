import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2c.28 0 .5.22.5.5v3c0 .28.22.5.5.5h12a.5.5 0 00.5-.5v-3a.5.5 0 011 0v3c0 .83-.67 1.5-1.5 1.5h-.2l-3.58 7.17a1.5 1.5 0 01-.75.71c.02.2.03.4.03.62 0 .58-.07 1.16-.27 1.62-.21.47-.6.88-1.23.88s-1.02-.41-1.23-.88a4.12 4.12 0 01-.27-1.62c0-.21.01-.42.03-.62a1.5 1.5 0 01-.75-.7L4.19 7H4a1.5 1.5 0 01-1.5-1.5v-3c0-.28.22-.5.5-.5zm6.12 12h1.76a.5.5 0 00.45-.28L14.69 7H5.31l3.36 6.72a.5.5 0 00.45.28zm.4 1l-.02.5c0 .52.07.94.19 1.21.11.26.22.29.31.29.1 0 .2-.03.31-.29.12-.27.19-.69.19-1.21 0-.18 0-.35-.02-.5h-.96z" fill={primaryFill} /></svg>;
}

const InkingToolRegular = wrapIcon(rawSvg({}), 'InkingToolRegular');
export default InkingToolRegular;
      