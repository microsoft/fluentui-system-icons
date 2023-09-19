package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Video48: ImageVector
  get() {
    if (_video48 != null) {
      return _video48!!
    }
    _video48 = fluentIcon(name = "Regular.Video48", 48f) {
      materialPath {
          moveTo(10.25F, 9.0F)
          curveTo(6.798F, 9.0F, 4.0F, 11.798F, 4.0F, 15.25F)
          verticalLineToRelative(17.5F)
          curveTo(4.0F, 36.202F, 6.798F, 39.0F, 10.25F, 39.0F)
          horizontalLineToRelative(17.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineToRelative(-2.438F)
          lineToRelative(5.961F, 4.656F)
          curveTo(41.603F, 36.25F, 44.0F, 35.08F, 44.0F, 32.998F)
          verticalLineTo(15.002F)
          curveToRelative(0.0F, -2.082F, -2.397F, -3.252F, -4.039F, -1.97F)
          lineTo(34.0F, 17.688F)
          verticalLineTo(15.25F)
          curveTo(34.0F, 11.798F, 31.202F, 9.0F, 27.75F, 9.0F)
          horizontalLineToRelative(-17.5F)
          close()
          moveTo(34.0F, 20.86F)
          lineToRelative(7.5F, -5.858F)
          verticalLineToRelative(17.995F)
          lineTo(34.0F, 27.14F)
          verticalLineToRelative(-6.28F)
          close()
          moveToRelative(-2.5F, -5.61F)
          verticalLineToRelative(17.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-17.5F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineToRelative(-17.5F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(17.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          close()        
      }
    }
    return _video48!!
  }

private var _video48: ImageVector? = null
