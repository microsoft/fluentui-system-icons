package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Gesture20: ImageVector
  get() {
    if (_gesture20 != null) {
      return _gesture20!!
    }
    _gesture20 = fluentIcon(name = "Regular.Gesture20", 20f) {
      materialPath {
          moveTo(5.011F, 4.394F)
          curveTo(5.061F, 4.164F, 5.265F, 4.0F, 5.5F, 4.0F)
          horizontalLineToRelative(9.0F)
          curveTo(14.776F, 4.0F, 15.0F, 4.224F, 15.0F, 4.5F)
          reflectiveCurveTo(14.776F, 5.0F, 14.5F, 5.0F)
          horizontalLineTo(7.808F)
          lineToRelative(8.899F, 4.045F)
          curveTo(16.88F, 9.123F, 16.993F, 9.293F, 17.0F, 9.483F)
          curveToRelative(0.006F, 0.19F, -0.096F, 0.367F, -0.263F, 0.457F)
          lineToRelative(-11.0F, 5.923F)
          curveToRelative(-0.243F, 0.131F, -0.546F, 0.04F, -0.677F, -0.203F)
          curveToRelative(-0.131F, -0.243F, -0.04F, -0.546F, 0.203F, -0.677F)
          lineToRelative(10.112F, -5.445F)
          lineTo(5.293F, 4.955F)
          curveToRelative(-0.214F, -0.097F, -0.332F, -0.33F, -0.282F, -0.56F)
          close()
          moveTo(17.0F, 4.5F)
          curveTo(17.0F, 4.776F, 16.776F, 5.0F, 16.5F, 5.0F)
          reflectiveCurveTo(16.0F, 4.776F, 16.0F, 4.5F)
          reflectiveCurveTo(16.224F, 4.0F, 16.5F, 4.0F)
          reflectiveCurveTo(17.0F, 4.224F, 17.0F, 4.5F)
          close()
          moveTo(3.5F, 17.0F)
          curveTo(3.776F, 17.0F, 4.0F, 16.776F, 4.0F, 16.5F)
          reflectiveCurveTo(3.776F, 16.0F, 3.5F, 16.0F)
          reflectiveCurveTo(3.0F, 16.224F, 3.0F, 16.5F)
          reflectiveCurveTo(3.224F, 17.0F, 3.5F, 17.0F)
          close()        
      }
    }
    return _gesture20!!
  }

private var _gesture20: ImageVector? = null
