package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleLine20: ImageVector
  get() {
    if (_circleLine20 != null) {
      return _circleLine20!!
    }
    _circleLine20 = fluentIcon(name = "Filled.CircleLine20", 20f) {
      materialPath {
          moveTo(17.985F, 10.5F)
          horizontalLineTo(2.015F)
          curveTo(2.275F, 14.685F, 5.75F, 18.0F, 10.0F, 18.0F)
          reflectiveCurveToRelative(7.727F, -3.315F, 7.985F, -7.5F)
          close()
          moveToRelative(0.0F, -1.0F)
          horizontalLineTo(2.015F)
          curveTo(2.275F, 5.315F, 5.75F, 2.0F, 10.0F, 2.0F)
          reflectiveCurveToRelative(7.727F, 3.315F, 7.985F, 7.5F)
          close()        
      }
    }
    return _circleLine20!!
  }

private var _circleLine20: ImageVector? = null
