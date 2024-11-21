import sanitizeHtml from 'sanitize-html'

export default function BlogContent({content}: {content: string}) {
    console.log('This log is on the BlogContent Server only')
    return <div dangerouslySetInnerHTML={{__html: sanitizeHtml(content)}}></div>
}
