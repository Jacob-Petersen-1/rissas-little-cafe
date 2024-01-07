/**
 * Extracts the YouTube video ID from a given YouTube video URL.
 *
 * @param {string} videoUrl - The YouTube video URL to extract the video ID from.
 * @returns {string|null} - The extracted YouTube video ID, or null if the URL is invalid.
 * @throws {Error} - Throws an error if an invalid YouTube URL is provided.
 *
 * @example
 * const videoUrl = 'https://youtu.be/uU2BbpAYaaE';
 * const videoId = extractVideoId(videoUrl);
 * console.log('YouTube Video ID:', videoId);
 */
export const extractVideoId = (videoUrl) => {
  let videoId = null;
  try {
    const url = new URL(videoUrl);

    // Check for youtu.be domain
    if (url.host.includes("youtu.be")) {
      videoId = url.pathname.slice(1);
    } else if (url.host.includes("youtube.com")) {
      // Check for youtube.com domain
      const params = new URLSearchParams(url.search);
      videoId = params.get("v");
    }
  } catch (error) {
    console.error("Invalid YouTube URL");
    throw new Error("Invalid YouTube URL");
  }
  return videoId;
};
