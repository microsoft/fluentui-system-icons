package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HardDrive16: ImageVector
  get() {
    if (_hardDrive16 != null) {
      return _hardDrive16!!
    }
    _hardDrive16 = fluentIcon(name = "Filled.HardDrive16", 16f) {
      materialPath {
          moveTo(12.5F, 8.0F)
          curveTo(13.328F, 8.0F, 14.0F, 8.672F, 14.0F, 9.5F)
          verticalLineToRelative(1.002F)
          curveToRelative(0.0F, 0.397F, -0.158F, 0.778F, -0.44F, 1.059F)
          curveTo(13.28F, 11.842F, 12.899F, 12.0F, 12.5F, 12.0F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.398F, 0.0F, -0.78F, -0.159F, -1.06F, -0.44F)
          curveTo(2.157F, 11.279F, 2.0F, 10.898F, 2.0F, 10.5F)
          verticalLineToRelative(-1.0F)
          curveTo(2.0F, 8.67F, 2.672F, 8.0F, 3.5F, 8.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(1.058F, -0.766F)
          lineToRelative(-1.673F, -3.507F)
          verticalLineTo(3.72F)
          curveToRelative(-0.1F, -0.217F, -0.26F, -0.4F, -0.46F, -0.528F)
          curveTo(11.222F, 3.064F, 10.987F, 2.997F, 10.75F, 3.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(5.012F, 2.998F, 4.778F, 3.064F, 4.576F, 3.192F)
          curveToRelative(-0.2F, 0.128F, -0.36F, 0.311F, -0.46F, 0.528F)
          verticalLineToRelative(0.007F)
          lineTo(2.442F, 7.234F)
          curveTo(2.763F, 7.084F, 3.122F, 7.0F, 3.5F, 7.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.378F, 0.0F, 0.737F, 0.084F, 1.058F, 0.234F)
          close()
          moveTo(12.0F, 10.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.276F, 9.5F, 12.0F, 9.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          close()        
      }
    }
    return _hardDrive16!!
  }

private var _hardDrive16: ImageVector? = null
