export async function getCard() {
  const res = await fetch(
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  if (!res) throw new Error(`HTTP error! status: ${res.status}`);

  const data = await res.json();
  if (!data.success || !data.shuffled)
    throw new Error("Error when shuffling or Failed when get deck id");

  const cardRes = await fetch(
    `https://www.deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
  );
  if (!cardRes)
    throw new Error(`HTTP error! getting card, status: ${res.status}`);
  return await cardRes.json();
}
