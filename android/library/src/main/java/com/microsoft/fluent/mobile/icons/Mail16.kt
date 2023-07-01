package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Mail16: ImageVector
  get() {
    if (_mail16 != null) {
      return _mail16!!
    }
    _mail16 = fluentIcon(name = "Regular.Mail16", 16f) {
      materialPath {
          moveTo(2.0F, 6.038F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 3.0F, 2.0F, 3.895F, 2.0F, 5.0F)
          verticalLineToRelative(1.038F)
          close()
          moveTo(4.0F, 4.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(0.74F)
          lineTo(8.0F, 8.432F)
          lineTo(3.0F, 5.74F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveTo(3.0F, 6.875F)
          lineTo(7.763F, 9.44F)
          curveToRelative(0.148F, 0.08F, 0.326F, 0.08F, 0.474F, 0.0F)
          lineTo(13.0F, 6.876F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.875F)
          close()        
      }
    }
    return _mail16!!
  }

private var _mail16: ImageVector? = null
