package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pulse28: ImageVector
  get() {
    if (_pulse28 != null) {
      return _pulse28!!
    }
    _pulse28 = fluentIcon(name = "Filled.Pulse28", 28f) {
      materialPath {
          moveTo(10.035F, 3.0F)
          curveToRelative(0.454F, 0.017F, 0.84F, 0.337F, 0.94F, 0.78F)
          lineToRelative(3.712F, 16.496F)
          lineToRelative(3.864F, -11.592F)
          curveToRelative(0.133F, -0.398F, 0.5F, -0.671F, 0.92F, -0.684F)
          curveToRelative(0.42F, -0.012F, 0.802F, 0.239F, 0.957F, 0.629F)
          lineTo(22.177F, 13.0F)
          horizontalLineTo(25.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-3.5F)
          curveToRelative(-0.409F, 0.0F, -0.777F, -0.249F, -0.928F, -0.629F)
          lineToRelative(-0.987F, -2.465F)
          lineToRelative(-4.136F, 12.41F)
          curveToRelative(-0.142F, 0.426F, -0.55F, 0.705F, -1.0F, 0.683F)
          curveToRelative(-0.448F, -0.023F, -0.826F, -0.341F, -0.925F, -0.78F)
          lineTo(9.862F, 7.942F)
          lineToRelative(-1.904F, 6.346F)
          curveTo(7.83F, 14.71F, 7.442F, 15.0F, 7.0F, 15.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.256F)
          lineToRelative(2.786F, -9.287F)
          curveTo(9.172F, 3.277F, 9.581F, 2.985F, 10.035F, 3.0F)
          close()        
      }
    }
    return _pulse28!!
  }

private var _pulse28: ImageVector? = null
