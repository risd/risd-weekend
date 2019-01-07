/**
 * For all `eventslocations`, move any `events` content type entries in
 * `2017events_location` into `events_location`
 *
 * node transforms/index.js data-backups/deleted-2017-events__fixed-reverse-name.json move-events data-backups/deleted-2017-events__fixed-reverse-name--moved-events.json
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
module.exports = function moveEvents ( siteData, callback ) {

  Object.keys( siteData.data.eventslocations ).forEach( function ( eventLocationKey ) {
    if ( Array.isArray( siteData.data.eventslocations[ eventLocationKey ][ '2017events_location' ] ) ) {
      siteData.data.eventslocations[ eventLocationKey ][ '2017events_location' ] = siteData.data.eventslocations[ eventLocationKey ][ '2017events_location' ].filter( function ( relatedItem ) {
        var relatedContentType = relatedItem.split( ' ' )[ 0 ]
        if ( relatedContentType === 'events' ) {
          if ( ! Array.isArray( siteData.data.eventslocations[ eventLocationKey ][ 'events_location' ] ) ) {
            siteData.data.eventslocations[ eventLocationKey ][ 'events_location' ] = []
          }
          siteData.data.eventslocations[ eventLocationKey ][ 'events_location' ].push( relatedItem )
          return false;
        }
        else {
          return true;
        }
      } )
    }
  } )
  
  // We encountered no errors, so `null` is passed
  // as the first argument.
  callback( null, siteData )
}
