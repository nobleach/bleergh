// Medication search — server skeleton (interview build)
//
// Your job is in CANDIDATE.md: build medication search end to end. The client
// (client/) renders the search box; this server owns the endpoint that talks
// to the RxNorm API (RxNav) and shapes what the UI gets.
//
// RxNav is a real, free public API from the U.S. National Library of Medicine.
// No API key. Docs: https://lhncbc.nlm.nih.gov/RxNav/APIs/
//   e.g. GET https://rxnav.nlm.nih.gov/REST/drugs.json?name=metformin
//
// If the network is down, canned RxNav responses are in fixtures/ — wire those
// in instead; the transformation work is the same.

const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/api/health', (req, res) => res.json({ ok: true }))

// TODO (yours): implement medication search.
//
//   GET /api/medications/search?q=<query>
//
// You decide the contract: what the response shape is, what a "result" even
// is given what RxNav returns, how results are ordered and de-duplicated,
// and what happens with an empty query, no matches, a misspelling, or an
// upstream error.
app.get('/api/medications/search', (req, res) => {
  res.status(501).json({ error: 'not implemented' })
})

app.listen(port, () => console.log(`medication-search server on :${port}`))
