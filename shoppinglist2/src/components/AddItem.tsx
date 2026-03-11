import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Item } from "../App";

type AddItemProps = {
  addItem: (item: Item) => void;
}

export default function AddItem(props: AddItemProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    product: '',
    amount: '',
    price: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addItem = () => {
    props.addItem(item);
    setItem({product:'', amount:'', price:0});
    handleClose();
  }

  return (
    <>
      <Button onClick={handleOpen}>Add Item</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField type="text" value={item.product} label='Product' margin="dense" fullWidth onChange={e => setItem({...item, product:e.target.value})}></TextField>
          <TextField type="text" value={item.amount} label='Amount' margin="dense" fullWidth onChange={e => setItem({...item, amount:e.target.value})}></TextField>
          <TextField type="number" value={item.price} label='Price' margin="dense" fullWidth onChange={e => setItem({...item, price:Number(e.target.value)})}></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addItem}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}