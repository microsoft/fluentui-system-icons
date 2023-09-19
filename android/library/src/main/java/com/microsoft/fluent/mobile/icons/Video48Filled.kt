package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Video48: ImageVector
  get() {
    if (_video48 != null) {
      return _video48!!
    }
    _video48 = fluentIcon(name = "Filled.Video48", 48f) {
      materialPath {
          moveTo(31.0F, 15.25F)
          curveTo(31.0F, 11.798F, 28.202F, 9.0F, 24.75F, 9.0F)
          horizontalLineToRelative(-14.5F)
          curveTo(6.798F, 9.0F, 4.0F, 11.798F, 4.0F, 15.25F)
          verticalLineToRelative(17.5F)
          curveTo(4.0F, 36.202F, 6.798F, 39.0F, 10.25F, 39.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineToRelative(-17.5F)
          close()
          moveToRelative(2.0F, 14.282F)
          lineToRelative(6.961F, 5.436F)
          curveTo(41.603F, 36.25F, 44.0F, 35.08F, 44.0F, 32.998F)
          verticalLineTo(15.003F)
          curveToRelative(0.0F, -2.083F, -2.397F, -3.252F, -4.039F, -1.97F)
          lineTo(33.0F, 18.468F)
          verticalLineToRelative(11.063F)
          close()        
      }
    }
    return _video48!!
  }

private var _video48: ImageVector? = null
