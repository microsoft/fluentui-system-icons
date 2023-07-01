package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Info12: ImageVector
  get() {
    if (_info12 != null) {
      return _info12!!
    }
    _info12 = fluentIcon(name = "Filled.Info12", 12f) {
      materialPath {
          moveTo(11.0F, 6.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveTo(1.0F, 8.761F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()
          moveTo(5.5F, 6.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(6.5F, 8.276F, 6.5F, 8.0F)
          verticalLineTo(6.5F)
          curveTo(6.5F, 6.224F, 6.276F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveTo(5.5F, 6.224F, 5.5F, 6.5F)
          close()
          moveTo(6.0F, 3.75F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(5.586F, 5.25F, 6.0F, 5.25F)
          reflectiveCurveTo(6.75F, 4.914F, 6.75F, 4.5F)
          reflectiveCurveTo(6.414F, 3.75F, 6.0F, 3.75F)
          close()        
      }
    }
    return _info12!!
  }

private var _info12: ImageVector? = null
