import { Field, Input, makeStyles, mergeClasses, Select, tokens } from '@fluentui/react-components';
import * as React from 'react';

type IconCatalogControlsProps = {
  searchPlaceholder: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  size: string;
  sizeOptions: { value: string; label: string }[];
  onSizeChange: (size: string) => void;
  variantFilter?: {
    value: string;
    options: { value: string; label: string }[];
    onChange: (variant: string) => void;
  };
  resultCount: number;
};

const useClasses = makeStyles({
  toolbar: {
    marginBottom: tokens.spacingVerticalL,
  },
  controls: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)',
    alignItems: 'start',
    gap: tokens.spacingHorizontalL,
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: tokens.spacingVerticalS,
    },
  },
  withVariant: {
    gridTemplateColumns: 'minmax(0, 1.5fr) repeat(2, minmax(0, 1fr))',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  field: {
    minWidth: 0,
  },
  summary: {
    marginTop: tokens.spacingVerticalM,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300,
  },
});

export const IconCatalogControls = ({
  searchPlaceholder,
  searchQuery,
  onSearchChange,
  size,
  sizeOptions,
  onSizeChange,
  variantFilter,
  resultCount,
}: IconCatalogControlsProps) => {
  const classes = useClasses();
  return (
    <div className={classes.toolbar}>
      <div className={mergeClasses(classes.controls, variantFilter && classes.withVariant)}>
        <Field label="Icon name" size="large" className={classes.field}>
          <Input
            type="search"
            onChange={(_event, data) => onSearchChange(data.value)}
            placeholder={searchPlaceholder}
            size="large"
            value={searchQuery}
          />
        </Field>
        <Field label="Icon size" size="large" className={classes.field}>
          <Select size="large" value={size} onChange={(event) => onSizeChange(event.target.value)}>
            {sizeOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Field>
        {variantFilter && (
          <Field label="Icon variant" size="large" className={classes.field}>
            <Select
              size="large"
              value={variantFilter.value}
              onChange={(event) => variantFilter.onChange(event.target.value)}
            >
              {variantFilter.options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </Field>
        )}
      </div>
      <div className={classes.summary}>
        <span role="status" aria-label="Icon count">
          {resultCount} {resultCount === 1 ? 'icon' : 'icons'}
        </span>
      </div>
    </div>
  );
};
