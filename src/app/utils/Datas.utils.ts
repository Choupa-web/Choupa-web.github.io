/**
 * Transform result of firebase query into an array of numbers
 * @param source - result of firebase query
 */
export function firestoreDatasTransformation(source: any): any[]  {
  return source.map(item => Object.assign({id: item.payload.doc.id}, item.payload.doc.data()));
}

/**
 * get maximum value of numbers array
 * @param values - array of numbers
 */
export function getMaximumValue(values: number[]): number {
  return values.reduce((a, b) => (a > b ? a : b));
}
