package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.List28: ImageVector
  get() {
    if (_list28 != null) {
      return _list28!!
    }
    _list28 = fluentIcon(name = "Regular.List28", 28f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 6.336F, 3.336F, 6.0F, 3.75F, 6.0F)
          horizontalLineToRelative(18.5F)
          curveTo(22.664F, 6.0F, 23.0F, 6.336F, 23.0F, 6.75F)
          reflectiveCurveTo(22.664F, 7.5F, 22.25F, 7.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 7.5F, 3.0F, 7.164F, 3.0F, 6.75F)
          close()
          moveToRelative(0.0F, 14.0F)
          curveTo(3.0F, 20.336F, 3.336F, 20.0F, 3.75F, 20.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 21.5F, 3.0F, 21.164F, 3.0F, 20.75F)
          close()
          moveTo(3.75F, 13.0F)
          curveTo(3.336F, 13.0F, 3.0F, 13.336F, 3.0F, 13.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(20.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(24.664F, 13.0F, 24.25F, 13.0F)
          horizontalLineTo(3.75F)
          close()        
      }
    }
    return _list28!!
  }

private var _list28: ImageVector? = null
