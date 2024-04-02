import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import React from 'react';

interface questionsProps {
  question: any;
  answer: any;
  handleChange: (e: any) => void;
  visible: boolean;
}
const QuestionComponent = ({ question, answer, handleChange, visible }: questionsProps) => {

  const localData = localStorage.getItem('LoginData');
  const userData = localData && JSON.parse(localData);
  console.log("user", userData);

  return (
    <div>
      <Typography variant="body1">{question} {visible ? <span style={{ color: 'red' }}>*</span> : ""}</Typography>
      <FormControl sx={{ minWidth: "300px", marginTop: 1 }}>
        <InputLabel id="demo-simple-select-label">Select an answer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={answer}
          label="Select an answer"
          onChange={(e) => handleChange(e.target.value)}
          disabled={userData.role === 'admin' ? true : false}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
          <MenuItem value="Option 3">Option 3</MenuItem>
          <MenuItem value="Option 4">Option 4</MenuItem>
          <MenuItem value="Option 5">Option 5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default QuestionComponent;