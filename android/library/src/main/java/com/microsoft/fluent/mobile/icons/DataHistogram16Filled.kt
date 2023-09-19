package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataHistogram16: ImageVector
  get() {
    if (_dataHistogram16 != null) {
      return _dataHistogram16!!
    }
    _dataHistogram16 = fluentIcon(name = "Filled.DataHistogram16", 16f) {
      materialPath {
          moveTo(10.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveTo(6.0F, 2.895F, 6.0F, 4.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(4.0F)
          close()
          moveTo(5.0F, 7.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 7.0F, 2.0F, 7.895F, 2.0F, 9.0F)
          verticalLineToRelative(4.5F)
          curveTo(2.0F, 13.776F, 2.224F, 14.0F, 2.5F, 14.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(6.0F, 7.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(9.0F)
          close()        
      }
    }
    return _dataHistogram16!!
  }

private var _dataHistogram16: ImageVector? = null
