export function dateStringToTimestamp(dateString: string): number {
  const date = new Date(dateString.split('/').join('-'));
  return date.getTime();
}
