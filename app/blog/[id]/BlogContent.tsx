import sanitizeHtml from 'sanitize-html'

export default function BlogContent({content}: {content: string}) {
    return <div dangerouslySetInnerHTML={{__html: sanitizeHtml(content)}}></div>
}
