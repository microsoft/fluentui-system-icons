package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ServiceBell16: ImageVector
  get() {
    if (_serviceBell16 != null) {
      return _serviceBell16!!
    }
    _serviceBell16 = fluentIcon(name = "Filled.ServiceBell16", 16f) {
      materialPath {
          moveTo(8.0F, 1.5F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(0.341F)
          curveTo(3.67F, 4.665F, 2.0F, 6.888F, 2.0F, 9.5F)
          curveTo(2.0F, 9.776F, 2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -2.612F, -1.67F, -4.835F, -4.0F, -5.659F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveTo(7.5F, 6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          curveToRelative(1.36F, 0.0F, 2.56F, 0.679F, 3.283F, 1.714F)
          curveToRelative(0.158F, 0.226F, 0.102F, 0.538F, -0.124F, 0.696F)
          curveToRelative(-0.227F, 0.158F, -0.539F, 0.102F, -0.696F, -0.124F)
          curveTo(9.92F, 7.008F, 9.019F, 6.5F, 8.0F, 6.5F)
          curveTo(7.724F, 6.5F, 7.5F, 6.276F, 7.5F, 6.0F)
          close()
          moveToRelative(-5.0F, 5.0F)
          curveTo(1.672F, 11.0F, 1.0F, 11.672F, 1.0F, 12.5F)
          reflectiveCurveTo(1.672F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(14.328F, 11.0F, 13.5F, 11.0F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _serviceBell16!!
  }

private var _serviceBell16: ImageVector? = null
