package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Warning28: ImageVector
  get() {
    if (_warning28 != null) {
      return _warning28!!
    }
    _warning28 = fluentIcon(name = "Filled.Warning28", 28f) {
      materialPath {
          moveTo(16.408F, 4.172F)
          curveToRelative(-1.045F, -1.896F, -3.77F, -1.896F, -4.815F, 0.0F)
          lineTo(2.35F, 20.92F)
          curveToRelative(-1.011F, 1.833F, 0.314F, 4.078F, 2.408F, 4.078F)
          horizontalLineTo(23.24F)
          curveToRelative(2.093F, 0.0F, 3.42F, -2.245F, 2.408F, -4.078F)
          lineToRelative(-9.24F, -16.75F)
          close()
          moveTo(15.0F, 20.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(-1.75F, -3.25F)
          verticalLineToRelative(-6.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _warning28!!
  }

private var _warning28: ImageVector? = null
