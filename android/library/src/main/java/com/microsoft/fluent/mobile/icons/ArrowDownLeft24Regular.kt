package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownLeft24: ImageVector
  get() {
    if (_arrowDownLeft24 != null) {
      return _arrowDownLeft24!!
    }
    _arrowDownLeft24 = fluentIcon(name = "Regular.ArrowDownLeft24", 24f) {
      materialPath {
          moveTo(13.246F, 21.005F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(5.577F)
          lineToRelative(15.2F, -15.2F)
          curveToRelative(0.298F, -0.298F, 0.298F, -0.782F, 0.0F, -1.081F)
          curveToRelative(-0.299F, -0.299F, -0.783F, -0.299F, -1.082F, 0.0F)
          lineToRelative(-15.199F, 15.2F)
          verticalLineToRelative(-7.67F)
          curveToRelative(0.0F, -0.413F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.337F, -0.75F, 0.75F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(9.5F)
          close()        
      }
    }
    return _arrowDownLeft24!!
  }

private var _arrowDownLeft24: ImageVector? = null
