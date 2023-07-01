package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreHorizontal28: ImageVector
  get() {
    if (_moreHorizontal28 != null) {
      return _moreHorizontal28!!
    }
    _moreHorizontal28 = fluentIcon(name = "Filled.MoreHorizontal28", 28f) {
      materialPath {
          moveTo(8.75F, 14.0F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          reflectiveCurveTo(3.25F, 15.519F, 3.25F, 14.0F)
          reflectiveCurveTo(4.481F, 11.25F, 6.0F, 11.25F)
          reflectiveCurveTo(8.75F, 12.481F, 8.75F, 14.0F)
          close()
          moveToRelative(8.0F, 0.0F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          reflectiveCurveToRelative(-2.75F, -1.231F, -2.75F, -2.75F)
          reflectiveCurveToRelative(1.231F, -2.75F, 2.75F, -2.75F)
          reflectiveCurveToRelative(2.75F, 1.231F, 2.75F, 2.75F)
          close()
          moveTo(22.0F, 16.75F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          reflectiveCurveToRelative(-1.231F, -2.75F, -2.75F, -2.75F)
          reflectiveCurveToRelative(-2.75F, 1.231F, -2.75F, 2.75F)
          reflectiveCurveToRelative(1.231F, 2.75F, 2.75F, 2.75F)
          close()        
      }
    }
    return _moreHorizontal28!!
  }

private var _moreHorizontal28: ImageVector? = null
