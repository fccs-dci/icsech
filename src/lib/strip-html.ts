export function stripHtml(html: string): string {
  return html.replace(/<\/?[^>]+>/gi, "").replace(/&nbsp;/gi, " ");
}
