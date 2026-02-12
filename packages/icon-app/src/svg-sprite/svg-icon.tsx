import * as React from 'react';

export const SvgIcon = (props: { id: string }) => {
  return (
    <svg>
      <use href={`#${props.id}`} />
    </svg>
  );
};
