package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Archive20: ImageVector
  get() {
    if (_archive20 != null) {
      return _archive20!!
    }
    _archive20 = fluentIcon(name = "Filled.Archive20", 20f) {
      materialPath {
          moveTo(2.0F, 4.25F)
          curveTo(2.0F, 3.56F, 2.56F, 3.0F, 3.25F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(17.44F, 3.0F, 18.0F, 3.56F, 18.0F, 4.25F)
          verticalLineToRelative(1.5F)
          curveTo(18.0F, 6.44F, 17.44F, 7.0F, 16.75F, 7.0F)
          horizontalLineTo(3.25F)
          curveTo(2.56F, 7.0F, 2.0F, 6.44F, 2.0F, 5.75F)
          verticalLineToRelative(-1.5F)
          close()
          moveTo(3.0F, 8.0F)
          horizontalLineToRelative(14.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(5.5F, 2.0F)
          curveTo(8.224F, 10.0F, 8.0F, 10.224F, 8.0F, 10.5F)
          reflectiveCurveTo(8.224F, 11.0F, 8.5F, 11.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 10.0F, 11.5F, 10.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _archive20!!
  }

private var _archive20: ImageVector? = null
