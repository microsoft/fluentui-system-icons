package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreVertical16: ImageVector
  get() {
    if (_moreVertical16 != null) {
      return _moreVertical16!!
    }
    _moreVertical16 = fluentIcon(name = "Regular.MoreVertical16", 16f) {
      materialPath {
          moveTo(8.0F, 5.0F)
          curveTo(7.448F, 5.0F, 7.0F, 4.552F, 7.0F, 4.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(7.448F, 9.0F, 7.0F, 8.552F, 7.0F, 8.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()
          moveToRelative(-1.0F, 3.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          close()        
      }
    }
    return _moreVertical16!!
  }

private var _moreVertical16: ImageVector? = null
