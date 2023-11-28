/**
 * Combines content and media data based on matching image URLs.
 *
 * @param {Array<Object>} content - Array of content objects.
 * @param {Array<Object>} media - Array of media objects.
 * @returns {Array<Object>} Combined data array with matched content and media.
 */
export default function combineContent({ content, media }) {
  /**
   * @typedef {Object} CombinedDataItem
   * @property {Object} frontmatter - The frontmatter from the content object.
   * @property {Object} cloudinaryData - The cloudinaryData from the matching media object.
   */

  /**
   * @type {Array<CombinedDataItem>} combinedData
   */
  const combinedData = [];

  /**
   * Iterate through each content item.
   */
  content.forEach((contentItem) => {
    /**
     * Iterate through each media item.
     */
    media.forEach((mediaItem) => {
      /**
       * Check if the image URLs match.
       */
      if (
        contentItem.frontmatter.image === mediaItem.cloudinaryData.secure_url
      ) {
        /**
         * Combine data and push to the combinedData array.
         * @type {CombinedDataItem}
         */
        const combinedItem = {
          ...contentItem,
          cloudinaryData: mediaItem,
        };

        combinedData.push(combinedItem);
      }
    });
  });

  return combinedData;
}
