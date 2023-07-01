package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MoreVertical28: ImageVector
  get() {
    if (_moreVertical28 != null) {
      return _moreVertical28!!
    }
    _moreVertical28 = fluentIcon(name = "Filled.MoreVertical28", 28f) {
      materialPath {
          moveTo(14.0F, 8.75F)
          curveToRelative(-1.519F, 0.0F, -2.75F, -1.231F, -2.75F, -2.75F)
          reflectiveCurveTo(12.481F, 3.25F, 14.0F, 3.25F)
          reflectiveCurveTo(16.75F, 4.481F, 16.75F, 6.0F)
          reflectiveCurveTo(15.519F, 8.75F, 14.0F, 8.75F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveToRelative(-1.519F, 0.0F, -2.75F, -1.231F, -2.75F, -2.75F)
          reflectiveCurveToRelative(1.231F, -2.75F, 2.75F, -2.75F)
          reflectiveCurveToRelative(2.75F, 1.231F, 2.75F, 2.75F)
          reflectiveCurveToRelative(-1.231F, 2.75F, -2.75F, 2.75F)
          close()
          moveTo(11.25F, 22.0F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          reflectiveCurveToRelative(2.75F, -1.231F, 2.75F, -2.75F)
          reflectiveCurveToRelative(-1.231F, -2.75F, -2.75F, -2.75F)
          reflectiveCurveToRelative(-2.75F, 1.231F, -2.75F, 2.75F)
          close()        
      }
    }
    return _moreVertical28!!
  }

private var _moreVertical28: ImageVector? = null
