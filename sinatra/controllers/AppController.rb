class AppController < Sinatra::Base

	require 'bundler'
	Bundler.require

	ActiveRecord::Base.establish_connection(
	:adapter  => 'postgresql',
	:database => 'wed_react'
	)

	set :views, File.expand_path(' ../../views',__FILE__)
	set :public_dir, File.expand_path('../../public',__FILE__)


	not_found do
		"NOT FOUND"
	end


end