package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RecordStop48: ImageVector
  get() {
    if (_recordStop48 != null) {
      return _recordStop48!!
    }
    _recordStop48 = fluentIcon(name = "Regular.RecordStop48", 48f) {
      materialPath {
          moveTo(17.0F, 15.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(17.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(17.0F)
          close()
          moveToRelative(27.0F, 9.0F)
          curveToRelative(0.0F, 11.046F, -8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          close()
          moveToRelative(-2.5F, 0.0F)
          curveToRelative(0.0F, -9.665F, -7.835F, -17.5F, -17.5F, -17.5F)
          reflectiveCurveTo(6.5F, 14.335F, 6.5F, 24.0F)
          reflectiveCurveTo(14.335F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveTo(41.5F, 33.665F, 41.5F, 24.0F)
          close()        
      }
    }
    return _recordStop48!!
  }

private var _recordStop48: ImageVector? = null
