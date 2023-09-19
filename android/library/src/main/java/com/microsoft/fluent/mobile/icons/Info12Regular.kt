package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Info12: ImageVector
  get() {
    if (_info12 != null) {
      return _info12!!
    }
    _info12 = fluentIcon(name = "Regular.Info12", 12f) {
      materialPath {
          moveTo(5.5F, 6.5F)
          curveTo(5.5F, 6.224F, 5.724F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(5.5F, 8.276F, 5.5F, 8.0F)
          verticalLineTo(6.5F)
          close()
          moveTo(6.0F, 3.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(5.586F, 5.25F, 6.0F, 5.25F)
          reflectiveCurveTo(6.75F, 4.914F, 6.75F, 4.5F)
          reflectiveCurveTo(6.414F, 3.75F, 6.0F, 3.75F)
          close()
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(5.0F, -4.0F)
          curveTo(3.79F, 2.0F, 2.0F, 3.79F, 2.0F, 6.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()        
      }
    }
    return _info12!!
  }

private var _info12: ImageVector? = null
