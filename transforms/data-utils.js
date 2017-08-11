module.exports = DataUtils;

function DataUtils ( siteData ) {
  if ( ! ( this instanceof DataUtils ) ) return new DataUtils( siteData );
  this.siteData = siteData;
}

DataUtils.prototype.isOneOff = function ( contentType ) {
  return this.siteData.contentType[ contentType ].oneOff;
}

DataUtils.prototype.contentTypes = function ( filterFn ) {
  if ( typeof filterFn !== 'function' ) filterFn = function () { return true; }
  return Object.keys( this.siteData.contentType ).filter( filterFn );
}

DataUtils.prototype.forEachItem = function ( contentType, fn ) {
  var self = this;
  if ( this.isOneOff( contentType ) ) {
    fn( self.siteData.data[ contentType ] )
  } else {
    Object.keys( this.siteData.data[ contentType ] )
      .forEach( function ( itemKey ) {
        fn( self.siteData.data[ contentType ][ itemKey ] )
      } )
  }
}
