package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Payment32: ImageVector
  get() {
    if (_payment32 != null) {
      return _payment32!!
    }
    _payment32 = fluentIcon(name = "Regular.Payment32", 32f) {
      materialPath {
          moveTo(2.0F, 9.5F)
          curveTo(2.0F, 7.015F, 4.015F, 5.0F, 6.5F, 5.0F)
          horizontalLineToRelative(19.0F)
          curveTo(27.985F, 5.0F, 30.0F, 7.015F, 30.0F, 9.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-19.0F)
          curveTo(4.015F, 27.0F, 2.0F, 24.985F, 2.0F, 22.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(6.5F, 7.0F)
          curveTo(5.12F, 7.0F, 4.0F, 8.12F, 4.0F, 9.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(24.0F)
          verticalLineTo(9.5F)
          curveTo(28.0F, 8.12F, 26.88F, 7.0F, 25.5F, 7.0F)
          horizontalLineToRelative(-19.0F)
          close()
          moveTo(4.0F, 22.5F)
          curveTo(4.0F, 23.88F, 5.12F, 25.0F, 6.5F, 25.0F)
          horizontalLineToRelative(19.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(13.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(9.5F)
          close()
          moveTo(21.0F, 19.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _payment32!!
  }

private var _payment32: ImageVector? = null
