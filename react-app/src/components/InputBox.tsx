import React from 'react'
interface Props {
  placeholder: string;
  onChange: (e: any) => void;
}

function inputBox({ placeholder, onChange }: Props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" className="form-control" onChange={onChange} placeholder={placeholder} aria-label="Username" aria-describedby="basic-addon1" />
    </div>
  )
}

export default inputBox