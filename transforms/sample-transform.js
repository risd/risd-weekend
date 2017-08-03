var DataUtils = require( './data-utils.js' );

/**
 * This is a sample transform, that will lowercase the
 * name of all of the items in the database.
 *
 * siteData has the structure
 * siteData.contentTypes
 * siteData.contentTypes.{contentTypeName}
 * siteData.data
 * siteData.data.{contentTypeName}
 * siteData.settings
 *
 * The `callback` function should be called as
 * `callback( error, siteData )`. Where `error` can
 * be `null` if no errors are encountered. If an `error`
 * is a truthy value, the output will not be written.
 * 
 * @param  {object}   siteData  The Webhook data for a site
 * @param  {Function} callback  The function to call with the updated data
 */
module.exports = function sampleTransform ( siteData, callback ) {
  var dataUtils = DataUtils( siteData );

  var contentTypes = dataUtils.contentTypes()

  function lowerCaseName ( item ) {
    if ( item.name ) {
      item.name = item.name.toLowerCase();
    }
  }

  contentTypes.forEach( function ( contentType ) {
    dataUtils.forEachItem( contentType, lowerCaseName )  
  } )

  // We encountered no errors, so `null` is passed
  // as the first argument.
  callback( null, siteData )
}
