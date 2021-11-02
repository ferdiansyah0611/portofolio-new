import React from 'react'
import {
  Button, ButtonGroup,
  Dialog, DialogTitle, Typography, DialogContent, Select, MenuItem, DialogActions,
} from '@mui/material'

function DialogLanguange(props){
  const {lang, change, open, close} = props
  return(
    <Dialog fullWidth maxWidth="sm" open={open}>
      <DialogTitle>
        <Typography variant="h5">Switch Languange</Typography>
      </DialogTitle>
      <DialogContent>
        <Select fullWidth value={lang} onChange={change}>
          <MenuItem value="id">Indonesia</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="secondary">Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogLanguange