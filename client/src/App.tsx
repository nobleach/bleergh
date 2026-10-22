// Medication search — client skeleton (interview build)
//
// Your job is in CANDIDATE.md. Build the search experience over
// /api/medications/search: you own the endpoint too (server/index.js), so the
// contract between the two is yours to design.
//
// Things you'll have to decide (there is no single right answer):
//   - when to fire requests as the user types (the upstream API is real,
//     rate-limited, and sometimes slow)
//   - what to do with responses that arrive out of order
//   - loading, empty, error, no-results, and "did you mean?" states
//   - what a result row shows, given what the API actually returns

import { useState } from 'react'

type Medication = {
  rxcui: string
  name: string
  // ...the rest of the shape is yours to define against the API response
}

export default function App() {
  const [query, setQuery] = useState('')

  return (
    <main style={{ maxWidth: 640, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h1>Medication Search</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search medications…"
        style={{ width: '100%', padding: 12, fontSize: 16 }}
      />
      {/* TODO (yours): results */}
    </main>
  )
}
