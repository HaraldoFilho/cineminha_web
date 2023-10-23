var films = [
  ['Nightmare Alley, 2021', 'https://letterboxd.com/hpfilho/film/nightmare-alley-2021/', 'https://a.ltrbxd.com/resized/film-poster/5/2/4/5/9/2/524592-nightmare-alley-0-600-0-900-crop.jpg', '★★★'],
  ['The Night House, 2020', 'https://letterboxd.com/hpfilho/film/the-night-house/', 'https://a.ltrbxd.com/resized/film-poster/4/7/6/4/9/0/476490-the-night-house-0-600-0-900-crop.jpg', '★★★★'],
  ['Old, 2021', 'https://letterboxd.com/hpfilho/film/old-2021/', 'https://a.ltrbxd.com/resized/film-poster/5/5/8/0/5/4/558054-old-0-600-0-900-crop.jpg', '★★½'],
  ['Ready or Not, 2019', 'https://letterboxd.com/hpfilho/film/ready-or-not-2019/', 'https://a.ltrbxd.com/resized/film-poster/4/9/5/9/6/9/495969-ready-or-not-0-600-0-900-crop.jpg', '★★★½'],
  ['Encanto, 2021', 'https://letterboxd.com/hpfilho/film/encanto/', 'https://a.ltrbxd.com/resized/film-poster/4/9/6/5/9/2/496592-encanto-0-600-0-900-crop.jpg', '★★★½'],
  ['Underwater, 2020', 'https://letterboxd.com/hpfilho/film/underwater-2020/', 'https://a.ltrbxd.com/resized/sm/upload/ns/i3/5q/m6/C67E536B-E8A3-4AD1-A9B8-4443EA9695D9-0-600-0-900-crop.jpg', '★★½'],
  ['Don\'t Look Now, 1973', 'https://letterboxd.com/hpfilho/film/dont-look-now/', 'https://a.ltrbxd.com/resized/sm/upload/b1/xg/44/w1/mK1SxllUiyAjtugZg3M64e2CTu3-0-600-0-900-crop.jpg', '★★★'],
  ['No Hard Feelings, 2023', 'https://letterboxd.com/hpfilho/film/no-hard-feelings-2023/', 'https://a.ltrbxd.com/resized/film-poster/7/9/5/8/9/7/795897-no-hard-feelings-0-600-0-900-crop.jpg', '★★★'],
  ['No One Will Save You, 2023', 'https://letterboxd.com/hpfilho/film/no-one-will-save-you/', 'https://a.ltrbxd.com/resized/film-poster/7/3/6/8/2/1/736821-no-one-will-save-you-0-600-0-900-crop.jpg', '★'],
  ['John Wick: Chapter 3 – Parabellum, 2019', 'https://letterboxd.com/hpfilho/film/john-wick-chapter-3-parabellum/', 'https://a.ltrbxd.com/resized/film-poster/3/9/0/0/3/9/390039-john-wick-chapter-3-parabellum-0-600-0-900-crop.jpg', '★★★★'],
  ['Fall, 2022', 'https://letterboxd.com/hpfilho/film/fall-2022/', 'https://a.ltrbxd.com/resized/film-poster/8/8/7/6/2/1/887621-fall-0-600-0-900-crop.jpg', '★★½'],
  ['The Descent, 2005', 'https://letterboxd.com/hpfilho/film/the-descent/', 'https://a.ltrbxd.com/resized/film-poster/4/7/2/0/4/47204-the-descent-0-600-0-900-crop.jpg', '★★★★'],
  ['Holy Spider, 2022', 'https://letterboxd.com/hpfilho/film/holy-spider/', 'https://a.ltrbxd.com/resized/film-poster/8/0/0/8/4/8/800848-holy-spider-0-600-0-900-crop.jpg', '★★★½'],
  ['EO, 2022', 'https://letterboxd.com/hpfilho/film/eo/', 'https://a.ltrbxd.com/resized/film-poster/7/0/3/9/4/3/703943-eo-0-600-0-900-crop.jpg', '★★★½'],
  ['Barbarian, 2022', 'https://letterboxd.com/hpfilho/film/barbarian-2022/', 'https://a.ltrbxd.com/resized/film-poster/8/1/9/6/4/8/819648-barbarian-0-600-0-900-crop.jpg', '★★★½'],
  ['Victoria, 2015', 'https://letterboxd.com/hpfilho/film/victoria-2015/', 'https://a.ltrbxd.com/resized/sm/upload/p7/5b/rd/8f/t66eAg7xBLGoSSoA8JtJtX3NKs1-0-600-0-900-crop.jpg', '★★★★'],
  ['Nobody, 2021', 'https://letterboxd.com/hpfilho/film/nobody-2021/', 'https://a.ltrbxd.com/resized/film-poster/5/4/2/5/5/5/542555-nobody-0-600-0-900-crop.jpg', '★★★½'],
  ['They Cloned Tyrone, 2023', 'https://letterboxd.com/hpfilho/film/they-cloned-tyrone/', 'https://a.ltrbxd.com/resized/film-poster/6/5/8/9/0/6/658906-they-cloned-tyrone-0-600-0-900-crop.jpg', '★★★½'],
  ['Paradise, 2023', 'https://letterboxd.com/hpfilho/film/paradise-2023-1/', 'https://a.ltrbxd.com/resized/film-poster/1/0/2/7/5/7/8/1027578-paradise-0-600-0-900-crop.jpg', '★★★'],
  ['The Nice Guys, 2016', 'https://letterboxd.com/hpfilho/film/the-nice-guys/', 'https://a.ltrbxd.com/resized/film-poster/2/1/6/3/0/1/216301-the-nice-guys-0-600-0-900-crop.jpg', '★★★★'],
  ['Reset, 2017', 'https://letterboxd.com/hpfilho/film/reset-2017/', 'https://a.ltrbxd.com/resized/film-poster/3/8/9/7/5/1/389751-reset-0-600-0-900-crop.jpg', '★★★'],
  ['I, Tonya, 2017', 'https://letterboxd.com/hpfilho/film/i-tonya/', 'https://a.ltrbxd.com/resized/sm/upload/hv/nn/05/ss/d20vOJpywFDoz7Dd4ChomGdP0fr-0-600-0-900-crop.jpg', '★★★★'],
  ['The Suicide Squad, 2021', 'https://letterboxd.com/hpfilho/film/the-suicide-squad/', 'https://a.ltrbxd.com/resized/film-poster/3/6/9/8/3/5/369835-the-suicide-squad-0-600-0-900-crop.jpg', '★★★★'],
  ['Beyond the Infinite Two Minutes, 2020', 'https://letterboxd.com/hpfilho/film/beyond-the-infinite-two-minutes/', 'https://a.ltrbxd.com/resized/film-poster/7/2/2/6/4/3/722643-beyond-the-infinite-two-minutes-0-600-0-900-crop.jpg', '★★★★'],
  ['Mission: Impossible – Fallout, 2018', 'https://letterboxd.com/hpfilho/film/mission-impossible-fallout/', 'https://a.ltrbxd.com/resized/film-poster/2/8/3/2/7/3/283273-mission-impossible-fallout-0-600-0-900-crop.jpg', '★★★★'],
]
