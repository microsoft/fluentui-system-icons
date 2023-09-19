package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Timer24: ImageVector
  get() {
    if (_timer24 != null) {
      return _timer24!!
    }
    _timer24 = fluentIcon(name = "Filled.Timer24", 24f) {
      materialPath {
          moveTo(12.0F, 5.0F)
          curveToRelative(4.694F, 0.0F, 8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveTo(16.694F, 22.0F, 12.0F, 22.0F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          reflectiveCurveTo(7.306F, 5.0F, 12.0F, 5.0F)
          close()
          moveToRelative(0.0F, 3.0F)
          curveToRelative(-0.38F, 0.0F, -0.694F, 0.282F, -0.743F, 0.648F)
          lineTo(11.25F, 8.75F)
          verticalLineToRelative(4.5F)
          lineToRelative(0.007F, 0.102F)
          curveTo(11.307F, 13.718F, 11.62F, 14.0F, 12.0F, 14.0F)
          reflectiveCurveToRelative(0.694F, -0.282F, 0.743F, -0.648F)
          lineToRelative(0.007F, -0.102F)
          verticalLineToRelative(-4.5F)
          lineToRelative(-0.007F, -0.102F)
          curveTo(12.693F, 8.282F, 12.38F, 8.0F, 12.0F, 8.0F)
          close()
          moveToRelative(7.17F, -2.877F)
          lineToRelative(0.082F, 0.061F)
          lineToRelative(1.149F, 1.0F)
          curveToRelative(0.312F, 0.272F, 0.345F, 0.746F, 0.073F, 1.058F)
          curveToRelative(-0.25F, 0.287F, -0.668F, 0.338F, -0.977F, 0.135F)
          lineToRelative(-0.081F, -0.061F)
          lineToRelative(-1.149F, -1.0F)
          curveToRelative(-0.313F, -0.272F, -0.345F, -0.746F, -0.073F, -1.058F)
          curveToRelative(0.249F, -0.287F, 0.668F, -0.338F, 0.976F, -0.135F)
          close()
          moveTo(14.25F, 2.5F)
          curveTo(14.664F, 2.5F, 15.0F, 2.836F, 15.0F, 3.25F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.693F, -0.648F, 0.743F)
          lineTo(14.25F, 4.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(9.336F, 4.0F, 9.0F, 3.664F, 9.0F, 3.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(9.75F, 2.5F)
          horizontalLineToRelative(4.5F)
          close()        
      }
    }
    return _timer24!!
  }

private var _timer24: ImageVector? = null
