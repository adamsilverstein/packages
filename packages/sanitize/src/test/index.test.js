/**
 * Internal Dependencies
 */
import { stripTags } from '../stripTags';

describe( 'stripTags', () => {
	test( 'should remove inline tag elements', () => {
		const string = 'tags <span>are</span> <em>not allowed</em> here';

		expect( stripTags( string ) ).toBe( 'tags are not allowed here' );
	} );

	test( 'should remove tag elements', () => {
		const string = '<h1>This is a header</h1>';

		expect( stripTags( string ) ).toBe( 'This is a header' );
	} );

	test( 'should remove capitalized tag elements', () => {
		const string = '<H1>This is a header</H1>';

		expect( stripTags( string ) ).toBe( 'This is a header' );
	} );

	test( 'should remove multiline tag elements', () => {
		const string = '<h1>\nThis is a header\n</h1>';

		expect( stripTags( string ) ).toBe( '\nThis is a header\n' );
	} );

	test( 'should remove tag elements with attributes', () => {
		const string = '<p class="test">test</p>';

		expect( stripTags( string ) ).toBe( 'test' );
	} );

	test( 'should remove multiline tag elements with attributes', () => {
		const string = '<p class="test">\ntest\n</p>';

		expect( stripTags( string ) ).toBe( '\ntest\n' );
	} );

	test( 'should remove tag elements with multiple attributes', () => {
		const string = '<p class="test" id="test">test</p>';

		expect( stripTags( string ) ).toBe( 'test' );
	} );

	test( 'should remove multiline tag elements with multiple attributes', () => {
		const string = '<p class="test" id="test">\ntest\n</p>';

		expect( stripTags( string ) ).toBe( '\ntest\n' );
	} );

	test( 'should remove nested tag elements', () => {
		const string = '<p class="test" id="test"><span>test</span></p>';

		expect( stripTags( string ) ).toBe( 'test' );
	} );

	test( 'should remove deep nested tag elements', () => {
		const string = '<p class="test">test <em id="test">test</em></p>';

		expect( stripTags( string ) ).toBe( 'test test' );
	} );

	test( 'should remove multiline nested tag elements', () => {
		const string = '<p class="test" id="test">\n<span>\ntest\n</span>\n</p>';

		expect( stripTags( string ) ).toBe( '\n\ntest\n\n' );
	} );

	test( 'should remove multiline deep nested tag elements', () => {
		const string = '<p class="test">\ntest <em id="test">test</em>\n</p>';

		expect( stripTags( string ) ).toBe( '\ntest test\n' );
	} );

} );
