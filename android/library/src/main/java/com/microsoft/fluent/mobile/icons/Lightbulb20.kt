package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Lightbulb20: ImageVector
  get() {
    if (_lightbulb20 != null) {
      return _lightbulb20!!
    }
    _lightbulb20 = fluentIcon(name = "Filled.Lightbulb20", 20f) {
      materialPath {
          moveTo(13.073F, 15.0F)
          lineToRelative(-0.384F, 1.605F)
          curveToRelative(-0.184F, 0.771F, -0.865F, 1.33F, -1.67F, 1.39F)
          lineTo(10.874F, 18.0F)
          horizontalLineToRelative(-1.75F)
          curveToRelative(-0.818F, 0.0F, -1.535F, -0.516F, -1.776F, -1.262F)
          lineTo(7.31F, 16.605F)
          lineTo(6.928F, 15.0F)
          horizontalLineToRelative(6.145F)
          close()
          moveTo(10.0F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.597F, 6.0F, 5.8F)
          curveToRelative(0.0F, 1.677F, -0.745F, 3.216F, -2.204F, 4.594F)
          curveToRelative(-0.064F, 0.06F, -0.113F, 0.133F, -0.145F, 0.213F)
          lineToRelative(-0.026F, 0.081F)
          lineTo(13.311F, 14.0F)
          horizontalLineTo(6.689F)
          lineToRelative(-0.313F, -1.311F)
          curveToRelative(-0.027F, -0.112F, -0.086F, -0.214F, -0.17F, -0.295F)
          curveToRelative(-1.39F, -1.312F, -2.133F, -2.77F, -2.2F, -4.355F)
          lineTo(4.0F, 7.8F)
          lineToRelative(0.003F, -0.19F)
          curveTo(4.108F, 4.494F, 6.753F, 2.0F, 10.0F, 2.0F)
          close()        
      }
    }
    return _lightbulb20!!
  }

private var _lightbulb20: ImageVector? = null
