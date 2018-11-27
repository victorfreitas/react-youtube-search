export default videos => videos.map(video => ({
  etag: video.etag,
  id: video.id.videoId,
  url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
  ...video.snippet,
}))
