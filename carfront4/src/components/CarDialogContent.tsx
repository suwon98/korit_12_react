import { Car } from "../types";
import { DialogContent, TextField, Stack } from "@mui/material";


type DialogFormProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CarDialogContent ({car, handleChange} : DialogFormProps) {

  return (
    <>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField type='text' label='Brand' name='brand' fullWidth margin="dense" onChange={handleChange} value={car.brand} />
          <TextField type='text' label='Model' name='model' fullWidth margin="dense" onChange={handleChange} value={car.model} />
          <TextField type='text' label='Color' name='color' fullWidth margin="dense" onChange={handleChange} value={car.color} />
          <TextField type='text' label='Reg.No' name='registrationNumber' fullWidth margin="dense" onChange={handleChange} value={car.registrationNumber} />
          <TextField type="number" label='Year' name='modelYear' fullWidth margin="dense" onChange={handleChange} value={car.modelYear} />
          <TextField type="number" label='Price' name='price' fullWidth margin="dense" onChange={handleChange} value={car.price} />
        </Stack>
        </DialogContent>
    </>
  );
}