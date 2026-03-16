import { Car } from "../types";
import { DialogContent, TextField } from "@mui/material";


type DialogFormProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CarDialogContent ({car, handleChange} : DialogFormProps) {

  return (
    <>
      <DialogContent>
          <TextField label='Brand' name='brand' fullWidth margin="dense" onChange={handleChange} value={car.brand} />
          <br />
          <TextField label='Model' name='model' fullWidth margin="dense" onChange={handleChange} value={car.model} />
          <br />
          <TextField label='Color' name='color' fullWidth margin="dense" onChange={handleChange} value={car.color} />
          <br />
          <TextField label='Reg.No' name='registrationNumber' fullWidth margin="dense" onChange={handleChange} value={car.registrationNumber} />
          <br />
          <TextField label='Year' name='modelYear' fullWidth margin="dense" onChange={handleChange} value={car.modelYear} type="number" />
          <br />
          <TextField label='Price' name='price' fullWidth margin="dense" onChange={handleChange} value={car.price} type="number" />
          <br />
        </DialogContent>
    </>
  );
}