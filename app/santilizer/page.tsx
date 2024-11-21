import sanitizeHtml from 'sanitize-html'

const mockInput = `<div>
        <h1>Welcome to My Website</h1>
        <p>This is an <i>example</i> paragraph with some <b>bold</b> and <em>italic</em> text.</p>
        <p>
            Here is a <a href="https://example.com" title="Example site">safe link</a>, 
            and here is an <a href="javascript:alert('Hacked!')">unsafe link</a>.
        </p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item <strong>3</strong></li>
        </ul>
        <script>alert('This script should be removed');</script>
        <h2>Another Section</h2>
        <p>Some additional text with <a href="https://another-example.com" onclick="stealData()">click events</a>.</p>
        <footer>
            <p>Contact us at <a href="mailto:contact@example.com">contact@example.com</a></p>
        </footer>
    </div>`;

export default function Page() {
    console.log('This log is on the Server only')
    return <div dangerouslySetInnerHTML={{__html: sanitizeHtml(mockInput)}}></div>
}
