package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Image16: ImageVector
  get() {
    if (_image16 != null) {
      return _image16!!
    }
    _image16 = fluentIcon(name = "Regular.Image16", 16f) {
      materialPath {
          moveTo(11.5F, 5.502F)
          curveToRelative(0.0F, 0.554F, -0.449F, 1.002F, -1.002F, 1.002F)
          curveToRelative(-0.553F, 0.0F, -1.002F, -0.448F, -1.002F, -1.002F)
          curveToRelative(0.0F, -0.553F, 0.448F, -1.002F, 1.002F, -1.002F)
          curveToRelative(0.553F, 0.0F, 1.002F, 0.449F, 1.002F, 1.002F)
          close()
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(4.5F, 3.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.232F, 0.053F, 0.45F, 0.146F, 0.647F)
          lineToRelative(3.652F, -3.652F)
          curveToRelative(0.664F, -0.664F, 1.74F, -0.664F, 2.404F, 0.0F)
          lineToRelative(3.652F, 3.652F)
          curveTo(12.948F, 11.95F, 13.0F, 11.732F, 13.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(7.647F, 9.854F)
          lineTo(8.495F, 9.202F)
          curveToRelative(-0.273F, -0.273F, -0.717F, -0.273F, -0.99F, 0.0F)
          lineToRelative(-3.652F, 3.652F)
          curveTo(4.05F, 12.948F, 4.268F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.232F, 0.0F, 0.45F, -0.053F, 0.647F, -0.146F)
          close()        
      }
    }
    return _image16!!
  }

private var _image16: ImageVector? = null
