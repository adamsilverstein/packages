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

/**
 * Strip HTML tags and convert HTML entities.
 *
 * @param {string} text Text to strip tags and convert HTML entities.
 *
 * @return Sanitized text. False on failure.
 */
export function sanitizeText( text ) {
	var _text = wp.utils.stripTags( text ),
		textarea = document.createElement( 'textarea' );

	try {
		textarea.innerHTML = _text;
		_text = wp.utils.stripTags( textarea.value );
	} catch ( er ) {}

	return _text;
}
