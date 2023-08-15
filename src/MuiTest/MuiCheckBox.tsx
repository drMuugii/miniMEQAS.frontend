import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarIcon from "@mui/icons-material/Bookmark";

export default function MuiChooseBox() {
  const [acceptTnC, setacceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  function hadleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setacceptTnC(event.target.checked);
  }
  function handleSkillChange(event: React.ChangeEvent<HTMLInputElement>) {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept term and Conditions"
          control={<Checkbox checked={acceptTnC} onChange={hadleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarIcon />}
          checked={acceptTnC}
          onChange={hadleChange}
          size="small"
          color="secondary"
        ></Checkbox>
      </Box>
      <Box>
        <FormControl color="success">
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="HTML"
                  checked={skills.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={
                <Checkbox
                  checked={skills.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="JavaScript"
              control={
                <Checkbox
                  checked={skills.includes("JavaScript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>
            <h2>choose</h2>
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}
