import { FormEvent, ReactNode, useCallback, useState } from "react"

const _key = btoa(navigator.userAgent)
const _password = "c2fnzxi"

export function Auth({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem(_key) == "true")
  const [error, setError] = useState<string>(null)
  const resetError = useCallback((_: any) => setError(null), [])

  const submit = useCallback(function (e: FormEvent) {
    e.preventDefault()

    const result = btoa((e.target as HTMLFormElement).passcode.value.trim())
      .replace("=", "")
      .toLowerCase()

    if (result == _password) {
      setLoggedIn(true)
      localStorage.setItem(_key, "true")
    } else setError("Invalid password")
  }, [])

  if (loggedIn) return <>{children}</>

  return (
    <div style={{ width: "100%", display: "grid", placeContent: "center", placeItems: "center" }}>
      <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }} onSubmit={submit}>
        <label htmlFor="passcode">Enter Pass Code</label>
        <input type="password" name="passcode" id="passcode" onChange={resetError} />
        {error && <span>{error}</span>}
      </form>
    </div>
  )
}
