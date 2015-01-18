jQuery Event Logger
=============

jQuery Event Logger is a bookmarklet to log jQuery events in realtime, as they are being triggered / handled.

It makes it easy to visualize what handlers are being executed for each event, and to trace back their source code.

## Usage


Add the following link as a bookmarklet:
<a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://rawgit.com/srizzo/jqueryeventlogger/master/dist/jqueryeventlogger.min.js';})();">jQuery Event Logger</a>

Or create one with the contents:

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://rawgit.com/srizzo/jqueryeventlogger/master/dist/jqueryeventlogger.min.js';})();

## Limitations

Currently, events are analyzed at the bookmarklet activation time. Reload the bookmarklet to log events bound after that.

Also, only events with handlers attached to it will be logged.