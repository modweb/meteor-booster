`Booster` is the top level namespace in this package.

    Booster = {}

# Booster.doStuff = (booleanVar, callback) ->

Do some stuff.

**Params**

- booleanVar - a boolean variable
- callback - a callback function that takes `error, result`

- - -

    Booster.doStuff = (booleanVar, callback)->
      if booleanVar
        callback null, 'some stuff'
      else
        callback 'an-error-type', null
