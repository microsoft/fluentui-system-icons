package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Check24: ImageVector
  get() {
    if (_check24 != null) {
      return _check24!!
    }
    _check24 = fluentIcon(name = "Filled.Check24", 24f) {
      materialPath {
          moveTo(21.77F, 5.79F)
          curveToRelative(0.299F, -0.287F, 0.308F, -0.762F, 0.02F, -1.06F)
          curveToRelative(-0.287F, -0.299F, -0.762F, -0.308F, -1.06F, -0.02F)
          lineToRelative(-6.75F, 6.5F)
          curveToRelative(-0.299F, 0.287F, -0.308F, 0.762F, -0.02F, 1.06F)
          curveToRelative(0.287F, 0.299F, 0.762F, 0.308F, 1.06F, 0.02F)
          lineToRelative(6.75F, -6.5F)
          close()
          moveTo(18.987F, 5.0F)
          horizontalLineTo(4.55F)
          curveTo(3.142F, 5.0F, 2.0F, 6.142F, 2.0F, 7.55F)
          verticalLineToRelative(6.9F)
          curveTo(2.0F, 15.858F, 3.142F, 17.0F, 4.55F, 17.0F)
          horizontalLineToRelative(14.9F)
          curveToRelative(1.408F, 0.0F, 2.55F, -1.142F, 2.55F, -2.55F)
          verticalLineToRelative(-6.9F)
          curveToRelative(0.0F, -0.185F, -0.02F, -0.365F, -0.057F, -0.538F)
          lineToRelative(-6.23F, 5.999F)
          curveToRelative(-0.695F, 0.67F, -1.803F, 0.65F, -2.474F, -0.047F)
          curveToRelative(-0.67F, -0.696F, -0.65F, -1.804F, 0.047F, -2.475F)
          lineTo(18.986F, 5.0F)
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
