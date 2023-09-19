package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailMultiple16: ImageVector
  get() {
    if (_mailMultiple16 != null) {
      return _mailMultiple16!!
    }
    _mailMultiple16 = fluentIcon(name = "Regular.MailMultiple16", 16f) {
      materialPath {
          moveTo(1.0F, 10.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(10.0F, -7.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 3.0F, 2.0F, 3.448F, 2.0F, 4.0F)
          verticalLineToRelative(0.74F)
          lineToRelative(5.0F, 2.692F)
          lineToRelative(5.0F, -2.692F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveTo(6.763F, 8.44F)
          lineTo(2.0F, 5.876F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.876F)
          lineTo(7.237F, 8.44F)
          curveToRelative(-0.148F, 0.08F, -0.326F, 0.08F, -0.474F, 0.0F)
          close()
          moveTo(5.0F, 14.0F)
          curveToRelative(-0.74F, 0.0F, -1.387F, -0.402F, -1.732F, -1.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(4.268F)
          curveTo(14.598F, 4.613F, 15.0F, 5.26F, 15.0F, 6.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _mailMultiple16!!
  }

private var _mailMultiple16: ImageVector? = null
