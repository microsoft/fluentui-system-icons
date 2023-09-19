package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleLine24: ImageVector
  get() {
    if (_circleLine24 != null) {
      return _circleLine24!!
    }
    _circleLine24 = fluentIcon(name = "Regular.CircleLine24", 24f) {
      materialPath {
          moveTo(3.533F, 11.25F)
          horizontalLineToRelative(16.934F)
          curveTo(20.087F, 6.907F, 16.442F, 3.5F, 12.0F, 3.5F)
          reflectiveCurveToRelative(-8.088F, 3.407F, -8.467F, 7.75F)
          close()
          moveToRelative(16.934F, 1.5F)
          horizontalLineTo(3.533F)
          curveTo(3.913F, 17.093F, 7.558F, 20.5F, 12.0F, 20.5F)
          reflectiveCurveToRelative(8.088F, -3.407F, 8.467F, -7.75F)
          close()
          moveTo(2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          close()        
      }
    }
    return _circleLine24!!
  }

private var _circleLine24: ImageVector? = null
