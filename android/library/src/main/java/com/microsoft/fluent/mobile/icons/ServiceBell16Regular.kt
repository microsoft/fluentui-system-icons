package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ServiceBell16: ImageVector
  get() {
    if (_serviceBell16 != null) {
      return _serviceBell16!!
    }
    _serviceBell16 = fluentIcon(name = "Regular.ServiceBell16", 16f) {
      materialPath {
          moveTo(8.0F, 2.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(0.083F)
          curveTo(8.675F, 3.528F, 8.34F, 3.5F, 8.0F, 3.5F)
          curveToRelative(-0.34F, 0.0F, -0.675F, 0.028F, -1.0F, 0.083F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(-2.0F, 1.0F)
          verticalLineToRelative(0.341F)
          curveTo(3.67F, 4.665F, 2.0F, 6.888F, 2.0F, 9.5F)
          curveTo(2.0F, 9.776F, 2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -2.612F, -1.67F, -4.835F, -4.0F, -5.659F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          close()
          moveToRelative(2.0F, 1.0F)
          curveToRelative(2.593F, 0.0F, 4.725F, 1.973F, 4.975F, 4.5F)
          horizontalLineToRelative(-9.95F)
          curveTo(3.275F, 6.473F, 5.407F, 4.5F, 8.0F, 4.5F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(7.724F, 5.5F, 7.5F, 5.724F, 7.5F, 6.0F)
          reflectiveCurveTo(7.724F, 6.5F, 8.0F, 6.5F)
          curveToRelative(1.019F, 0.0F, 1.92F, 0.508F, 2.463F, 1.286F)
          curveToRelative(0.158F, 0.226F, 0.47F, 0.282F, 0.696F, 0.124F)
          curveToRelative(0.226F, -0.158F, 0.282F, -0.47F, 0.124F, -0.696F)
          curveTo(10.56F, 6.179F, 9.36F, 5.5F, 8.0F, 5.5F)
          close()
          moveTo(2.5F, 11.0F)
          curveTo(1.672F, 11.0F, 1.0F, 11.672F, 1.0F, 12.5F)
          reflectiveCurveTo(1.672F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(14.328F, 11.0F, 13.5F, 11.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveTo(2.0F, 12.5F)
          curveTo(2.0F, 12.224F, 2.224F, 12.0F, 2.5F, 12.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(13.776F, 13.0F, 13.5F, 13.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 13.0F, 2.0F, 12.776F, 2.0F, 12.5F)
          close()        
      }
    }
    return _serviceBell16!!
  }

private var _serviceBell16: ImageVector? = null
