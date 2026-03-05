Add-Type -AssemblyName System.Drawing
$src = "C:\Users\fveneziano\Personal projects\Sito ripetizioni\src\assets\images\ProfilePic.png"
$dest = "C:\Users\fveneziano\Personal projects\Sito ripetizioni\src\assets\images\ProfilePic_512.png"
$img = [System.Drawing.Image]::FromFile($src)
$width = $img.Width
$height = $img.Height
$ratio = $width / $height
if ($width -gt $height) {
    $newHeight = 512
    $newWidth = [math]::Floor([int](512 * $ratio))
} else {
    $newWidth = 512
    $newHeight = [math]::Floor([int](512 / $ratio))
}
$thumb = new-object System.Drawing.Bitmap [int]$newWidth, [int]$newHeight
$g = [System.Drawing.Graphics]::FromImage($thumb)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, [int]$newWidth, [int]$newHeight)
$thumb.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$thumb.Dispose()
$img.Dispose()
