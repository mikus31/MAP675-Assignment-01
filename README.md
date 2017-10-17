# MAP675 Assignment 01
### Team: Derek Waggenspack & Michael McNeil

#### Processes
* Derek and I are using Slack direct messaging to communicate for this assignment. -- mm
* Michael working off the master, Derek creating branches in the repository. -- mm
* Division of labor: Michael built/maintained README.md. Derek built index.html. -- mm
* Used terminal commands (see below) to convert from shapefiles to GeoJSONs. -- mm
* Filtered the larger shapefiles to reduce file size. -- mm

#### Data & Data Source(s)
* Basemap Used Cartodb's "Dark Matter" (https://carto.com/) with OpenStreetMap's label attribution (www.openstreetmap.org) --dw
  * We both really like this basemap
* Austin Parks from [Austin's Open Data Portal](https://data.austintexas.gov/) -- mm
* Urban Trails from [Austin's Open Data Portal](https://data.austintexas.gov/) -- mm
* Off-Leash Areas from [Austin's Open Data Portal](https://data.austintexas.gov/) -- mm
* City of Austin Jurisdictional Boundaries from [Austin's Open Data Portal](https://data.austintexas.gov/) -- dw
  * Modified in ArcMap into AustinCityOutline.

#### Terminal Commands
* ogrinfo -so "file-name.shp" "layer-name" (used to determine projection of shapefile) -- mm
* git status (used to check status of commits) -- mm
* git push origin master (used to sync changes to master) -- mm
* ogr2ogr -f "GeoJSON" ../data/urban-trails.json urban-trails.shp (example, used to convert shapefile to geojson and move the newly created json to the data directory for map use) -- mm
* git add . (identify files to commit) -- mm
* git commit -m "commit summary" (commits added files to master) -- mm
* ogr2ogr -f "GeoJSON" -lco COORDINATE_PRECISION=5 -sql "select park_name from AustinParks" austin-parks-filtered.json AustinParks.shp (used to reduce file size by shrinking the coordinate precision and retaining only the park name attribute for all features) -- mm

#### 2017-10-17
* We have decided to explore Austin, Texas. -- mm
* Downloaded three shapefiles from Austin's Open Data Portal and all appear to be projected in WGS84. -- mm
* Set up initial folder structure and set up default html template. --dw

#### 2017-10-18
* Created branch data-exploration. --dw
* Created new folder "stagedata" for data exploration and manipulation. -- dw
* Moved shapefiles from local temp directory to stagedata folder. -- mm
* Downloaded and modified the jurisdictional boundary for use as a city outline. --dw
* Worked on index.html to add title/heading, layers and basic layout for how we want features to sit. --dw