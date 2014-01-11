if RUBY_VERSION =~ /^1\.9|^2\.0/
    Encoding.default_external = Encoding::UTF_8
    Encoding.default_internal = Encoding::UTF_8
end

source 'http://rubygems.org'

gem 'rails', '3.2.16'

# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   "~> 3.2.3"
  gem 'coffee-rails', "~> 3.2.1"
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails', '~> 2.1.4'
gem 'twitter-bootstrap-rails'

gem 'will_paginate'
gem 'devise', '2.2.3'
gem 'rails_autolink'
gem 'rake'

group :development, :test do
  gem 'sqlite3-ruby', :require => 'sqlite3'
  gem 'rspec'
  gem 'rspec-rails'
  gem 'guard'
  gem 'growl'
  gem 'factory_girl'
  gem 'factory_girl_rails'
#  gem 'rcov'
#  gem 'ci_reporter'
end

group :production do
  gem 'pg'
  gem 'execjs'
  gem 'therubyracer'
end

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

group :test do
  gem 'turn', :require => false
end
