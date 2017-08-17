/**
 * Remove all HTML tags from string.
 *
 * @param {string} text Text to have the HTML tags striped out of.
 *
 * @return  Text free of HTML.
 */
export function stripTags( text ) {
	text = text || '';

	return text
		.replace( /<!--[\s\S]*?(-->|$)/g, '' )
		.replace( /<(script|style)[^>]*>[\s\S]*?(<\/\1>|$)/ig, '' )
		.replace( /<\/?[a-z][\s\S]*?(>|$)/ig, '' );
}