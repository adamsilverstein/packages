import stripTags from './stripTags';

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
