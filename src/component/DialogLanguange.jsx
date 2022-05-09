import React from 'react'
import {
  Button, ButtonGroup,
  Dialog, DialogTitle, Typography, DialogContent, Select, MenuItem, DialogActions,
} from '@mui/material'
import context from '../context'

function DialogLanguange(props){
  const {open, close} = props
  const ctx = React.useContext(context)
  const onChange = React.useCallback((e) => ctx.app().setState({languange: e.target.value}), [])
  return(
    <Dialog fullWidth maxWidth="xs" open={open}>
      <DialogTitle>Switch Languange</DialogTitle>
      <DialogContent>
        <Select size="small" fullWidth value={ctx.languange} onChange={onChange}>
          <MenuItem value="id">Indonesia</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button size="small" onClick={close} color="secondary">Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogLanguange