package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.New24: ImageVector
  get() {
    if (_new24 != null) {
      return _new24!!
    }
    _new24 = fluentIcon(name = "Regular.New24", 24f) {
      materialPath {
          moveTo(18.25F, 4.0F)
          curveTo(18.664F, 4.0F, 19.0F, 4.336F, 19.0F, 4.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-8.5F)
          curveTo(17.5F, 4.336F, 17.836F, 4.0F, 18.25F, 4.0F)
          close()
          moveTo(4.0F, 18.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(13.664F, 19.0F, 13.25F, 19.0F)
          horizontalLineToRelative(-8.5F)
          curveTo(4.336F, 19.0F, 4.0F, 18.664F, 4.0F, 18.25F)
          close()
          moveTo(8.28F, 7.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(6.5F, 6.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-6.5F, -6.5F)
          close()        
      }
    }
    return _new24!!
  }

private var _new24: ImageVector? = null
