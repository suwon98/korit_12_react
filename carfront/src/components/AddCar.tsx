import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";
import {Car} from '../types';
import { useState } from "react";
import { addCar } from "../api/carapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddCar () {
  const queryClient = useQueryClient();

  const {mutate} = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cars']);
    },
    onError: err => console.log(err),
  });


  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<Car>({
  brand: '',
  model: '',
  color: '',
  registrationNumber: '',
  modelYear: 0,
  price: 0,
  });

  // 한 줄 짜리라서 필요없을 것 같지만
  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value})
  }

  const handleSave = () => {
    mutate(car);
    setCar({
    brand: '',
  model: '',
  color: '',
  registrationNumber: '',
  modelYear: 0,
  price: 0,
    });
    handleClickClose();
  }

  return (
    <>
      <button onClick={handleClickOpen}>New Car</button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <TextField label='Brand' name='brand' fullWidth margin="dense" onChange={handleChange} value={car.brand} />
          <br />
          <TextField label='Model' name='model' fullWidth margin="dense" onChange={handleChange} value={car.model} />
          <br />
          <TextField label='Color' name='color' fullWidth margin="dense" onChange={handleChange} value={car.color} />
          <br />
          <TextField label='Reg.No' name='registrationNumber' fullWidth margin="dense" onChange={handleChange} value={car.registrationNumber} />
          <br />
          <TextField label='Year' name='modelYear' fullWidth margin="dense" onChange={handleChange} value={car.modelYear} />
          <br />
          <TextField label='Price' name='price' fullWidth margin="dense" onChange={handleChange} value={car.price} />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}