export function activeTerms(state, type) {
  const collection = state.searchParams[type];
  return Object.keys(collection).filter(term => collection[term]);
}
