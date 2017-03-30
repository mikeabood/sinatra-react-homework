require 'sinatra/base'

require './controllers/AppController'
require './controllers/ItemController'

require './models/ItemModel'


map('/') {run AppController}
map('/items') {run ItemController}