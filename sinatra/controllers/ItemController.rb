class ItemController < AppController


get '/' do
		response['Access-Control-Allow-Origin'] = '*'
		content_type :json  
		@items = Item.all
		@items.to_json
		
	end


	get '/:id' do 
		content_type :json
		id = params[:id]
		@item = Item.find(id)
		@item.to_json
	end

	post '/' do
		content_type :json
		puts params 

		@item = Item.new
		@item.title = params[:title]
		@item.save

		@items = Item.all
		@items.to_json
	end


	patch '/:id' do 
		content_type :json

		@items = Item.find(id)

		@item.title = params[:title]
		@item.save

		@items = Item.all 
	end
	

	 delete '/:id' do
     	content_type :json

    	id = params[:id]

    	@item = Item.find(id)
    	@item.destroy

    	@items = Item.all
    	@items.to_json
  end

		




end