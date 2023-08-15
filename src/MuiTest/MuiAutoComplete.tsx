import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = [
  "Html",
  "CSS",
  "JavaSctript",
  "TypeScript",
  "React",
  "ExpressJS",
];

// object буцаах
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export default function MuiAutoComplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log(skill);

  return (
    <Stack spacing={2} width={250}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="чадварууд" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
      />

      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="чадварууд" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
}
