package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreVertical32: ImageVector
  get() {
    if (_moreVertical32 != null) {
      return _moreVertical32!!
    }
    _moreVertical32 = fluentIcon(name = "Regular.MoreVertical32", 32f) {
      materialPath {
          moveTo(16.0F, 9.5F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveToRelative(-1.12F, 2.5F, -2.5F, 2.5F)
          close()
          moveToRelative(0.0F, 9.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveToRelative(-1.12F, 2.5F, -2.5F, 2.5F)
          close()
          moveTo(13.5F, 25.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveToRelative(-1.12F, -2.5F, -2.5F, -2.5F)
          reflectiveCurveToRelative(-2.5F, 1.12F, -2.5F, 2.5F)
          close()        
      }
    }
    return _moreVertical32!!
  }

private var _moreVertical32: ImageVector? = null
