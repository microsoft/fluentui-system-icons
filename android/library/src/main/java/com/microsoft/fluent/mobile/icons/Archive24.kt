package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Archive24: ImageVector
  get() {
    if (_archive24 != null) {
      return _archive24!!
    }
    _archive24 = fluentIcon(name = "Filled.Archive24", 24f) {
      materialPath {
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(15.0F)
          curveTo(20.328F, 3.0F, 21.0F, 3.672F, 21.0F, 4.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(3.672F, 7.5F, 3.0F, 6.828F, 3.0F, 6.0F)
          verticalLineTo(4.5F)
          close()
          moveTo(4.0F, 9.0F)
          horizontalLineToRelative(16.0F)
          verticalLineToRelative(8.25F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(5.679F, 21.0F, 4.0F, 19.321F, 4.0F, 17.25F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(6.25F, 2.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(14.164F, 11.0F, 13.75F, 11.0F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _archive24!!
  }

private var _archive24: ImageVector? = null
