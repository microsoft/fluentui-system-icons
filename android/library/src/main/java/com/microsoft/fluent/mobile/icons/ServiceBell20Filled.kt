package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ServiceBell20: ImageVector
  get() {
    if (_serviceBell20 != null) {
      return _serviceBell20!!
    }
    _serviceBell20 = fluentIcon(name = "Filled.ServiceBell20", 20f) {
      materialPath {
          moveTo(8.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(0.79F)
          curveToRelative(2.892F, 0.86F, 5.0F, 3.539F, 5.0F, 6.71F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 13.0F, 3.0F, 12.776F, 3.0F, 12.5F)
          curveToRelative(0.0F, -3.171F, 2.109F, -5.85F, 5.0F, -6.71F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(2.5F, 3.5F)
          curveToRelative(0.422F, 0.0F, 0.84F, 0.004F, 1.268F, 0.158F)
          curveToRelative(0.413F, 0.148F, 0.87F, 0.452F, 1.316F, 1.12F)
          curveToRelative(0.153F, 0.23F, 0.464F, 0.291F, 0.693F, 0.138F)
          curveToRelative(0.23F, -0.153F, 0.292F, -0.464F, 0.139F, -0.693F)
          curveToRelative(-0.555F, -0.833F, -1.18F, -1.28F, -1.81F, -1.506F)
          curveTo(11.505F, 7.5F, 10.93F, 7.5F, 10.52F, 7.5F)
          horizontalLineTo(10.5F)
          curveTo(10.224F, 7.5F, 10.0F, 7.724F, 10.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          close()
          moveToRelative(-7.0F, 5.5F)
          curveTo(2.672F, 14.0F, 2.0F, 14.672F, 2.0F, 15.5F)
          reflectiveCurveTo(2.672F, 17.0F, 3.5F, 17.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(17.328F, 14.0F, 16.5F, 14.0F)
          horizontalLineToRelative(-13.0F)
          close()        
      }
    }
    return _serviceBell20!!
  }

private var _serviceBell20: ImageVector? = null
