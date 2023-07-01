package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Payment32: ImageVector
  get() {
    if (_payment32 != null) {
      return _payment32!!
    }
    _payment32 = fluentIcon(name = "Filled.Payment32", 32f) {
      materialPath {
          moveTo(6.5F, 5.0F)
          curveTo(4.015F, 5.0F, 2.0F, 7.015F, 2.0F, 9.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(28.0F)
          verticalLineTo(9.5F)
          curveTo(30.0F, 7.015F, 27.985F, 5.0F, 25.5F, 5.0F)
          horizontalLineToRelative(-19.0F)
          close()
          moveTo(2.0F, 22.5F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(28.0F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-19.0F)
          curveTo(4.015F, 27.0F, 2.0F, 24.985F, 2.0F, 22.5F)
          close()
          moveTo(21.0F, 19.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _payment32!!
  }

private var _payment32: ImageVector? = null
