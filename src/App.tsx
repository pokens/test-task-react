import { useSearchParams } from "react-router-dom";
import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from "react";

import "./App.css";
import DATASET from "./data/dataset";
import useDebounce from "./hooks/useDebounce";

import VList from "./components/VList/VList";
import VSearchBarView from "./components/VInput/VSearchBar.view";
import VMainContainerView from "./components/VMainContainer/VMainContainer.style";

const App: FC = () => {
   const [, setSearchTerm] = useSearchParams();

   const [query, setQuery] = useState<string>("");
   const debouncedQuery = useDebounce<string>(query, 500);

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => setSearchTerm({ q: debouncedQuery }), [debouncedQuery]);

   const filteredData = useMemo(() => {
      return DATASET.filter((data) =>
         data.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
   }, [DATASET, debouncedQuery]);

   const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
   };

   return (
      <VMainContainerView>
         <VSearchBarView
            ref={inputRef}
            placeholder="Search..."
            onChange={handleInput}
            value={query}
         ></VSearchBarView>
         <VList data={filteredData}></VList>
      </VMainContainerView>
   );
};

export default App;
