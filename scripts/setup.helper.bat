

@REM Extend Minima Theme css File
mkdir assets

echo --- >>main.scss
echo # Only the main Sass file needs front matter (the dashes are enough)>main.scss
echo --->main.scss
echo @import "{{ site.theme }}";  >main.scss
echo .post-content p{ text-align: justify; line-height: 1.8; }  >main.scss


@REM Create a New Post
set post_file= _posts\2020-11-19-creational-patterns.markdown
echo --- >>%post_file%
echo layout: post >%post_file%
echo title:  "Gentle Introduction to Creational Design Patterns" >%post_file%
echo date:   2020-11-19 07:52:55 +0200 >%post_file%
echo categories: jekyll update >%post_file%
echo author: Stephane Kibonge >%post_file%
echo --- >%post_file%

@REM Push to Master
git push origin gh-pages:master --force


@REM Start Local Server
bundle exec jekyll serve -l -o

@REM Other interesting commands
@REM git checkout --orphan gh-pages
@REM bundle exec jekyll new .
@REM bundle install
@REM 
@REM bundle update jekyll
@REM gem uninstall eventmachine
@REM gem install eventmachine --platform ruby
@REM 
@REM bundle update github-pages
@REM git remote add origin https://github.com/KMurphs/kmurphs.github.io.git
@REM git add *
@REM git commit -m "Initial Commit using jekyll"
@REM git push --set-upstream origin gh-pages


@REM References 
@REM 
@REM https://github.com/jekyll/minima/blob/v2.5.1/README.md
@REM https://github.com/jekyll/minima
@REM https://github.com/pages-themes/minimal
@REM https://help.github.jp/enterprise/2.11/user/articles/customizing-css-and-html-in-your-jekyll-theme/
@REM 
@REM https://dotcms.com/docs/latest/markdown-syntax#:~:text=To%20add%20a%20single%20extra,replacing%20the%20periods%20with%20spaces).
@REM https://www.markdownguide.org/basic-syntax/#line-break-best-practices
@REM 
@REM https://stackoverflow.com/a/49762260/9034699
@REM 
@REM https://pages.github.com/
@REM https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll
@REM https://pages.github.com/versions/
@REM https://jekyllrb.com/docs/
@REM 
@REM https://github.com/KMurphs/kmurphs.github.io/settings
@REM https://kmurphs.github.io/