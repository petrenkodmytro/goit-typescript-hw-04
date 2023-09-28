import React, { useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div style={{backgroundColor:'#eed0ed'}}>
      <p>Task 3</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
