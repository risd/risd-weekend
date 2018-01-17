var fs = require( 'fs' );
var path = require( 'path' );

// get transforms options from command line arguments
var options = argsToOptions( process.argv.slice( 2 ) )

// do the transform based on options.
transform( options, function ( error ) {
  if ( error ) {
    console.log( 'Could not complete.' )
    console.log( error.message )
    console.log( error.stack )
  }
} )

/**
 * Transforms the input using the tranform function,
 * and writes out the output.
 * 
 * @param  {object}   options
 * @param  {string}   options.input
 * @param  {Function}   options.transform
 * @param  {string}   options.output
 * @param  {Function} callback Called when processing is complete.
 */
function transform ( options, callback ) {
  readFile( options.input, function ( error, siteDataBuffer ) {
    if ( error ) return callback( error )
    try {
      var siteData = JSON.parse( siteDataBuffer.toString() )
    } catch( error ) {
      return callback( error )
    }
    options.transform( siteData, function ( error, transformedSiteData ) {
      if ( error ) return callback( error )

      writeFile( options.output, JSON.stringify( transformedSiteData, null, 2 ), function ( error ) {
        if ( error ) return callback( error )
        callback( null )
      } )
    } )
  } )
}

function readFile ( filePath, callback ) {
  fs.readFile( filePath, callback )
}

function writeFile ( filePath, data, callback ) {
  fs.writeFile( filePath, data, callback )
}

function argsToOptions ( args ) {
  var options = {}
  if ( args.length !== 3 ){
    console.log( 'Expects 3 arguments.' )
    console.log( '`node transforms/index.js backup.json transform-file rewrite.json`' )
    process.exit( 1 )
  }
  args.forEach( function ( arg, argIndex ) {
    if ( argIndex === 0 ) {
      options.input = expandedPath( arg )
    } else if ( argIndex === 1 ) {
      options.transform = require( ( './' + arg ) )
    } else if ( argIndex === 2 ) {
      options.output = expandedPath( arg )
    }
  } )
  return options;
}

function expandedPath ( filePath ) {
  if ( filePath.startsWith( '~/' ) ) {
    return path.join( getUserHome(), filePath.slice( 2 ) )
  } else if ( filePath.startsWith( '/' ) ) {
    return filePath;
  } else {
    return path.join( process.cwd(), filePath );
  }
}

function getUserHome() {
  return process.env[
      (process.platform == 'win32')
        ? 'USERPROFILE'
        : 'HOME'
    ];
}
