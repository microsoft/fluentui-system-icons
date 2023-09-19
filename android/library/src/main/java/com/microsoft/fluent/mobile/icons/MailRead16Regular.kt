package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailRead16: ImageVector
  get() {
    if (_mailRead16 != null) {
      return _mailRead16!!
    }
    _mailRead16 = fluentIcon(name = "Regular.MailRead16", 16f) {
      materialPath {
          moveTo(8.237F, 1.56F)
          curveToRelative(-0.148F, -0.08F, -0.326F, -0.08F, -0.474F, 0.0F)
          lineTo(1.789F, 4.777F)
          curveTo(1.303F, 5.038F, 1.0F, 5.545F, 1.0F, 6.097F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.097F)
          curveToRelative(0.0F, -0.552F, -0.303F, -1.059F, -0.789F, -1.32F)
          lineTo(8.237F, 1.56F)
          close()
          moveTo(2.263F, 5.657F)
          lineTo(8.0F, 2.567F)
          lineToRelative(5.737F, 3.09F)
          curveToRelative(0.062F, 0.034F, 0.115F, 0.079F, 0.157F, 0.133F)
          lineTo(8.0F, 8.933F)
          lineTo(2.106F, 5.79F)
          curveTo(2.148F, 5.736F, 2.2F, 5.69F, 2.263F, 5.657F)
          close()
          moveTo(2.0F, 6.867F)
          lineTo(7.765F, 9.94F)
          curveToRelative(0.147F, 0.079F, 0.323F, 0.079F, 0.47F, 0.0F)
          lineTo(14.0F, 6.867F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.867F)
          close()        
      }
    }
    return _mailRead16!!
  }

private var _mailRead16: ImageVector? = null
