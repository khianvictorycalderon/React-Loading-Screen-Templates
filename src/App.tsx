import { useState } from "react"
import PlainLoading from "./Loading_Screens/Plain_Loading/Plain_Loading"
import PercentageLoading from "./Loading_Screens/Percentage_Loading/Percentage_Loading"

function App() {
  const [loadingDone, setLoadingDone] = useState<boolean>(true)
  const [loadingTemplate, setLoadingTemplate] = useState<"plain" | "percentage">("plain")
  const [loadingTheme, setLoadingTheme] = useState<"light" | "dark">("light")

  const startLoading = (template: "plain" | "percentage", theme: "light" | "dark") => {
    setLoadingTemplate(template)
    setLoadingTheme(theme)
    setLoadingDone(false)
    setTimeout(() => {
      setLoadingDone(true)
    }, 2000)
  }

  return (
    <>
      <div style={{ position: "absolute", top: 20, left: 20, display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => startLoading("plain", "light")}>Plain Loading (Light)</button>
        <button onClick={() => startLoading("plain", "dark")}>Plain Loading (Dark)</button>
        <button onClick={() => startLoading("percentage", "light")}>Percentage Loading (Light)</button>
        <button onClick={() => startLoading("percentage", "dark")}>Percentage Loading (Dark)</button>
      </div>

      {loadingTemplate === "plain" && (
        <PlainLoading IsDoneLoading={loadingDone} Theme={loadingTheme} />
      )}

      {loadingTemplate === "percentage" && (
        <PercentageLoading IsDoneLoading={loadingDone} Theme={loadingTheme} />
      )}
    </>
  )
}

export default App
