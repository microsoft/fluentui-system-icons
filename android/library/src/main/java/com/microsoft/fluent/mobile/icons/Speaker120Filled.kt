package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Speaker120: ImageVector
  get() {
    if (_speaker120 != null) {
      return _speaker120!!
    }
    _speaker120 = fluentIcon(name = "Filled.Speaker120", 120f) {
      materialPath {
          moveTo(12.0F, 3.006F)
          curveToRelative(0.0F, -0.873F, -1.04F, -1.327F, -1.68F, -0.733F)
          lineTo(6.448F, 5.866F)
          curveTo(6.355F, 5.952F, 6.234F, 6.0F, 6.108F, 6.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 6.0F, 2.0F, 6.67F, 2.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 13.328F, 2.672F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(2.607F)
          curveToRelative(0.127F, 0.0F, 0.248F, 0.047F, 0.34F, 0.133F)
          lineToRelative(3.873F, 3.594F)
          curveToRelative(0.64F, 0.593F, 1.68F, 0.14F, 1.68F, -0.733F)
          verticalLineTo(3.006F)
          close()
          moveToRelative(2.079F, 9.927F)
          curveToRelative(-0.24F, -0.138F, -0.322F, -0.444F, -0.184F, -0.683F)
          curveToRelative(0.776F, -1.347F, 0.832F, -3.059F, 0.0F, -4.5F)
          curveToRelative(-0.139F, -0.24F, -0.057F, -0.545F, 0.182F, -0.683F)
          curveToRelative(0.24F, -0.138F, 0.545F, -0.056F, 0.683F, 0.183F)
          curveToRelative(1.018F, 1.763F, 0.948F, 3.855F, 0.001F, 5.5F)
          curveToRelative(-0.137F, 0.239F, -0.443F, 0.32F, -0.682F, 0.183F)
          close()        
      }
    }
    return _speaker120!!
  }

private var _speaker120: ImageVector? = null
