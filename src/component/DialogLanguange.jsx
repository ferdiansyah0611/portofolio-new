import React from 'react'
import {
  Button, ButtonGroup,
  Dialog, DialogTitle, Typography, DialogContent, Select, MenuItem, DialogActions,
} from '@mui/material'

function DialogLanguange(props){
  const {lang, change, open, close} = props
  return(
    <Dialog fullWidth maxWidth="xs" open={open}>
      <DialogTitle>Switch Languange</DialogTitle>
      <DialogContent>
        <Select size="small" fullWidth value={lang} onChange={change}>
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