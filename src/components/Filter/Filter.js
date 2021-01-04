import React from 'react';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className="form">
      <label className="form-label">
        Find contact by name
        <input
          type="text"
          className="form-input"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
