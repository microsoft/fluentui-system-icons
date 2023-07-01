package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatEmpty16: ImageVector
  get() {
    if (_chatEmpty16 != null) {
      return _chatEmpty16!!
    }
    _chatEmpty16 = fluentIcon(name = "Regular.ChatEmpty16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-1.094F, 0.0F, -2.12F, -0.293F, -3.004F, -0.805F)
          lineToRelative(-2.338F, 0.78F)
          curveToRelative(-0.176F, 0.058F, -0.37F, 0.014F, -0.504F, -0.114F)
          reflectiveCurveToRelative(-0.186F, -0.32F, -0.135F, -0.498F)
          lineToRelative(0.712F, -2.491F)
          curveTo(2.265F, 10.019F, 2.0F, 9.04F, 2.0F, 8.0F)
          close()
          moveToRelative(6.0F, -5.0F)
          curveTo(5.239F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          curveToRelative(0.0F, 0.933F, 0.255F, 1.805F, 0.7F, 2.552F)
          curveToRelative(0.07F, 0.118F, 0.088F, 0.26F, 0.05F, 0.393F)
          lineToRelative(-0.509F, 1.78F)
          lineTo(4.9F, 12.174F)
          curveToRelative(0.143F, -0.047F, 0.3F, -0.028F, 0.426F, 0.052F)
          curveTo(6.098F, 12.715F, 7.015F, 13.0F, 8.0F, 13.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _chatEmpty16!!
  }

private var _chatEmpty16: ImageVector? = null
