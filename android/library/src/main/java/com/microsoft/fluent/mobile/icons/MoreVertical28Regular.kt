package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreVertical28: ImageVector
  get() {
    if (_moreVertical28 != null) {
      return _moreVertical28!!
    }
    _moreVertical28 = fluentIcon(name = "Regular.MoreVertical28", 28f) {
      materialPath {
          moveTo(14.0F, 8.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          reflectiveCurveTo(12.757F, 3.75F, 14.0F, 3.75F)
          reflectiveCurveTo(16.25F, 4.757F, 16.25F, 6.0F)
          reflectiveCurveTo(15.243F, 8.25F, 14.0F, 8.25F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          reflectiveCurveToRelative(1.007F, -2.25F, 2.25F, -2.25F)
          reflectiveCurveToRelative(2.25F, 1.007F, 2.25F, 2.25F)
          reflectiveCurveToRelative(-1.007F, 2.25F, -2.25F, 2.25F)
          close()
          moveTo(11.75F, 22.0F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          reflectiveCurveToRelative(2.25F, -1.007F, 2.25F, -2.25F)
          reflectiveCurveToRelative(-1.007F, -2.25F, -2.25F, -2.25F)
          reflectiveCurveToRelative(-2.25F, 1.007F, -2.25F, 2.25F)
          close()        
      }
    }
    return _moreVertical28!!
  }

private var _moreVertical28: ImageVector? = null
