package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Storage24: ImageVector
  get() {
    if (_storage24 != null) {
      return _storage24!!
    }
    _storage24 = fluentIcon(name = "Filled.Storage24", 24f) {
      materialPath {
          moveTo(5.0F, 7.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.598F, 0.0F, 2.904F, 1.249F, 2.995F, 2.824F)
          lineTo(22.0F, 10.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.598F, -1.249F, 2.904F, -2.824F, 2.995F)
          lineTo(19.0F, 17.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.598F, 0.0F, -2.904F, -1.249F, -2.995F, -2.824F)
          lineTo(2.0F, 14.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -1.598F, 1.249F, -2.904F, 2.824F, -2.995F)
          lineTo(5.0F, 7.0F)
          horizontalLineToRelative(14.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(13.0F, 3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-4.0F, 0.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _storage24!!
  }

private var _storage24: ImageVector? = null
