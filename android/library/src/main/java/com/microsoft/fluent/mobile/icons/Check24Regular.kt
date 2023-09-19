package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Check24: ImageVector
  get() {
    if (_check24 != null) {
      return _check24!!
    }
    _check24 = fluentIcon(name = "Regular.Check24", 24f) {
      materialPath {
          moveTo(21.78F, 5.78F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-7.5F, 7.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(7.5F, -7.5F)
          close()
          moveToRelative(0.167F, 1.248F)
          curveTo(21.982F, 7.197F, 22.0F, 7.371F, 22.0F, 7.55F)
          verticalLineToRelative(6.9F)
          curveToRelative(0.0F, 1.408F, -1.142F, 2.55F, -2.55F, 2.55F)
          horizontalLineTo(4.55F)
          curveTo(3.142F, 17.0F, 2.0F, 15.858F, 2.0F, 14.45F)
          verticalLineToRelative(-6.9F)
          curveTo(2.0F, 6.142F, 3.142F, 5.0F, 4.55F, 5.0F)
          horizontalLineToRelative(14.475F)
          lineToRelative(-1.5F, 1.5F)
          horizontalLineTo(4.55F)
          curveTo(3.97F, 6.5F, 3.5F, 6.97F, 3.5F, 7.55F)
          verticalLineToRelative(6.9F)
          curveToRelative(0.0F, 0.58F, 0.47F, 1.05F, 1.05F, 1.05F)
          horizontalLineToRelative(14.9F)
          curveToRelative(0.58F, 0.0F, 1.05F, -0.47F, 1.05F, -1.05F)
          verticalLineTo(8.475F)
          lineToRelative(1.447F, -1.447F)
          close()
          moveTo(4.5F, 9.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(2.0F)
          curveTo(7.664F, 8.5F, 8.0F, 8.836F, 8.0F, 9.25F)
          reflectiveCurveTo(7.664F, 10.0F, 7.25F, 10.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(4.836F, 10.0F, 4.5F, 9.664F, 4.5F, 9.25F)
          close()
          moveToRelative(0.0F, 3.5F)
          curveTo(4.5F, 12.336F, 4.836F, 12.0F, 5.25F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _check24!!
  }

private var _check24: ImageVector? = null
