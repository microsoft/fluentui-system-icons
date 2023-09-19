package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Info32: ImageVector
  get() {
    if (_info32 != null) {
      return _info32!!
    }
    _info32 = fluentIcon(name = "Filled.Info32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveTo(8.268F, 2.0F, 2.0F, 8.268F, 2.0F, 16.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          close()
          moveToRelative(0.0F, 11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-9.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.0F, -2.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveTo(15.172F, 8.0F, 16.0F, 8.0F)
          reflectiveCurveToRelative(1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(16.828F, 11.0F, 16.0F, 11.0F)
          close()        
      }
    }
    return _info32!!
  }

private var _info32: ImageVector? = null
