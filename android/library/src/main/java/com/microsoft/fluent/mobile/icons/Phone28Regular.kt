package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Phone28: ImageVector
  get() {
    if (_phone28 != null) {
      return _phone28!!
    }
    _phone28 = fluentIcon(name = "Regular.Phone28", 28f) {
      materialPath {
          moveTo(9.75F, 2.0F)
          curveTo(8.231F, 2.0F, 7.0F, 3.231F, 7.0F, 4.75F)
          verticalLineToRelative(18.5F)
          curveTo(7.0F, 24.768F, 8.231F, 26.0F, 9.75F, 26.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.232F, 2.75F, -2.75F)
          verticalLineTo(4.75F)
          curveTo(21.0F, 3.231F, 19.769F, 2.0F, 18.25F, 2.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveTo(8.5F, 4.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-8.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
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
