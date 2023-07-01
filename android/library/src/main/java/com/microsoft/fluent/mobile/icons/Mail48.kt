package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Mail48: ImageVector
  get() {
    if (_mail48 != null) {
      return _mail48!!
    }
    _mail48 = fluentIcon(name = "Regular.Mail48", 48f) {
      materialPath {
          moveTo(37.75F, 9.0F)
          curveToRelative(2.9F, 0.0F, 5.25F, 2.35F, 5.25F, 5.25F)
          verticalLineToRelative(19.5F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(7.35F, 39.0F, 5.0F, 36.65F, 5.0F, 33.75F)
          verticalLineToRelative(-19.5F)
          curveTo(5.0F, 11.35F, 7.35F, 9.0F, 10.25F, 9.0F)
          horizontalLineToRelative(27.5F)
          close()
          moveToRelative(2.75F, 9.351F)
          lineToRelative(-15.898F, 8.744F)
          curveToRelative(-0.333F, 0.184F, -0.73F, 0.204F, -1.077F, 0.061F)
          lineToRelative(-0.127F, -0.06F)
          lineTo(7.5F, 18.35F)
          verticalLineToRelative(15.4F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineToRelative(27.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(18.351F)
          close()
          moveTo(37.75F, 11.5F)
          horizontalLineToRelative(-27.5F)
          curveToRelative(-1.519F, 0.0F, -2.75F, 1.231F, -2.75F, 2.75F)
          verticalLineToRelative(1.249F)
          lineTo(24.0F, 24.573F)
          lineToRelative(16.5F, -9.075F)
          verticalLineTo(14.25F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          close()        
      }
    }
    return _mail48!!
  }

private var _mail48: ImageVector? = null
