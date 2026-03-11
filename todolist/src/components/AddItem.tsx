import { useState } from "react";
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { Item } from "../App";
// 3번 라인의 경우 전에는 types.ts에서 불러왔었습니다.

type AddItemProps = {
  addItem: (item: Item) => void;
}

export default function AddItem(props: AddItemProps) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    content: '',
    checkTodo: false
  });
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addItem = () => {
    props.addItem(item);  // 항목을 추가하는 상위 컴포넌트의 함수 addItem()
    // 그 다음에 TextField value를 지울겁니다.
    setItem({content:'', checkTodo:false});
    handleClose();
  }

  return (
    <>
      <Button onClick={handleOpen} variant="text">Add Todo</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Todo</DialogTitle>
        <DialogContent>
          <TextField value={item.content} label='Content' margin="dense" fullWidth
          onChange={event => setItem({...item, content:event.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            CANCEL
          </Button>
          <Button onClick={addItem}>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}