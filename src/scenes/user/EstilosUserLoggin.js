import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  form_loggin: {
    width:"26%",
  },
  root: {
    marginBottom:"28px",
    textAlign:"left",
  },
  input: {
    backgroundColor:"#273746",
    border:"none",
    color:"#fff",
    borderBottom:"1px solid",
    borderRadius:"1px",
    '&:focus': {
      borderBottom:"1px solid",
      borderLeft:"1px solid"
    }
  },
  label:{
    color:"#fff",
  }
}));

export {useStyles};