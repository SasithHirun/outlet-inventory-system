Add-Type -AssemblyName PresentationCore, PresentationFramework, WindowsBase, System.Drawing

function Create-StorybookPage {
    param(
        [string]$ImagePath,
        [string]$SinhalaText,
        [string]$OutputPath
    )

    $width = 896
    $height = 1200

    $target = New-Object System.Windows.Media.Imaging.RenderTargetBitmap($width, $height, 96, 96, [System.Windows.Media.PixelFormats]::Pbgra32)
    $visual = New-Object System.Windows.Media.DrawingVisual
    $dc = $visual.RenderOpen()

    # 1. Background (warm paper cream #FAF7F0)
    $bgColor = [System.Windows.Media.ColorConverter]::ConvertFromString("#FAF7F0")
    $bgBrush = New-Object System.Windows.Media.SolidColorBrush($bgColor)
    $dc.DrawRectangle($bgBrush, $null, (New-Object System.Windows.Rect(0, 0, $width, $height)))

    # 2. Main Illustration (fitted in top area: 896 x 740)
    $imgUri = New-Object System.Uri($ImagePath, [System.UriKind]::Absolute)
    $bmp = New-Object System.Windows.Media.Imaging.BitmapImage
    $bmp.BeginInit()
    $bmp.UriSource = $imgUri
    $bmp.CacheOption = [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad
    $bmp.EndInit()

    $imgRect = New-Object System.Windows.Rect(0, 0, $width, 740)
    $dc.DrawImage($bmp, $imgRect)

    # 3. Parchment Card Background at the bottom
    $cardRect = New-Object System.Windows.Rect(48, 770, 800, 380)
    $cardBgColor = [System.Windows.Media.ColorConverter]::ConvertFromString("#FFFDF6")
    $cardBrush = New-Object System.Windows.Media.SolidColorBrush($cardBgColor)
    $cardPen = New-Object System.Windows.Media.Pen(
        (New-Object System.Windows.Media.SolidColorBrush([System.Windows.Media.ColorConverter]::ConvertFromString("#C49A6C"))),
        3
    )

    # Draw shadow
    $shadowBrush = New-Object System.Windows.Media.SolidColorBrush([System.Windows.Media.Color]::FromArgb(35, 80, 50, 20))
    $dc.DrawRoundedRectangle($shadowBrush, $null, (New-Object System.Windows.Rect(52, 774, 800, 380)), 24, 24)
    # Draw parchment rounded rectangle
    $dc.DrawRoundedRectangle($cardBrush, $cardPen, $cardRect, 20, 20)

    # Inner decorative border
    $innerPen = New-Object System.Windows.Media.Pen(
        (New-Object System.Windows.Media.SolidColorBrush([System.Windows.Media.ColorConverter]::ConvertFromString("#E2CDB2"))),
        1.5
    )
    $dc.DrawRoundedRectangle($null, $innerPen, (New-Object System.Windows.Rect(60, 782, 776, 356)), 16, 16)

    # 4. Sinhala Story Text using DirectWrite FormattedText
    $typeface = New-Object System.Windows.Media.Typeface(
        (New-Object System.Windows.Media.FontFamily("Nirmala UI")),
        [System.Windows.FontStyles]::Normal,
        [System.Windows.FontWeights]::SemiBold,
        [System.Windows.FontStretches]::Normal
    )

    $textBrush = New-Object System.Windows.Media.SolidColorBrush([System.Windows.Media.ColorConverter]::ConvertFromString("#2C1D11"))
    $culture = [System.Globalization.CultureInfo]::GetCultureInfo("si-LK")
    
    $formattedText = New-Object System.Windows.Media.FormattedText(
        $SinhalaText,
        $culture,
        [System.Windows.FlowDirection]::LeftToRight,
        $typeface,
        28.0,
        $textBrush,
        1.25
    )

    $formattedText.MaxTextWidth = 720
    $formattedText.TextAlignment = [System.Windows.TextAlignment]::Center
    $formattedText.LineHeight = 44.0

    $textY = 770 + (380 - $formattedText.Height) / 2
    if ($textY -lt 795) { $textY = 795 }
    $textOrigin = New-Object System.Windows.Point(88, $textY)

    $dc.DrawText($formattedText, $textOrigin)

    $dc.Close()
    $target.Render($visual)

    $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
    $encoder.QualityLevel = 95
    $encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($target))

    $fs = New-Object System.IO.FileStream($OutputPath, [System.IO.FileMode]::Create)
    $encoder.Save($fs)
    $fs.Close()

    Write-Output "Successfully generated: $OutputPath"
}

$jsonPath = Join-Path $PSScriptRoot "pages_text.json"
$texts = Get-Content -Path $jsonPath -Encoding UTF8 | ConvertFrom-Json

# Page 5
$p5Image = "C:\Users\HP\.gemini\antigravity\brain\a4cf0b4f-feb4-4f2a-a198-74b4218846fb\chuti_family_page_5_1792250678567.jpg"
$p5Output = "C:\Users\HP\.gemini\antigravity\brain\a4cf0b4f-feb4-4f2a-a198-74b4218846fb\chutis_family_page_5_storybook_1792251500000.jpg"
Create-StorybookPage -ImagePath $p5Image -SinhalaText $texts.page5 -OutputPath $p5Output

# Page 6
$p6Image = "C:\Users\HP\.gemini\antigravity\brain\a4cf0b4f-feb4-4f2a-a198-74b4218846fb\chuti_family_page_6_1792250747571.jpg"
$p6Output = "C:\Users\HP\.gemini\antigravity\brain\a4cf0b4f-feb4-4f2a-a198-74b4218846fb\chutis_family_page_6_storybook_1792251500000.jpg"
Create-StorybookPage -ImagePath $p6Image -SinhalaText $texts.page6 -OutputPath $p6Output
