// src/components/specific/FlatList.tsx
import React from "react";
import ProfileCircle, { DotCircle } from "../common/ProfileCircle";

interface userObject {
  userName: string;
  userId: string;
}
interface FlatListProps {
  items: userObject[];
  onClickFun:any;
}
interface IRowElement {
  item: any;
  index: number;
  onClickFun:any;
}
export const RowElement: React.FC<IRowElement> = ({ item, index ,onClickFun}) => {

  return (
    <div onClick={onClickFun} className="flex active:bg-violet-700  flex-row items-center px-2 py-3 gap-1 bg-background h-24">
      <div className="flex-none ">
        <ProfileCircle userName={item.userName} />
      </div>
      <div className="flex items-center ml-2 h-full w-full select-none">
        <span className="capitalize">{item.userName}</span>
      </div>
      <div className="flex flex-col justify-center gap-2 items-center h-full w-1/12">
        <span className="capitalize text-xs text-neutral-400">23:44</span>
        <DotCircle size="w-6 h-6" countMsg={item?.countMsg} />
      </div>
    </div>
  );
};
export const FlatList: React.FC<FlatListProps> = ({ items , onClickFun }) => {
  return (
    <div className="flex flex-col gap-px ">
      {items.map((item, index) => (
        <RowElement item={item} index={index} onClickFun={onClickFun}/>
      ))}
    </div>
  );
};

export default FlatList;
