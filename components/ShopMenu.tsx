import React from 'react';
import { LiaGripLinesVerticalSolid } from 'react-icons/lia';
import { LuRectangleEllipsis, LuSettings2 } from 'react-icons/lu';
import { TiThLargeOutline } from 'react-icons/ti';

const ShopMenu = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-gray-300">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <LuSettings2 className="text-gray-600" />
        <button className="text-sm font-medium text-gray-700">Filter</button>
        <TiThLargeOutline className="text-gray-600" />
        <LuRectangleEllipsis className="text-gray-600" />
        <LiaGripLinesVerticalSolid className="text-gray-600" />
        <span className="text-sm text-gray-600">Showing 1–16 of 32 results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Show</span>
        <button className="flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 bg-gray-200 rounded">
          16
        </button>
        <span className="text-sm text-gray-600">Short by</span>
        <button className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded">
          Default
        </button>
      </div>
    </div>
  );
};

export default ShopMenu;
