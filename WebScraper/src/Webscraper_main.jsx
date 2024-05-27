import Navbar from "./components/navbar";
import ResultContainer from "./components/result_container";
import { useState, useEffect } from "react";

function WebScraper() {
  const [query, setQuery] = useState(() => null);
  const [queryBtn, setQueryBtn] = useState(() => null);
  const [btnPress, setBtnPress] = useState(0);
  const [Widgets, setWidgets] = useState([]);
  const [fil, setFil] = useState([0, "null"]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      UpdateQuery();
    }
  };

  const UpdateQuery = () => {
    setQueryBtn(query);
    setBtnPress(() => btnPress ^ 1);
    console.log(query);
  };
  const UpdateInputChange = (event) => {
    setQuery(event.target.value);
  };
  // useEffect(() => {}, [query]);
  return (
    <div className=" min-h-[100vh] bg-[--w-clayblack] relative">
      <Navbar
        on_Click={UpdateQuery}
        on_Change={UpdateInputChange}
        on_KeyDown={handleKeyPress}
        Widgets={Widgets}
        set_Widgets={setWidgets}
        fil={fil}
        setFil={setFil}
      />
      <ResultContainer
        userQuery={queryBtn}
        btnPress={btnPress}
        Widgets={Widgets}
        setWidgets={setWidgets}
      />
    </div>
  );
}

export default WebScraper;
