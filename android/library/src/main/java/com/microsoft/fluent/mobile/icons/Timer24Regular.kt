package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Timer24: ImageVector
  get() {
    if (_timer24 != null) {
      return _timer24!!
    }
    _timer24 = fluentIcon(name = "Regular.Timer24", 24f) {
      materialPath {
          moveTo(12.0F, 5.0F)
          curveToRelative(4.694F, 0.0F, 8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveTo(16.694F, 22.0F, 12.0F, 22.0F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          reflectiveCurveTo(7.306F, 5.0F, 12.0F, 5.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveTo(12.0F, 8.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(12.75F, 8.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(11.25F, 13.25F)
          verticalLineToRelative(-4.5F)
          curveTo(11.25F, 8.336F, 11.586F, 8.0F, 12.0F, 8.0F)
          close()
          moveToRelative(7.147F, -2.886F)
          lineToRelative(0.083F, 0.06F)
          lineToRelative(1.158F, 0.964F)
          curveToRelative(0.319F, 0.265F, 0.362F, 0.738F, 0.097F, 1.056F)
          curveToRelative(-0.243F, 0.292F, -0.66F, 0.353F, -0.974F, 0.157F)
          lineTo(19.43F, 7.29F)
          lineToRelative(-1.16F, -0.964F)
          curveToRelative(-0.318F, -0.264F, -0.36F, -0.736F, -0.096F, -1.056F)
          curveToRelative(0.242F, -0.292F, 0.66F, -0.352F, 0.973F, -0.156F)
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
