import { useState } from "react"
import PlainLoading from "./Loading_Screens/Plain_Loading/Plain_Loading"

function App() {
  const [loadingDone, setLoadingDone] = useState<boolean>(true);
  const [loadingTemplate, setLoadingTemplate] = useState<"plain">("plain");

  const handleClick = () => {
    setLoadingDone(false); // restart loading
    setLoadingTemplate("plain"); // set template if you have multiple later

    setTimeout(() => {
      setLoadingDone(true);
    }, 2000);
  }

  return (
    <>
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <button onClick={handleClick}>Plain Loading</button>
      </div>

      {loadingTemplate === "plain" && (
        <PlainLoading IsDoneLoading={loadingDone} Theme="dark" />
      )}
    </>
  )
}

export default App
