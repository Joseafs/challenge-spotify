import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Root } from './styled'
import { TextField } from '@material-ui/core'

function InputSearch({ label, placeholder, onChange }) {
  return (
    <Root>
      <TextField
        id="search-input"
        label={label}
        onChange={onChange}
        style={{ margin: 8 }}
        placeholder={placeholder}
        fullWidth
        margin="normal"
        inputProps={{
          style: {
            fontSize: 48,
            fontWeight: 600,
          },
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Root>
  )
}

InputSearch.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default memo(InputSearch)
