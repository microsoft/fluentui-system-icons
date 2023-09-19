package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreHorizontal28: ImageVector
  get() {
    if (_moreHorizontal28 != null) {
      return _moreHorizontal28!!
    }
    _moreHorizontal28 = fluentIcon(name = "Regular.MoreHorizontal28", 28f) {
      materialPath {
          moveTo(8.25F, 14.0F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          reflectiveCurveTo(3.75F, 15.243F, 3.75F, 14.0F)
          reflectiveCurveTo(4.757F, 11.75F, 6.0F, 11.75F)
          reflectiveCurveTo(8.25F, 12.757F, 8.25F, 14.0F)
          close()
          moveToRelative(8.0F, 0.0F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          reflectiveCurveToRelative(-2.25F, -1.007F, -2.25F, -2.25F)
          reflectiveCurveToRelative(1.007F, -2.25F, 2.25F, -2.25F)
          reflectiveCurveToRelative(2.25F, 1.007F, 2.25F, 2.25F)
          close()
          moveTo(22.0F, 16.25F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          reflectiveCurveToRelative(-1.007F, -2.25F, -2.25F, -2.25F)
          reflectiveCurveToRelative(-2.25F, 1.007F, -2.25F, 2.25F)
          reflectiveCurveToRelative(1.007F, 2.25F, 2.25F, 2.25F)
          close()        
      }
    }
    return _moreHorizontal28!!
  }

private var _moreHorizontal28: ImageVector? = null
