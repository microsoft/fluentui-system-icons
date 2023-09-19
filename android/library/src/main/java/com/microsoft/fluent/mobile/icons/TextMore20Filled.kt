package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextMore20: ImageVector
  get() {
    if (_textMore20 != null) {
      return _textMore20!!
    }
    _textMore20 = fluentIcon(name = "Filled.TextMore20", 20f) {
      materialPath {
          moveTo(8.246F, 2.0F)
          curveToRelative(0.305F, 0.0F, 0.58F, 0.185F, 0.695F, 0.467F)
          lineToRelative(5.11F, 12.543F)
          curveToRelative(-0.314F, -0.166F, -0.671F, -0.26F, -1.05F, -0.26F)
          curveToRelative(-0.222F, 0.0F, -0.436F, 0.032F, -0.638F, 0.092F)
          lineTo(11.409F, 12.5F)
          horizontalLineTo(5.084F)
          lineTo(3.44F, 16.533F)
          curveToRelative(-0.156F, 0.384F, -0.594F, 0.568F, -0.978F, 0.412F)
          curveToRelative(-0.383F, -0.157F, -0.568F, -0.594F, -0.411F, -0.978F)
          lineToRelative(5.5F, -13.5F)
          curveTo(7.667F, 2.185F, 7.942F, 2.0F, 8.246F, 2.0F)
          close()
          moveTo(13.0F, 15.75F)
          curveToRelative(0.629F, 0.0F, 1.149F, 0.464F, 1.237F, 1.067F)
          curveToRelative(0.009F, 0.06F, 0.013F, 0.121F, 0.013F, 0.183F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          close()
          moveTo(5.695F, 11.0F)
          horizontalLineToRelative(5.103F)
          lineTo(8.246F, 4.738F)
          lineTo(5.695F, 11.0F)
          close()
          moveToRelative(4.555F, 6.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveTo(7.75F, 17.69F, 7.75F, 17.0F)
          reflectiveCurveTo(8.31F, 15.75F, 9.0F, 15.75F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          close()
          moveTo(17.0F, 18.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          close()        
      }
    }
    return _textMore20!!
  }

private var _textMore20: ImageVector? = null
