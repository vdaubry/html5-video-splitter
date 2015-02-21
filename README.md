# html5-video-splitter

html5-video-splitter is an utility to split videos in javascript.

## Supported formats

It supports all videos format available for the ``` <video> ``` tag : mp4, webm and ogg

For more informations see http://www.w3schools.com/html/html5_video.asp

## How tu use :

Start the node.js server :

``` node back/ffmpeg_runner.js ```

It opens a web page where you can select a video :

1. __Important : Put the videos you want to split in the ``` videos ``` folder__ (see notes)
2. Drag a video or choose a file (from the ``` videos ``` folder)
2. Select the range in second to split
3. Click on the split button
4. The split video can be found in the ``` videos ``` folder

## Notes :

For security reasons the browser don't allow to get the path to the videos you choose. We can only access the file name. That's why we assume the videos will be in the ``` videos ``` folder.

## Contributing :

* Fork it ( https://github.com/vdaubry/html5-video-splitter/fork )
* Create your feature branch (git checkout -b my-new-feature)
* Commit your changes (git commit -am 'Add some feature')
* Push to the branch (git push origin my-new-feature)
* Create a new Pull Request
