package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Search32: ImageVector
  get() {
    if (_search32 != null) {
      return _search32!!
    }
    _search32 = fluentIcon(name = "Filled.Search32", 32f) {
      materialPath {
          moveTo(13.5F, 3.0F)
          curveTo(7.701F, 3.0F, 3.0F, 7.701F, 3.0F, 13.5F)
          reflectiveCurveTo(7.701F, 24.0F, 13.5F, 24.0F)
          curveToRelative(2.45F, 0.0F, 4.703F, -0.839F, 6.489F, -2.244F)
          lineToRelative(6.878F, 6.878F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-6.879F, -6.878F)
          curveTo(23.162F, 18.202F, 24.0F, 15.948F, 24.0F, 13.5F)
          curveTo(24.0F, 7.701F, 19.299F, 3.0F, 13.5F, 3.0F)
          close()
          moveToRelative(-8.0F, 10.5F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()        
      }
    }
    return _search32!!
  }

private var _search32: ImageVector? = null
