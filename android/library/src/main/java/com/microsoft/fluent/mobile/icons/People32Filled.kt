package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.People32: ImageVector
  get() {
    if (_people32 != null) {
      return _people32!!
    }
    _people32 = fluentIcon(name = "Filled.People32", 32f) {
      materialPath {
          moveTo(10.5F, 16.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, -2.462F, 5.5F, -5.5F)
          reflectiveCurveTo(13.538F, 5.0F, 10.5F, 5.0F)
          reflectiveCurveTo(5.0F, 7.462F, 5.0F, 10.5F)
          reflectiveCurveTo(7.462F, 16.0F, 10.5F, 16.0F)
          close()
          moveTo(23.0F, 16.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveToRelative(-4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          close()
          moveTo(5.0F, 18.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          verticalLineToRelative(0.15F)
          reflectiveCurveTo(2.0F, 27.0F, 10.5F, 27.0F)
          reflectiveCurveToRelative(8.5F, -5.85F, 8.5F, -5.85F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(18.0F, 7.0F)
          curveToRelative(-1.456F, 0.0F, -2.608F, -0.198F, -3.521F, -0.513F)
          curveToRelative(0.432F, -0.7F, 0.68F, -1.375F, 0.82F, -1.92F)
          curveToRelative(0.093F, -0.355F, 0.142F, -0.662F, 0.168F, -0.896F)
          curveToRelative(0.014F, -0.118F, 0.021F, -0.219F, 0.025F, -0.3F)
          curveToRelative(0.002F, -0.04F, 0.004F, -0.076F, 0.004F, -0.107F)
          lineToRelative(0.001F, -0.042F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, -1.152F, -0.433F, -2.204F, -1.145F, -3.0F)
          horizontalLineToRelative(8.241F)
          curveTo(28.922F, 18.0F, 30.0F, 19.077F, 30.0F, 20.406F)
          curveToRelative(0.0F, 0.0F, 0.0F, 4.594F, -7.0F, 4.594F)
          close()        
      }
    }
    return _people32!!
  }

private var _people32: ImageVector? = null
