jQuery Event Logger
=============

jQuery Event Logger is a bookmarklet to log jQuery events in realtime, as they are being triggered / handled.

It makes it easy to visualize what handlers are being executed for each event, and to trace back their source code.

## Usage

Create a bookmarklet from the link [jQuery Event Logger]("javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://rawgit.com/srizzo/jqueryeventlogger/master/dist/jqueryeventlogger.min.js';})();")

Or, create a bookmarklet with the following contents:

    javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://rawgit.com/srizzo/jqueryeventlogger/master/dist/jqueryeventlogger.min.js';})();

Activate the bookmarklet, open the Javascript Console and interact with your page.

See it in use [here](http://srizzo.github.io/jqueryeventlogger/)