QUnit.testStart(function( details ) {
  jQueryEventLogger.enable()
  $(document).on("click", function () {
    // clicked
  })
  jQueryEventLogger.reload()
})

QUnit.test( "logs events", function( assert ) {
  jQueryEventLogger.logEvent = function (type, element, event) {
    assert.equal(type, "click")
    assert.equal(element, document)
  }
  
  $(document).click()
})


QUnit.test( "does not logs events when disabled", function( assert ) {
  expect(0)
  
  jQueryEventLogger.logEvent = function (type, element, event) {
    assert.ok(false)
  }

  jQueryEventLogger.disable()
  $(document).click()
})

QUnit.test( "does not logs ignored events", function( assert ) {
  expect(0)
  
  jQueryEventLogger.logEvent = function (type, element, event) {
    assert.ok(false)
  }
  jQueryEventLogger.ignore("click")
  $(document).click()
})
