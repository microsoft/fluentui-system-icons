package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Timer28: ImageVector
  get() {
    if (_timer28 != null) {
      return _timer28!!
    }
    _timer28 = fluentIcon(name = "Filled.Timer28", 28f) {
      materialPath {
          moveTo(10.75F, 3.0F)
          curveTo(10.336F, 3.0F, 10.0F, 3.336F, 10.0F, 3.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(6.5F)
          curveTo(17.664F, 4.5F, 18.0F, 4.164F, 18.0F, 3.75F)
          reflectiveCurveTo(17.664F, 3.0F, 17.25F, 3.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(4.0F, 16.0F)
          curveTo(4.0F, 10.477F, 8.477F, 6.0F, 14.0F, 6.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(4.0F, 21.523F, 4.0F, 16.0F)
          close()
          moveToRelative(10.75F, -5.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-6.0F)
          close()
          moveToRelative(6.47F, -4.03F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _timer28!!
  }

private var _timer28: ImageVector? = null
