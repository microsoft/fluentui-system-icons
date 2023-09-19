package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Server24: ImageVector
  get() {
    if (_server24 != null) {
      return _server24!!
    }
    _server24 = fluentIcon(name = "Filled.Server24", 24f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveTo(7.343F, 2.0F, 6.0F, 3.343F, 6.0F, 5.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(8.5F, 6.75F)
          curveTo(8.5F, 6.336F, 8.836F, 6.0F, 9.25F, 6.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(15.164F, 7.5F, 14.75F, 7.5F)
          horizontalLineToRelative(-5.5F)
          curveTo(8.836F, 7.5F, 8.5F, 7.164F, 8.5F, 6.75F)
          close()
          moveToRelative(0.0F, 11.0F)
          curveTo(8.5F, 17.336F, 8.836F, 17.0F, 9.25F, 17.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(0.0F, -3.0F)
          curveTo(8.5F, 14.336F, 8.836F, 14.0F, 9.25F, 14.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _server24!!
  }

private var _server24: ImageVector? = null
