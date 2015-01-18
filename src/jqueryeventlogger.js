(function ($) {
  
  if (typeof jQueryEventLogger == "undefined") {
    jQueryEventLogger = {
      _enabled: false,
      _events: [],
      DEBUG: false,
      IGNORE_EVENTS: ["mouseover", "mouseout", "keydown", "keyup", "resize", "scroll"],
      
      ignore: function (type) {
        this.IGNORE_EVENTS.push(type);
        return this.IGNORE_EVENTS;
      },
      
      removeIgnore: function (type) {
        var index = this.IGNORE_EVENTS.indexOf(type);
        if (index > -1) {
            this.IGNORE_EVENTS.splice(index, 1);
        }
        return this.IGNORE_EVENTS;
      },
      
      logEvent: function (type, element, event) {
        var logEntry = { index: jQueryEventLogger._events.indexOf(event) , type: type, selector: event.selector, element: element }
        for(var k in logEntry)
           if(typeof logEntry[k] === "undefined") delete logEntry[k];

        console.group($.map(logEntry, function (index, key) { return logEntry[key] }));
        console.debug(event.__originalHandler);
        console.groupEnd();
      },
      
      handler: function (index) {
        return this._events[index].__originalHandler;
      },
      
      reload: function () {
        $.each([window, document].concat($("*").toArray()), function () {
          var element = this;
          var eventsByType = [];
          eventsByType = jQuery._data(this, "events")
          if (eventsByType) {
            $.each(eventsByType, function (type, events) {
              $.each(events, function() {
                var event = this;
                if (typeof this.__originalHandler === "undefined") {
                  jQueryEventLogger._events.push(event);
                  this.__originalHandler = this.handler;
                  this.handler = function () {
                    if (jQueryEventLogger._enabled && jQueryEventLogger.IGNORE_EVENTS.indexOf(type) < 0 ) {
                      jQueryEventLogger.logEvent(type, element, event)
                    }
                    event.__originalHandler.apply(this, arguments);
                  };
                }
              });
            });
          }
        });
      },
      
      enable: function () {
        jQueryEventLogger._enabled = true;
      },
      disable: function () {
        jQueryEventLogger._enabled = false;
      },
      help: function () {
        console.info("The following events defined in jQueryEventLogger.IGNORE_EVENTS will be ignored:")
        console.info(jQueryEventLogger.IGNORE_EVENTS)
        console.info("Help:\n" +
          "  To print this help:                                                     jQueryEventLogger.help()\n" +
          "  To add an event to the ignore list:                                     jQueryEventLogger.ignore('event name')\n" +
          "  To remove an event from the ignore list:                                jQueryEventLogger.removeIgnore('event name')\n" +
          "  To debug an event:                                                      debug(jQueryEventLogger.handler(number))\n" +
          "  To remove debug from a specific event:                                  undebug(jQueryEventLogger.handler(number))\n" +
          "  To inspect the event handler's source code (Google Chrome):             inspect(jQueryEventLogger.handler(number))"
        );        
      }
    };
    
    console.info("jQuery Event Logger was initialized")
    jQueryEventLogger.help();
  }

  if (!jQueryEventLogger._enabled) {
    jQueryEventLogger.enable();
    jQueryEventLogger.reload();
    console.info("jQuery Event Logger is enabled");
  } else {
    jQueryEventLogger.disable();
    console.info("jQuery Event Logger is disabled");
  }
  
})(jQuery)