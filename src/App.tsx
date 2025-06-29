import { useState } from "react"
import PlainLoading from "./Loading_Screens/Plain_Loading/Plain_Loading"
import PercentageLoading from "./Loading_Screens/Percentage_Loading/Percentage_Loading"

function App() {
  const [loadingDone, setLoadingDone] = useState(true)
  const [loadingTemplate, setLoadingTemplate] = useState<"plain" | "percentage">("plain")
  const [loadingTheme, setLoadingTheme] = useState<
    "light" | "dark" | "amber" | "emerald" | "red" | "blue" | "green" | "yellow" | "indigo" | "purple" | "pink" | "gray"
  >("light")

  const startLoading = (template: "plain" | "percentage") => {
    setLoadingTemplate(template)
    setLoadingDone(false)
    setTimeout(() => {
      setLoadingDone(true)
    }, 2000)
  }

  const themes: Array<
    "light" | "dark" | "amber" | "emerald" | "red" | "blue" | "green" | "yellow" | "indigo" | "purple" | "pink" | "gray"
  > = [
    "light", "dark", "amber", "emerald", "red", "blue",
    "green", "yellow", "indigo", "purple", "pink", "gray"
  ]

  const templates: Array<"plain" | "percentage"> = ["plain", "percentage"]

  return (
    <>
      <div style={{ position: "absolute", top: 20, left: 20, display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {themes.map(theme => (
            <label key={theme}>
              <input
                type="radio"
                name="theme"
                value={theme}
                checked={loadingTheme === theme}
                onChange={() => setLoadingTheme(theme)}
              />
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </label>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {templates.map(template => (
            <button key={template} onClick={() => startLoading(template)}>
              {template.charAt(0).toUpperCase() + template.slice(1)} Loading
            </button>
          ))}
        </div>
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
