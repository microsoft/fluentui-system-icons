package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Info28: ImageVector
  get() {
    if (_info28 != null) {
      return _info28!!
    }
    _info28 = fluentIcon(name = "Filled.Info28", 28f) {
      materialPath {
          moveTo(2.0F, 14.0F)
          curveToRelative(0.0F, 6.627F, 5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          close()
          moveToRelative(13.25F, -6.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(12.75F, 8.69F, 12.75F, 8.0F)
          reflectiveCurveTo(13.31F, 6.75F, 14.0F, 6.75F)
          reflectiveCurveTo(15.25F, 7.31F, 15.25F, 8.0F)
          close()
          moveTo(14.0F, 11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _info28!!
  }

private var _info28: ImageVector? = null
