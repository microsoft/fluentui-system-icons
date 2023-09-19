package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Phone28: ImageVector
  get() {
    if (_phone28 != null) {
      return _phone28!!
    }
    _phone28 = fluentIcon(name = "Filled.Phone28", 28f) {
      materialPath {
          moveTo(7.0F, 4.75F)
          curveTo(7.0F, 3.231F, 8.231F, 2.0F, 9.75F, 2.0F)
          horizontalLineToRelative(8.5F)
          curveTo(19.769F, 2.0F, 21.0F, 3.231F, 21.0F, 4.75F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 1.518F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(8.231F, 26.0F, 7.0F, 24.768F, 7.0F, 23.25F)
          verticalLineTo(4.75F)
          close()
          moveTo(12.25F, 21.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.164F, 21.0F, 15.75F, 21.0F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _phone28!!
  }

private var _phone28: ImageVector? = null
