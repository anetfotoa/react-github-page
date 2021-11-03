import React, { useState } from 'react';

const Check = () => {
  const formData = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
  ];
  const [isChecked, setlsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    setlsChecked(!isChecked);
    checkedItemHander(target.parentNode, target.value, target.checked);
  };
  const checkedItemHander = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = '#F6CB44';
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = '#fff';
    }
    return checkedItems;
  };
  return (
    <div className="cotStyle">
      {formData.map((item) => (
        <label key={item.id} className="innerBox">
          <input
            type="checkbox"
            value={item.name}
            onChange={(e) => checkHandler(e)}
          />
          <div>{item.name}</div>
        </label>
      ))}
    </div>
  );
};
