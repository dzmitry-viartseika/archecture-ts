type Video = {
    title: string
    duration: number
    coverUrl: string
}
//
// type Props = {
//     items: Array<Video>
// }
//
// type PropsThumbnail = {
//     video: Video
// }
//
// const Thumbnail = ({ video }: PropsThumbnail) => {
//     return <img src={video.coverUrl} />
// }
//
// const VideoList = ({ items }) => {
//     return (
//         <ul>
//             {items.map(item =>
//                 <Thumbnail
//                     key={item.title}
//                     video={item}
//                 />
//             )}
//         </ul>
//     )
// }

type LiveStream = {
    name: string
    previewUrl: string
}

type Props = {
    coverUrl: string
}

const Thumbnail = ({ coverUrl }: Props) => {
    return <img src={coverUrl} />
}

type PropsVideoList = {
    items: Array<Video | LiveStream>
}

const VideoList = ({ items }) => {
    return (
        <ul>
            {items.map(item => {
                if ('coverUrl' in item) {
                    // it's a video
                    return <Thumbnail coverUrl={item.coverUrl} />
                } else {
                    // it's a live stream
                    return <Thumbnail coverUrl={item.previewUrl} />
                }
            })}
        </ul>
    )
}