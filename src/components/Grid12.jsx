import React from "react";

const Grid12 = () => {
  return (
    <div>
      <div className="col-span-4 bg-blue-300 p-4 shadow rounded">
        <p>This is a 4-column wide item.</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {/* Example row with two divs */}
        <div className="col-span-2 bg-blue-200 p-4 shadow rounded">
          <p>This is a 3-column wide item.</p>
        </div>
        <div className="col-span-2 bg-blue-300 p-4 shadow rounded">
          <p>This is a 4-column wide item.</p>
        </div>
      </div>
    </div>
  );
};

export default Grid12;
