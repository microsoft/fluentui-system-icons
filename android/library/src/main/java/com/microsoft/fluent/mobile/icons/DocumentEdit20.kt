package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentEdit20: ImageVector
  get() {
    if (_documentEdit20 != null) {
      return _documentEdit20!!
    }
    _documentEdit20 = fluentIcon(name = "Filled.DocumentEdit20", 20f) {
      materialPath {
          moveTo(10.0F, 6.5F)
          verticalLineTo(2.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 2.0F, 4.0F, 2.672F, 4.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(4.0F, 17.328F, 4.672F, 18.0F, 5.5F, 18.0F)
          horizontalLineToRelative(2.721F)
          curveToRelative(-0.21F, -0.39F, -0.285F, -0.86F, -0.164F, -1.347F)
          lineToRelative(0.375F, -1.498F)
          curveToRelative(0.14F, -0.562F, 0.43F, -1.075F, 0.84F, -1.485F)
          lineToRelative(4.83F, -4.83F)
          curveTo(14.63F, 8.315F, 15.31F, 8.035F, 16.0F, 8.004F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(10.672F, 8.0F, 10.0F, 7.328F, 10.0F, 6.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(2.25F)
          lineTo(15.75F, 7.0F)
          horizontalLineTo(11.5F)
          curveTo(11.224F, 7.0F, 11.0F, 6.776F, 11.0F, 6.5F)
          close()
          moveToRelative(6.454F, 3.048F)
          curveToRelative(-0.73F, -0.73F, -1.915F, -0.73F, -2.645F, 0.0F)
          lineToRelative(-4.83F, 4.83F)
          curveToRelative(-0.28F, 0.28F, -0.48F, 0.634F, -0.577F, 1.02F)
          lineToRelative(-0.375F, 1.498F)
          curveToRelative(-0.162F, 0.651F, 0.428F, 1.241F, 1.079F, 1.078F)
          lineToRelative(1.498F, -0.374F)
          curveToRelative(0.386F, -0.097F, 0.739F, -0.296F, 1.02F, -0.578F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 0.73F, -1.914F, 0.0F, -2.644F)
          close()        
      }
    }
    return _documentEdit20!!
  }

private var _documentEdit20: ImageVector? = null
