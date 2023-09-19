package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Mail32: ImageVector
  get() {
    if (_mail32 != null) {
      return _mail32!!
    }
    _mail32 = fluentIcon(name = "Regular.Mail32", 32f) {
      materialPath {
          moveTo(6.5F, 5.0F)
          curveTo(4.015F, 5.0F, 2.0F, 7.015F, 2.0F, 9.5F)
          verticalLineToRelative(13.0F)
          curveTo(2.0F, 24.985F, 4.015F, 27.0F, 6.5F, 27.0F)
          horizontalLineToRelative(19.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-13.0F)
          curveTo(30.0F, 7.015F, 27.985F, 5.0F, 25.5F, 5.0F)
          horizontalLineToRelative(-19.0F)
          close()
          moveTo(28.0F, 10.403F)
          lineToRelative(-12.0F, 6.461F)
          lineToRelative(-12.0F, -6.461F)
          verticalLineTo(9.5F)
          curveTo(4.0F, 8.12F, 5.12F, 7.0F, 6.5F, 7.0F)
          horizontalLineToRelative(19.0F)
          curveTo(26.88F, 7.0F, 28.0F, 8.12F, 28.0F, 9.5F)
          verticalLineToRelative(0.903F)
          close()
          moveTo(4.0F, 12.674F)
          lineToRelative(11.526F, 6.207F)
          curveToRelative(0.296F, 0.159F, 0.652F, 0.159F, 0.948F, 0.0F)
          lineTo(28.0F, 12.674F)
          verticalLineTo(22.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-19.0F)
          curveTo(5.12F, 25.0F, 4.0F, 23.88F, 4.0F, 22.5F)
          verticalLineToRelative(-9.826F)
          close()        
      }
    }
    return _mail32!!
  }

private var _mail32: ImageVector? = null
