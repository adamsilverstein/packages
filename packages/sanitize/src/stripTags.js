/**
 * Strip HTML tags.
 *
 * @param {string} text Text to have the HTML tags striped out of.
 *
 * @return  Stripped text.
 */
export function stripTags( text ) {
	text = text || '';

	return text
		.replace( /<!--[\s\S]*?(-->|$)/g, '' )
		.replace( /<(script|style)[^>]*>[\s\S]*?(<\/\1>|$)/ig, '' )
		.replace( /<\/?[a-z][\s\S]*?(>|$)/ig, '' );
}
