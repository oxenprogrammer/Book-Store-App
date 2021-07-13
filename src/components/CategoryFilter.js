import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';

import React from 'react';

export const CategoryFilter = (props) => {
  const { name, value, label, error = null, onChange, options, ...others } = props;
  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} label={label} value={value} onChange={onChange} {...others}>
        <MenuItem value="All">None</MenuItem>
        {options?.map((item) => (
          <MenuItem key={item.dataId} value={item.dataId}>
            {item.dataDes}``
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
