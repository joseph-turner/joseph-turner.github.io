---
layout: post
title:  "How to setup a free blog on Github using Jekyll"
date:   2013-10-26 07:44:54
categories: github github-pages jekyll
---

I'm pretty noncommittal when it comes to blogging. So, as a front-end developer, with not much to say to the world, I decided to stop paying for the hosting of a site that wasn't getting any attention anyway.

So I found out a while back about Github Pages and Jekyll but didn't really have time/interest. Yesterday I spent some time doing a little homework and set the whole thing up and decided to christen this blog with a post about how I made it happen.

Now, this is completely unnecessary because [Github][gh-pages-help] and [Jekyll][jekyll-docs] both have pretty good documentation on how to get started, but, hey, I need something to blog about and I decided to combine some of their documentation into one place for convenience sake.

## What you'll need:

- `gem install jekyll`
- `gem install github-pages`
- `gem install bundler`

## Getting started

Once you have those installed you have to setup your Github repo. In order to setup a user/organization site (which uses your Github username as the subdomain for github.io) you need to create a Github this convention: username.github.io. Initialize it with the README file so you can clone into it.

Now clone the repo to wherever you want then

{% highlight bash %}
$ cd username.github.io
$ git rm -rf .
$ jekyll new .

{% endhighlight %}

After Jekyll does it's thing you'll need to add a Gemfile with:

{% highlight ruby %}
source "https://rubygems.org"

gem "jekyll"
gem "github-pages"

group :development do
    gem "guard"
    gem "guard-compass"
    gem "guard-livereload", require: false
end

{% endhighlight %}

Now this whole thing is pretty simple, so next run:

`$ bundle`

This will make sure you have all the gems you need to do all this. When it's done run:

`$ bundle exec guard init`

This will create a Guardfile so guard has some config settings. However, the default settings are not right for our Jekyll site. You should change it to look like this:

{% highlight ruby %}
guard :compass

guard 'livereload' do
  watch(%r{_site/.+})
end

{% endhighlight %}

Now you need to setup a compass config file (config.rb):

{% highlight ruby %}
sass_dir = "scss"
css_dir = "css"
images_dir = "images"
javascripts_dir = "js"

output_styles = :expanded

{% endhighlight %}

When you're done with that you'll be able to start guard using bundler:

`$ bundle exec guard`

This does some pretty cool stuff. Guard-livereload requires a [browser plugin][chrome-livereload] but it will automatically reload the page when you save it or its assets. Very handy not to have to refresh the page yourself to see changes, especially while styling.

So that's pretty much it. Now you just have to write some posts. You'll probably want to start by renaming the default post in _posts and making it yours. Then commit your changes to Github and you'll see you're free blog online immediately! Super cool.

[gh-pages-help]: https://help.github.com/categories/20/articles
[jekyll-docs]: http://jekyllrb.com/docs/home/
[chrome-livereload]: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
