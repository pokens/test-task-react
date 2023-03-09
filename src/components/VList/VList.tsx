import { FC } from "react";
import VListContainerView from "./VList.view";

type ListProps = {
   data: string[];
};

const VList: FC<ListProps> = ({ data }: ListProps) => {
   return (
      <VListContainerView>
         {data.map((name, index) => (
            <p key={index}>{name}</p>
         ))}
      </VListContainerView>
   );
};

export default VList;
