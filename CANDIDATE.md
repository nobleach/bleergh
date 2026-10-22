# Hands-On: Medication Search

**Time:** ~60 min together.
**Setup:** two terminals —

```bash
cd server && npm install && npm start        # Express API on :8080
cd client && npm install && npm run dev      # React app on :5173 (proxies /api)
```

## The scenario

Members search for their medications while working through their Clinic plan.
You have a React/TypeScript client and an Express server. Neither end of
search is built yet.

**Build medication search, end to end.** The empty endpoint is in
`server/index.js` (`GET /api/medications/search`), the empty UI is in
`client/src/App.tsx`. The data comes from **RxNav**, the U.S. National Library
of Medicine's free RxNorm API — real, public, no key:

```
GET https://rxnav.nlm.nih.gov/REST/drugs.json?name=metformin
```

Docs: https://lhncbc.nlm.nih.gov/RxNav/APIs/ (spelling suggestions and
approximate matching exist too, if you want them). The response shape is…
what it is. Deciding what a "result" even means, and what your endpoint
should send the client, is part of the exercise.

**If the network is down:** canned RxNav responses are in `server/fixtures/`
— wire those in instead. The transformation work is the same.

You don't need to finish everything. We care more about how you reason across
the two halves than about polish on either one. Talk out loud.

## Using AI

**Use it — it's expected, the same as on the job.** Two asks:

- **Be open about it.** Show your prompts, narrate when you're leaning on a
  model. Zero penalty for using AI, zero bonus for avoiding it.
- **Own the output.** We'll dig into whatever the AI produces — why it's built
  that way, what it got wrong or missed, what you'd change before shipping it.
  "The AI wrote it" isn't an answer to "why is it like this?"; "here's why I
  kept it" is.

## What we'll ask along the way

- Walk us through what happens to one keystroke, from the input box to pixels
  on screen. Where can it fail?
- What does the API return that you didn't expect, and where did you decide to
  handle it?
- What's the first test you'd write, and why that one?
- If 50x the users hit this tomorrow, what breaks first?

---
*This exercise uses publicly available data from the U.S. National Library of
Medicine (NLM), National Institutes of Health, Department of Health and Human
Services; NLM is not responsible for the product and does not endorse or
recommend this or any other product.*
