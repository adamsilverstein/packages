import stripTags from './stripTags';

// Create a reusable text area.
var textarea = document.createElement( 'textarea' );

/**
 * Make a string safe for rendering.
 *
 * Remove all HTML tags from a string and convert HTML special characters to their entity equivalents.
 *
 * @param {string} text Text to strip tags and convert HTML entities.
 *
 * @return Sanitized text. False on failure.
 */
export function sanitizeText( text ) {
	var _text = wp.utils.stripTags( text );

	try {
		textarea.innerHTML = _text;
		_text = wp.utils.stripTags( textarea.value );
	} catch ( er ) {}

	return _text;
}

