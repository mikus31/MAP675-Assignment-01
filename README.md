# MAP675 Assignment 01
### Team: Derek Waggenspack & Michael McNeil

#### Processes
* Derek and I are using Slack direct messaging to communicate for this assignment. -- mm
* Michael working off the master, Derek creating branches in the repository. -- mm
* Division of labor: Michael built/maintained README.md and contributed to the index.html. Derek built/maintained index.html and contributed to the README.md. -- mm
* Used terminal commands (see below) to convert from shapefiles to GeoJSONs. -- mm
* Filtered the larger shapefiles to reduce file size. -- mm
* Used geojson.io to validate spatial data. -- mm
* Used Google Fonts and MDN's color picker web app to update style on the map. -- mm
* Using code comments to pinpoint places in the code in need of review by collaborators. -- mm

#### Data & Data Source(s)
* Basemap: Used Cartodb's "Dark Matter" (https://carto.com/) with OpenStreetMap's label attribution (www.openstreetmap.org) -- dw
  * We both really like this basemap!
* Austin Parks from [Austin's Open Data Portal](https://data.austintexas.gov/) -- mm
* Urban Trails from [Austin's Open Data Portal](https://data.austintexas.gov/) -- mm
* Off-Leash Areas from [Austin's Open Data Portal](https://data.austintexas.gov/) -- mm
* City of Austin Jurisdictional Boundaries from [Austin's Open Data Portal](https://data.austintexas.gov/) -- dw
  * Modified in ArcMap into AustinCityOutline.

#### Terminal Commands
* ogrinfo -so "file-name.shp" "layer-name" (used to determine projection of shapefile) -- mm
* git status (used to check status of commits) -- mm
* git push origin master (used to sync changes to master) -- mm
* git pull origin master (used to pull down changes to master) -- mm
* ogr2ogr -f "GeoJSON" ../data/urban-trails.json urban-trails.shp (example, used to convert shapefile to geojson and move the newly created json to the data directory for map use) -- mm
* git add . (identify files to commit) -- mm
* git commit -m "commit summary" (commits added files to master) -- mm
* ogr2ogr -f "GeoJSON" -lco COORDINATE_PRECISION=5 -sql "select park_name from AustinParks" austin-parks-filtered.json AustinParks.shp (used to reduce file size by shrinking the coordinate precision and retaining only the park name attribute for all features) -- mm

#### Build Notes

##### 2017-10-16
* We have decided to explore Austin, Texas. -- mm
* Downloaded three shapefiles from Austin's Open Data Portal and all appear to be projected in WGS84. -- mm
* Set up initial folder structure and set up default html template. -- dw

##### 2017-10-17
* Created branch data-exploration. --dw
* Created new folder "stagedata" for data exploration and manipulation. -- dw
* Moved shapefiles from local temp directory to stagedata folder. -- mm
* Downloaded and modified the jurisdictional boundary for use as a city outline. -- dw
* Worked on index.html to add title/heading, layers and basic layout for how we want features to sit. -- dw
* Communicated via Slack to determine a scenario for the map, and decided to explore Austin's outdoor areas for people and pets. -- mm
* Made some styling changes to the map and commented the code. -- mm
* Changed styling and rendering of Off leash point areas from markers to circles.  Circles are styled to look like red rubber ball. -- dw 

##### 2017-10-18
* Attempt made to get popups to work for line layer, but have not had success.  -- dw

##### 2017-10-19
* Fixed popup problem for line layers. -- dw
* Set an autozoom to city boundary. -- dw
* Styled tooltip to better resonate with the map. -- dw
* Added weight to visual affordance of trails to make them stand out a little more. -- mm
* Running through the Assignment Requirements one more time to make sure we have all the bases covered, and then we can submit! -- mm
* One merge conflict near the end of the assignment in the README. I think we had good pull/push procedures overall, but it also helped immensely that Derek and I work in the same office and can holler at each other when necessary. We won't have that luxury going forward, so it's important to maintain good contact with future collaborators and good version maintenance through GitHub. -- mm
* Changed styling for features to add better visuals for hovered over features. -- dw
