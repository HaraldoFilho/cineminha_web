#!/bin/bash

cd /home/pi/github/tinyhomecinema.github.io/

git pull origin main

cd /home/pi/github/tinyhomecinema.github.io/scripts/html

wget 'https://letterboxd.com/tinyhomecinema/list/physical-media-shelf/'
mv index.html shelf.html

wget 'https://tinyhomecinema.page/music/'
mv index.html music.html

wget 'https://www.themoviedb.org/list/8283859-tv-shows-shelf'
mv 8283859-tv-shows-shelf tv_shows.html

wget 'https://www.librarything.com/catalog_bottom.php?view=hpfilho&collection=794026'
mv catalog_bottom.php?view\=hpfilho\&collection\=794026 books.html

wget 'https://letterboxd.com/tinyhomecinema/list/film-collection/'
mv index.html films.html

wget 'https://letterboxd.com/tinyhomecinema/list/short-films/'
mv index.html shorts.html

wget 'https://letterboxd.com/tinyhomecinema/list/special-feature-documentaries/'
mv index.html documentaries.html

wget 'https://letterboxd.com/tinyhomecinema/list/miniseries/'
mv index.html miniseries.html

wget 'https://letterboxd.com/tinyhomecinema/list/blu-ray/'
mv index.html blu-ray.html

wget 'https://letterboxd.com/tinyhomecinema/list/dvd/'
mv index.html dvd.html

wget 'https://letterboxd.com/tinyhomecinema/list/blu-ray-dvd/'
mv index.html bd+dvd.html

wget 'https://letterboxd.com/tinyhomecinema/list/dolby-atmos/'
mv index.html atmos.html

wget 'https://letterboxd.com/tinyhomecinema/list/dts-x/'
mv index.html dtsx.html

wget 'https://letterboxd.com/tinyhomecinema/rss/'
mv index.html rss.html

wget 'https://letterboxd.com/tinyhomecinema/tag/first-showing/diary/'
mv index.html diary.html

cd /home/pi/github/tinyhomecinema.github.io/scripts

./generate-data.pl

git add ../data/media.js
git add ../data/films.js
git commit -m "[auto] Updated data"
git push origin main

cd /home/pi/github/haraldofilho.github.io/pages/tinyhomecinema

cp -r /home/pi/github/tinyhomecinema.github.io/* .

git pull origin master
git add *
git commit -m "[auto] Updated tinyhomecinema page"
git push origin master
