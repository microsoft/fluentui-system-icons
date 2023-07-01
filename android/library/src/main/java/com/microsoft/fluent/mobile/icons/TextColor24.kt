package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextColor24: ImageVector
  get() {
    if (_textColor24 != null) {
      return _textColor24!!
    }
    _textColor24 = fluentIcon(name = "Regular.TextColor24", 24f) {
      materialPath {
          moveTo(17.75F, 14.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.008F, 2.25F, 2.25F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(5.25F)
          curveTo(4.007F, 22.0F, 3.0F, 20.993F, 3.0F, 19.75F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.242F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(12.5F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.415F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.335F, 0.75F, -0.75F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveTo(7.053F, 11.97F)
          lineToRelative(3.753F, -9.496F)
          curveToRelative(0.236F, -0.595F, 1.043F, -0.63F, 1.345F, -0.104F)
          lineToRelative(0.05F, 0.105F)
          lineToRelative(3.747F, 9.5F)
          curveToRelative(0.152F, 0.386F, -0.037F, 0.821F, -0.423F, 0.973F)
          curveToRelative(-0.353F, 0.14F, -0.748F, -0.008F, -0.929F, -0.33F)
          lineToRelative(-0.044F, -0.092F)
          lineTo(13.556F, 10.0F)
          horizontalLineTo(9.443F)
          lineToRelative(-0.995F, 2.52F)
          curveToRelative(-0.14F, 0.354F, -0.518F, 0.542F, -0.877F, 0.454F)
          lineToRelative(-0.097F, -0.031F)
          curveToRelative(-0.353F, -0.14F, -0.54F, -0.518F, -0.453F, -0.876F)
          lineToRelative(0.032F, -0.098F)
          lineToRelative(3.753F, -9.495F)
          lineToRelative(-3.753F, 9.495F)
          close()
          moveToRelative(4.45F, -7.178F)
          lineTo(10.036F, 8.5F)
          horizontalLineToRelative(2.928F)
          lineToRelative(-1.461F, -3.708F)
          close()        
      }
    }
    return _textColor24!!
  }

private var _textColor24: ImageVector? = null
