package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Autosum20: ImageVector
  get() {
    if (_autosum20 != null) {
      return _autosum20!!
    }
    _autosum20 = fluentIcon(name = "Regular.Autosum20", 20f) {
      materialPath {
          moveTo(4.04F, 3.804F)
          curveTo(4.118F, 3.62F, 4.3F, 3.5F, 4.5F, 3.5F)
          horizontalLineToRelative(11.0F)
          curveTo(15.776F, 3.5F, 16.0F, 3.724F, 16.0F, 4.0F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(5.675F)
          lineToRelative(4.553F, 4.732F)
          curveToRelative(0.177F, 0.183F, 0.187F, 0.471F, 0.023F, 0.667F)
          lineTo(5.57F, 15.5F)
          horizontalLineToRelative(9.93F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.194F, 0.0F, -0.37F, -0.112F, -0.453F, -0.288F)
          curveToRelative(-0.082F, -0.176F, -0.055F, -0.384F, 0.07F, -0.533F)
          lineToRelative(5.079F, -6.077F)
          lineTo(4.14F, 4.347F)
          curveTo(4.0F, 4.202F, 3.96F, 3.989F, 4.04F, 3.804F)
          close()        
      }
    }
    return _autosum20!!
  }

private var _autosum20: ImageVector? = null
