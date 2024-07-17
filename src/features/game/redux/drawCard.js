export async function drawCard(player, num = 1) {
  const res = await fetch(
    `https://www.deckofcardsapi.com/api/deck/${player.deck_id}/draw/?count=${num}`
  );
  if (!res)
    throw new Error(`HTTP error! draw player card status: ${res.status}`);
  return await res.json();
}
