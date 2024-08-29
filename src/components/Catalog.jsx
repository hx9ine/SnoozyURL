import React, { useEffect } from "react";

function Catalog() {

  return (
    <div className="catalog p-4 w-full h-full flex items-center justify-center gap-4 overflow-hidden">
      <div className="column w-1/2 h-full flex flex-col gap-4 overflow-hidden relative">
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1723410479407-8a5c6ba1a100?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM0MzR8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722353617129-e44c05bd012f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722503281278-6af1393f7517?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722750027553-14f9319c84cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1723581049431-d7af9cfc8414?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722488335644-0ffd022b0715?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM3NTV8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="column w-1/2 h-full flex flex-col gap-4 overflow-hidden relative">
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722750027553-14f9319c84cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1723581049431-d7af9cfc8414?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722488335644-0ffd022b0715?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM3NTV8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1723410479407-8a5c6ba1a100?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM0MzR8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722353617129-e44c05bd012f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="img w-full aspect-[1/1.3] flex items-center justify-center rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1722503281278-6af1393f7517?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQ3NTM2NDl8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
