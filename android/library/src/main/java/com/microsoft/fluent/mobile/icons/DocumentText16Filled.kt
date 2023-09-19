package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentText16: ImageVector
  get() {
    if (_documentText16 != null) {
      return _documentText16!!
    }
    _documentText16 = fluentIcon(name = "Filled.DocumentText16", 16f) {
      materialPath {
          moveTo(8.0F, 4.5F)
          verticalLineTo(1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 1.0F, 3.0F, 1.672F, 3.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 14.328F, 3.672F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(9.5F)
          curveTo(8.672F, 6.0F, 8.0F, 5.328F, 8.0F, 4.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(1.25F)
          lineTo(12.75F, 5.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 5.0F, 9.0F, 4.776F, 9.0F, 4.5F)
          close()
          moveTo(5.5F, 8.0F)
          horizontalLineToRelative(5.0F)
          curveTo(10.776F, 8.0F, 11.0F, 8.224F, 11.0F, 8.5F)
          reflectiveCurveTo(10.776F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 9.0F, 5.0F, 8.776F, 5.0F, 8.5F)
          reflectiveCurveTo(5.224F, 8.0F, 5.5F, 8.0F)
          close()
          moveTo(5.0F, 10.5F)
          curveTo(5.0F, 10.224F, 5.224F, 10.0F, 5.5F, 10.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.776F, 11.0F, 10.5F, 11.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 11.0F, 5.0F, 10.776F, 5.0F, 10.5F)
          close()
          moveTo(5.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.776F, 13.0F, 10.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 13.0F, 5.0F, 12.776F, 5.0F, 12.5F)
          reflectiveCurveTo(5.224F, 12.0F, 5.5F, 12.0F)
          close()        
      }
    }
    return _documentText16!!
  }

private var _documentText16: ImageVector? = null
