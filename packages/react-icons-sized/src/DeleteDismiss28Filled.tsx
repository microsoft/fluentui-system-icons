import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 16a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM14 2a4 4 0 014 3.8V6h5a1 1 0 01.12 2h-.97l-.6 7.33A6.5 6.5 0 0014.82 26h-4.04a3.75 3.75 0 01-3.74-3.45L5.85 8H5a1 1 0 01-1-.88V7a1 1 0 01.88-1H10a4 4 0 014-4zm3.73 17.02l-.07-.05a.5.5 0 00-.57 0l-.07.05-.05.07a.5.5 0 000 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05.07.05zM14 4a2 2 0 00-2 1.85V6h4v-.15A2 2 0 0014 4z" fill={primaryFill} /></svg>;
}

const DeleteDismiss28Filled = wrapIcon(rawSvg({}), 'DeleteDismiss28Filled');
export default DeleteDismiss28Filled;
      