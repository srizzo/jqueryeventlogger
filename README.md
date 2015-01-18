jQuery Event Logger
=============

jQuery Event Logger is a bookmarklet to log jQuery bound events in realtime, as they are being triggered.

It makes it easy to visualize what handlers are being executed for each event, and to trace back their source code.

## Usage

Create a bookmarklet with the following content:

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://rawgit.com/srizzo/jqueryeventlogger/master/dist/jqueryeventlogger.min.js';})();

Activate the bookmarklet, open the Javascript Console and interact with your page.

See it in use [here](http://srizzo.github.io/jqueryeventlogger/)