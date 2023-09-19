package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AddCircle20: ImageVector
  get() {
    if (_addCircle20 != null) {
      return _addCircle20!!
    }
    _addCircle20 = fluentIcon(name = "Filled.AddCircle20", 20f) {
      materialPath {
          moveTo(18.0F, 10.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()
          moveTo(6.0F, 10.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(-3.0F)
          curveTo(10.5F, 6.224F, 10.276F, 6.0F, 10.0F, 6.0F)
          reflectiveCurveTo(9.5F, 6.224F, 9.5F, 6.5F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.224F, 9.5F, 6.0F, 9.724F, 6.0F, 10.0F)
          close()        
      }
    }
    return _addCircle20!!
  }

private var _addCircle20: ImageVector? = null
