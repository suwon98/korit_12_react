import axios from "axios";
import { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import Carlist from "./Carlist";

type User = {
  username: string;
  password: string;
}

export default function Login () {
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
  });

  const [isAuthenticated, setAuth] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [event.target.name]:event.target.value});
  };

  const handleLogin = () => {
    // 템플릿 리터럴도 안 쓰고 하겠습니다.
    axios.post(import.meta.env.VITE_API_URL + '/login', user, {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(res => {
      const jwtToken = res.headers.authorization;
      if(jwtToken !== null && jwtToken !== undefined) {
        localStorage.setItem('jwt', jwtToken);
        setAuth(true);
      }
    })
    .catch(err => {
      console.log('로그인 중 오류 발생 : ', err);
    })
  };

  if (isAuthenticated) {
    return <Carlist />;
  }
  else {
    return (
    <Stack spacing={2} alignItems='center' mt={2}>
      <TextField name='username' label='Username' onChange={handleChange}></TextField>
      <TextField name='password' label='Password' onChange={handleChange} type="password"></TextField>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleLogin}
      >LOGIN</Button>
    </Stack>
    );
  }
}