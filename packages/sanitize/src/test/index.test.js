/**
 * Internal Dependencies
 */
import { stripTags, sanitizeText } from '../';

describe( 'Test stripTags', () => {
	test( 'where tag elements are inline', () => {
		const string = 'tags <span>are</span> <em>not allowed</em> here';

		expect( stripTags( string ) ).toBe( 'tags are not allowed here' );
	} );

	test( 'where tag elements wrap text', () => {
		const string = '<h1>This is a header</h1>';

		expect( stripTags( string ) ).toBe( 'This is a header' );
	} );

	test( 'where multiline tag elements wrap text', () => {
		const string = '<h1>\nThis is a header\n</h1>';

		expect( stripTags( string ) ).toBe( '\nThis is a header\n' );
	} );

	test( 'where tag elements have attributes', () => {
		const string = '<select name="select"><option value="value1">Value 1</option></select>';

		expect( stripTags( string ) ).toBe( 'Value 1' );
	} );

	test( 'where multiline tag elements have attributes', () => {
		const string = '<select name="select">\n<option value="value1">Value 1</option>\n<option value="value2" selected>Value 2</option>\n</select>';

		expect( stripTags( string ) ).toBe( '\nValue 1\nValue 2\n' );
	} );
} );
