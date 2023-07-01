package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Games16: ImageVector
  get() {
    if (_games16 != null) {
      return _games16!!
    }
    _games16 = fluentIcon(name = "Filled.Games16", 16f) {
      materialPath {
          moveTo(5.502F, 3.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, 2.015F, -4.5F, 4.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineToRelative(5.008F)
          curveToRelative(2.486F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(12.996F, 3.0F, 10.51F, 3.0F)
          horizontalLineTo(5.502F)
          close()
          moveTo(3.504F, 7.5F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(7.28F, 8.0F, 7.004F, 8.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()
          moveTo(11.0F, 9.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveTo(9.0F, 9.552F, 9.0F, 9.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(0.0F, -2.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()        
      }
    }
    return _games16!!
  }

private var _games16: ImageVector? = null
